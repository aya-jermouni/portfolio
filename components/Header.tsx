"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Mode } from "../types/mode";

export default function Header({ mode }: { mode: Mode }) {
  const isSecurity = mode === "security";
  const primaryColor = isSecurity ? "#93c5fd" : "#9f496e";
  const textColor = isSecurity ? "text-blue-200" : "text-[#9f496e]";

  return (
    <header className="sticky top-0 z-30 px-6 py-4 max-w-6xl mx-auto flex justify-between items-center">
      {/* LEFT — SOCIALS */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center space-x-4"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/aya-jermouni-80b020202/"
          fgColor={primaryColor}
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/aya.jermounii/"
          fgColor={primaryColor}
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/aya-jermouni"
          fgColor={primaryColor}
          bgColor="transparent"
        />
      </motion.div>

      {/* RIGHT — CONTACT */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`flex items-center space-x-2 cursor-pointer ${textColor}`}
        onClick={() =>
          document
            .getElementById("contactme")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <SocialIcon
          network="email"
          fgColor={primaryColor}
          bgColor="transparent"
        />
        <span className="hidden md:inline text-sm uppercase">
          Contact me
        </span>
      </motion.div>
    </header>
  );
}
