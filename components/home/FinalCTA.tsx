import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Search, Sparkles, Navigation } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full -z-10" />

            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="flex justify-center mb-6">
                        <div className="p-3 bg-primary/10 rounded-2xl text-primary animate-bounce">
                            <Navigation className="h-6 w-6 fill-primary" />
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-foreground">
                        Your dream stay is <br />
                        <span className="relative">
                            <span className="text-primary italic">just a click away.</span>
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    d="M1 5.26c10.824-2.182 82.254-4.24 186.271-4.24 104.017 0 162.155 1.455 170.186 2.424"
                                    stroke="#8833ff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h2>

                    <p className="text-muted-foreground text-xl mb-10 max-w-xl mx-auto leading-relaxed">
                        Join 50,000+ students and professionals who found their "home away from home" through MillionHuts.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block relative group"
                    >
                        {/* Outer Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

                        <Button
                            size="lg"
                            className="relative h-16 px-10 text-xl font-bold rounded-2xl shadow-2xl gap-3 bg-primary hover:bg-primary/90 transition-all"
                        >
                            Find My Perfect PG <Search className="h-6 w-6" />
                        </Button>
                    </motion.div>

                    <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
                        <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-primary" />
                            No Brokerage
                        </div>
                        <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-primary" />
                            Verified Photos
                        </div>
                        <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-primary" />
                            Instant Move-in
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}