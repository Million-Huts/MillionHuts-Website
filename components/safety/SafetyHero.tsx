import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, QrCode, MessageSquareWarning } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
    { value: "100%", label: "Verified Residents", icon: Users },
    { value: "24/7", label: "Digital Gate Logs", icon: QrCode },
    { value: "<2hr", label: "Avg. Issue Resolution", icon: MessageSquareWarning },
];

export default function SafetyHero() {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-950">
            {/* Background texture */}
            <div className="absolute inset-0 -z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge className="mb-6 bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full">
                            <ShieldCheck className="h-3 w-3 mr-2" />
                            MillionHuts Safety Standard
                        </Badge>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6">
                            Your Safety is{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300">
                                Our Standard.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12">
                            Every MillionHuts property runs on a three-layer security system — verified identities, digital gate control, and transparent issue resolution. Not a promise. A process.
                        </p>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                    >
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                            >
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                    <stat.icon className="h-5 w-5 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-white leading-none">{stat.value}</p>
                                    <p className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom fade into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        </section>
    );
}
