import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Building2, TrendingUp, Users } from "lucide-react";

export default function OwnerCTA() {
    return (
        <section className="py-24 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-primary px-8 py-16 md:px-16 md:py-20 shadow-2xl shadow-primary/20">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    {/* Floating Growth Icons */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-20 hidden lg:block bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20"
                    >
                        <TrendingUp className="text-white h-8 w-8" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-12 left-10 hidden lg:block bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20"
                    >
                        <Users className="text-white h-8 w-8" />
                    </motion.div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-left"
                        >
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                                <Building2 className="h-4 w-4" />
                                Partnership Program
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                                Ready to scale <br />
                                <span className="text-primary-foreground/80">your PG business?</span>
                            </h2>
                            <p className="text-white/80 text-lg mb-8 max-w-lg">
                                Join India's fastest-growing PG network. From automated rent collection to verified lead generation—we've got you covered.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold rounded-xl hover:scale-105 transition-transform">
                                    Get Started for Free
                                </Button>
                                <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 border-none text-white backdrop-blur-sm">
                                    Contact Sales
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="hidden lg:flex justify-end"
                        >
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] w-full max-w-sm">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-white/60 text-sm uppercase font-bold tracking-widest">Efficiency</p>
                                            <p className="text-3xl font-bold text-white">+85%</p>
                                        </div>
                                        <div className="h-12 w-24 bg-white/20 rounded-lg overflow-hidden flex items-end p-1 gap-1">
                                            <div className="bg-white w-full h-1/3 rounded-sm" />
                                            <div className="bg-white w-full h-2/3 rounded-sm" />
                                            <div className="bg-white w-full h-full rounded-sm" />
                                        </div>
                                    </div>
                                    <div className="h-px bg-white/10" />
                                    <div className="space-y-4">
                                        {[
                                            "Automated Rent Reminders",
                                            "Digital Agreement Signing",
                                            "Maintenance Tracking"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-white/90">
                                                <div className="h-5 w-5 rounded-full bg-green-400/20 flex items-center justify-center">
                                                    <div className="h-2 w-2 rounded-full bg-green-400" />
                                                </div>
                                                <span className="text-sm font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}