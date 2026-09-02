import React from "react";

export default function Experience() {
  return (
    <section className="scroll-mt-32 border-t border-outline-variant pt-xl mt-xl" id="Experience">
      <div className="mb-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-background mb-xs">
          <span className="text-primary">&gt;_</span> EXPERIENCE
          <span className="terminal-cursor"></span>
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">System architecture & security operations history.</p>
      </div>

      <div className="relative pl-6 md:pl-0">
        {/* Vertical Line */}
        <div className="absolute left-[11px] md:left-1/2 md:-ml-px top-0 h-full w-[2px] bg-outline-variant"></div>

        {/* Job 1 */}
        <div className="relative flex flex-col md:flex-row items-center mb-lg last:mb-0 group">
          <div className="absolute left-[-16px] md:left-1/2 md:-ml-[7px] top-4 w-3 h-3 rounded-full bg-secondary ring-4 ring-background z-10 group-hover:scale-125 transition-transform"></div>

          <div className="w-full md:w-1/2 md:pr-lg md:text-right">
            <div className="font-label-mono text-label-mono text-secondary mb-1">2026 jan - PRESENT</div>
            <h3 className="font-headline-md text-headline-md text-on-background">DevSecOps</h3>
            <div className="font-body-md text-body-md text-on-surface-variant mb-4 md:mb-0">PT Jayanta Wira Surya</div>
          </div>

          <div className="w-full md:w-1/2 md:pl-lg mt-4 md:mt-0">
            <div className="bg-surface-container-low/50 backdrop-blur-sm border border-outline-variant rounded-lg p-sm hover:border-outline transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent opacity-20"></div>
              <ul className="font-body-md text-body-md text-on-surface-variant space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1 text-xs">▹</span>
                  <span>Architected zero-trust network infrastructure reducing unauthorized access attempts by 99.9%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1 text-xs">▹</span>
                  <span>Implemented automated security scanning in CI/CD pipelines (SAST/DAST).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Job 2 */}
        <div className="relative flex flex-col md:flex-row items-center mb-lg last:mb-0 group">
          <div className="absolute left-[-16px] md:left-1/2 md:-ml-[7px] top-4 w-3 h-3 rounded-full bg-outline ring-4 ring-background z-10 group-hover:scale-125 transition-transform"></div>

          <div className="w-full md:w-1/2 md:pr-lg md:text-right">
            <div className="font-label-mono text-label-mono text-primary mb-1">2024 Jan - 2025 Dec</div>
            <h3 className="font-headline-md text-headline-md text-on-background">FullStack Developer</h3>
            <div className="font-body-md text-body-md text-on-surface-variant mb-4 md:mb-0">PT Elima Firman Teknologi</div>
          </div>

          <div className="w-full md:w-1/2 md:pl-lg mt-4 md:mt-0">
            <div className="bg-surface-container-low/50 backdrop-blur-sm border border-outline-variant rounded-lg p-sm hover:border-outline transition-colors">
              <ul className="font-body-md text-body-md text-on-surface-variant space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 text-xs">▹</span>
                  <span>Create new features and fix problematic features.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 text-xs">▹</span>
                  <span>and deploy to server</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Job 3 */}
        <div className="relative flex flex-col md:flex-row items-center mb-lg last:mb-0 group">
          <div className="absolute left-[-16px] md:left-1/2 md:-ml-[7px] top-4 w-3 h-3 rounded-full bg-outline ring-4 ring-background z-10 group-hover:scale-125 transition-transform"></div>

          <div className="w-full md:w-1/2 md:pr-lg md:text-right">
            <div className="font-label-mono text-label-mono text-outline mb-1">2022 jun - 2022 dec</div>
            <h3 className="font-headline-md text-headline-md text-on-background">Frontend Developer</h3>
            <div className="font-body-md text-body-md text-on-surface-variant mb-4 md:mb-0">PT Maju Gemilang Indotech</div>
          </div>

          <div className="w-full md:w-1/2 md:pl-lg mt-4 md:mt-0">
            <div className="bg-surface-container-low/50 backdrop-blur-sm border border-outline-variant rounded-lg p-sm hover:border-outline transition-colors">
              <ul className="font-body-md text-body-md text-on-surface-variant space-y-2 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-outline mt-1 text-xs">▹</span>
                  <span>Create new features and fix problematic features.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
