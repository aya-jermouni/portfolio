"use client";

import { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import DevContent from "../../components/DevContent";
import SecurityContent from "../../components/SecurityContent";
import ContactMe from "../../components/ContactMe";
import { Mode } from "../../types/mode";
export default function Page() {
  const [mode, setMode] = useState<Mode>("neutral");

  return (
    <div
      className={`
        min-h-screen overflow-x-hidden transition-colors duration-700
        ${
          mode === "security"
            ? "bg-[#020617] text-blue-100"
            : "bg-[#fdf2f8] text-gray-800"
        }
      `}
    >
      <Header mode={mode} />

      {/* HERO — PAS DE SCROLL FORCÉ */}
      <Hero mode={mode} setMode={setMode} />

      {/* CONTENU — SCROLL VOLONTAIRE */}
     
      {mode === "dev" && <DevContent setMode={setMode} />}

      {mode === "security" && <SecurityContent setMode={setMode} />}

      <ContactMe />
    </div>
  );
}