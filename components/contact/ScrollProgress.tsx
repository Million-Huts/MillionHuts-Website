"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    // Spring smoothing so it doesn't feel jittery
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 25,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{ scaleX, transformOrigin: "left" }}
            className="fixed top-0 left-0 right-0 h-[3px] z-[9999] bg-gradient-to-r from-primary via-blue-500 to-violet-500"
            aria-hidden="true"
        />
    );
}
