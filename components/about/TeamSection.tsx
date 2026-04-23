import { motion } from 'framer-motion';
import {
    FlaskConical,
    Megaphone,
    GraduationCap,
    Headphones,
    Sparkles,
} from 'lucide-react';

const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Team Data — NO founders (they're in Leadership) ── */
const departments = [
    {
        name: 'Research & Development',
        icon: FlaskConical,
        gradient: 'from-violet-500 to-purple-400',
        description: 'The innovators pushing boundaries every day.',
        members: [
            { name: 'Afreen', role: 'Frontend Developer', initials: 'AF', color: 'from-violet-500 to-purple-400' },
            { name: 'Satvik', role: 'Backend Developer', initials: 'SA', color: 'from-blue-500 to-cyan-400' },
            { name: 'Venkatesh', role: 'Full Stack Developer', initials: 'VE', color: 'from-indigo-500 to-blue-400' },
            { name: 'Sonu', role: 'Mobile Developer', initials: 'SO', color: 'from-teal-500 to-emerald-400' },
        ],
    },
    {
        name: 'Marketing Team',
        icon: Megaphone,
        gradient: 'from-pink-500 to-rose-400',
        description: 'Spreading the word across India.',
        members: [
            { name: 'Seetaram', role: 'Marketing Lead', initials: 'SE', color: 'from-pink-500 to-rose-400' },
            { name: 'Rohit', role: 'Growth Strategist', initials: 'RO', color: 'from-orange-500 to-amber-400' },
            { name: 'Amina', role: 'Content Strategist', initials: 'AM', color: 'from-red-500 to-rose-400' },
        ],
    },
    {
        name: 'Advisory Team',
        icon: GraduationCap,
        gradient: 'from-sky-500 to-blue-400',
        description: 'Guiding our strategic direction.',
        members: [
            { name: 'Vallabh', role: 'Strategic Advisor', initials: 'VA', color: 'from-sky-500 to-blue-400' },
        ],
    },
    {
        name: 'Technical & Support',
        icon: Headphones,
        gradient: 'from-emerald-500 to-green-400',
        description: 'Ensuring everything runs smoothly.',
        members: [
            { name: 'Saba', role: 'Technical Support', initials: 'SB', color: 'from-emerald-500 to-teal-400' },
            { name: 'Yasmeen', role: 'Customer Support', initials: 'YA', color: 'from-green-500 to-emerald-400' },
        ],
    },
];

function MemberCard({
    member,
    index,
}: {
    member: { name: string; role: string; initials: string; color: string };
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: SMOOTH_EASE,
            }}
            className="group"
        >
            <div className="relative p-6 rounded-2xl border border-border bg-card text-center hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden">
                {/* Top accent on hover */}
                <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Avatar */}
                <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 group-hover:rounded-3xl transition-all duration-500`}
                >
                    {member.initials}
                </div>

                <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {member.name}
                </h3>
                <p className="text-sm text-foreground/60 mt-1">{member.role}</p>
            </div>
        </motion.div>
    );
}

export default function TeamSection() {
    return (
        <section className="relative py-28 md:py-36 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[160px]" />
                <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-violet-500/4 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8, ease: SMOOTH_EASE }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary mb-4">
                        <Sparkles className="h-4 w-4" />
                        Our Team
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        The People Behind{' '}
                        <span className="text-primary italic font-serif">MillionHuts</span>
                    </h2>
                    <p className="mt-4 text-lg text-foreground/70 font-medium max-w-2xl mx-auto">
                        A passionate team of builders, designers, and strategists working together
                        to digitize India&apos;s coliving industry.
                    </p>
                </motion.div>

                {/* Department sections */}
                <div className="space-y-20">
                    {departments.map((dept, deptIndex) => (
                        <motion.div
                            key={deptIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{
                                duration: 0.7,
                                ease: SMOOTH_EASE,
                            }}
                        >
                            {/* Department header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div
                                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${dept.gradient} flex items-center justify-center text-white shadow-lg`}
                                >
                                    <dept.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{dept.name}</h3>
                                    <p className="text-sm text-foreground/60">
                                        {dept.description}
                                    </p>
                                </div>
                            </div>

                            {/* Divider line */}
                            <div
                                className={`h-0.5 bg-gradient-to-r ${dept.gradient} opacity-20 rounded-full mb-8`}
                            />

                            {/* Members grid */}
                            <div
                                className={`grid gap-5 ${
                                    dept.members.length === 1
                                        ? 'grid-cols-1 max-w-xs'
                                        : dept.members.length === 2
                                        ? 'grid-cols-1 sm:grid-cols-2 max-w-lg'
                                        : dept.members.length === 3
                                        ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-3xl'
                                        : 'grid-cols-2 md:grid-cols-4'
                                } ${dept.members.length <= 3 ? 'mx-auto' : ''}`}
                            >
                                {dept.members.map((member, memberIndex) => (
                                    <MemberCard
                                        key={memberIndex}
                                        member={member}
                                        index={memberIndex}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
