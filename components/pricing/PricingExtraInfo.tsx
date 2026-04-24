import { Gift, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingExtraInfo() {
    return (
        <section className="pb-24 px-4 relative">
            <div className="mx-auto max-w-7xl">
                {/* Outer Gradient Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] bg-gradient-to-br from-primary via-primary/80 to-chart-4 p-[1.5px] shadow-2xl shadow-primary/10"
                >
                    {/* Inner Content Card */}
                    <div className="bg-background rounded-[2.4rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative">

                        {/* Decorative Background Blur */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

                        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                            {/* Icon with Ring Effect */}
                            <div className="relative shrink-0">
                                <div className="absolute inset-0 bg-primary/20 rounded-2xl animate-ping opacity-20" />
                                <div className="h-20 w-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center relative">
                                    <Gift className="h-10 w-10 text-primary" />
                                </div>
                            </div>

                            <div>
                                <div className="inline-block px-3 py-1 rounded-full bg-chart-2/10 border border-chart-2/20 text-chart-2 text-[10px] font-black uppercase tracking-widest mb-4">
                                    New Year Launch Bonus
                                </div>
                                <h3 className="text-3xl font-black mb-3 tracking-tight">
                                    Claim your <span className="text-primary">3-month</span> free trial
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                                    List your first property today and unlock the <strong>Professional Plan</strong> features. No credit card required to start.
                                </p>
                                <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-primary/60 uppercase tracking-tighter">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    Limited to the first 100 new owners this month
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="group relative whitespace-nowrap px-10 py-5 bg-primary text-primary-foreground font-black rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/30 flex items-center gap-3">
                            Claim Offer Now
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}