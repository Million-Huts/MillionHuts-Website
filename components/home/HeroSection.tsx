import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Optimized Next.js Images
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { MapPin, Search, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const { scrollY } = useScroll();

    // Use Spring for smoother parallax on desktop
    const smoothY = useSpring(scrollY, { stiffness: 100, damping: 30 });
    const y1 = useTransform(smoothY, [0, 500], [0, -80]);
    const y2 = useTransform(smoothY, [0, 500], [0, 40]);

    const handleSearch = (e?: React.FormEvent) => {
        e?.preventDefault();
        router.push(searchQuery.trim() ? `/pg?search=${encodeURIComponent(searchQuery)}` : '/pg');
    };

    return (
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-background">
            {/* 1. CONTINUITY LAYER: Background Glows */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px]" />
                {/* Grid Pattern for that "SaaS" depth */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* LEFT CONTENT: Optimized for Android Readability */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Badge variant="outline" className="mb-6 py-1 px-4 border-primary/20 bg-primary/5 text-primary rounded-full text-sm backdrop-blur-sm">
                            ✨ 1000+ Managed Properties
                        </Badge>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6">
                            Premium PGs <br />
                            <span className="text-primary italic">Zero</span> Brokerage.
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
                            Stop paying middle-men. Direct owner listings with <span className="text-foreground font-semibold">MillionHuts</span> verified safety standards.
                        </p>

                        {/* SEARCH: High Contrast for Mobile */}
                        <form onSubmit={handleSearch} className="relative max-w-2xl group">
                            <div className="flex flex-col md:flex-row items-center gap-2 p-2 bg-card/80 backdrop-blur-xl border border-border shadow-2xl rounded-2xl focus-within:border-primary transition-all">
                                <div className="relative w-full flex items-center">
                                    <MapPin className="absolute left-4 h-5 w-5 text-primary" />
                                    <Input
                                        placeholder="Area or Landmark..."
                                        className="border-none bg-transparent h-14 pl-12 text-lg focus-visible:ring-0 placeholder:text-muted-foreground/60"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full md:w-auto h-14 px-8 bg-primary text-primary-foreground hover:scale-[1.02] active:scale-95 transition-transform rounded-xl font-bold text-base shadow-lg shadow-primary/20"
                                >
                                    <Search className="h-5 w-5 mr-2" />
                                    Explore Now
                                </Button>
                            </div>
                        </form>

                        {/* TRUST POINTS */}
                        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                            {["No Brokerage", "Safe & Secure", "Instant Booking"].map((text, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground/80 capitalize">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT: High-Fidelity Desktop Visuals */}
                    <div className="relative h-[650px] hidden lg:flex gap-6 perspective-1000">
                        <motion.div style={{ y: y1 }} className="flex-1 flex flex-col gap-6">
                            <div className="relative h-[60%] rounded-[2rem] overflow-hidden border-4 border-background shadow-soft group">
                                <Image src="/images/pg-1.jpg" fill alt="PG 1" className="object-cover transition-transform duration-700 group-hover:scale-110" priority />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                            <div className="relative h-[40%] rounded-[2rem] overflow-hidden border-4 border-background shadow-soft group">
                                <Image src="/images/pg-2.jpg" fill alt="PG 2" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                        </motion.div>

                        <motion.div style={{ y: y2 }} className="flex-1 flex flex-col gap-6 pt-20">
                            <div className="relative h-[45%] rounded-[2rem] overflow-hidden border-4 border-background shadow-soft group">
                                <Image src="/images/pg-3.jpg" fill alt="PG 3" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="relative h-[55%] rounded-[2rem] overflow-hidden border-4 border-background shadow-soft group">
                                <Image src="/images/pg-4.jpg" fill alt="PG 4" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 3. TRANSITION GRADIENT: Continuity to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none" />
        </section>
    );
}