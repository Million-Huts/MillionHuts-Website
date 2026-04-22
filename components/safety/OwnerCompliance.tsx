import { motion } from "framer-motion";
import { ClipboardList, FileText, Eye, Lock, CheckCircle2 } from "lucide-react";

const cards = [
    {
        icon: Eye,
        title: "Audit-Ready Security",
        tag: "For Owners",
        description:
            "Digital gate logs eliminate the risk of staff tampering. Every entry and exit is timestamped and immutable — giving you 24/7 oversight of who enters your property, even when you're not there.",
        points: [
            "Immutable timestamped entry records",
            "Staff cannot alter or delete logs",
            "Remote access from any device, anytime",
            "Exportable reports for internal audits",
        ],
        cta: "View Gate Log Demo",
        gradient: "from-slate-900 to-slate-800",
    },
    {
        icon: FileText,
        title: "Police Verification Ready",
        tag: "Compliance",
        description:
            "Local law enforcement requires tenant documentation for PG operations. MillionHuts organizes all KYC data in a structured format — so you can generate police verification reports in one click, not one week.",
        points: [
            "Structured tenant identity records",
            "One-click PDF report generation",
            "Aadhaar & PAN data organized by room",
            "Compliant with local PG regulations",
        ],
        cta: "See Compliance Features",
        gradient: "from-blue-900 to-blue-800",
    },
];

export default function OwnerCompliance() {
    return (
        <section className="py-24 px-4 bg-background">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-3">
                        Owner Advantage
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                        Compliance without the chaos.
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        MillionHuts turns your legal obligations into automated workflows — so you stay protected without the paperwork.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className={`relative rounded-[2rem] bg-gradient-to-br ${card.gradient} p-8 text-white overflow-hidden group`}
                        >
                            {/* Decorative background shape */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10">
                                {/* Tag + Icon */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/10">
                                        {card.tag}
                                    </span>
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                                        <card.icon className="h-6 w-6" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-black tracking-tight mb-3">{card.title}</h3>
                                <p className="text-white/70 leading-relaxed mb-6 text-sm">{card.description}</p>

                                {/* Points */}
                                <ul className="space-y-2.5">
                                    {card.points.map((point, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-white/60 shrink-0" />
                                            <span className="text-white/80 font-medium">{point}</span>
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
