"use client";

import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* CONTINUITY: Subtle top border and soft glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.02] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto px-4 text-center relative z-10">

                {/* SMALL TOP LABEL */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block py-1 px-3 mb-6 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest"
                >
                    Ready to move?
                </motion.span>

                {/* HEADLINE - Scaled for impact but clean */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
                >
                    Find Your Next PG <br className="hidden md:block" />
                    in <span className="text-primary italic">Minutes.</span>
                </motion.h2>

                {/* SUBTEXT - Compact & Descriptive */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-sm md:text-lg text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed"
                >
                    Join thousands of residents booking verified,
                    brokerage-free stays directly from owners.
                </motion.p>

                {/* CTA - The main focus */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Button
                        size="lg"
                        className="h-14 px-10 text-base font-bold rounded-2xl group transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95"
                    >
                        Find PGs Near Me
                        <Search className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    </Button>

                    <p className="mt-6 text-[10px] text-muted-foreground/60 flex items-center justify-center gap-4">
                        <span>✓ No Brokerage</span>
                        <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                        <span>✓ Instant Connect</span>
                        <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                        <span>✓ Verified Only</span>
                    </p>
                </motion.div>

            </div>
        </section>
    );
}