import { motion } from "framer-motion";
import { Shield, LayoutGrid, DoorOpen, Receipt, Bell } from "lucide-react";
import { bentoPillars } from "@/data/features";

// Map pillar id → lucide icon
const iconMap: Record<string, React.ReactNode> = {
  kyc:     <Shield    className="h-5 w-5" />,
  floor:   <LayoutGrid className="h-5 w-5" />,
  gate:    <DoorOpen  className="h-5 w-5" />,
  finance: <Receipt   className="h-5 w-5" />,
  alerts:  <Bell      className="h-5 w-5" />,
};

export default function FeatureBentoGrid() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
            Everything your PG needs
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Five core pillars that cover every aspect of modern PG operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {bentoPillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className={`rounded-3xl border border-border bg-card/60 backdrop-blur-sm p-6 md:p-7 hover:border-primary/30 transition-all ${pillar.colSpan}`}
            >
              <span className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-4 ${pillar.accentBg} ${pillar.accentText}`}>
                {iconMap[pillar.id]}
              </span>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
