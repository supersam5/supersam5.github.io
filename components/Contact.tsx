import React from "react";
import { motion } from "framer-motion";

const EMAIL = "samuel@youcommerce.ai";

// TODO: replace these placeholder Tally links with the real form URLs once created.
const options = [
    {
        title: "Freelance Work",
        description:
            "Need a hand building a product, shipping a feature, or leading a project? Let's talk scope, timeline, and impact.",
        cta: "Start a project",
        link: "https://tally.so/r/rjQ2Kl",
        accent: "#f97316",
    },
    {
        title: "Request My CV",
        description:
            "Looking for a full breakdown of my experience, roles, and certifications? Fill in a quick form and I'll send my CV over.",
        cta: "Request the CV",
        link: "https://tally.so/r/44YPoO",
        accent: "#22d3ee",
    },
];

const Contact: React.FC = () => {
    return (
        <div className="mx-auto w-full max-w-4xl px-4 text-center">
            <h2 className="font-robotic mb-4 text-center text-3xl font-bold text-orange-500 sm:text-4xl">
                Let&rsquo;s Work Together
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-gray-300">
                Based in Lagos and London, working with teams worldwide. Reach
                out about a project or request my CV — I usually reply within a
                day.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
                {options.map((o, i) => (
                    <motion.a
                        key={o.title}
                        href={o.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 text-left transition-colors hover:border-white/20 hover:bg-white/10"
                    >
                        <span
                            className="mb-4 h-1 w-12 rounded-full transition-all group-hover:w-20"
                            style={{ background: o.accent }}
                        />
                        <h3
                            className="font-robotic text-xl font-semibold"
                            style={{ color: o.accent }}
                        >
                            {o.title}
                        </h3>
                        <p className="mt-3 flex-1 text-sm text-gray-300">
                            {o.description}
                        </p>
                        <span
                            className="font-robotic mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide"
                            style={{ color: o.accent }}
                        >
                            {o.cta}
                            <span
                                aria-hidden
                                className="transition-transform group-hover:translate-x-1"
                            >
                                &rarr;
                            </span>
                        </span>
                    </motion.a>
                ))}
            </div>

            <p className="font-robotic mt-10 text-sm uppercase tracking-wide text-gray-400">
                {EMAIL}
            </p>
        </div>
    );
};

export default Contact;