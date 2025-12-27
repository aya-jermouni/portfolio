"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Mode } from "../types/mode";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

export default function Hero({ mode, setMode }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  /* TYPEWRITER */
  const [text] = useTypewriter({
    words: [
      "Hi! It's Aya 👋",
      "<LovesToCode&CoffeeAddict/>",
      "/* creative mind at work */",
      "/* security-aware by design */",
    ],
    loop: true,
    delaySpeed: 1200,
  });

  /* DETECT LEFT / RIGHT */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, width } = ref.current.getBoundingClientRect();
    const x = e.clientX - left;
    const center = width / 2;

    if (x < center && mode !== "dev") setMode("dev");
    else if (x >= center && mode !== "security") setMode("security");
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden"
    >
      {/* BACKGROUND */}
      <motion.div
        animate={{
          background:
            mode === "neutral"
              ? "linear-gradient(90deg, #fdf2f8 50%, #020617 50%)"
              : mode === "dev"
                ? "#fdf2f8"
                : "#020617",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute inset-0"
      />

      {/* BIG BACKGROUND WORDS */}
      {mode === "neutral" && (
        <>
          {/* LEFT — DEV */}
          <div className="absolute left-8 xl:left-16 top-1/2 -translate-y-1/2 pointer-events-none">
            <p className="text-[23px] md:text-[50px] xl:text-[60px]
             font-semibold tracking-tight
             text-[#db79a4]/8 leading-tight opacity-60">
              Building ideas
              <br />
              into experiences
            </p>
            <div className="mt-6 text-sm text-gray-500 opacity-80">
              Explore Development
            </div>
          </div>

          {/* RIGHT — SECURITY */}
          <div className="absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 text-right pointer-events-none">
            <p className="text-[23px] md:text-[50px] xl:text-[60px]
             font-semibold tracking-tight
             text-blue-200/8 leading-tight opacity-60">
              Protecting
              <br />
              systems & trust
            </p>
            <div className="mt-6 text-sm text-gray-500 opacity-80">
              Explore Security
            </div>
          </div>
        </>
      )}

      {/* CENTER CONTAINER */}
      <motion.div
        animate={{ x: mode === "dev" ? 110 : mode === "security" ? -110 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center pointer-events-none pt-10"
      >
        {/* TEXT ABOVE IMAGE */}
        {mode === "neutral" && (
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              IT <span className="text-[#ffacd0]">BY</span>{" "}
              <span className="text-[#ffe5f0]">HER</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl font-mono text-gray-700">
              {text}
              <Cursor cursorStyle="|" />
            </p>
          </div>
        )}

        {/* IMAGE + CIRCLES */}
        <div className="relative w-full flex justify-center items-end">
          {/* CIRCLES */}
          <motion.div
            className="absolute w-[520px] h-[520px] rounded-full border border-[#db79a4]/50 blur-[1px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-[640px] h-[640px] rounded-full border border-[#ffcce2]/45 blur-[1.5px]"
            animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 2.3, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-[760px] h-[760px] rounded-full border border-[#db79a4]/35 blur-[2px]"
            animate={{ scale: [1, 1.22, 1], opacity: [0.3, 0.65, 0.3] }}
            transition={{ duration: 2.7, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-[820px] h-[820px] rounded-full border border-[#93c5fd]/30 blur-[2.5px]"
            animate={{ scale: [1, 1.26, 1], opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* IMAGE */}
          <Image
            src="/images/hero.png"
            alt="Aya"
            width={750}
            height={820}
            priority
            className="relative z-10"
          />
        </div>
      </motion.div>

      {/* DEV CONTENT */}
      <AnimatePresence>
        {mode === "dev" && (
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.3 }}
            className="absolute left-1 xl:left-8 top-1/2 -translate-y-1/2 -mt-20 max-w-lg z-20"
          >
            <h2 className="text-5xl font-bold tracking-tight text-[#9f496e]">
              Fullstack Development
            </h2>

            <p className="mt-4 text-gray-700 text-lg">
              Development is about turning ideas <br /> into meaningful digital
              experiences.
            </p>

            <p className="mt-3 text-gray-700">
              I transform complex requirements into intuitive, reliable and
              visually balanced interfaces that genuinely help users.
            </p>

            <p className="mt-3 text-gray-600 italic">
              Creative by design — security-aware by mindset.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECURITY CONTENT */}
      <AnimatePresence>
        {mode === "security" && (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.3 }}
            className="absolute right-1 xl:right-8 top-1/2 -translate-y-1/2  -mt-20 max-w-lg text-right z-20"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-blue-200">
              Security Analysis
            </h2>
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-200">
              & Risk Assessment
            </h2>
            <p className="mt-5 text-blue-300 text-lg">
              Security is about safeguarding <br /> users and the systems they rely on.
            </p>

            <p className="mt-4 text-blue-300">
              Reviewing applications, architecture and business context to
              identify risks, access control issues and data exposure.
            </p>

            <p className="mt-4 text-blue-400 italic">
              Security with a developer’s perspective.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
