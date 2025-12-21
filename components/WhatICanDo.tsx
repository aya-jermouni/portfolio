"use client";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import Toolbelt from "./Toolbelts";

export default function WhatICanDo() {
  return (
    <section className="relative py-24 px-6 max-w-6xl mx-auto">
      {/* TITLE */}
      <h2 className="text-5xl font-extrabold text-gray-800">
        What I Can Do For You
      </h2>

      <div className="w-28 h-[3px] bg-[#db79a4] mt-4 mb-16 rounded-full" />

      {/* VALUE CARDS */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {/* BUILD */}
        <div className="rounded-2xl p-8 bg-white/70 backdrop-blur-sm border border-[#db79a4]/25">
          <h3 className="text-2xl font-semibold text-[#9f496e] mb-4">
            Build
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I design and build modern fullstack web applications, from intuitive
            user interfaces to robust backend logic, using scalable and
            maintainable architectures.
          </p>
        </div>

        {/* SECURE */}
        <div className="rounded-2xl p-8 bg-white/70 backdrop-blur-sm border border-blue-400/25">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Secure
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I integrate security-aware practices into development, helping
            identify risks, secure authentication flows and protect application
            data from common vulnerabilities.
          </p>
        </div>

        {/* IMPROVE */}
        <div className="rounded-2xl p-8 bg-white/70 backdrop-blur-sm border border-gray-300/25">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Improve
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I refactor, optimize and improve existing codebases to enhance
            performance, readability and long-term maintainability.
          </p>
        </div>
      </div>

      {/* TOOLBAR */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-8">
          MERN Stack & Tools I Use
        </h3>

        
        <Toolbelt />

      </div>
    </section>
  );
}
