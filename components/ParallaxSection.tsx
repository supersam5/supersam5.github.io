import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
    id: string;
    children: React.ReactNode;
    background?: React.ReactNode;
    contentClassName?: string;
};

/**
 * A full-viewport, scroll-snapping section with a two-layer parallax:
 * the background drifts slowly while the foreground content moves faster,
 * giving each section depth as you scroll through it.
 */
const ParallaxSection: React.FC<Props> = ({
    id,
    children,
    background,
    contentClassName = "",
}) => {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    // Background moves a little (slower), foreground moves more (faster) → depth.
    // Amplitudes are kept subtle so tall sections (Skills/Work) don't drift far
    // enough to clip past the section's overflow-hidden edge.
    const yBg = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
    const yFg = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

    return (
        <section
            ref={ref}
            id={id}
            className="relative flex min-h-screen snap-start items-center justify-center overflow-hidden"
        >
            {background && (
                <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
                    {background}
                </motion.div>
            )}
            <motion.div
                style={{ y: yFg }}
                className={`relative z-10 mx-auto w-full py-[18vh] ${contentClassName}`}
            >
                {children}
            </motion.div>
        </section>
    );
};

/** Soft, blurred color blobs used as the parallax background for non-hero sections. */
export const SectionBlobs: React.FC<{ color: string }> = ({ color }) => (
    <div className="absolute inset-0 overflow-hidden">
        <div
            className="absolute -left-24 top-1/4 h-72 w-72 rounded-full blur-3xl"
            style={{ background: `${color}14` }}
        />
        <div
            className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full blur-3xl"
            style={{ background: `${color}0a` }}
        />
    </div>
);

export default ParallaxSection;