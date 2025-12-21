"use client";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiDocker,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";

const tools = [
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiGit, label: "Git" },
  { icon: SiGithub, label: "GitHub" },
  { icon: SiPostman, label: "REST APIs" },
  { icon: SiJsonwebtokens, label: "JWT Auth" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiDocker, label: "Docker" },
];

export default function Toolbelt() {
  return (
    <div className="relative overflow-hidden py-10">
      {/* FADE EDGES */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

      {/* SCROLLING TRACK */}
      <div className="flex gap-12 animate-scroll hover:[animation-play-state:paused]">
        {/* DUPLICATION FOR INFINITE LOOP */}
        {[...tools, ...tools].map(({ icon: Icon, label }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-gray-600 hover:text-[#9f496e] transition"
          >
            <Icon size={36} />
            <span className="mt-2 text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
