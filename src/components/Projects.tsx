import React from "react";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="scroll-mt-32" id="Projects">
      <div className="mb-lg">
        <h2 className="font-headline-lg text-headline-lg text-on-background mb-xs">
          <span className="text-primary">&gt;_</span> DEPLOYED_PROJECTS
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Select technical implementations and open-source contributions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {/* Project Card 1 */}
        <div className="bg-surface-container-low/50 backdrop-blur-sm border border-outline-variant rounded-lg p-md flex flex-col h-full hover:border-primary transition-colors group">
          <h3 className="font-headline-md text-headline-md text-on-background mb-2">CTI Aggregation Platform</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
            A centralized platform for aggregating, normalizing, and disseminating Cyber Threat Intelligence feeds across internal systems.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">node.js</span>
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">next.js</span>
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">Docker</span>
          </div>
          {/* <Link href="/" className="inline-flex items-center gap-2 font-label-mono text-label-mono text-on-background hover:text-primary transition-colors mt-auto w-fit">
            <span className="material-symbols-outlined text-sm" data-icon="code">code</span>
            View Source
          </Link> */}
          <Link href="https://jayanta-cti.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-label-mono text-label-mono text-on-background hover:text-primary transition-colors mt-auto w-fit">
            <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
            Live Demo
          </Link>
        </div>

        {/* Project Card 2 */}
        <div className="bg-surface-container-low/50 backdrop-blur-sm border border-outline-variant rounded-lg p-md flex flex-col h-full hover:border-primary transition-colors group">
          <h3 className="font-headline-md text-headline-md text-on-background mb-2">MSI Hardened Deployment</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
            Automated provisioning scripts for deploying hardened microservices infrastructure compliant with CIS benchmarks.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">Terraform</span>
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">Kubernetes</span>
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">Go</span>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 font-label-mono text-label-mono text-on-background hover:text-primary transition-colors mt-auto w-fit">
            <span className="material-symbols-outlined text-sm" data-icon="terminal">terminal</span>
            View Configs
          </Link>
        </div>

        {/* Project Card 3 */}
        <div className="bg-surface-container-low/50 backdrop-blur-sm border border-outline-variant rounded-lg p-md flex flex-col h-full hover:border-primary transition-colors group">
          <h3 className="font-headline-md text-headline-md text-on-background mb-2">OSINT Dashboard</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
            Real-time dashboard for monitoring exposed corporate assets and leaked credentials across public repositories.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">Next.js</span>
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">TypeScript</span>
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">Tailwind</span>
          </div>
          <Link href="https://midaz-six.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-label-mono text-label-mono text-on-background hover:text-primary transition-colors mt-auto w-fit">
            <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
            Live Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
