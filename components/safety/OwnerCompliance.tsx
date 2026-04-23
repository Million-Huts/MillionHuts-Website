import { motion } from "framer-motion";
import { Eye, FileText, CheckCircle2 } from "lucide-react";

const cards = [
    {
        icon: Eye,
        title: "Audit-Ready Security",
        tag: "For Owners",
        description: "Digital gate logs eliminate the risk of staff tampering. Every entry and exit is timestamped and immutable — giving you 24/7 oversight of who enters your property.",
        points: ["Immutable timestamped entry records", "Staff cannot alter or delete logs", "Remote access from any device, anytime", "Exportable reports for internal audits"],
        stat: "0", statLabel: "Tampered Records",
    },
    {
        icon: FileText,
        title: "Police Verification Ready",
        tag: "Compliance",
        description: "MillionHuts organizes all KYC data in a structured format — so you can generate police verification reports in one click, not one week.",
        points: ["Structured tenant identity records", "One-click PDF report generation", "Aadhaar & PAN data organized by room", "Compliant with local PG regulations"],
        stat: "1-click", statLabel: "Verification PDF",
    },
];

export default function OwnerCompliance() {
    return (
        <section className="py-28 bg-background">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-4">Owner Advantage</p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                            Compliance without the chaos.
                        </h2>
                        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed md:text-right">
                            Your legal obligations, automated.
                        </p>
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="rounded-2xl border border-border bg-card p-8 flex flex-col gap-6 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
                        >
                            {/* Top row */}
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center">
                                        <card.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-primary">{card.tag}</p>
                                        <h3 className="font-black text-foreground">{card.title}</h3>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-black text-foreground">{card.stat}</p>
                                    <p className="text-[10px] text-muted-foreground font-medium">{card.statLabel}</p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-border" />

                            {/* Body */}
                            <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>

                            {/* Points */}
                            <ul className="space-y-2.5">
                                {card.points.map((point, j) => (
                                    <li key={j} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
