import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-xl bg-surface-container-lowest/40 backdrop-blur-md border-t border-outline-variant mt-xl">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto opacity-80 hover:opacity-100 transition-opacity">
        <div className="font-label-mono text-label-mono text-on-surface-variant mb-4 md:mb-0">
          © 2025 YADI
        </div>
        <div className="flex gap-md font-body-md text-body-md">
          <Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors">
            GitHub
          </Link>
          <Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors">
            LinkedIn
          </Link>
          <Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
