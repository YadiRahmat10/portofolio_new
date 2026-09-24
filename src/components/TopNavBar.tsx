"use client";

import React, { useState, useEffect, useCallback } from "react";

const navLinks = [
  { path: "/", label: "Home", id: "Hero" },
  // { path: "/#about", label: "About", id: "About" },
  { path: "/#skills", label: "Skills", id: "Skills" },
  { path: "/#experience", label: "Experience", id: "Experience" },
  { path: "/#projects", label: "Projects", id: "Projects" },
];

export default function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Hero");

  const scrollToSection = useCallback((id: string, path: string) => {
    if (id === "Hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState({}, "", path);
      setActiveSection(id);
      setIsMenuOpen(false);
      return;
    }

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
    <>
      <header className="fixed top-0 w-full z-40 bg-transparent transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center px-gutter py-sm max-w-container-max mx-auto">
          <button
            onClick={() => scrollToSection("Hero", "/")}
            className="font-display text-headline-md tracking-tighter text-primary cursor-pointer"
          >
            {/* DevSecOps */}
          </button>
          <button
            className="text-primary p-2 border border-outline-variant rounded-lg hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
        </div>
      </header>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 md:w-80 bg-surface z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-4 border-b border-outline-variant/30">
          <button
            className="text-on-surface-variant hover:text-primary transition-colors p-2 -mr-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>
        <div className="flex flex-col space-y-2 p-6 overflow-y-auto">
          {navLinks.map(({ path, label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id, path)}
              className={`font-label-mono text-label-mono text-left py-3 px-4 rounded-lg transition-colors ${activeSection === id
                ? "bg-primary/10 text-primary font-bold"
                : "text-on-surface-variant hover:bg-surface-container-highest/50 hover:text-primary"
                }`}
            >
              {label}
            </button>
          ))}
          <div className="pt-6 mt-4 border-t border-outline-variant/30">
            <button className="w-full bg-primary-container text-background font-label-mono text-label-mono px-4 py-3 rounded font-bold hover:opacity-90 transition-opacity border border-primary-container flex items-center justify-center gap-2">
              Resume
              <span className="material-symbols-outlined" data-icon="download" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

