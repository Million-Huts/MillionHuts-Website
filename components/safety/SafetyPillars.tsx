import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, QrCode, MessageSquareWarning, Fingerprint, Clock, FileCheck } from "lucide-react";

const pillars = [
    {
        id: "kyc",
        icon: Fingerprint,
        tag: "Identity Layer",
        title: "Verified Residents",
        subtitle: "KYC Identity Vault",
        description:
            "Every tenant on MillionHuts is backed by a secure identity vault. Aadhaar and PAN documents are encrypted and stored — so you always know exactly who lives beside you.",
        highlights: [
            { icon: ShieldCheck, text: "Aadhaar & PAN verification" },
            { icon: FileCheck, text: "Encrypted document storage" },
            { icon: Clock, text: "Instant onboarding at any property" },
        ],
        size: "md:col-span-2",
        accent: "from-blue-600/20 to-blue-900/10",
        iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
        id: "gate",
        icon: QrCode,
        tag: "Perimeter Layer",
        title: "Digital Gate Control",
        subtitle: "QR-Based Entry System",
        description:
            "Every visitor and delivery leaves a permanent digital footprint. No more manual registers that can be tampered with — just a clean, timestamped log of every entry and exit.",
        highlights: [
            { icon: QrCode, text: "QR-based visitor check-in" },
            { icon: Clock, text: "Timestamped entry & exit logs" },
            { icon: ShieldCheck, text: "Staff-tamper-proof records" },
        ],
        size: "md:col-span-1",
        accent: "from-slate-600/20 to-slate-900/10",
        iconBg: "bg-slate-400/10 text-slate-300 border-slate-500/20",
        tagColor: "text-slate-300 bg-slate-500/10 border-slate-500/20",
    },
    {
        id: "complaints",
        icon: MessageSquareWarning,
        tag: "Accountability Layer",
        title: "Accountable Resolution",
        subtitle: "Digital Complaint Desk",
        description:
            "Every issue raised is tracked, timed, and proof-resolved. No more verbal promises. Every complaint has a status, an owner, and a resolution timestamp — visible to both tenant and management.",
        highlights: [
            { icon: Clock, text: "Real-time status tracking" },
            { icon: FileCheck, text: "Photo & media proof attachments" },
            { icon: ShieldCheck, text: "Resolution timestamps on record" },
        ],
        size: "md:col-span-1",
        accent: "from-indigo-600/20 to-indigo-900/10",
        iconBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        tagColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
];

export default function SafetyPillars() {
    return (
        <section className="py-24 px-4 bg-background">
            <div className="mx-auto max-w-7xl">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-3">
                        Three Pillars of Safety
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                        Security built into{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400">
                            every layer.
                        </span>
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base">
                        From who lives there, to who enters the gate, to how problems get fixed — every touchpoint is digitally secured.
                    </p>
                </div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -4 }}
                            className={`${pillar.size} relative p-8 rounded-[2rem] border bg-card overflow-hidden group transition-all duration-300 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600`}
                        >
                            {/* Background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                {/* Tag */}
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border mb-5 ${pillar.tagColor}`}>
                                    {pillar.tag}
                                </span>

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${pillar.iconBg}`}>
                                    <pillar.icon className="h-7 w-7" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-black tracking-tight mb-1">{pillar.title}</h3>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">{pillar.subtitle}</p>

                                {/* Description */}
                                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{pillar.description}</p>

                                {/* Highlights */}
                                <ul className="space-y-2.5">
                                    {pillar.highlights.map((h, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm font-medium">
                                            <div className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 ${pillar.iconBg}`}>
                                                <h.icon className="h-3.5 w-3.5" />
                                            </div>
                                            {h.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
