import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Building2, Globe, Heart } from 'lucide-react';

const values = [
    { icon: <MapPin className="h-5 w-5" />, title: 'Bengaluru-Born', desc: 'Rooted in India\'s tech capital, built with the energy of Yelahanka\'s growing startup ecosystem.' },
    { icon: <Building2 className="h-5 w-5" />, title: 'Industry-First', desc: 'Purpose-built for the coliving and PG management industry—not a generic tool repurposed.' },
    { icon: <Globe className="h-5 w-5" />, title: 'Global Ambition', desc: 'Starting local, scaling global. Our architecture is designed for multi-region, multi-currency operations.' },
    { icon: <Heart className="h-5 w-5" />, title: 'Human-Centered', desc: 'Every feature is designed around real pain points experienced by real PG owners and tenants.' },
];

export default function TrustValues() {
    const headingRef = useRef<HTMLDivElement>(null);
    const headingInView = useInView(headingRef, { once: true, margin: '-60px' });

    return (
        <section className="relative py-20 md:py-28 overflow-hidden bg-background">
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px] -z-10" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <motion.div ref={headingRef} initial={{ opacity: 0, y: 20 }} animate={headingInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">What We Stand For</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Core Values</h2>
                    <div className="mt-3 h-0.5 w-12 bg-primary/30 mx-auto rounded-full" />
                </motion.div>
                <div className="grid sm:grid-cols-2 gap-5">
                    {values.map((v, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }} className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-400 hover:shadow-md hover:shadow-primary/5">
                            <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">{v.icon}</div>
                            <h3 className="text-base font-bold mb-1.5 group-hover:text-primary transition-colors duration-300">{v.title}</h3>
                            <p className="text-foreground/65 text-sm leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
