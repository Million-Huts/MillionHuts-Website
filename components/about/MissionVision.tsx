import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Rocket, Sparkles, ArrowUpRight } from 'lucide-react';

const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Decorative sparkle SVG ── */
function SparkleDecor({ className = '' }: { className?: string }) {
    return (
        <motion.svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            className={className}
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: SMOOTH_EASE }}
        >
            <motion.path
                d="M24 4L27.5 18.5L42 24L27.5 29.5L24 44L20.5 29.5L6 24L20.5 18.5L24 4Z"
                fill="currentColor"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
        </motion.svg>
    );
}

/* ── Small sparkle ── */
function SmallSparkle({ className = '' }: { className?: string }) {
    return (
        <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            initial={{ scale: 0, rotate: 45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: SMOOTH_EASE }}
        >
            <path
                d="M12 2L13.5 9.5L20 12L13.5 14.5L12 22L10.5 14.5L4 12L10.5 9.5L12 2Z"
                fill="currentColor"
            />
        </motion.svg>
    );
}

const cards = [
    {
        icon: Target,
        label: 'Our Mission',
        gradient: 'from-blue-500 to-cyan-400',
        borderColor: 'border-blue-400/50',
        bgGlow: 'bg-blue-500',
        accentColor: 'text-blue-500',
        sparkleColor: 'text-blue-400',
        title: 'A Million Users,\nOne Platform',
        body: 'To empower every PG owner and tenant in India with a single, intelligent platform that eliminates paperwork, automates operations, and brings complete transparency to the coliving ecosystem.',
        tags: ['PropTech', 'SaaS', 'India-first'],
    },
    {
        icon: Eye,
        label: 'Our Vision',
        gradient: 'from-violet-500 to-purple-400',
        borderColor: 'border-violet-400/50',
        bgGlow: 'bg-violet-500',
        accentColor: 'text-violet-500',
        sparkleColor: 'text-violet-400',
        title: 'Short-Term &\nLong-Term Goals',
        body: 'Near-term: Launch across top 10 Indian cities by end of 2026 with 1,000+ active PG owners. Long-term: Become the #1 global coliving management platform with multi-currency, multi-language support reaching 1 million users.',
        tags: ['10 Cities', '1M Users', 'Global'],
    },
    {
        icon: Rocket,
        label: 'Success Story',
        gradient: 'from-amber-500 to-orange-400',
        borderColor: 'border-amber-400/50',
        bgGlow: 'bg-amber-500',
        accentColor: 'text-amber-500',
        sparkleColor: 'text-amber-400',
        title: 'From Observation\nto Beta',
        body: 'What started as a simple digital gate-entry log has evolved into a 13-module SaaS platform. Our beta launch in 2026 marks the beginning of a revolution in PG management across India.',
        tags: ['13 Modules', 'Beta 2026', 'Revolution'],
    },
];

/* ── Scroll-linked text opacity ── */
function ScrollText({ text, className = '' }: { text: string; className?: string }) {
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.95', 'start 0.45'],
    });
    const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

    return (
        <motion.p ref={ref} style={{ opacity, y }} className={className}>
            {text}
        </motion.p>
    );
}

