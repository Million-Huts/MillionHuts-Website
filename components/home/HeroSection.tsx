import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
    ArrowRight,
    ChevronDown,
    MapPin,
    Search,
    Users,
    CheckCircle2,
    Star
} from 'lucide-react';

export default function HeroSection() {
    const [searchCity, setSearchCity] = useState('');
    const { scrollY } = useScroll();

    // Parallax effects for the image columns
    const y1 = useTransform(scrollY, [0, 500], [0, -50]);
    const y2 = useTransform(scrollY, [0, 500], [0, 50]);

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
            {/* Dynamic Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply animate-blob" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content: Text & Search */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex justify-center lg:justify-start">
                            <Badge variant="secondary" className="mb-6 py-1.5 px-4 bg-primary/5 text-primary border-primary/20 gap-2">
                                <Star className="h-3 w-3 fill-primary" />
                                Rated 4.9/5 by 1,000+ Property Owners
                            </Badge>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center lg:text-left leading-[1.1]">
                            Find a Home, <br />
                            <span className="text-primary italic font-serif">Not Just a Room.</span>
                        </h1>

                        <p className="mt-8 text-xl text-muted-foreground text-center lg:text-left max-w-xl">
                            MillionHuts streamlines PG living. Discover verified stays with zero brokerage or manage your rental empire with ease.
                        </p>

                        {/* Premium Search Container */}
                        <div className="mt-10 p-2 bg-card border rounded-2xl shadow-xl max-w-2xl mx-auto lg:mx-0">
                            <div className="flex flex-col md:flex-row items-center gap-2">
                                <div className="relative w-full">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
                                    <Input
                                        placeholder="Search Koramangala, HSR..."
                                        className="border-none bg-transparent h-14 pl-12 text-lg focus-visible:ring-0"
                                        value={searchCity}
                                        onChange={(e) => setSearchCity(e.target.value)}
                                    />
                                </div>
                                <Button size="lg" className="w-full md:w-auto h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 gap-2 text-lg">
                                    <Search className="h-5 w-5" />
                                    Find Stay
                                </Button>
                            </div>
                        </div>

                        {/* Trust Markers */}
                        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
                            {[
                                { icon: <CheckCircle2 className="h-5 w-5 text-green-500" />, label: "Verified PGs" },
                                { icon: <CheckCircle2 className="h-5 w-5 text-green-500" />, label: "Direct Owner" },
                                { icon: <CheckCircle2 className="h-5 w-5 text-green-500" />, label: "Smart Payments" }
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                    {feature.icon}
                                    {feature.label}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Content: Parallax Image Grid */}
                    <div className="hidden lg:flex gap-4 h-[600px] relative">
                        <motion.div style={{ y: y1 }} className="flex flex-col gap-4 w-1/2">
                            <div className="h-2/3 rounded-3xl overflow-hidden border-4 border-background shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                                <img src="/images/pg-1.jpg" alt="Modern PG Interior" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-1/3 rounded-3xl overflow-hidden border-4 border-background shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                                <img src="/images/pg-2.jpg" alt="Social Space" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>

                        <motion.div style={{ y: y2 }} className="flex flex-col gap-4 w-1/2 pt-12">
                            <div className="h-1/3 rounded-3xl overflow-hidden border-4 border-background shadow-2xl transition-transform hover:scale-[1.02] duration-500">
                                <img src="/images/pg-3.jpg" alt="Minimalist Bedroom" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-2/3 rounded-3xl overflow-hidden border-4 border-background shadow-2xl transition-transform hover:scale-[1.02] duration-500 relative group">
                                <img src="/images/pg-4.jpg" alt="Kitchen Area" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>

                        {/* Floating Review Card */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1, type: "spring" }}
                            className="absolute -bottom-6 -left-12 glass p-4 rounded-2xl border shadow-2xl max-w-[240px]"
                        >
                            <div className="flex gap-1 mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <p className="text-xs font-medium italic">"The management app for owners is a game changer. I collect rent 2x faster now."</p>
                            <div className="flex items-center gap-2 mt-3">
                                <div className="h-8 w-8 rounded-full bg-primary/20" />
                                <div className="text-[10px]">
                                    <p className="font-bold">Anand K.</p>
                                    <p className="text-muted-foreground">Property Owner, Bangalore</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Down */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown className="h-5 w-5" />
                </motion.div>
            </div>
        </section>
    );
}