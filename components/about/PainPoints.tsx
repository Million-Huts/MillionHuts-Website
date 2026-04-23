import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
    Banknote,
    MessageSquareWarning,
    DoorOpen,
    FileX,
} from 'lucide-react';

const painPoints = [
    {
        icon: Banknote,
        title: 'Manual Rent Collection',
        desc: 'Owners still chase tenants door-to-door every month for rent, leading to missed payments and awkward confrontations.',
        color: 'text-red-500',
        bg: 'bg-red-50 dark:bg-red-950/30',
        border: 'border-red-200 dark:border-red-900/50',
        gradient: 'from-red-500 to-rose-400',
    },
    {
        icon: MessageSquareWarning,
        title: 'Complaint Mismanagement',
        desc: 'Tenant complaints get lost in WhatsApp groups. No tracking, no accountability, no resolution timelines.',
        color: 'text-orange-500',
        bg: 'bg-orange-50 dark:bg-orange-950/30',
        border: 'border-orange-200 dark:border-orange-900/50',
        gradient: 'from-orange-500 to-amber-400',
    },
    {
        icon: DoorOpen,
        title: 'Empty Room Losses',
        desc: 'No real-time occupancy dashboard means rooms sit vacant for weeks without owners even knowing.',
        color: 'text-purple-500',
        bg: 'bg-purple-50 dark:bg-purple-950/30',
        border: 'border-purple-200 dark:border-purple-900/50',
        gradient: 'from-purple-500 to-violet-400',
    },
    {
        icon: FileX,
        title: 'No Reports or Analytics',
        desc: 'Financial reports, occupancy stats, and expense summaries? They don\'t exist in paper-based management.',
        color: 'text-slate-600',
        bg: 'bg-slate-50 dark:bg-slate-950/30',
        border: 'border-slate-200 dark:border-slate-900/50',
        gradient: 'from-slate-500 to-gray-400',
    },
];

/* ── Scroll reveal text ── */
function ScrollText({ text, className = '' }: { text: string; className?: string }) {
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.95', 'start 0.4'],
    });
    const words = text.split(' ');
    return (
        <p ref={ref} className={`flex flex-wrap ${className}`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return <ScrollWord key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
            })}
        </p>
    );
}

function ScrollWord({
    word,
    range,
    progress,
}: {
    word: string;
    range: [number, number];
    progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
    const opacity = useTransform(progress, range, [0.12, 1]);
    return (
        <motion.span style={{ opacity }} className="mr-[0.3em] inline-block">
            {word}
        </motion.span>
    );
}

export default function PainPoints() {
    const introText =
        'The PG industry in India is worth billions, yet most owners still rely on paper registers, manual tracking, and WhatsApp groups. These are the real problems we are solving:';

    return (
        <section className="relative py-28 md:py-36 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-red-500/[0.02] to-background" />
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-red-500/4 rounded-full blur-[160px]" />
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-amber-500/4 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center mb-8"
                >
                    <span className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-4 block">
                        The Problem
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        Why PG Management is{' '}
                        <span className="text-red-500 italic font-serif">Broken</span>
                    </h2>
                </motion.div>

                {/* Scroll reveal intro */}
                <div className="max-w-3xl mx-auto mb-16">
                    <ScrollText
                        text={introText}
                        className="text-lg md:text-xl text-foreground/80 leading-relaxed justify-center text-center"
                    />
                </div>

                {/* Pain points grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {painPoints.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.08,
                                ease: [0.25, 0.4, 0.25, 1],
                            }}
                            className="group"
                        >
                            <div
                                className={`relative h-full p-6 rounded-2xl border ${point.border} ${point.bg} overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1`}
                            >
                                {/* Animated top accent bar */}
                                <div
                                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${point.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                />

                                {/* Icon */}
                                <div
                                    className={`w-12 h-12 rounded-xl ${point.bg} border ${point.border} flex items-center justify-center ${point.color} mb-4 group-hover:scale-110 transition-transform duration-500`}
                                >
                                    <point.icon className="h-5 w-5" />
                                </div>

                                <h3 className="text-lg font-bold mb-2 group-hover:text-foreground transition-colors duration-300">
                                    {point.title}
                                </h3>
                                <p className="text-foreground/65 text-sm leading-relaxed">
                                    {point.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-xl md:text-2xl font-bold text-foreground/85">
                        That&apos;s why we built{' '}
                        <span className="text-primary font-extrabold">MillionHuts</span> —
                        one platform to solve all of this. ↓
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
