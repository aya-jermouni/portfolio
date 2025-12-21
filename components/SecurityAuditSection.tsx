"use client";

import SecurityToolbelt from "./SecurityToolbelt";

export default function SecurityAuditSection() {
  return (
    <section className="relative py-28 px-6 max-w-5xl mx-auto">
      {/* TITLE */}
      <h2 className="text-5xl font-extrabold text-blue-200">
        Security Audits for Small & Medium Businesses
      </h2>
      <div className="w-32 h-[3px] bg-blue-400 mt-4 mb-16 rounded-full" />

      {/* INTRO */}
      <p className="text-blue-100 max-w-3xl leading-relaxed">
        I help small and medium businesses identify security risks in their web
        applications and digital systems. My goal is to make security clear,
        practical and aligned with real business needs — not just technical
        theory.
      </p>

      {/* EXPERIENCE-DRIVEN APPROACH */}
      <div className="mt-20 max-w-3xl relative rounded-xl p-8 bg-white/5 border border-blue-400/20">
        <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-blue-400 rounded-full" />

        <p className="text-blue-100 leading-relaxed">
          I believe that effective security audits come from real development
          experience. I do not assess systems in isolation — my security approach
          is rooted in having built applications, faced real technical challenges
          and encountered critical situations that required deeper analysis and
          problem-solving.
        </p>

        <p className="mt-4 text-blue-100 leading-relaxed">
          These experiences pushed me to look beyond functionality and understand
          how design decisions, architecture choices and implementation details
          directly impact application security.
        </p>
      </div>

      {/* METHOD */}
      <div className="mt-28">
        <h3 className="text-3xl font-semibold text-blue-100 mb-12">
          How I Approach a Security Audit
        </h3>

        <div className="space-y-10 border-l-2 border-blue-400/40 pl-8">
          <AuditStep
            title="Understanding the system"
            text="Reviewing the application, its architecture and business context to analyze authentication flows, access control mechanisms, data exposure and common security weaknesses."
          />
          <AuditStep
            title="Identifying risks and vulnerabilities"
            text="Analyzing how users interact with the system, how data is handled and where common vulnerabilities or misconfigurations may exist."
          />
          <AuditStep
            title="Assessing potential impact"
            text="Evaluating how identified issues could affect business operations, user trust, data confidentiality and system availability."
          />
          <AuditStep
            title="Providing clear recommendations"
            text="Delivering practical and prioritized recommendations that can realistically be implemented by development or technical teams."
          />
        </div>
      </div>

      {/* SCENARIOS */}
      <div className="mt-28">
        <h3 className="text-3xl font-semibold text-blue-100 mb-12">
          Security Scenarios & Insights
        </h3>

        <div className="space-y-16 border-l-2 border-blue-400/40 pl-8">
          <Scenario
            title="Authentication Review"
            context="Reviewed a typical authentication flow in a web application."
            impact="Weak authentication can expose user accounts and sensitive data."
            recommendation="Enforce strong password policies, secure token storage and rate limiting."
          />

          <Scenario
            title="API Security Analysis"
            context="Analyzed REST API endpoints for authorization and validation issues."
            impact="Improper API protection may lead to unauthorized access and data leaks."
            recommendation="Apply strict authorization checks and validate all incoming requests."
          />

          <Scenario
            title="Threat Modeling Exercise"
            context="Performed a basic threat modeling exercise on a service-based application."
            impact="Unanticipated attack paths can expose systems to preventable risks."
            recommendation="Identify critical assets early and apply security controls at key points."
          />
        </div>
      </div>

      {/* CRITERIA */}
      <div className="mt-28">
        <h3 className="text-3xl font-semibold text-blue-100 mb-12">
          How I Evaluate Security Readiness
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          <Criteria
            title="Authentication & Access Control"
            items={[
              "Strong password policies",
              "Secure session and token handling",
              "Role-based access control",
            ]}
          />
          <Criteria
            title="Data Protection"
            items={[
              "Sensitive data exposure",
              "Input validation and sanitization",
              "Secure data storage practices",
            ]}
          />
          <Criteria
            title="Application Logic & APIs"
            items={[
              "Authorization checks on endpoints",
              "Error handling and logging",
              "Protection against common OWASP vulnerabilities",
            ]}
          />
          <Criteria
            title="Operational & Configuration Risks"
            items={[
              "Environment configuration",
              "Secrets management",
              "Basic monitoring and alerting awareness",
            ]}
          />
        </div>
      </div>

      {/* TOOLS */}
      <div className="mt-28">
        <h3 className="text-3xl font-semibold text-blue-100 mb-6">
          Tools & Standards I Work With
        </h3>

        <SecurityToolbelt />
      </div>
    </section>
  );
}

/* SUB COMPONENTS */

function AuditStep({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="text-xl font-semibold text-blue-200">
        {title}
      </h4>
      <p className="mt-2 text-blue-100 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function Scenario({
  title,
  context,
  impact,
  recommendation,
}: {
  title: string;
  context: string;
  impact: string;
  recommendation: string;
}) {
  return (
    <div>
      <h4 className="text-2xl font-semibold text-blue-200">
        {title}
      </h4>
      <p className="mt-3 text-blue-100">
        <span className="font-semibold">Context:</span> {context}
      </p>
      <p className="mt-2 text-blue-300">
        <span className="font-semibold">Business impact:</span> {impact}
      </p>
      <p className="mt-2 text-blue-400 italic">
        <span className="font-semibold">Recommendation:</span> {recommendation}
      </p>
    </div>
  );
}

function Criteria({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl p-6 bg-white/5 border border-blue-400/20">
      <h4 className="text-xl font-semibold text-blue-200 mb-4">
        {title}
      </h4>
      <ul className="list-disc list-inside space-y-2 text-blue-100">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
