import { motion } from "framer-motion";

interface PricingHeroProps {
    billingCycle: "monthly" | "yearly";
    setBillingCycle: (val: "monthly" | "yearly") => void;
}

export default function PricingHero({ billingCycle, setBillingCycle }: PricingHeroProps) {
    return (
        <section className="pt-24 pb-12 relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(var(--primary-rgb),0.03)_0,transparent_50%)] -z-10" />

            <div className="mx-auto max-w-7xl px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-black tracking-tight mb-6"
                >
                    Simple, <span className="text-primary italic">honest</span> pricing.
                </motion.h1>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    No hidden fees. No complicated tiers. Just the tools you need to manage your properties with peace of mind.
                </p>

                {/* Toggle Switch */}
                <div className="flex items-center justify-center gap-4">
                    <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
                    <button
                        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                        className="relative w-16 h-8 rounded-full bg-muted border-2 border-muted transition-colors focus:outline-none"
                    >
                        <motion.div
                            animate={{ x: billingCycle === 'monthly' ? 2 : 34 }}
                            className="w-6 h-6 bg-primary rounded-full shadow-sm"
                        />
                    </button>
                    <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}>Yearly</span>
                        <span className="bg-green-500/10 text-green-600 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border border-green-500/20">
                            Save 20%
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}