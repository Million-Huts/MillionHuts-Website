import { motion } from "framer-motion";
import { Users2, ShieldCheck, Eye, Heart, Lock } from "lucide-react";

const mockHousemates = [
    { initials: "RS", name: "Rahul S.", room: "Room 204", color: "bg-blue-500" },
    { initials: "PV", name: "Priya V.", room: "Room 201", color: "bg-violet-500" },
    { initials: "AK", name: "Amit K.", room: "Room 203", color: "bg-emerald-500" },
    { initials: "NK", name: "Neha K.", room: "Room 202", color: "bg-amber-500" },
];

const features = [
    { icon: Eye, title: "Visible Verified Profiles", desc: "See who lives beside you — name and KYC status only." },
    { icon: ShieldCheck, title: "KYC-Backed Community", desc: "Every resident passed the same verification you did." },
    { icon: Heart, title: "Open & Safe Environment", desc: "Transparency builds trust across the entire community." },
    { icon: Lock, title: "Full Privacy Maintained", desc: "Contact details and documents are never shared." },
];

export default function CommunityTransparency() {
    return (
        <section className="py-28 bg-muted/20 border-y border-border">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-4">Community Transparency</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">Know Your PG-Mates.</h2>
                    <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
                        Through the MillionHuts dashboard, tenants can view the basic verified profiles of their housemates — fostering a safe, open, and accountable community.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left — feature grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {features.map((f, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                                <div className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center mb-3">
                                    <f.icon className="h-4 w-4 text-primary" />
                                </div>
                                <h4 className="font-black text-sm text-foreground mb-1">{f.title}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Right — clean app UI mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/20">
                                <div className="flex items-center gap-2">
                                    <Users2 className="h-4 w-4 text-primary" />
                                    <span className="font-black text-sm text-foreground">PG Housemates</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                                    <ShieldCheck className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                                    <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400">All Verified</span>
                                </div>
                            </div>

                            {/* Rows */}
                            <div className="divide-y divide-border">
                                {mockHousemates.map((mate, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.06 + 0.2 }}
                                        className="flex items-center gap-4 px-5 py-4"
                                    >
                                        <div className={`w-9 h-9 rounded-full ${mate.color} flex items-center justify-center text-xs font-black text-white shrink-0`}>
                                            {mate.initials}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-sm text-foreground">{mate.name}</p>
                                            <p className="text-xs text-muted-foreground">{mate.room}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">KYC</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="px-5 py-3 bg-muted/10 border-t border-border">
                                <p className="text-[11px] text-muted-foreground text-center">
                                    Only name & verification status visible · Full privacy maintained
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
