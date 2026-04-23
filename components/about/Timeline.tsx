import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, ShieldCheck, Server, Rocket, Code2, BarChart3, Settings, ArrowUpRight } from 'lucide-react';

const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const milestones = [
    { year: '2024', title: 'Observation in Yelahanka', icon: <Eye className="h-4 w-4" />, color: 'from-blue-500 to-cyan-400' },
    { year: '2024', title: 'First Security Module', icon: <ShieldCheck className="h-4 w-4" />, color: 'from-emerald-500 to-green-400' },
    { year: '2025', title: 'Full SaaS Architecture', icon: <Server className="h-4 w-4" />, color: 'from-violet-500 to-purple-400' },
    { year: '2026', title: 'Beta Launch', icon: <Rocket className="h-4 w-4" />, color: 'from-primary to-blue-400' },
];

const leaders = [
    {
        name: 'Vikram Hegde',
        role: 'Co-Founder & Lead Developer',
        archetype: 'The Architect',
        description: 'The technical brain behind the platform — designed every module, API, and database schema that powers MillionHuts.',
        gradient: 'from-blue-600 to-blue-400',
        bgGlow: 'bg-blue-500',
        initials: 'VH',
        icon: Code2,
    },
    {
        name: 'Khamar Sultana',
        role: 'Co-Founder & Director',
        archetype: 'The Director',
        description: 'Providing strategic oversight and operational foundation that allows MillionHuts to scale across the region.',
        gradient: 'from-amber-500 to-orange-400',
        bgGlow: 'bg-amber-500',
        initials: 'KS',
        icon: BarChart3,
    },
    {
        name: 'Majid Shaikh',
        role: 'Co-Founder & Operations',
        archetype: 'The Strategist',
        description: 'Leading operational excellence and business development — bridging the gap between product and market.',
        gradient: 'from-emerald-500 to-green-400',
        bgGlow: 'bg-emerald-500',
        initials: 'MS',
        icon: Settings,
    },
];

export default function TimelineAndLeadership() {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: '-80px' });

    return (
        <>
            {/* ════════════════════════════════════════════════ */}
            {/* ── TIMELINE — Horizontal ──────────────────── */}
            {/* ════════════════════════════════════════════════ */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px]" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <motion.div
                        ref={headingRef}
                        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                        animate={headingInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                        transition={{ duration: 0.8, ease: SMOOTH_EASE }}
                        className="text-center mb-14"
                    >
                        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
                            Our Journey
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            The Road{' '}
                            <span className="text-primary italic font-serif">So Far</span>
                        </h2>
                    </motion.div>

                    {/* Horizontal timeline */}
                    <div className="relative">
                        {/* Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: SMOOTH_EASE }}
                            className="absolute top-7 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-primary origin-left hidden md:block"
                        />

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                            {milestones.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.6, delay: i * 0.15, ease: SMOOTH_EASE }}
                                    className="text-center group"
                                >
                                    {/* Node */}
                                    <div className="flex justify-center mb-4">
                                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500 relative`}>
                                            {m.icon}
                                            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${m.color} animate-ping opacity-15`} style={{ animationDuration: '3s' }} />
                                        </div>
                                    </div>
                                    <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>
                                        {m.year}
                                    </span>
                                    <h3 className="text-base md:text-lg font-bold mt-1 group-hover:text-primary transition-colors duration-300">
                                        {m.title}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════ */}
            {/* ── LEADERSHIP — Premium Founder Cards ─────── */}
            {/* ════════════════════════════════════════════════ */}
            <section className="relative py-28 md:py-40 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" />
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-violet-500/4 rounded-full blur-[140px]" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.8, ease: SMOOTH_EASE }}
                        className="text-center mb-20"
                    >
                        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
                            Leadership & Vision
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                            Meet the{' '}
                            <span className="text-primary italic font-serif">Founders</span>
                        </h2>
                        <p className="mt-4 text-lg text-foreground/70 font-medium max-w-xl mx-auto">
                            The visionaries building India&apos;s smartest PG management platform.
                        </p>
                    </motion.div>

                    {/* ── Founder cards — large, premium ── */}
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {leaders.map((leader, i) => {
                            const LeaderIcon = leader.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{
                                        duration: 0.8,
                                        delay: i * 0.15,
                                        ease: SMOOTH_EASE,
                                    }}
                                    className="group"
                                >
                                    <div className="relative h-full rounded-3xl border border-border/50 bg-card overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/8 hover:-translate-y-2">
                                        {/* ── Gradient header ── */}
                                        <div className={`h-40 bg-gradient-to-br ${leader.gradient} relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-black/5" />

                                            {/* Archetype label */}
                                            <span className="absolute top-5 left-6 text-white/70 text-xs font-bold uppercase tracking-widest">
                                                {leader.archetype}
                                            </span>

                                            {/* Decorative icon */}
                                            <LeaderIcon className="absolute right-5 bottom-3 h-24 w-24 text-white/10 group-hover:text-white/20 transition-colors duration-500" />

                                            {/* Avatar — overlapping */}
                                            <div className="absolute bottom-0 left-6 translate-y-1/2">
                                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${leader.gradient} flex items-center justify-center text-white text-2xl font-extrabold shadow-xl border-4 border-background group-hover:scale-110 group-hover:rounded-3xl transition-all duration-500`}>
                                                    {leader.initials}
                                                </div>
                                            </div>
                                        </div>

                                        {/* ── Content ── */}
                                        <div className="p-6 pt-14">
                                            <h3 className="text-2xl font-extrabold group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                                                {leader.name}
                                                <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                                            </h3>
                                            <p className="text-sm text-foreground/80 font-semibold mt-1">
                                                {leader.role}
                                            </p>

                                            {/* Divider */}
                                            <div className={`h-0.5 bg-gradient-to-r ${leader.gradient} opacity-20 rounded-full my-4`} />

                                            <p className="text-foreground/75 text-sm leading-relaxed font-medium">
                                                {leader.description}
                                            </p>
                                        </div>

                                        {/* Bottom gradient line on hover */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${leader.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
