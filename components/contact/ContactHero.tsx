import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="relative py-24 overflow-hidden bg-background">
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05)_0,transparent_70%)] -z-10" />

            <div className="mx-auto max-w-7xl px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                >
                    <Sparkles className="h-3 w-3" />
                    Always here for you
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black tracking-tight mb-6"
                >
                    Let’s start a <br />
                    <span className="text-primary italic">conversation.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed"
                >
                    Whether you're looking for a cozy room or scaling your rental business,
                    our team is just a message away.
                </motion.p>
            </div>
        </section>
    );
}