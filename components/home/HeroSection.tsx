import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
    MapPin,
    Search,
    ChevronDown,
    CheckCircle2,
    Star,
    Quote
} from 'lucide-react';

export default function HeroSection() {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();
    const { scrollY } = useScroll();

    // Smoother Parallax
    const y1 = useTransform(scrollY, [0, 500], [0, -80]);
    const y2 = useTransform(scrollY, [0, 500], [0, 40]);

    const handleSearch = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/pg?search=${encodeURIComponent(searchQuery)}`);
        } else {
            router.push('/pg');
        }
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-1">
            {/* Ambient Background Blobs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge variant="secondary" className="mb-6 py-1.5 px-4 bg-primary/10 text-primary border-none gap-2 rounded-full">
                            <Star className="h-3 w-3 fill-primary" />
                            <span className="font-bold text-xs uppercase tracking-wider">Premium PG Network</span>
                        </Badge>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
                            Find a Home, <br />
                            <span className="text-primary italic font-serif font-light">Not Just a Room.</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
                            MillionHuts is India's most trusted PG ecosystem. Verified stays, zero brokerage, and a seamless management suite for owners.
                        </p>

                        {/* Wired Search */}
                        <form onSubmit={handleSearch} className="relative group max-w-xl">
                            <div className="flex flex-col md:flex-row items-center gap-3 p-2 bg-card border shadow-2xl rounded-md focus-within:ring-2 ring-primary/20 transition-all">
                                <div className="relative w-full flex items-center">
                                    <MapPin className="absolute left-4 h-5 w-5 text-primary" />
                                    <Input
                                        placeholder="Enter locality or city..."
                                        className="border-none bg-transparent h-12 pl-12 text-base focus-visible:ring-0"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full md:w-auto h-12 px-8 rounded-md bg-primary hover:bg-primary/90 font-bold shadow-lg shadow-primary/20"
                                >
                                    <Search className="h-4 w-4 mr-2" />
                                    Search
                                </Button>
                            </div>
                        </form>

                        <div className="mt-8 flex flex-wrap gap-6">
                            {["Verified PGs", "Direct Owner", "Instant Move-in"].map((text, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm font-bold text-foreground/60">
                                    <CheckCircle2 className="h-4 w-4 text-primary" />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Content: Stylized Image Grid */}
                    <div className="relative h-[550px] lg:h-[650px] md:flex gap-4 hidden">
                        <motion.div style={{ y: y1 }} className="flex-1 flex flex-col gap-4">
                            <div className="h-[60%] rounded-[1rem] overflow-hidden border border-border shadow-2xl shadow-black/5 group">
                                <img src="/images/pg-1.jpg" alt="PG 1" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                            </div>
                            <div className="h-[40%] rounded-[1rem] overflow-hidden border border-border shadow-2xl shadow-black/5 group">
                                <img src="/images/pg-2.jpg" alt="PG 2" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                            </div>
                        </motion.div>

                        <motion.div style={{ y: y2 }} className="flex-1 flex flex-col gap-4 pt-16">
                            <div className="h-[40%] rounded-[1rem] overflow-hidden border border-border shadow-2xl shadow-black/5 group">
                                <img src="/images/pg-3.jpg" alt="PG 3" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                            </div>
                            <div className="h-[60%] rounded-[1rem] overflow-hidden border border-border shadow-2xl shadow-black/5 group">
                                <img src="/images/pg-4.jpg" alt="PG 4" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                            </div>
                        </motion.div>

                        {/* Fixed Review Card: Lower Z-Index and Shorter height */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-4 -left-8 md:-left-16 h-fit glass p-5 rounded-3xl border shadow-2xl max-w-[260px]"
                        >
                            <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mb-3">
                                <Quote className="h-4 w-4 text-primary fill-primary" />
                            </div>
                            <p className="text-xs font-bold leading-relaxed mb-4">
                                "Managing 40+ tenants was a nightmare until I found MillionHuts. Truly a savior."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-blue-600 border-2 border-background shadow-md" />
                                <div>
                                    <p className="text-[11px] font-black">Anand Kulkarni</p>
                                    <p className="text-[9px] text-muted-foreground uppercase tracking-tighter">Verified Property Owner</p>
                                </div>
                            </div>
                        </motion.div> */}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </motion.div>
            </div>
        </section>
    );
}