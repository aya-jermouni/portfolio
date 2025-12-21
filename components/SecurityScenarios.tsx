"use client";

export default function SecurityScenarios() {
  return (
    <section className="relative py-24 px-6 max-w-5xl mx-auto">
      {/* TITLE */}
      <h2 className="text-5xl font-extrabold text-blue-200">
        Security Scenarios & Insights
      </h2>

      <div className="w-28 h-[3px] bg-blue-400 mt-4 mb-20 rounded-full" />

      {/* TIMELINE */}
      <div className="relative border-l-2 border-blue-400/40 pl-10 space-y-20">

        {/* SCENARIO 1 */}
        <Scenario
          title="Authentication Review"
          context="Analyzed a typical authentication flow in a web application to identify common security weaknesses."
          focus={[
            "Password policies",
            "Token handling",
            "Access control",
          ]}
          outcome="Improved understanding of secure authentication practices and common attack vectors."
        />

        {/* SCENARIO 2 */}
        <Scenario
          title="API Security Analysis"
          context="Reviewed REST API endpoints to identify authorization, validation and exposure issues."
          focus={[
            "Role-based access",
            "Input validation",
            "Error handling",
          ]}
          outcome="Developed a stronger awareness of how APIs can be abused and how to design them securely."
        />

        {/* SCENARIO 3 */}
        <Scenario
          title="Threat Modeling Exercise"
          context="Performed a basic threat modeling exercise on a service-based application."
          focus={[
            "Entry points",
            "Sensitive data flows",
            "Potential attack vectors",
          ]}
          outcome="Learned how to anticipate risks early and think proactively about system security."
        />
      </div>
    </section>
  );
}

/* SCENARIO ITEM */
function Scenario({
  title,
  context,
  focus,
  outcome,
}: {
  title: string;
  context: string;
  focus: string[];
  outcome: string;
}) {
  return (
    <div className="relative">
      {/* DOT */}
      <div className="absolute -left-[14px] top-2 w-6 h-6 rounded-full bg-blue-400 border-4 border-[#020617]" />

      <h3 className="text-2xl font-semibold text-blue-200">
        {title}
      </h3>

      <p className="mt-4 text-blue-100 leading-relaxed">
        <span className="font-semibold">Context:</span> {context}
      </p>

      <div className="mt-4">
        <p className="font-semibold text-blue-100">
          What I focused on:
        </p>
        <ul className="list-disc list-inside text-blue-100 mt-2 space-y-1">
          {focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <p className="mt-4 text-blue-300 italic">
        Outcome: {outcome}
      </p>
    </div>
  );
}
