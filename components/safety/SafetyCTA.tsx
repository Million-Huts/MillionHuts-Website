import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";

export default function SafetyCTA() {
    return (
        <section className="py-28 bg-muted/20 border-t border-border">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20">
                        <ShieldCheck className="h-8 w-8 text-primary" />
                    </div>

                    {/* Headline */}
                    <div className="space-y-3">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">
                            Start Your Safe Stay.
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
                            Join thousands of verified tenants living safely across India. Your identity is protected. Your community is verified. Your issues get resolved.
                        </p>
                    </div>

                    {/* Trust line */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
                        {["No brokerage", "Verified properties", "Encrypted data", "Instant onboarding"].map((t, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-primary" />
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="https://tenant.millionhuts.com/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 h-13 px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors group text-sm shadow-lg shadow-primary/15"
                        >
                            Get Verified Free
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        <Link
                            href="/pg"
                            className="inline-flex items-center justify-center gap-2 h-13 px-8 py-3.5 bg-card border border-border text-foreground font-bold rounded-xl hover:bg-muted transition-colors text-sm"
                        >
                            <Building2 className="h-4 w-4" />
                            Browse Verified PGs
                        </Link>
                    </div>

                    <p className="text-xs text-muted-foreground">
                        Already have an account?{" "}
                        <a href="https://tenant.millionhuts.com/login" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
                            Sign in here
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
