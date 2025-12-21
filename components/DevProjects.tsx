"use client";

export default function DevProjects() {
    return (
        <section className="relative py-24 px-6 max-w-6xl mx-auto">
            {/* TITLE */}
            <h2 className="text-5xl font-extrabold text-[#9f496e]">
                From Idea to Implementation
            </h2>
            <div className="w-28 h-[3px] bg-[#db79a4] mt-4 mb-16 rounded-full" />

            <div className="space-y-20">
                {/* PROJECT 1 — LAUNDRY LUXE */}
                <ProjectCard
                    title="Laundry Luxe"
                    level="Intermediate"
                    description="A service platform connecting users with local laundry services to simplify daily life and improve organization."
                    features={[
                        "User authentication",
                        "Laundry service booking",
                        "Order tracking and status updates",
                        "Responsive user interface",
                    ]}
                    stack={["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]}
                    security={[
                        "Authentication",
                        "Input validation",
                        "Basic access control",
                    ]}
                    status="Private repository"
                />

                {/* PROJECT 2 — CASH PATH */}
                <ProjectCard
                    title="Cash Path"
                    level="Intermediate → Advanced"
                    description="A personal finance tracking application designed to monitor expenses, track cards and improve financial organization."
                    features={[
                        "Expense tracking by card",
                        "Transaction categorization",
                        "Monthly summaries",
                        "Dashboard and data visualization",
                    ]}
                    stack={["React", "Node.js", "MongoDB", "Tailwind CSS"]}
                    security={[
                        "Sensitive data handling",
                        "Input validation",
                        "Access restrictions",
                    ]}
                    status="Local project"
                />

                {/* PROJECT 3 — SMART LIFE HUB */}
                <ProjectCard
                    title="Smart Life Hub"
                    level="Advanced (In Progress)"
                    description="A centralized platform combining service management and expense tracking in a secure and scalable system."
                    features={[
                        "User roles and authentication",
                        "Service booking management",
                        "Expense tracking and budgeting",
                        "Unified dashboard",
                    ]}
                    stack={[
                        "Next.js",
                        "TypeScript",
                        "Node.js",
                        "MongoDB",
                        "Tailwind CSS",
                    ]}
                    security={[
                        "JWT authentication",
                        "Protected routes",
                        "Role-based access",
                    ]}
                    status="In progress — will be deployed"
                />
            </div>
        </section>
    );
}

/* PROJECT CARD COMPONENT */
function ProjectCard({
    title,
    level,
    description,
    features,
    stack,
    security,
    status,
}: {
    title: string;
    level: string;
    description: string;
    features: string[];
    stack: string[];
    security: string[];
    status: string;
}) {
    return (
        <div className="relative rounded-2xl p-10 bg-white/70 backdrop-blur-sm border border-[#db79a4]/25">
            <h3 className="text-3xl font-bold text-[#9f496e]">
                {title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{level}</p>

            <p className="mt-6 text-gray-700 leading-relaxed">
                {description}
            </p>

            <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">
                    What I built
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {features.map((f) => (
                        <li key={f}>{f}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">
                    Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                    {stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-sm bg-[#fbe7f1] text-[#9f496e]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">
                    Security Awareness
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {security.map((s) => (
                        <li key={s}>{s}</li>
                    ))}
                </ul>
            </div>

            <p className="mt-6 text-sm italic text-gray-500">
                {status}
            </p>
        </div>
    );
}
