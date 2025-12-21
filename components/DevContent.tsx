"use client";

import { Mode } from "../types/mode";
import WhatICanDo from "../components/WhatICanDo";
import DevProjects from "../components/DevProjects";
type Props = {
    setMode: (mode: Mode) => void;
};

export default function DevContent({ setMode }: Props) {
    return (
        <section className="relative py-24 px-6 max-w-5xl mx-auto">
            {/* TITLE */}
            <h2 className="text-5xl font-extrabold text-[#9f496e]">
                Building with Purpose
            </h2>

            {/* LINE */}
            <div className="w-28 h-[3px] bg-[#db79a4] mt-4 mb-14 rounded-full" />

            {/* CARD */}
            <div className="relative rounded-2xl p-10 md:p-12 bg-white/70 backdrop-blur-sm border border-[#db79a4]/25">
                <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-[#db79a4] rounded-full" />

                <p className="text-lg text-gray-700 leading-relaxed">
                    My journey into fullstack development began after my studies at FSR,
                    where I built a strong academic foundation and developed a curiosity
                    for how digital systems are designed and structured.
                </p>

                <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                    I completed an intensive fullstack bootcamp at GoMyCode, which allowed
                    me to work on real-world projects, internships, and gradually progress
                    from simple applications to more complex systems.
                </p>

                <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                    Today, I focus on building clean, reliable and user-focused web
                    applications with maintainable architecture and thoughtful UX.
                </p>

                <p className="mt-8 text-sm italic text-gray-500">
                    Development, for me, is about responsibility as much as creativity.
                </p>

                {/* CTA */}
                <div className="mt-10">
                    <button
                        onClick={() => setMode("security")}
                        className="px-6 py-3 rounded-full bg-[#9f496e] text-white text-sm font-medium hover:bg-[#87405f] transition"
                    >
                        Explore Security
                    </button>
                </div>
            </div>
            <WhatICanDo />


            <DevProjects />

        </section>
    );
}
