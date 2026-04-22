import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SafetyCTA() {
    return (
        <section className="py-24 px-4 bg-background">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] bg-slate-950 text-white overflow-hidden p-12 md:p-16 text-center"
                >
                    {/* Background decoration */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px]" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[80px]" />
                    </div>

                    <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck className="h-8 w-8 text-blue-400" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                            Start Your{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300">
                                Safe Stay.
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                            Join thousands of verified tenants living safely across India. Your identity is protected. Your community is verified. Your issues get resolved.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://tenant.millionhuts.com/register"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="lg"
                                    className="h-14 px-8 bg-white text-slate-900 hover:bg-slate-100 font-black rounded-2xl shadow-xl gap-2 group"
                                >
                                    Create Your Safe Profile
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>

                            <Link href="/pg">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-8 border-slate-500 text-slate-200 bg-transparent hover:bg-slate-800 hover:border-slate-400 hover:text-white font-bold rounded-2xl gap-2"
                                >
                                    <Building2 className="h-4 w-4" />
                                    Browse Verified PGs
                                </Button>
                            </Link>
                        </div>

                        {/* Trust note */}
                        <p className="text-slate-600 text-xs mt-8 font-medium">
                            No brokerage · Verified properties · Encrypted data
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
