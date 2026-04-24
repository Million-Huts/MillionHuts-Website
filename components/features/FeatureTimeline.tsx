import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Shield, LayoutGrid, DoorOpen, Receipt, Bell, CheckCircle2 } from "lucide-react";
import { featureTimeline, type TimelineFeatureData } from "@/data/features";

// Map id → icon
const iconMap: Record<string, React.ReactNode> = {
  kyc:     <Shield     className="h-4 w-4" />,
  floor:   <LayoutGrid className="h-4 w-4" />,
  gate:    <DoorOpen   className="h-4 w-4" />,
  finance: <Receipt    className="h-4 w-4" />,
  alerts:  <Bell       className="h-4 w-4" />,
};

// ── Single timeline item ──
function TimelineItem({ feature, index }: { feature: TimelineFeatureData; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-14 md:py-20">

      {/* Text block */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}
      >
        <span className={`inline-flex items-center gap-2 text-xs font-bold ${feature.categoryColor} bg-card border border-border rounded-full px-3 py-1.5`}>
          {iconMap[feature.id]}
          {feature.categoryLabel}
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
          {feature.h2}
        </h2>

        <p className="text-muted-foreground text-base leading-relaxed">
          {feature.body}
        </p>

        <ul className="space-y-2.5">
          {feature.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <CheckCircle2 className={`h-4 w-4 ${feature.categoryColor} mt-0.5 flex-shrink-0`} />
              <span className="text-sm text-foreground/85">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className={`rounded-xl border px-4 py-3 text-sm font-medium ${feature.calloutBg}`}>
          {feature.calloutText}
        </div>
      </motion.div>

      {/* Mockup block */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}
      >
        <div className={`absolute inset-0 ${feature.accentBg} opacity-10 blur-3xl rounded-3xl -z-10`} />

        <div className="relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm overflow-hidden shadow-xl aspect-[4/3] flex flex-col items-center justify-center gap-4">
          <div className={`absolute inset-0 ${feature.accentBg} opacity-[0.04]`} />
          <span className={`${feature.categoryColor} opacity-30 scale-[3] block`}>
            {iconMap[feature.id]}
          </span>
          <p className="text-xs text-muted-foreground/50 font-medium mt-6 relative z-10">
            Screenshot coming soon
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// ── Main timeline section ──
export default function FeatureTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <section ref={containerRef} className="relative bg-background px-4">
      {/* Animated vertical timeline line — desktop only */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-border to-transparent" />
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary to-primary/50"
        />
      </div>

      {/* Section heading */}
      <div className="pt-16 pb-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2 mb-5">
            ✦ Deep Dive
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-3">
            A closer look
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Every feature built around how PGs actually operate.
          </p>
        </motion.div>
      </div>

      {/* Timeline items */}
      <div className="container mx-auto max-w-6xl divide-y divide-border/40">
        {featureTimeline.map((feature, i) => (
          <TimelineItem key={feature.id} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}
