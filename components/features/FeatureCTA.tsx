import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, UserPlus } from "lucide-react";

export default function FeatureCTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] -z-10" />

            <div className="mx-auto max-w-5xl px-4">
                <div className="bg-card border rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-black/5">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                            <Rocket className="h-4 w-4" /> Ready to upgrade?
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
                            Stop managing. <br />
                            <span className="text-primary italic">Start growing.</span>
                        </h2>

                        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
                            Join 500+ owners and thousands of tenants who have switched to a
                            smarter, digital-first coliving experience.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-2xl w-full sm:w-auto shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                                List Your Property <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>

                            <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold rounded-2xl w-full sm:w-auto border-2 hover:bg-muted transition-all">
                                Find a PG <UserPlus className="ml-2 h-5 w-5" />
                            </Button>
                        </div>

                        <div className="mt-12 pt-12 border-t border-muted grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <p className="text-2xl font-black text-foreground">0%</p>
                                <p className="text-xs uppercase font-bold text-muted-foreground tracking-widest">Brokerage</p>
                            </div>
                            <div>
                                <p className="text-2xl font-black text-foreground">100%</p>
                                <p className="text-xs uppercase font-bold text-muted-foreground tracking-widest">Verified</p>
                            </div>
                            <div>
                                <p className="text-2xl font-black text-foreground">24/7</p>
                                <p className="text-xs uppercase font-bold text-muted-foreground tracking-widest">Support</p>
                            </div>
                            <div>
                                <p className="text-2xl font-black text-foreground">Secure</p>
                                <p className="text-xs uppercase font-bold text-muted-foreground tracking-widest">KYC Vault</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative floating icon */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-12 -right-12 opacity-[0.03] pointer-events-none"
                    >
                        <Rocket size={300} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}