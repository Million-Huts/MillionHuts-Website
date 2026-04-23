import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ChevronDown, MapPin, Layers, Monitor, CalendarCheck, BookOpen } from 'lucide-react';
import { Badge } from '../ui/badge';

/* ── Smooth easing constant ── */
const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Animated counter for stats ── */
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 1800;
        const startTime = performance.now();

        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            /* Ease-out cubic */
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * value);
            setCount(start);
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Hero headline — line-by-line masked reveal (Arjun Raghavan style) ── */
function AnimatedHeadline() {
    const lines: { text: string; highlight?: boolean }[] = [
        { text: 'Bridging the Gap' },
        { text: 'Between the' },
        { text: 'Digital World', highlight: true },
        { text: 'and Coliving.', highlight: true },
    ];

    return (
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-[1.1] text-center">
            {lines.map((line, i) => (
                /* Overflow-hidden wrapper acts as a clip-mask */
                <span key={i} className="block overflow-hidden py-[0.05em]">
                    <motion.span
                        initial={{
                            y: '110%',
                            opacity: 0,
                            filter: 'blur(8px)',
                        }}
                        animate={{
                            y: '0%',
                            opacity: 1,
                            filter: 'blur(0px)',
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 0.3 + i * 0.15,
                            ease: SMOOTH_EASE,
                        }}
                        className={`block ${line.highlight
                                ? 'text-primary italic font-serif'
                                : ''
                            }`}
                        style={{ willChange: 'transform, opacity, filter' }}
                    >
                        {line.text}
                    </motion.span>
                </span>
            ))}
        </h1>
    );
}

/* ── Sub-headline — smooth fade-in paragraph (NOT word-by-word stacking) ── */
function AnimatedSubheadline({ text }: { text: string }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
                duration: 1,
                delay: 1.1,
                ease: SMOOTH_EASE,
            }}
            className="text-lg md:text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-3xl mx-auto text-center"
        >
            {text}
        </motion.p>
    );
}

