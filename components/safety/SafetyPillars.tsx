import React from "react";
import { motion } from "framer-motion";
import { Fingerprint, QrCode, MessageSquareWarning, ShieldCheck, Clock, FileCheck, CheckCircle2 } from "lucide-react";

const pillars = [
    {
        number: "01",
        icon: Fingerprint,
        label: "Identity Layer",
        title: "Every resident is verified.",
        body: "Every tenant on MillionHuts is backed by a secure identity vault. Aadhaar and PAN documents are encrypted and stored — so you always know exactly who lives beside you.",
        points: ["Aadhaar & PAN verification", "Encrypted document storage", "Instant onboarding at any property"],
        pointIcons: [ShieldCheck, FileCheck, Clock],
        stat: "100%",
        statLabel: "Verified",
        palette: {
            bg: "bg-blue-50 dark:bg-blue-950/20",
            border: "border-blue-100 dark:border-blue-900/50",
            icon: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400",
            stat: "text-blue-600 dark:text-blue-400",
            dot: "bg-blue-500",
        },
    },
    {
        number: "02",
        icon: QrCode,
        label: "Perimeter Layer",
        title: "Every entry is logged.",
        body: "Every visitor and delivery leaves a permanent digital footprint. No more manual registers that can be tampered with — just a clean, timestamped log of every entry and exit.",
        points: ["QR-based visitor check-in", "Timestamped entry & exit logs", "Staff-tamper-proof records"],
        pointIcons: [QrCode, Clock, ShieldCheck],
        stat: "0",
        statLabel: "Tampering",
        palette: {
            bg: "bg-violet-50 dark:bg-violet-950/20",
            border: "border-violet-100 dark:border-violet-900/50",
            icon: "bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400",
            stat: "text-violet-600 dark:text-violet-400",
            dot: "bg-violet-500",
        },
    },
    {
        number: "03",
        icon: MessageSquareWarning,
        label: "Accountability Layer",
        title: "Every issue is resolved.",
        body: "Every issue raised is tracked, timed, and proof-resolved. No more verbal promises. Every complaint has a status, an owner, and a resolution timestamp — visible to both tenant and management.",
        points: ["Real-time status tracking", "Photo & media proof attachments", "Resolution timestamps on record"],
        pointIcons: [Clock, FileCheck, ShieldCheck],
        stat: "<2hr",
        statLabel: "Resolution",
        palette: {
            bg: "bg-emerald-50 dark:bg-emerald-950/20",
            border: "border-emerald-100 dark:border-emerald-900/50",
            icon: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400",
            stat: "text-emerald-600 dark:text-emerald-400",
            dot: "bg-emerald-500",
        },
    },
];

export default function SafetyPillars() {
    return (
        <section className="py-28 bg-background">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-4">Three Pillars of Safety</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                        Security at every layer.
                    </h2>
                </motion.div>

                {/* Pillars */}
                <div className="space-y-5">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={p.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className={`grid grid-cols-1 lg:grid-cols-12 rounded-2xl border ${p.palette.border} ${p.palette.bg} overflow-hidden`}
                        >
                            {/* Left — number + icon */}
                            <div className="lg:col-span-1 flex lg:flex-col items-center justify-center gap-4 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-inherit">
                                <span className="text-2xl font-black text-muted-foreground/30">{p.number}</span>
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${p.palette.icon}`}>
                                    <p.icon className="h-5 w-5" />
                                </div>
                            </div>

                            {/* Middle — title + body */}
                            <div className="lg:col-span-5 p-6 lg:p-8 lg:border-r border-inherit">
                                <p className={`text-[10px] font-black uppercase tracking-[0.25em] mb-2 ${p.palette.stat}`}>{p.label}</p>
                                <h3 className="text-xl md:text-2xl font-black text-foreground mb-3 leading-tight">{p.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                            </div>

                            {/* Right — checklist */}
                            <div className="lg:col-span-4 p-6 lg:p-8 lg:border-r border-inherit flex flex-col justify-center">
                                <ul className="space-y-3">
                                    {p.points.map((point, j) => {
                                        const Icon = p.pointIcons[j];
                                        return (
                                            <li key={j} className="flex items-center gap-3 text-sm font-medium text-foreground">
                                                <CheckCircle2 className={`h-4 w-4 shrink-0 ${p.palette.stat}`} />
                                                {point}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Far right — stat */}
                            <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col items-center justify-center text-center">
                                <p className={`text-4xl font-black ${p.palette.stat}`}>{p.stat}</p>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{p.statLabel}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
