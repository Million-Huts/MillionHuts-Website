import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function AboutCTA() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[120px]" />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                        Ready to Modernize <span className="text-primary italic font-serif">Your PG?</span>
                    </h2>
                    <p className="text-base text-foreground/65 mb-8 max-w-lg mx-auto leading-relaxed">
                        Join the growing community of PG owners who are leaving paper registers behind and stepping into the future with MillionHuts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/pricing">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-md shadow-primary/15 gap-2 px-6 h-12 rounded-xl">Get Started <ArrowRight className="h-4 w-4" /></Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="gap-2 px-6 h-12 rounded-xl border-primary/20 hover:bg-primary/5">Contact Us</Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
