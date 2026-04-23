import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const trustBadges = [
    "KYC Verified Residents",
    "Digital Gate Logs",
    "Encrypted Documents",
    "Police Verification Ready",
    "24/7 Oversight",
];

export default function SafetyHero() {
    return (
        <section className="relative bg-background pt-20 pb-0 overflow-hidden">
            {/* Subtle dot grid */}
            <div
                className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
                style={{
                    backgroundImage: "radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />
            {/* Fade out bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />

            <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center space-y-8 pb-20">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-xs font-bold text-muted-foreground"
                    >
                        <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                        MillionHuts Safety Standard
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-3"
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.0] text-foreground">
                            Built for
                            <br />
                            <span className="text-primary">Safe Living.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                            Three layers of protection — verified identities, digital gate control, and transparent issue resolution — built into every MillionHuts property.
                        </p>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="flex flex-col sm:flex-row gap-3 justify-center"
                    >
                        <a
                            href="https://tenant.millionhuts.com/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors group text-sm"
                        >
                            Get Verified Free
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        <Link
                            href="/pg"
                            className="inline-flex items-center justify-center h-12 px-6 border border-border text-foreground font-bold rounded-xl hover:bg-muted transition-colors text-sm"
                        >
                            Browse Verified PGs
                        </Link>
                    </motion.div>

                    {/* Trust badges — horizontal pill list */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-2 pt-2"
                    >
                        {trustBadges.map((badge, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/60 border border-border text-xs font-medium text-muted-foreground"
                            >
                                <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                                {badge}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="relative z-20 grid grid-cols-3 border border-border rounded-2xl bg-card overflow-hidden shadow-sm"
                >
                    {[
                        { value: "100%", label: "Verified Residents", desc: "Every tenant KYC-checked" },
                        { value: "24/7", label: "Gate Monitoring", desc: "Digital logs, always on" },
                        { value: "<2hr", label: "Issue Resolution", desc: "Average complaint close time" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className={`px-6 py-8 text-center ${i < 2 ? "border-r border-border" : ""}`}
                        >
                            <p className="text-3xl md:text-4xl font-black text-foreground">{stat.value}</p>
                            <p className="text-sm font-bold text-foreground mt-1">{stat.label}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{stat.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
