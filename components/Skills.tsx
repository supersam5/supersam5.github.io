import React from "react";
import { motion } from "framer-motion";

type Category = {
    title: string;
    color: string;
    icon: React.ReactNode;
    skills: string[];
    experience: string[];
};

/* --- Icons (24x24, stroke-based, inherit currentColor) --- */

const IdeationIcon = (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2v.3h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z" />
    </svg>
);

const CodeIcon = (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const categories: Category[] = [
    {
        title: "Product Ideation & Evolution",
        color: "#ec4899",
        icon: IdeationIcon,
        skills: [
            "[Skill — e.g. market research, concept framing]",
            "[Skill — e.g. user discovery, rapid prototyping]",
            "[Skill — e.g. roadmapping, iteration planning]",
        ],
        experience: [
            "[Experience — e.g. took an idea from 0 to MVP]",
            "[Experience — e.g. evolved a product through several iterations]",
        ],
    },
    {
        title: "Software Development",
        color: "#f97316",
        icon: CodeIcon,
        skills: [
            "[Skill — e.g. React, Next.js, TypeScript]",
            "[Skill — e.g. Node.js, REST/GraphQL APIs, databases]",
            "[Skill — e.g. testing, CI/CD, observability]",
        ],
        experience: [
            "[Experience — e.g. shipped a feature end-to-end to production]",
            "[Experience — e.g. maintained and scaled a service]",
        ],
    },
];

const Skills: React.FC = () => {
    return (
        <div className="mx-auto w-full max-w-4xl px-4">
            <h2 className="font-robotic mb-12 text-center text-3xl font-bold text-orange-500 sm:text-4xl">
                Skills &amp; Experience
            </h2>
            <div className="space-y-8">
                {categories.map((cat, i) => {
                    const reversed = i % 2 === 1;
                    return (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`grid items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-[auto,1fr] ${
                                reversed ? "md:[&>*:first-child]:order-2" : ""
                            }`}
                        >
                            {/* Icon + title */}
                            <div className="flex items-center gap-4">
                                <span
                                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                                    style={{
                                        color: cat.color,
                                        border: `2px solid ${cat.color}55`,
                                        background: `${cat.color}15`,
                                    }}
                                >
                                    {cat.icon}
                                    <span className="sr-only">{cat.title}</span>
                                </span>
                                <h3
                                    className="font-robotic text-xl font-semibold"
                                    style={{ color: cat.color }}
                                >
                                    {cat.title}
                                </h3>
                            </div>

                            {/* Lists */}
                            <div>
                                <p className="mb-2 text-sm uppercase tracking-wide text-gray-400">
                                    Skills
                                </p>
                                <ul className="mb-5 flex flex-wrap gap-2">
                                    {cat.skills.map((s) => (
                                        <li
                                            key={s}
                                            className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-200"
                                        >
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mb-2 text-sm uppercase tracking-wide text-gray-400">
                                    Experience
                                </p>
                                <ul className="list-disc space-y-1 pl-5 text-gray-200">
                                    {cat.experience.map((e) => (
                                        <li key={e}>{e}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;