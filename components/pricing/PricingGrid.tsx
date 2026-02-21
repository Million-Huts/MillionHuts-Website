import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// This structure matches what you'd get from your API
const plans = [
    {
        name: "Starter",
        price: { monthly: 0, yearly: 0 },
        description: "For individual owners just getting started.",
        features: ["Up to 2 Properties", "Digital Rent Receipts", "Basic Maintenance Tracking", "Community Support"],
        featured: false,
        cta: "Get Started"
    },
    {
        name: "Professional",
        price: { monthly: 1999, yearly: 1599 },
        description: "Our most popular plan for active PG managers.",
        features: ["Unlimited Properties", "Auto-Rent Collection", "Full Financial Reports", "Premium Support", "Digital Agreements"],
        featured: true,
        cta: "Start Free Trial"
    },
    {
        name: "Enterprise",
        price: { monthly: 4999, yearly: 3999 },
        description: "For large coliving chains and franchises.",
        features: ["Custom Branding", "Multi-user Access", "API Integration", "Dedicated Manager", "Priority KYC"],
        featured: false,
        cta: "Contact Sales"
    }
];

export default function PricingGrid({ billingCycle }: { billingCycle: "monthly" | "yearly" }) {
    return (
        <section className="py-12 px-4">
            <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-8">
                {plans.map((plan, i) => (
                    <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 ${plan.featured
                                ? 'bg-background shadow-2xl shadow-primary/20 border-primary scale-105 z-10'
                                : 'bg-muted/30 border-transparent hover:bg-background hover:border-muted hover:shadow-xl'
                            }`}
                    >
                        {plan.featured && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg">
                                <Sparkles className="h-3 w-3" /> Most Popular
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black">₹{plan.price[billingCycle]}</span>
                                <span className="text-muted-foreground text-sm">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                            </div>
                            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="h-3 w-3 text-primary" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button
                            className={`w-full h-12 rounded-2xl font-bold transition-transform active:scale-95 ${plan.featured ? 'bg-primary shadow-lg shadow-primary/30' : 'bg-background text-foreground border hover:bg-muted'
                                }`}
                        >
                            {plan.cta}
                        </Button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}