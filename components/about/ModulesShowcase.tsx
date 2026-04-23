import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
    Building2,
    Users,
    LayoutGrid,
    CreditCard,
    TrendingDown,
    Users2,
    FileBarChart,
} from 'lucide-react';

const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const modules = [
    {
        icon: Building2,
        title: 'Property Management',
        desc: 'Manage multiple PG buildings from a single dashboard with real-time updates.',
        gradient: 'from-blue-600 to-blue-400',
        borderColor: '#3b82f6',
        cardBg: 'from-blue-500 via-blue-400 to-cyan-400',
    },
    {
        icon: Users,
        title: 'Tenant Management',
        desc: 'Complete lifecycle — from digital KYC onboarding to check-out and agreements.',
        gradient: 'from-emerald-600 to-emerald-400',
        borderColor: '#10b981',
        cardBg: 'from-emerald-500 via-emerald-400 to-teal-400',
    },
    {
        icon: LayoutGrid,
        title: 'Room & Floor Plans',
        desc: 'Visual bed-level occupancy tracking. See vacant, occupied, or maintenance rooms.',
        gradient: 'from-violet-600 to-violet-400',
        borderColor: '#8b5cf6',
        cardBg: 'from-violet-500 via-purple-400 to-pink-400',
    },
    {
        icon: CreditCard,
        title: 'Rent & Billing',
        desc: 'Automated rent, SMS/WhatsApp reminders, UPI, card, and netbanking payments.',
        gradient: 'from-green-600 to-green-400',
        borderColor: '#22c55e',
        cardBg: 'from-green-500 via-emerald-400 to-lime-400',
    },
    {
        icon: TrendingDown,
        title: 'Expense Tracking',
        desc: 'Categorize every rupee — electricity, maintenance, receipts, monthly reports.',
        gradient: 'from-red-500 to-rose-400',
        borderColor: '#ef4444',
        cardBg: 'from-red-500 via-rose-400 to-orange-400',
    },
    {
        icon: Users2,
        title: 'Staff Management',
        desc: 'Wardens, cooks, security — assign roles, track attendance, handle payroll.',
        gradient: 'from-purple-600 to-purple-400',
        borderColor: '#a855f7',
        cardBg: 'from-purple-500 via-violet-400 to-fuchsia-400',
    },
    {
        icon: FileBarChart,
        title: 'Reports & Analytics',
        desc: 'PDF reports for occupancy, revenue, expenses. Data-driven PG decisions.',
        gradient: 'from-teal-500 to-emerald-400',
        borderColor: '#14b8a6',
        cardBg: 'from-teal-500 via-cyan-400 to-blue-400',
    },
];

/* ── Sparkle Burst SVG ── */
function SparkBurst({ className = '' }: { className?: string }) {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className={className}>
            <path d="M24 8L26 20L38 24L26 28L24 40L22 28L10 24L22 20L24 8Z" fill="currentColor" />
            <circle cx="38" cy="10" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="40" cy="16" r="1.5" fill="currentColor" opacity="0.4" />
            <circle cx="34" cy="8" r="1" fill="currentColor" opacity="0.3" />
        </svg>
    );
}

function SmallSpark({ className = '' }: { className?: string }) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
            <path d="M8 2L9 7L14 8L9 9L8 14L7 9L2 8L7 7L8 2Z" fill="currentColor" />
        </svg>
    );
}

