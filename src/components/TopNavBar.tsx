"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-gutter py-sm max-w-container-max mx-auto">
        <Link href="#" className="font-display text-headline-md tracking-tighter text-primary">
          DEVSECOPS
        </Link>
        <nav className={`hidden md:flex space-x-sm`}>
          <Link href="#Hero" className="font-label-mono text-label-mono text-primary border-b-2 border-primary pb-1 hover:bg-surface-container-highest/50 px-2 py-1 rounded">Hero</Link>
          <Link href="#About" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-highest/50 px-2 py-1 rounded">About</Link>
          <Link href="#Skills" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-highest/50 px-2 py-1 rounded">Skills</Link>
          <Link href="#Experience" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-highest/50 px-2 py-1 rounded">Experience</Link>
          <Link href="#Projects" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-highest/50 px-2 py-1 rounded">Projects</Link>
          <Link href="#Contact" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-highest/50 px-2 py-1 rounded">Contact</Link>
        </nav>
        <button className="hidden md:inline-flex bg-primary-container text-background font-label-mono text-label-mono px-4 py-2 rounded font-bold hover:opacity-90 transition-opacity border border-primary-container flex items-center gap-2">
          Resume
          <span className="material-symbols-outlined" data-icon="download" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
        </button>
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined" data-icon="menu">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-outline-variant px-gutter py-4 flex flex-col space-y-4">
          <Link href="#Hero" className="font-label-mono text-label-mono text-primary">Hero</Link>
          <Link href="#About" className="font-label-mono text-label-mono text-on-surface-variant">About</Link>
          <Link href="#Skills" className="font-label-mono text-label-mono text-on-surface-variant">Skills</Link>
          <Link href="#Experience" className="font-label-mono text-label-mono text-on-surface-variant">Experience</Link>
          <Link href="#Projects" className="font-label-mono text-label-mono text-on-surface-variant">Projects</Link>
          <Link href="#Contact" className="font-label-mono text-label-mono text-on-surface-variant">Contact</Link>
          <button className="bg-primary-container text-background font-label-mono text-label-mono px-4 py-2 rounded font-bold self-start mt-2">
            Resume
          </button>
        </div>
      )}
    </header>
  );
}
