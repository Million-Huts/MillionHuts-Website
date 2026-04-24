import React from "react";
import { motion } from "framer-motion";
import { UserCircle2, ShieldCheck, KeyRound } from "lucide-react";

const steps = [
    {
        step: "01",
        icon: UserCircle2,
        title: "Identity Creation",
        subtitle: "Build your portable, secure global profile",
        description: "Sign up once and create a verified digital identity that travels with you. Your profile forms the foundation of your secure MillionHuts presence.",
        detail: "Works across all MillionHuts properties in India",
    },
    {
        step: "02",
        icon: ShieldCheck,
        title: "Document Verification",
        subtitle: "Upload ID proofs to the encrypted KYC vault",
        description: "Upload your Aadhaar, PAN, or other government-issued ID. Documents are encrypted at rest and only accessible to verified property managers.",
        detail: "End-to-end encrypted · Never shared without consent",
    },
    {
        step: "03",
        icon: KeyRound,
        title: "Safe Onboarding",
        subtitle: "Use your verified status for instant check-in",
        description: "Once verified, your status is recognized at any MillionHuts property. No paperwork, no delays — just a clean, digital check-in.",
        detail: "Instant check-in at any MillionHuts property",
    },
];

export default function TenantJourney() {
    return (
        <section className="py-28 bg-slate-950 relative overflow-hidden">
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-4">The MillionHuts Standard</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                        Your 3-Step Safety Journey
                    </h2>
                </motion.div>

                {/* Steps — clean vertical list with left border */}
                <div className="relative pl-8 border-l border-white/10 space-y-0">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative pb-16 last:pb-0"
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[2.35rem] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-white/20 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                                {/* Step number + icon */}
                                <div className="md:col-span-2 flex items-start gap-3">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30 mb-2">Step {step.step}</p>
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                            <step.icon className="h-6 w-6 text-white/60" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-6 space-y-2">
                                    <h3 className="text-2xl font-black text-white">{step.title}</h3>
                                    <p className="text-sm text-white/40 font-medium">{step.subtitle}</p>
                                    <p className="text-sm text-white/60 leading-relaxed pt-1">{step.description}</p>
                                </div>

                                {/* Detail pill */}
                                <div className="md:col-span-4 flex items-start">
                                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                                        <ShieldCheck className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                                        <span className="text-[11px] text-white/40 font-medium">{step.detail}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