/* ── Each module row with parallax ── */
function ModuleRow({ module, index }: { module: typeof modules[number]; index: number }) {
    const Icon = module.icon;
    const isReversed = index % 2 !== 0;
    const rowRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: rowRef,
        offset: ['start end', 'end start'],
    });

    // Parallax: card moves slower than text
    const cardY = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const cardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [isReversed ? -3 : 3, 0, isReversed ? 2 : -2]);
    const cardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.96]);

    return (
        <div
            ref={rowRef}
            className={`flex flex-col ${
                isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
            } gap-10 md:gap-16 items-center`}
        >
            {/* ── Text side ── */}
            <motion.div
                style={{ y: textY }}
                className="flex-1"
            >
                <motion.div
                    initial={{ opacity: 0, x: isReversed ? 50 : -50, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.9, ease: SMOOTH_EASE }}
                >
                    {/* Module tag */}
                    <span className="text-sm font-semibold text-foreground/40 mb-3 block">
                        Module {index + 1}
                    </span>

                    {/* Bold headline */}
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-foreground mb-4">
                        {module.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-foreground/80 font-medium leading-relaxed">
                        {module.desc}
                    </p>
                </motion.div>
            </motion.div>

            {/* ── Visual card side with parallax + colored border ── */}
            <motion.div
                style={{ y: cardY, rotate: cardRotate, scale: cardScale }}
                className="flex-1 w-full relative group"
            >
                <motion.div
                    initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.9, delay: 0.15, ease: SMOOTH_EASE }}
                >
                    {/* Sparkle decorations */}
                    <motion.div
                        initial={{ scale: 0, rotate: -30 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.4, ease: SMOOTH_EASE }}
                        className={`absolute -top-6 ${isReversed ? '-left-4' : '-right-4'} z-10`}
                    >
                        <SparkBurst className="text-foreground/15 group-hover:text-primary/40 transition-colors duration-700" />
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.3 }}
                        className={`absolute -bottom-3 ${isReversed ? '-right-2' : '-left-2'} z-10`}
                    >
                        <SparkBurst className="text-foreground/10 group-hover:text-primary/30 transition-colors duration-700 w-8 h-8" />
                    </motion.div>

                    {/* Small sparks */}
                    <SmallSpark className={`absolute -top-2 ${isReversed ? 'left-8' : 'right-8'} text-foreground/10 group-hover:text-primary/25 transition-colors duration-500`} />
                    <SmallSpark className={`absolute top-4 ${isReversed ? '-left-6' : '-right-6'} text-foreground/8 group-hover:text-primary/20 transition-colors duration-500`} />

                    {/* Card with thick colored border */}
                    <div
                        className="rounded-[28px] p-[3px] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/15"
                        style={{
                            background: `linear-gradient(135deg, ${module.borderColor}60, ${module.borderColor}30, ${module.borderColor}60)`,
                        }}
                    >
                        <div className={`aspect-[4/3] rounded-[25px] bg-gradient-to-br ${module.cardBg} relative overflow-hidden`}>
                            {/* Animated shimmer */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                            {/* Glass inner card */}
                            <div className="absolute top-5 left-5 right-5 bottom-5 rounded-2xl bg-white/10 backdrop-blur-[2px] border border-white/20 flex items-center justify-center overflow-hidden">
                                {/* Large icon */}
                                <Icon className="h-20 w-20 text-white/30 group-hover:text-white/50 group-hover:scale-110 transition-all duration-700" />

                                {/* Fake UI elements for depth */}
                                <div className="absolute top-3 left-4 flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-white/30" />
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                    <div className="w-2 h-2 rounded-full bg-white/15" />
                                </div>
                                <div className="absolute top-3 right-4 h-2 w-12 rounded bg-white/15" />
                                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                    <div className="h-2 flex-1 rounded bg-white/15" />
                                    <div className="h-2 w-8 rounded bg-white/10" />
                                </div>
                            </div>

                            {/* Corner glow that shifts on hover */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-3xl group-hover:bg-black/5 transition-colors duration-700" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default function ModulesShowcase() {
    return (
        <section className="relative py-28 md:py-40 overflow-hidden bg-background">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[160px]" />
                <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-violet-500/3 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* ── Section heading ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.9, ease: SMOOTH_EASE }}
                    className="text-center mb-24"
                >
                    <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
                        Our Modules
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        Everything a PG{' '}
                        <span className="text-primary italic font-serif">Needs</span>
                    </h2>
                    <p className="mt-4 text-lg text-foreground/70 font-medium max-w-2xl mx-auto">
                        7 powerful modules designed to handle every aspect of PG management.
                    </p>
                </motion.div>

                {/* ── Alternating modules with parallax ── */}
                <div className="space-y-28 md:space-y-40">
                    {modules.map((module, i) => (
                        <ModuleRow key={i} module={module} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