export default function MissionVision() {
    return (
        <section className="relative py-28 md:py-40 overflow-hidden bg-background">
            {/* Background glows */}
            <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/4 rounded-full blur-[160px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/4 rounded-full blur-[140px] -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.9, ease: SMOOTH_EASE }}
                    className="text-center mb-8"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-4 px-4 py-2 bg-primary/5 rounded-full border border-primary/10"
                    >
                        <Sparkles className="h-4 w-4" />
                        About MillionHuts
                    </motion.span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        <span className="block overflow-hidden">
                            <motion.span
                                className="block"
                                initial={{ y: '100%' }}
                                whileInView={{ y: '0%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3, ease: SMOOTH_EASE }}
                            >
                                Why We{' '}
                                <span className="text-primary italic font-serif">Exist</span>
                            </motion.span>
                        </span>
                    </h2>
                </motion.div>

                {/* ── Description ── */}
                <div className="max-w-4xl mx-auto mb-28">
                    <ScrollText
                        text="MillionHuts is a Bengaluru-born proptech startup redefining how paying guest accommodations operate. We replace outdated paper registers, manual rent tracking, and scattered communication with one intelligent, beautiful platform — purpose-built for the coliving industry."
                        className="text-xl md:text-2xl text-foreground/70 leading-relaxed text-center"
                    />
                </div>

                {/* ── Cards — alternating two-column layout (Arjun-style) ── */}
                <div className="space-y-24 md:space-y-32">
                    {cards.map((card, i) => {
                        const Icon = card.icon;
                        const isReversed = i % 2 !== 0;

                        return (
                            <div
                                key={i}
                                className={`flex flex-col ${
                                    isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                                } gap-10 md:gap-16 items-center`}
                            >
                                {/* ── Text side ── */}
                                <motion.div
                                    initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: 0.9, ease: SMOOTH_EASE }}
                                    className="flex-1"
                                >
                                    {/* Label */}
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className={`inline-block text-sm font-bold uppercase tracking-widest mb-4 ${card.accentColor}`}
                                    >
                                        {card.label}
                                    </motion.span>

                                    {/* Big title */}
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 whitespace-pre-line">
                                        {card.title.split('\n').map((line, j) => (
                                            <span key={j} className="block overflow-hidden">
                                                <motion.span
                                                    className="block"
                                                    initial={{ y: '100%' }}
                                                    whileInView={{ y: '0%' }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 0.8,
                                                        delay: 0.3 + j * 0.12,
                                                        ease: SMOOTH_EASE,
                                                    }}
                                                >
                                                    {line}
                                                </motion.span>
                                            </span>
                                        ))}
                                    </h3>

                                    {/* Body text */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 0.7, ease: SMOOTH_EASE }}
                                        className="text-foreground/85 text-base md:text-lg leading-relaxed mb-6 font-semibold"
                                    >
                                        {card.body}
                                    </motion.p>

                                    {/* Tags */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7, duration: 0.5 }}
                                        className="flex flex-wrap gap-2"
                                    >
                                        {card.tags.map((tag, t) => (
                                            <span
                                                key={t}
                                                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-muted/50 text-foreground/60 border border-border/50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </motion.div>
                                </motion.div>

                                {/* ── Card side (visual) ── */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: isReversed ? -40 : 40,
                                        scale: 0.92,
                                    }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.9, delay: 0.2, ease: SMOOTH_EASE }}
                                    className="flex-1 relative group"
                                >
                                    {/* Sparkle decorations */}
                                    <SparkleDecor
                                        className={`absolute -top-6 -right-4 ${card.sparkleColor} opacity-60`}
                                    />
                                    <SmallSparkle
                                        className={`absolute -top-2 -right-10 ${card.sparkleColor} opacity-40`}
                                    />

                                    {/* Card with colored border */}
                                    <div
                                        className={`relative rounded-3xl border-2 ${card.borderColor} bg-card p-8 md:p-10 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2`}
                                    >
                                        {/* Background glow */}
                                        <div
                                            className={`absolute -top-20 -right-20 w-60 h-60 ${card.bgGlow}/8 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700`}
                                        />

                                        {/* Icon */}
                                        <div className="relative mb-6">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ type: 'spring', stiffness: 300 }}
                                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-lg`}
                                            >
                                                <Icon className="h-7 w-7" strokeWidth={2} />
                                            </motion.div>
                                        </div>

                                        {/* Card title */}
                                        <h4 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                                            {card.title.replace('\n', ' ')}
                                            <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-60 -translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
                                        </h4>

                                        {/* Card body */}
                                        <p className="text-foreground/75 leading-relaxed text-sm font-medium">
                                            {card.body}
                                        </p>

                                        {/* Bottom gradient accent */}
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 0.6,
                                                duration: 0.8,
                                                ease: SMOOTH_EASE,
                                            }}
                                            className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${card.gradient} origin-left`}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
