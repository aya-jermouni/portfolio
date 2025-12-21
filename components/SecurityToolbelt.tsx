"use client";

import {
  SiOwasp,
  SiLinux,
  SiWireshark,
  SiDocker,
  SiPostman,
  SiGit,
  SiGithub,
  SiJsonwebtokens,
} from "react-icons/si";
import { MdSecurity, MdBugReport } from "react-icons/md";
import { FaUserShield, FaLock } from "react-icons/fa";

const securityTools = [
  { icon: SiOwasp, label: "OWASP Top 10" },
  { icon: MdBugReport, label: "Vulnerability Analysis" },
  { icon: MdSecurity, label: "Threat Modeling" },
  { icon: FaLock, label: "Authentication" },
  { icon: SiJsonwebtokens, label: "JWT Security" },
  { icon: FaUserShield, label: "Authorization" },
  { icon: SiPostman, label: "API Security" },
  { icon: SiLinux, label: "Linux Basics" },
  { icon: SiWireshark, label: "Network Analysis" },
  { icon: SiDocker, label: "Container Security" },
  { icon: SiGit, label: "Secure Git Workflow" },
  { icon: SiGithub, label: "Code Review" },
];

export default function SecurityToolbelt() {
  return (
    <div className="relative overflow-hidden py-10">
      {/* FADE EDGES */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#020617] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#020617] to-transparent z-10" />

      {/* SCROLLING TRACK */}
      <div className="flex gap-12 animate-scroll hover:[animation-play-state:paused]">
        {[...securityTools, ...securityTools].map(
          ({ icon: Icon, label }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-blue-200 hover:text-blue-400 transition"
            >
              <Icon size={36} />
              <span className="mt-2 text-sm">{label}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
