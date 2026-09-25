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
        <div
          className="relative border border-outline-variant rounded-lg p-md flex flex-col h-full hover:border-primary transition-colors group overflow-hidden"
          style={{ backgroundImage: "linear-gradient(to bottom, rgba(10,14,20,0.55) 0%, rgba(10,14,20,0.85) 60%, rgba(10,14,20,0.97) 100%), url('/img/cti.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
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
        <div
          className="relative border border-outline-variant rounded-lg p-md flex flex-col h-full hover:border-primary transition-colors group overflow-hidden"
          style={{ backgroundImage: "linear-gradient(to bottom, rgba(10,14,20,0.55) 0%, rgba(10,14,20,0.85) 60%, rgba(10,14,20,0.97) 100%), url('/img/osint.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
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

      {/* Row 2 — centered */}
      <div className="flex flex-col md:flex-row justify-center gap-md mt-md">
        {/* Project Card 4 - Dumbgram */}
        <div
          className="relative border border-outline-variant rounded-lg p-md flex flex-col hover:border-primary transition-colors group w-full md:w-1/2 lg:w-1/3 overflow-hidden"
          style={{ backgroundImage: "linear-gradient(to bottom, rgba(10,14,20,0.55) 0%, rgba(10,14,20,0.85) 60%, rgba(10,14,20,0.97) 100%), url('/img/dumbgram.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <h3 className="font-headline-md text-headline-md text-on-background mb-2">Dumbgram</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
            A social media platform inspired by Instagram — supporting photo uploads, user feeds, follow system, and real-time interactions.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">React</span>
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">Node.js</span>
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">mySql</span>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 font-label-mono text-label-mono text-on-background hover:text-primary transition-colors mt-auto w-fit">
            <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
            Live Demo
          </Link>
        </div>

        {/* Project Card 5 - Dumbfilm */}
        <div
          className="relative border border-outline-variant rounded-lg p-md flex flex-col hover:border-primary transition-colors group w-full md:w-1/2 lg:w-1/3 overflow-hidden"
          style={{ backgroundImage: "linear-gradient(to bottom, rgba(10,14,20,0.55) 0%, rgba(10,14,20,0.85) 60%, rgba(10,14,20,0.97) 100%), url('/img/dumbfilm.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <h3 className="font-headline-md text-headline-md text-on-background mb-2">Dumbfilm</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
            A movie discovery and tracking app — browse trending films, search by genre, and maintain a personal watchlist powered by TMDB API.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">React</span>
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">Node.js</span>
            <span className="bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm px-2 py-1 rounded border border-outline-variant">JavaScript</span>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 font-label-mono text-label-mono text-on-background hover:text-primary transition-colors mt-auto w-fit">
            <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
            Live Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
