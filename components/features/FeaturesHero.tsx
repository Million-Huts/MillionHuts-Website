import { motion } from "framer-motion";
import { Zap, Shield, Smartphone } from "lucide-react";

export default function FeaturesHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0,transparent_70%)] -z-10" />

            <div className="mx-auto max-w-7xl px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center gap-4 mb-8"
                >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                        <Zap className="h-3 w-3 fill-primary" /> Management 2.0
                    </div>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1]">
                    One platform. <br />
                    <span className="text-primary italic">Total control.</span>
                </h1>
                <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
                    From digital KYC and floor-wise management for owners to instant rent slips and
                    mess menus for tenants—MillionHuts is the digital backbone of modern coliving.
                </p>
            </div>
        </section>
    );
}