import { motion } from "framer-motion";
import { heroPills } from "@/data/features";

export default function FeaturesHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-background">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
      {/* Blobs */}
      <div className="absolute top-0 left-[-10%] w-[45%] h-[60%] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-[-10%] w-[40%] h-[50%] bg-blue-400/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-5"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2">
            ✦ Platform Overview
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.05]">
            One platform.
            <br />
            <span className="text-primary italic">Total control.</span>
          </h1>

          <p className="text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            From digital identity vaults to real-time gate security — MillionHuts
            is the complete operating system for modern PG management.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-1">
            {heroPills.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-foreground"
              >
                <span className={`h-2 w-2 rounded-full flex-shrink-0 ${pill.color}`} />
                {pill.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
