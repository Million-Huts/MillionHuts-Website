import { motion } from "framer-motion";
import { PlanInterval } from "@/interfaces/pricing";

interface PricingHeroProps {
    billingCycle: PlanInterval;
    setBillingCycle: (val: PlanInterval) => void;
}

export default function PricingHero({ billingCycle, setBillingCycle }: PricingHeroProps) {
    return (
        <section className="pt-32 pb-16 relative overflow-hidden bg-hero-glow">
            <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Transparent Pricing
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-foreground"
                >
                    Simple, <span className="text-primary italic">honest</span> pricing.
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    No hidden fees. No complicated tiers. Just the tools you need to manage your PG properties with total peace of mind.
                </motion.p>

                {/* Toggle Switch */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-6"
                >
                    <button
                        onClick={() => setBillingCycle("MONTHLY")}
                        className={`text-sm font-bold transition-all ${billingCycle === "MONTHLY" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        Monthly
                    </button>

                    <button
                        onClick={() => setBillingCycle(billingCycle === "MONTHLY" ? "YEARLY" : "MONTHLY")}
                        className="relative w-16 h-8 rounded-full bg-muted border border-border shadow-inner transition-colors focus:outline-none group"
                    >
                        <motion.div
                            animate={{ x: billingCycle === "MONTHLY" ? 4 : 36 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className="absolute top-1 w-5 h-5 bg-primary rounded-full shadow-lg"
                        />
                    </button>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setBillingCycle("YEARLY")}
                            className={`text-sm font-bold transition-all ${billingCycle === "YEARLY" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            Yearly
                        </button>
                        <span className="bg-chart-2/10 text-chart-2 text-[11px] font-black uppercase px-2.5 py-1 rounded-md border border-chart-2/20 animate-pulse">
                            Save 20%
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Visual Decor: Subtle grid or circles could go here */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] hidden dark:block" />
        </section>
    );
}