export default function AboutHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
    const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

    const subHeadlineText =
        "We didn't set out to build a SaaS — we set out to solve a problem. Based in Yelahanka, Bengaluru, MillionHuts was born from a simple observation: the world is moving forward, but PG management is still stuck in paper registers.";

    const stats = [
        { value: 2024, suffix: '', label: 'Founded', icon: CalendarCheck },
        { value: 13, suffix: '+', label: 'Modules', icon: Layers },
        { value: 100, suffix: '%', label: 'Digital', icon: Monitor },
        { value: 2026, suffix: '', label: 'Beta Launch', icon: CalendarCheck },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-background"
        >
            {/* ── Animated background orbs ── */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -30, 20, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        x: [0, -20, 30, 0],
                        y: [0, 20, -30, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="absolute bottom-[-10%] right-[15%] w-[500px] h-[500px] bg-blue-400/8 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        x: [0, 15, -15, 0],
                        y: [0, -15, 15, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-[40%] right-[5%] w-[300px] h-[300px] bg-violet-400/5 rounded-full blur-[120px]"
                />
            </div>

            {/* ── Subtle grid pattern ── */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <motion.div
                style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl"
            >
                {/* ── Trust badge ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.7, delay: 0.1, ease: SMOOTH_EASE }}
                    className="flex justify-center"
                >
                    <Badge
                        variant="secondary"
                        className="mb-8 py-2 px-5 bg-primary/5 text-primary border-primary/20 gap-2 text-sm"
                    >
                        <MapPin className="h-3.5 w-3.5 fill-primary" />
                        Bengaluru-Born · India&apos;s Tech Heart
                    </Badge>
                </motion.div>

                {/* ── Animated Headline — line-by-line masked reveal ── */}
                <AnimatedHeadline />

                {/* ── Sub-headline — smooth single paragraph ── */}
                <div className="mt-10">
                    <AnimatedSubheadline text={subHeadlineText} />
                </div>

                {/* ── Animated stats row with glassmorphism cards ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
                >
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 1.5 + i * 0.1,
                                    ease: SMOOTH_EASE,
                                }}
                                whileHover={{
                                    y: -4,
                                    scale: 1.03,
                                    transition: { duration: 0.25 },
                                }}
                                className="group relative rounded-2xl border border-border/50 bg-background/60 backdrop-blur-md p-5 text-center cursor-default transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30"
                            >
                                {/* Subtle glow on hover */}
                                <div className="absolute inset-0 rounded-2xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative">
                                    <div className="flex justify-center mb-2">
                                        <Icon className="h-4 w-4 text-primary/50 group-hover:text-primary transition-colors duration-300" />
                                    </div>
                                    <div className="text-2xl md:text-3xl font-extrabold text-foreground">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1.5 uppercase tracking-widest font-semibold">
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* ── "Our Story" section (Arjun "Here's how" style with decorative SVGs) ── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 1, ease: SMOOTH_EASE }}
                className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group"
                onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })}
            >
                {/* ── Decorative hand-drawn SVG rays/sparkles ── */}
                <div className="relative">
                    {/* Radiating lines (hand-drawn style) */}
                    <svg
                        className="absolute -inset-12 md:-inset-16 w-[calc(100%+6rem)] md:w-[calc(100%+8rem)] h-[calc(100%+6rem)] md:h-[calc(100%+8rem)]"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Top-left ray */}
                        <motion.path
                            d="M65 55 C55 45, 40 35, 30 28"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            className="text-muted-foreground/30 group-hover:text-primary/40 transition-colors duration-500"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 2.6, duration: 0.5, ease: SMOOTH_EASE }}
                        />
                        {/* Top ray */}
                        <motion.path
                            d="M100 60 C100 48, 98 35, 100 20"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            className="text-muted-foreground/30 group-hover:text-primary/40 transition-colors duration-500"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 2.7, duration: 0.5, ease: SMOOTH_EASE }}
                        />
                        {/* Top-right ray */}
                        <motion.path
                            d="M135 55 C145 45, 158 37, 170 28"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            className="text-muted-foreground/30 group-hover:text-primary/40 transition-colors duration-500"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 2.8, duration: 0.5, ease: SMOOTH_EASE }}
                        />
                        {/* Left ray */}
                        <motion.path
                            d="M55 95 C42 92, 30 95, 18 93"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            className="text-muted-foreground/25 group-hover:text-primary/35 transition-colors duration-500"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 2.9, duration: 0.5, ease: SMOOTH_EASE }}
                        />
                        {/* Right ray */}
                        <motion.path
                            d="M145 95 C158 92, 170 95, 182 93"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            className="text-muted-foreground/25 group-hover:text-primary/35 transition-colors duration-500"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 3.0, duration: 0.5, ease: SMOOTH_EASE }}
                        />
                        {/* Bottom-left spark */}
                        <motion.path
                            d="M60 140 C50 150, 42 158, 35 168"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="text-muted-foreground/20 group-hover:text-primary/30 transition-colors duration-500"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 3.1, duration: 0.4, ease: SMOOTH_EASE }}
                        />
                        {/* Bottom-right spark */}
                        <motion.path
                            d="M140 140 C150 150, 158 158, 165 168"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            className="text-muted-foreground/20 group-hover:text-primary/30 transition-colors duration-500"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 3.2, duration: 0.4, ease: SMOOTH_EASE }}
                        />
                        {/* Small sparkle dots */}
                        <motion.circle
                            cx="25" cy="60" r="2"
                            className="fill-primary/30 group-hover:fill-primary/50"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 3.0, duration: 0.3 }}
                        />
                        <motion.circle
                            cx="175" cy="60" r="2"
                            className="fill-primary/30 group-hover:fill-primary/50"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 3.1, duration: 0.3 }}
                        />
                        <motion.circle
                            cx="100" cy="12" r="2.5"
                            className="fill-primary/40 group-hover:fill-primary/60"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 3.2, duration: 0.3 }}
                        />
                    </svg>

                    {/* BookOpen icon */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative z-10 p-3 rounded-full bg-primary/5 border border-primary/15 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300"
                    >
                        <BookOpen className="h-6 w-6 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                </div>

                {/* Big text: "Our" normal, "Story" with blue underline */}
                <div className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                        Our{' '}
                        <span className="relative inline-block">
                            Story
                            {/* Blue animated underline under "Story" */}
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 2.8, duration: 0.6, ease: SMOOTH_EASE }}
                                className="absolute -bottom-1 left-0 right-0 h-[5px] bg-primary rounded-full origin-left"
                            />
                        </span>
                    </span>
                </div>

                {/* Bouncing chevron */}
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ChevronDown className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </motion.div>
            </motion.div>
        </section>
    );
}
