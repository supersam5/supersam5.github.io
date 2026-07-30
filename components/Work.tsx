import React from "react";
import { motion } from "framer-motion";

type Project = {
    title: string;
    description: string;
    tags: string[];
    accent: string;
};

type Role = {
    title: string;
    org: string;
    period: string;
    summary: string;
};

const projects: Project[] = [
    {
        title: "[Project Name]",
        description:
            "[One or two lines on what this project does, the problem it solves, and your role. Filler text for now — replace with a real description.]",
        tags: ["[Tech]", "[Tech]", "[Tech]"],
        accent: "#f97316",
    },
    {
        title: "[Project Name]",
        description:
            "[One or two lines on what this project does, the problem it solves, and your role. Filler text for now — replace with a real description.]",
        tags: ["[Tech]", "[Tech]", "[Tech]"],
        accent: "#ec4899",
    },
    {
        title: "[Project Name]",
        description:
            "[One or two lines on what this project does, the problem it solves, and your role. Filler text for now — replace with a real description.]",
        tags: ["[Tech]", "[Tech]", "[Tech]"],
        accent: "#22d3ee",
    },
];

const roles: Role[] = [
    {
        title: "[Role Title]",
        org: "[Company / Org]",
        period: "[Start – End]",
        summary:
            "[Short bullet-ish line on scope and impact. Filler text — replace with real responsibilities and outcomes.]",
    },
    {
        title: "[Role Title]",
        org: "[Company / Org]",
        period: "[Start – End]",
        summary:
            "[Short bullet-ish line on scope and impact. Filler text — replace with real responsibilities and outcomes.]",
    },
];

const Work: React.FC = () => {
    return (
        <div className="mx-auto w-full max-w-5xl px-4">
            <h2 className="font-robotic mb-8 text-center text-3xl font-bold text-orange-500 sm:text-4xl">
                The Work
            </h2>

            {/* Projects */}
            <div className="mb-10">
                <h3 className="font-robotic mb-4 text-sm uppercase tracking-wide text-gray-400">
                    Projects
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.title + i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5"
                        >
                            <span
                                className="mb-3 h-1 w-10 rounded-full"
                                style={{ background: p.accent }}
                            />
                            <h4 className="font-robotic text-lg font-semibold text-gray-100">
                                {p.title}
                            </h4>
                            <p className="mt-2 flex-1 text-sm text-gray-300">
                                {p.description}
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <li
                                        key={t}
                                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
                                    >
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Experience */}
            <div>
                <h3 className="font-robotic mb-4 text-sm uppercase tracking-wide text-gray-400">
                    Experience
                </h3>
                <div className="space-y-4">
                    {roles.map((r, i) => (
                        <motion.div
                            key={r.title + i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-5"
                        >
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                <h4 className="font-robotic text-lg font-semibold text-orange-500">
                                    {r.title}{" "}
                                    <span className="text-gray-300">· {r.org}</span>
                                </h4>
                                <span className="text-sm text-gray-400">{r.period}</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-300">{r.summary}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;