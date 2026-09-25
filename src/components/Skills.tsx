import React from "react";

export default function Skills() {
  return (
    <section className="bg-surface-container-lowest/40 backdrop-blur-md px-gutter py-xl border-y border-outline-variant" id="Skills">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-display text-headline-lg md:text-display text-primary mb-lg tracking-tighter border-b border-outline-variant pb-2 inline-block">
          Technical
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">

          {/* Security */}
          <div className="bg-surface/50 backdrop-blur-sm border border-outline-variant rounded p-md hover:border-primary/50 transition-colors">
            <div className="font-label-mono text-label-mono text-error mb-4 border-b border-outline-variant/50 pb-2">
              SECURITY & OSINT
            </div>
            <ul className="space-y-2 font-code-sm text-code-sm text-on-surface-variant">
              <li className="flex items-center"><span className="text-error mr-2">▹</span> Threat Modeling</li>
              <li className="flex items-center"><span className="text-error mr-2">▹</span> SAST / DAST</li>
              <li className="flex items-center"><span className="text-error mr-2">▹</span> Maltego / Shodan</li>
              <li className="flex items-center"><span className="text-error mr-2">▹</span> Identity Management</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="bg-surface/50 backdrop-blur-sm border border-outline-variant rounded p-md hover:border-primary/50 transition-colors">
            <div className="font-label-mono text-label-mono text-primary-container mb-4 border-b border-outline-variant/50 pb-2">
              FRONTEND
            </div>
            <ul className="space-y-2 font-code-sm text-code-sm text-on-surface-variant">
              <li className="flex items-center"><span className="text-primary-container mr-2">▹</span> React / Next.js</li>
              <li className="flex items-center"><span className="text-primary-container mr-2">▹</span> Vue </li>
              <li className="flex items-center"><span className="text-primary-container mr-2">▹</span> Angular</li>
              <li className="flex items-center"><span className="text-primary-container mr-2">▹</span> JavaScript / TypeScript</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-surface/50 backdrop-blur-sm border border-outline-variant rounded p-md hover:border-primary/50 transition-colors">
            <div className="font-label-mono text-label-mono text-tertiary mb-4 border-b border-outline-variant/50 pb-2">
              BACKEND
            </div>
            <ul className="space-y-2 font-code-sm text-code-sm text-on-surface-variant">
              <li className="flex items-center"><span className="text-tertiary mr-2">▹</span> Go</li>
              <li className="flex items-center"><span className="text-tertiary mr-2">▹</span> Node</li>
              <li className="flex items-center"><span className="text-tertiary mr-2">▹</span> PHP</li>
              <li className="flex items-center"><span className="text-tertiary mr-2">▹</span> MySQL</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
