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
        title: "Blockchain Decentralized Delivery Network",
        description:
            "A logistics coordination platform enabling drivers, senders, and recipients to track deliveries without intermediaries — improving transparency in haulage operations.",
        tags: ["Blockchain", "Node.js", "Logistics"],
        accent: "#f97316",
    },
    {
        title: "USSD Agricultural Extension Platform",
        description:
            "A resource-constrained-friendly platform giving farmers access to agricultural extension services and markets via USSD, built with Node.js, MongoDB, and Africa's Talking.",
        tags: ["USSD", "Node.js", "MongoDB"],
        accent: "#ec4899",
    },
    {
        title: "AI Inventory & Automation Suite",
        description:
            "AI-powered tools for SMEs to automate inventory management, product research, and customer engagement — built on RAG-based intelligence systems and AI agents.",
        tags: ["RAG", "AI Agents", "Full-Stack"],
        accent: "#22d3ee",
    },
];

const roles: Role[] = [
    {
        title: "Product Lead",
        org: "Youcommerce Technologies LTD",
        period: "May 2025 – Present",
        summary:
            "Lead architecture, model selection, and full-stack development for an AI-powered MVP serving SMEs — building RAG-based intelligence systems, AI agents, and managing cloud cost optimization.",
    },
    {
        title: "Technical Lead",
        org: "ProDriversAfrica",
        period: "Jan 2025 – Present",
        summary:
            "Led end-to-end technical delivery for mobility and driver-management platforms; owned roadmap and workflow design, drove a 400% revenue increase through driver-workflow automation and routing optimization.",
    },
    {
        title: "Software Developer / Assistant Product Manager",
        org: "EtransitAfrica",
        period: "Sep 2021 – Sep 2022",
        summary:
            "Maintained a large-scale travel and vehicle-hire booking system (PHP/Laravel + AWS EC2); built C#/.NET Core microservices and delivered MVPs for boat cruise, short-let, and private jet booking features.",
    },
    {
        title: "Software Engineer",
        org: "SIDMACH / Microsoft 4Afrika SkillsLab",
        period: "Feb 2021 – Jul 2021",
        summary:
            "Developed enterprise applications in C#, ASP.NET Core, MVC, and Azure — contributing to a mobile device insurance system and an enterprise HR platform.",
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