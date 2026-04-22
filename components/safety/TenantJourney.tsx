import React from "react";
import { motion } from "framer-motion";
import { UserCircle2, ShieldCheck, KeyRound, ArrowDown } from "lucide-react";

const steps = [
    {
        step: "01",
        icon: UserCircle2,
        title: "Identity Creation",
        subtitle: "Build your portable, secure global profile",
        description:
            "Sign up once and create a verified digital identity that travels with you. Your profile — name, contact, and basic details — forms the foundation of your secure MillionHuts presence.",
        detail: "Works across all MillionHuts properties in India",
        color: "bg-slate-900 text-white",
        iconColor: "text-white",
        borderColor: "border-slate-900",
        numberColor: "text-slate-300",
    },
    {
        step: "02",
        icon: ShieldCheck,
        title: "Document Verification",
        subtitle: "Upload ID proofs to the encrypted KYC vault",
        description:
            "Upload your Aadhaar, PAN, or other government-issued ID directly through the app. Documents are encrypted at rest and only accessible to verified property managers.",
        detail: "End-to-end encrypted • Never shared without consent",
        color: "bg-blue-600 text-white",
        iconColor: "text-white",
        borderColor: "border-blue-600",
        numberColor: "text-blue-200",
    },
    {
        step: "03",
        icon: KeyRound,
        title: "Safe Onboarding",
        subtitle: "Use your verified status for instant check-in",
        description:
            "Once verified, your status is recognized at any MillionHuts property. No paperwork, no delays — just a clean, digital check-in that the owner can confirm in seconds.",
        detail: "Instant check-in at any MillionHuts property",
        color: "bg-slate-800 text-white",
        iconColor: "text-white",
        borderColor: "border-slate-800",
        numberColor: "text-slate-400",
    },
];

export default function TenantJourney() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950/50">
            <div className="mx-auto max-w-4xl px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-3">
                        The MillionHuts Standard
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                        Your 3-Step Safety Journey
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        From first sign-up to moving in — every step is designed to protect you and the community around you.
                    </p>
                </div>

                {/* Steps — vertical scroll on mobile, centered on desktop */}
                <div className="relative">
                    {/* Vertical connector line — desktop only */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 -translate-x-1/2" />

                    <div className="space-y-6 md:space-y-0">
                        {steps.map((step, i) => (
                            <div key={i}>
                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className={`relative md:flex md:items-center md:gap-8 md:mb-16 ${
                                        i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                                >
                                    {/* Card */}
                                    <div className="md:w-[calc(50%-2rem)] w-full">
                                        <div className={`${step.color} rounded-[1.75rem] p-8 shadow-xl`}>
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                                    <step.icon className={`h-6 w-6 ${step.iconColor}`} />
                                                </div>
                                                <span className={`text-5xl font-black opacity-20 ${step.numberColor}`}>
                                                    {step.step}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-black mb-1">{step.title}</h3>
                                            <p className="text-sm opacity-70 font-medium mb-4">{step.subtitle}</p>
                                            <p className="text-sm opacity-80 leading-relaxed mb-5">{step.description}</p>
                                            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/10">
                                                <ShieldCheck className="h-3.5 w-3.5 opacity-70 shrink-0" />
                                                <span className="text-[11px] font-bold opacity-80">{step.detail}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center dot — desktop */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-slate-900 dark:border-slate-300 items-center justify-center z-10 shadow-lg">
                                        <span className="text-[10px] font-black">{i + 1}</span>
                                    </div>

                                    {/* Spacer for the other side */}
                                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                                </motion.div>

                                {/* Mobile arrow between steps */}
                                {i < steps.length - 1 && (
                                    <div className="flex justify-center py-3 md:hidden">
                                        <ArrowDown className="h-5 w-5 text-muted-foreground animate-bounce" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
