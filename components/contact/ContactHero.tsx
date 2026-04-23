import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

export default function ContactHero() {
    return (
        <section
            className="relative py-20 md:py-28 overflow-hidden bg-background"
            aria-labelledby="contact-hero-heading"
        >
            {/* Decorative Glow — Premium Tech-Hub Aesthetic */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.07)_0%,transparent_60%)] -z-10"
                aria-hidden="true"
            />
            <div
                className="absolute -top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
                aria-hidden="true"
            />
            <div
                className="absolute -bottom-20 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl -z-10"
                aria-hidden="true"
            />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8 border border-primary/20"
                >
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Always here for you
                </motion.div>

                <motion.h1
                    id="contact-hero-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]"
                >
                    Let&apos;s start a <br className="hidden sm:block" />
                    <span className="text-primary italic">conversation.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
                >
                    Whether you&apos;re looking for a cozy room or scaling your rental
                    business, our team is just a message away.
                </motion.p>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="hidden md:flex justify-center"
                    aria-hidden="true"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground/50"
                    >
                        <ArrowDown className="h-4 w-4" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}