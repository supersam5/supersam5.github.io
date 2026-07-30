import React from "react";
import { motion } from "framer-motion";

type Ring = {
    size: number;       // diameter in px
    duration: number;   // seconds per full rotation
    direction: 1 | -1;
    color: string;
    icon: React.ReactNode;
    label: string;
    angle: number;      // starting position of the icon, in degrees clockwise from top
};

type PulsingRing = {
    size: number;       // diameter in px (sized to sit between rotating rings)
    color: string;
    duration: number;   // seconds per pulse cycle
    delay: number;      // stagger offset so rings don't pulse in sync
};

/* --- Icons (24x24, stroke-based, inherit currentColor) --- */

const CodeIcon = (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const ConfigIcon = (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
);

const PlanningIcon = (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* clipboard board */}
        <rect x="5" y="4" width="14" height="18" rx="2" />
        {/* clipboard clip */}
        <rect x="9" y="2" width="6" height="4" rx="1" />
        {/* to-do lines */}
        <path d="M9 11l1 1 2-2" />
        <path d="M14 10h3" />
        <path d="M9 16l1 1 2-2" />
        <path d="M14 15h3" />
    </svg>
);

const IdeationIcon = (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2v.3h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z" />
    </svg>
);

const rings: Ring[] = [
    { size: 180, duration: 26, direction: 1, color: "#f97316", icon: CodeIcon, label: "Code", angle: 0 },
    { size: 360, duration: 34, direction: -1, color: "#6366f1", icon: ConfigIcon, label: "Configuration", angle: 90 },
    { size: 540, duration: 42, direction: 1, color: "#22d3ee", icon: PlanningIcon, label: "Planning", angle: 210 },
    { size: 720, duration: 50, direction: -1, color: "#ec4899", icon: IdeationIcon, label: "Ideation", angle: 315 },
];

/* All orbiting icons share one outline color so the rings read as a unified set. */
const ICON_COLOR = "#f97316";
/* Page background — used to knock the glyph out of the solid orange icon disc. */
const ICON_KNOCKOUT = "#002c6e";

/* Ambient pulsating rings sized to sit in the gaps between the rotating ones,
   plus one just inside the smallest and two larger ones on the outside. */
const pulsingRings: PulsingRing[] = [
    { size: 120, color: "#f97316", duration: 6, delay: 0 },
    { size: 270, color: "#6366f1", duration: 7, delay: 1 },
    { size: 450, color: "#22d3ee", duration: 5, delay: 2 },
    { size: 630, color: "#ec4899", duration: 7, delay: 3 },
    { size: 840, color: "#38bdf8", duration: 8, delay: 1.5 },
    { size: 960, color: "#f472b6", duration: 9, delay: 3.5 },
];

const BackgroundCogs = () => {
    return (
        <div
            aria-hidden
            style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
                zIndex: 0,
                overflow: "hidden",
            }}
        >
            {rings.map((ring, i) => {
                const rotation = 360 * ring.direction;
                const radius = ring.size / 2;
                const rad = (ring.angle * Math.PI) / 180;
                // Position on the circle: 0deg = top, measured clockwise.
                const iconLeft = radius + radius * Math.sin(rad);
                const iconTop = radius - radius * Math.cos(rad);
                return (
                    <motion.div
                        key={ring.label}
                        animate={{ rotate: rotation }}
                        transition={{ repeat: Infinity, duration: ring.duration, ease: "linear" }}
                        style={{
                            position: "absolute",
                            width: ring.size,
                            height: ring.size,
                            border: `2px solid ${ring.color}40`,
                            borderRadius: "9999px",
                            boxShadow: `0 0 24px ${ring.color}15 inset`,
                        }}
                    >
                        {/* Icon sits on the ring at `angle` and orbits with it.
                            Counter-rotate so the icon stays upright while travelling. */}
                        <div
                            style={{
                                position: "absolute",
                                top: iconTop,
                                left: iconLeft,
                                transform: "translate(-50%, -50%)",
                                color: ICON_KNOCKOUT,
                                background: ICON_COLOR,
                                borderRadius: "9999px",
                                padding: 8,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: `0 0 20px ${ICON_COLOR}55`,
                            }}
                        >
                            <motion.div
                                animate={{ rotate: -rotation }}
                                transition={{ repeat: Infinity, duration: ring.duration, ease: "linear" }}
                            >
                                {ring.icon}
                            </motion.div>
                            <span className="sr-only">{ring.label}</span>
                        </div>
                    </motion.div>
                );
            })}

            {pulsingRings.map((ring, i) => {
                return (
                    <motion.div
                        key={`pulse-${i}`}
                        animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.7, 0.35] }}
                        transition={{
                            repeat: Infinity,
                            duration: ring.duration,
                            ease: "easeInOut",
                            delay: ring.delay,
                        }}
                        style={{
                            position: "absolute",
                            width: ring.size,
                            height: ring.size,
                            border: `1px solid ${ring.color}30`,
                            borderRadius: "9999px",
                            boxShadow: `0 0 24px ${ring.color}10 inset`,
                            transformOrigin: "center",
                        }}
                    />
                );
            })}
        </div>
    );
};

export default BackgroundCogs;