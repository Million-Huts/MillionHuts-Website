import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Code2, BarChart3, Settings } from 'lucide-react';

const leaders = [
    {
        name: 'Vikram Hegde',
        role: 'Co-Founder & Lead Developer',
        archetype: 'The Architect',
        description:
            'The technical brain behind the platform, responsible for the architecture from the first line of code to the Beta launch. Vikram designed every module, API, and database schema that powers MillionHuts.',
        gradient: 'from-blue-600 to-blue-400',
        initials: 'VH',
        icon: Code2,
    },
    {
        name: 'Khamar Sultana',
        role: 'Co-Founder & Director',
        archetype: 'The Director',
        description:
            'Providing the strategic oversight and operational foundation that allows MillionHuts to scale across the region. Khamar ensures every decision aligns with our mission of digitizing coliving.',
        gradient: 'from-amber-500 to-orange-400',
        initials: 'KS',
        icon: BarChart3,
    },
    {
        name: 'Majid Shaikh',
        role: 'Co-Founder & Operations',
        archetype: 'The Strategist',
        description:
            'Leading operational excellence and business development, Majid bridges the gap between product and market — ensuring MillionHuts solves real problems for real PG owners.',
        gradient: 'from-emerald-500 to-green-400',
        initials: 'MS',
        icon: Settings,
    },
];

export default function Leadership() {
    return (
        <section className="relative py-28 md:py-36 overflow-hidden bg-background">
            <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-4 block">
                        Leadership & Vision
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        Meet the{' '}
                        <span className="text-primary italic font-serif">Founders</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {leaders.map((leader, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.15,
                                ease: [0.25, 0.4, 0.25, 1],
                            }}
                            className="group"
                        >
                            <div className="relative h-full p-8 md:p-10 rounded-3xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
                                {/* Background glow */}
                                <div
                                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${leader.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-15 transition-opacity duration-700`}
                                />

                                {/* Archetype label */}
                                <span
                                    className={`inline-block text-xs font-bold uppercase tracking-widest mb-6 bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent`}
                                >
                                    {leader.archetype}
                                </span>

                                {/* Avatar */}
                                <div
                                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${leader.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:rounded-3xl transition-all duration-500 mb-6`}
                                >
                                    {leader.initials}
                                </div>

                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                                    {leader.name}
                                </h3>
                                <p className="text-sm text-primary/80 font-semibold mt-1">
                                    {leader.role}
                                </p>
                                <p className="text-foreground/65 mt-4 leading-relaxed text-sm">
                                    {leader.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
