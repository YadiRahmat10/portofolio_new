"use client";

import React, { useEffect, useState } from "react";

export default function Hero() {
  const [line1, setLine1] = useState("");
  const [showOutput1, setShowOutput1] = useState(false);
  const [line2, setLine2] = useState("");
  const [showLine2, setShowLine2] = useState(false);

  const text1 = "whoami :";
  const text2 = "devSecOps_ ";

  useEffect(() => {
    let i = 0;
    let j = 0;

    // reset state in case of re-mount
    setLine1("");
    setShowOutput1(false);
    setLine2("");
    setShowLine2(false);

    let timeoutId: NodeJS.Timeout;

    function typeLine1() {
      if (i < text1.length) {
        setLine1(text1.substring(0, i + 1));
        i++;
        timeoutId = setTimeout(typeLine1, 100);
      } else {
        timeoutId = setTimeout(() => {
          setShowOutput1(true);
          timeoutId = setTimeout(() => {
            setShowLine2(true);
            typeLine2();
          }, 500);
        }, 500);
      }
    }

    function typeLine2() {
      if (j < text2.length) {
        setLine2(text2.substring(0, j + 1));
        j++;
        timeoutId = setTimeout(typeLine2, 50);
      }
    }

    timeoutId = setTimeout(typeLine1, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-72px)] flex flex-col justify-center items-center px-4 sm:px-6 md:px-gutter" id="Hero">
      <div className="relative z-10 w-full max-w-[600px] md:max-w-2xl lg:max-w-3xl mx-auto">
        <div className="bg-surface/60 backdrop-blur-md border border-outline-variant rounded shadow-[0_8px_24px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="bg-surface-container-highest/60 border-b border-outline-variant px-3 sm:px-4 py-2 flex items-center space-x-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-error"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-tertiary"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary"></div>
            <span className="font-label-mono text-label-mono text-on-surface-variant ml-3 sm:ml-4 text-xs sm:text-sm">// terminal</span>
          </div>
          <div className="p-4 sm:p-6 md:p-lg font-code-sm text-code-sm text-on-background min-h-[120px]">
            <div className="mb-4">
              <span className="text-secondary">$</span>{" "}
              <span className={line1.length < text1.length ? "typing-container" : ""}>{line1}</span>
            </div>

            <div className={`mb-4 text-on-surface-variant ${showOutput1 ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
              yadi
            </div>

            <div className={`${showLine2 ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
              <span className="text-secondary">$</span>{" "}
              <span className={showLine2 && line2.length < text2.length ? "typing-container" : ""}>{line2}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-lg flex justify-center">
          <button
            onClick={() => {
              document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" });
              window.history.pushState({}, "", "/projects");
            }}
            className="bg-primary-container text-background font-label-mono text-label-mono px-6 sm:px-8 py-2.5 sm:py-3 rounded font-bold hover:bg-primary transition-colors border border-primary-container shadow-[0_4px_12px_rgba(88,166,255,0.2)] text-sm sm:text-base"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
