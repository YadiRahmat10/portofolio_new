"use client";

import React, { useEffect, useRef } from 'react';

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;

    function syncSize() {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    window.addEventListener('resize', syncSize);
    syncSize();

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext;
    if (!gl) return;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
      }

      vec2 get_point(vec2 id, float offset) {
          float h = hash(id + offset);
          return vec2(sin(u_time * 0.5 + h * 6.28), cos(u_time * 0.7 + h * 6.28)) * 0.4 + 0.5;
      }

      void main() {
          vec2 uv = v_texCoord;
          vec2 m = u_mouse / u_resolution;
          
          // Background color (Deep Navy #070B14)
          vec3 color = vec3(0.027, 0.043, 0.078);
          
          vec2 gv = fract(uv * 15.0) - 0.5;
          vec2 id = floor(uv * 15.0);
          
          float m_dist = length(uv - m);
          
          // Grid dots
          float d = length(gv);
          float mask = smoothstep(0.03, 0.01, d);
          color += mask * 0.1;

          // Network nodes and lines
          float line_mask = 0.0;
          for(int y = -1; y <= 1; y++) {
              for(int x = -1; x <= 1; x++) {
                  vec2 offs = vec2(float(x), float(y));
                  vec2 p = get_point(id + offs, 0.0);
                  
                  // Draw lines to neighbors
                  for(int j = -1; j <= 1; j++) {
                      for(int k = -1; k <= 1; k++) {
                          if(j == 0 && k == 0) continue;
                          vec2 p2 = get_point(id + offs + vec2(float(j), float(k)), 0.0);
                          
                          // Simple line drawing
                          vec2 pa = gv - offs - p;
                          vec2 ba = (offs + vec2(float(j), float(k)) + p2) - (offs + p);
                          float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
                          float dist = length(pa - ba * h);
                          
                          float line = smoothstep(0.015, 0.005, dist);
                          line *= smoothstep(1.5, 0.5, length(ba)); // Fade long lines
                          line_mask += line * 0.2;
                      }
                  }
                  
                  // Draw points
                  float dist = length(gv - offs - p);
                  float point = smoothstep(0.08, 0.02, dist);
                  color += point * vec3(0.0, 0.83, 1.0) * (0.5 + 0.5 * sin(u_time + hash(id + offs) * 10.0));
              }
          }
          
          color += line_mask * vec3(0.0, 0.83, 1.0) * 0.5;
          
          // Vignette
          color *= 1.0 - smoothstep(0.5, 1.5, length(uv - 0.5));
          
          gl_FragColor = vec4(color, 1.0);
      }
    `;

    function createShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vs);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fs);
    
    if (!vertexShader || !fragmentShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    
    gl.attachShader(prog, vertexShader);
    gl.attachShader(prog, fragmentShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    
    function handleMouseMove(event: MouseEvent) {
      const rect = canvas?.getBoundingClientRect();
      if (canvas && rect && rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove);

    function render(t: number) {
      if (!gl || !canvas) return;
      
      syncSize(); // ensure size is correct on every frame just in case
      gl.viewport(0, 0, canvas.width, canvas.height);
      
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }

    render(0);

    return () => {
      window.removeEventListener('resize', syncSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10" style={{ display: 'block' }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
}
