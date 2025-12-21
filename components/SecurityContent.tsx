"use client";

import { Mode } from "../types/mode";
import SecurityToolbelt from "./SecurityToolbelt";
import SecurityScenarios from "../components/SecurityScenarios";
import SecurityAuditSection from "../components/SecurityAuditSection";
type Props = {
    setMode: (mode: Mode) => void;
};

export default function SecurityContent({ setMode }: Props) {
    return (
        <section className="relative py-24 px-6 max-w-5xl mx-auto">
            <SecurityAuditSection />

      
        </section>
    );
}
