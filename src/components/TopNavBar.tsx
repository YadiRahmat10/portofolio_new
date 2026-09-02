"use client";

import React, { useState, useEffect, useCallback } from "react";

const navLinks = [
  { path: "/", label: "Hero", id: "Hero" },
  { path: "/about", label: "About", id: "About" },
  { path: "/skills", label: "Skills", id: "Skills" },
  { path: "/experience", label: "Experience", id: "Experience" },
  { path: "/projects", label: "Projects", id: "Projects" },
];

export default function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Hero");

  const scrollToSection = useCallback((id: string, path: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState({}, "", path);
      setActiveSection(id);
    }
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach(({ id, path }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            window.history.replaceState({}, "", path);
          }
        },
        { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const linkBase =
    "font-label-mono text-label-mono px-2 py-1 rounded transition-colors hover:bg-surface-container-highest/50 cursor-pointer";
  const activeClass = "text-primary border-b-2 border-primary pb-1";
  const inactiveClass = "text-on-surface-variant hover:text-primary";

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-gutter py-sm max-w-container-max mx-auto">
        <button
          onClick={() => scrollToSection("Hero", "/")}
          className="font-display text-headline-md tracking-tighter text-primary cursor-pointer"
        >
          DevSecOps
        </button>
        <nav className="hidden md:flex space-x-sm">
          {navLinks.map(({ path, label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id, path)}
              className={`${linkBase} ${activeSection === id ? activeClass : inactiveClass}`}
            >
              {label}
            </button>
          ))}
        </nav>
        <button className="hidden md:inline-flex bg-primary-container text-background font-label-mono text-label-mono px-4 py-2 rounded font-bold hover:opacity-90 transition-opacity border border-primary-container items-center gap-2">
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
          {navLinks.map(({ path, label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id, path)}
              className={`font-label-mono text-label-mono text-left ${activeSection === id ? "text-primary" : "text-on-surface-variant"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

