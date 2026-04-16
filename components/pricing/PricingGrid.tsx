import { Check, Sparkles, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Plan, PlanInterval } from "@/interfaces/pricing";

interface PricingGridProps {
    plans: Plan[];
    isLoading: boolean;
    error: string | null;
    billingCycle: PlanInterval;
}

export default function PricingGrid({ plans, isLoading, error, billingCycle }: PricingGridProps) {

    if (error) {
        return (
            <div className="py-20 flex flex-col items-center justify-center text-center px-4">
                <AlertCircle className="h-12 w-12 text-destructive mb-4" />
                <h3 className="text-xl font-bold">Something went wrong</h3>
                <p className="text-muted-foreground max-w-xs">{error}</p>
            </div>
        );
    }

    return (
        <section className="py-12 px-4 relative">
            <div className="mx-auto max-w-7xl">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    <AnimatePresence mode="popLayout">
                        {isLoading
                            ? // Loading Skeletons
                            Array.from({ length: 3 }).map((_, i) => (
                                <div
                                    key={`skeleton-${i}`}
                                    className="h-[600px] w-full bg-muted/20 animate-pulse rounded-[2.5rem] border border-border/50"
                                />
                            ))
                            : plans.map((plan, i) => {
                                // Logic to check if featured (via badges or index)
                                const isFeatured = plan.badge?.includes("Most Popular") || i === 1;
                                const priceInRupees = plan.price / 100;

                                return (
                                    <motion.div
                                        key={plan.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 shadow-soft ${isFeatured
                                            ? "bg-background shadow-2xl shadow-primary/10 border-primary scale-105 z-10"
                                            : "bg-muted/30 border-transparent hover:bg-background hover:border-border hover:shadow-xl"
                                            }`}
                                    >
                                        {/* Badge / Popular Label */}
                                        {plan.badge?.map((b) => (
                                            <div key={b} className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-lg">
                                                <Sparkles className="h-3 w-3" /> {b}
                                            </div>
                                        ))}

                                        <div className="mb-8">
                                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl font-black">
                                                    {plan.currency === "INR" ? "₹" : plan.currency}
                                                    {priceInRupees.toLocaleString("en-IN")}
                                                </span>
                                                <span className="text-muted-foreground text-sm font-medium">
                                                    /{billingCycle === "MONTHLY" ? "mo" : "yr"}
                                                </span>
                                            </div>
                                            <p className="mt-4 text-sm text-muted-foreground leading-relaxed min-h-[40px]">
                                                {plan.description}
                                            </p>
                                        </div>

                                        {/* Feature Summary - Rendering key limits from the object */}
                                        <ul className="space-y-4 mb-10">
                                            <li className="flex items-start gap-3 text-sm font-bold text-foreground">
                                                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check className="h-3 w-3 text-primary" />
                                                </div>
                                                Max PGs: {plan.features.limits.maxPGs}
                                            </li>
                                            <li className="flex items-start gap-3 text-sm font-medium">
                                                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Check className="h-3 w-3 text-primary" />
                                                </div>
                                                {plan.features.limits.maxUsers} User License
                                            </li>

                                            {/* Map through few key modules as highlights */}
                                            {Object.entries(plan.features.modules)
                                                .filter(([_, val]) => val === true)
                                                .slice(0, 3) // Show top 3 active modules
                                                .map(([key]) => (
                                                    <li key={key} className="flex items-start gap-3 text-sm font-medium capitalize">
                                                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                            <Check className="h-3 w-3 text-primary" />
                                                        </div>
                                                        {key.replace(/([A-Z])/g, ' $1')}
                                                    </li>
                                                ))}
                                        </ul>

                                        <Button
                                            className={`w-full h-12 rounded-2xl font-bold transition-transform active:scale-95 ${isFeatured
                                                ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20"
                                                : "bg-secondary text-secondary-foreground hover:bg-muted border border-border"
                                                }`}
                                        >
                                            {priceInRupees === 0 ? "Get Started" : "Choose Plan"}
                                        </Button>
                                    </motion.div>
                                );
                            })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}