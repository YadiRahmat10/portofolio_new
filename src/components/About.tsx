import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="px-gutter py-xl max-w-container-max mx-auto" id="About">
      <h2 className="font-display text-headline-lg md:text-display text-primary mb-md tracking-tighter border-b border-outline-variant pb-2 inline-block">
        01. About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center mt-md">
        <div className="space-y-sm text-body-md font-body-md text-on-surface-variant">
          <p>
            Fullstack Developer with over 3 years of experience engineering scalable web applications using JavaScript, Vue.js, Angular, and PHP Laravel. Combines strong development capabilities with 1 year of dedicated cybersecurity expertise, delivering resilient, high-performance, and secure-by-design software solutions.
          </p>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-primary-container/20 rounded transform translate-x-4 translate-y-4 border border-primary-container/30 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          {/* Using standard img here because external URL is used and it would require next.config.js image domain setup to use next/image */}
          <img
            src="/img/foto.jpg"
            alt="A moody, high-contrast portrait of a developer workspace."
            className="relative z-10 w-full h-auto rounded border border-outline-variant grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-square md:aspect-auto"
          />
        </div>
      </div>
    </section>
  );
}
