import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, ArrowRight, Building2, Shield, BarChart3 } from 'lucide-react';

const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const storyChapters = [
    {
        icon: Lightbulb,
        iconColor: 'text-amber-500',
        iconBg: 'bg-amber-500/10 border-amber-500/20',
        tag: 'Chapter 1 — The Request',
        text: "It started with a single request. A client asked us for a digital alternative to the messy, unreliable gate entry logs and manual accounting books used in their PG. We realized that this wasn't just one owner's problem — it was an industry-wide gap.",
    },
    {
        icon: Building2,
        iconColor: 'text-blue-500',
        iconBg: 'bg-blue-500/10 border-blue-500/20',
        tag: 'Chapter 2 — The Evolution',
        text: 'What began as a security module quickly evolved. We saw the need for a comprehensive digital backbone that handles everything from global KYC to financial transparency.',
    },
    {
        icon: Shield,
        iconColor: 'text-violet-500',
        iconBg: 'bg-violet-500/10 border-violet-500/20',
        tag: 'Chapter 3 — The Platform',
        text: 'MillionHuts was engineered from the ground up to bring enterprise-grade technology to every doorstep.',
    },
];

/* ── Scroll-linked paragraph reveal ── */
function ScrollParagraph({ text, className = '' }: { text: string; className?: string }) {
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.95', 'start 0.4'],
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [15, 0]);

    return (
        <motion.p ref={ref} style={{ opacity, y }} className={className}>
            {text}
        </motion.p>
    );
}

export default function OriginStory() {
    return (
        <section className="relative py-28 md:py-40 overflow-hidden bg-background">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/4 rounded-full blur-[140px] -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.9, ease: SMOOTH_EASE }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 mb-5"
                    >
                        <span className="p-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                            <Lightbulb className="h-4 w-4 text-amber-500" />
                        </span>
                        <span className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                            The Spark
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        <span className="block overflow-hidden">
                            <motion.span
                                className="block"
                                initial={{ y: '100%' }}
                                whileInView={{ y: '0%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3, ease: SMOOTH_EASE }}
                            >
                                Our Origin{' '}
                                <span className="text-primary italic font-serif relative">
                                    Story
                                    <motion.span
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.0, duration: 0.6, ease: SMOOTH_EASE }}
                                        className="absolute bottom-1 left-0 right-0 h-[4px] bg-primary/40 rounded-full origin-left"
                                    />
                                </span>
                            </motion.span>
                        </span>
                    </h2>
                </motion.div>

                {/* ── Story chapters with icons and connecting line ── */}
                <div className="relative">
                    {/* Vertical connecting line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4, ease: SMOOTH_EASE }}
                        className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500/30 via-blue-500/30 to-violet-500/30 origin-top hidden md:block"
                    />

                    <div className="space-y-12 md:space-y-16">
                        {storyChapters.map((chapter, i) => {
                            const Icon = chapter.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{
                                        duration: 0.8,
                                        delay: i * 0.15,
                                        ease: SMOOTH_EASE,
                                    }}
                                    className="relative flex gap-6 md:gap-8 group"
                                >
                                    {/* ── Icon node on the timeline ── */}
                                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 300,
                                                damping: 20,
                                                delay: 0.3 + i * 0.2,
                                            }}
                                            className={`relative z-10 w-14 h-14 rounded-2xl ${chapter.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                                        >
                                            <Icon className={`h-6 w-6 ${chapter.iconColor}`} />
                                            {/* Pulse ring */}
                                            <div
                                                className={`absolute inset-0 rounded-2xl ${chapter.iconBg} animate-ping opacity-20`}
                                                style={{ animationDuration: '3s' }}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* ── Content card ── */}
                                    <div className="flex-1 relative">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                                            className="p-6 md:p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-border/80 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 group-hover:-translate-y-1"
                                        >
                                            {/* Chapter tag */}
                                            <span className={`inline-block text-xs font-bold uppercase tracking-widest ${chapter.iconColor} mb-4`}>
                                                {chapter.tag}
                                            </span>

                                            {/* Mobile icon (shown below md) */}
                                            <div className={`md:hidden w-10 h-10 rounded-xl ${chapter.iconBg} border flex items-center justify-center mb-4`}>
                                                <Icon className={`h-5 w-5 ${chapter.iconColor}`} />
                                            </div>

                                            {/* Paragraph with scroll reveal */}
                                            <ScrollParagraph
                                                text={chapter.text}
                                                className={`text-lg md:text-xl leading-relaxed ${
                                                    i === storyChapters.length - 1
                                                        ? 'font-bold text-foreground'
                                                        : 'font-semibold text-foreground/85'
                                                }`}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Journey arrow ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, ease: SMOOTH_EASE }}
                    className="flex justify-center mt-16"
                >
                    <div className="group flex items-center gap-4 text-primary/40 hover:text-primary/70 transition-colors duration-300 cursor-pointer">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5, ease: SMOOTH_EASE }}
                            className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30 origin-left"
                        />
                        <div className="flex items-center gap-2">
                            <BarChart3 className="h-4 w-4" />
                            <span className="text-xs uppercase tracking-widest font-bold">
                                The Journey Continues
                            </span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.5, ease: SMOOTH_EASE }}
                            className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30 origin-right"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
