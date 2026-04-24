import { motion } from "framer-motion";
import { Users2, ShieldCheck, Eye, Heart } from "lucide-react";

const features = [
    {
        icon: Eye,
        title: "Visible Verified Profiles",
        desc: "View the basic verified profiles of your housemates — name and verification status — so you know who you're living with before you even move in.",
    },
    {
        icon: ShieldCheck,
        title: "KYC-Backed Community",
        desc: "Every person in your PG has passed the same identity verification you did. No anonymous residents, no unverified strangers.",
    },
    {
        icon: Heart,
        title: "Open & Safe Environment",
        desc: "Transparency builds trust. When everyone is verified and accountable, the entire community benefits from a safer, more respectful living space.",
    },
];

// Mock housemate cards for visual
const mockHousemates = [
    { initials: "RS", name: "Rahul S.", room: "Room 204", verified: true },
    { initials: "PV", name: "Priya V.", room: "Room 201", verified: true },
    { initials: "AK", name: "Amit K.", room: "Room 203", verified: true },
    { initials: "NK", name: "Neha K.", room: "Room 202", verified: true },
];

export default function CommunityTransparency() {
    return (
        <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left — content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-300 mb-6">
                            <Users2 className="h-3 w-3" />
                            Community Transparency
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                            Know Your{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300">
                                PG-Mates.
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed mb-10">
                            Through the MillionHuts dashboard, tenants can view the basic verified profiles of their housemates — fostering a safe, open, and accountable community environment.
                        </p>

                        <div className="space-y-5">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.2 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <f.icon className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{f.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — visual mock of housemate cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Phone-like container */}
                        <div className="relative mx-auto max-w-sm">
                            <div className="rounded-[2.5rem] bg-slate-900 border border-white/10 p-6 shadow-2xl">
                                {/* Mock header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Your Community</p>
                                        <h4 className="font-black text-white">PG Housemates</h4>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                        <Users2 className="h-4 w-4 text-blue-400" />
                                    </div>
                                </div>

                                {/* Housemate cards */}
                                <div className="space-y-3">
                                    {mockHousemates.map((mate, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.08 + 0.4 }}
                                            className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5"
                                        >
                                            {/* Avatar */}
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-xs font-black text-white shrink-0">
                                                {mate.initials}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-bold text-sm text-white truncate">{mate.name}</p>
                                                <p className="text-[11px] text-slate-500">{mate.room}</p>
                                            </div>
                                            {mate.verified && (
                                                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                                                    <ShieldCheck className="h-3 w-3 text-green-400" />
                                                    <span className="text-[9px] font-black text-green-400 uppercase tracking-wider">KYC</span>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Footer note */}
                                <div className="mt-4 p-3 rounded-xl bg-blue-500/5 border border-blue-500/10">
                                    <p className="text-[10px] text-slate-500 text-center">
                                        Only basic verified info is visible. Full privacy maintained.
                                    </p>
                                </div>
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-blue-500/5 blur-xl -z-10 scale-105" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
