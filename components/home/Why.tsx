import { Card, CardContent } from '@/components/ui/card';
import { features } from '@/data/homepage';
import { motion } from "framer-motion";
import { ShieldCheck } from 'lucide-react';

export default function Why() {
    return (
        <section className="py-24 relative overflow-hidden bg-muted/20">
            {/* Soft decorative background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            <ShieldCheck className="h-4 w-4" />
                            The MillionHuts Standard
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                            Why the best <br />
                            <span className="text-primary italic">choose us.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            We’ve removed the friction from PG hunting. No more fake listings,
                            endless brokerage calls, or manual rent tracking.
                        </p>
                        <div className="hidden lg:block h-1 w-24 bg-primary rounded-full" />
                    </motion.div>

                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="relative h-full overflow-hidden border-none bg-background shadow-lg shadow-black/5 group hover:shadow-primary/10 transition-all duration-500">
                                    {/* Subtle hover background accent */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500" />

                                    <CardContent className="p-8">
                                        <div className="w-14 h-14 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                                            <feature.icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors uppercase tracking-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Trust bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="pt-12 border-t border-dashed border-muted-foreground/20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all"
                >
                    {/* You can put micro-logos here like 'Secure Payments', 'Verified Partners' etc */}
                    <span className="text-sm font-bold tracking-widest uppercase">100% Secure Payments</span>
                    <span className="text-sm font-bold tracking-widest uppercase">Direct Communication</span>
                    <span className="text-sm font-bold tracking-widest uppercase">Verified Locations</span>
                </motion.div>
            </div>
        </section>
    );
}