"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { api } from "@/lib/api";
import { PublicPG, ApiMeta } from "@/interfaces/public-pg";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, MapPin, Star, Loader2, Utensils, Zap } from "lucide-react";
import { Badge } from "../ui/badge";

export default function FeaturedSection() {
    const [pgs, setPgs] = useState<PublicPG[]>([]);
    const [meta, setMeta] = useState<ApiMeta | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const res = await api.get("/pgs", { params: { limit: 6 } });
                if (res.data.success) {
                    setPgs(res.data.data);
                    setMeta(res.data.meta);
                }
            } catch (err) {
                console.error("Failed to fetch PGs");
            } finally {
                setLoading(false);
            }
        };
        fetchFeatured();
    }, []);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="relative py-12 bg-background">
            {/* CONTINUITY: Subtle radial gradient to separate from Hero */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary-muted)_0%,_transparent_70%)] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* HEADER: Centered & Bold */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1 rounded-full text-xs uppercase tracking-widest font-bold">
                            Curated Stays
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                            Move In <span className="text-primary italic">Today</span>
                        </h2>
                        <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
                            Bypass the agents. These verified properties are ready for immediate onboarding with zero brokerage.
                        </p>
                    </motion.div>
                </div>

                {/* LOADING STATE: Custom Skeleton-like feel */}
                <AnimatePresence mode="wait">
                    {loading ? (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="h-[400px] rounded-3xl bg-muted/50 animate-pulse border border-border" />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {pgs.map((pg) => (
                                <motion.div key={pg.pgCode} variants={cardVariants} className="group">
                                    <Card className="relative overflow-hidden rounded-[2rem] border-none bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                                        {/* IMAGE CONTAINER */}
                                        <div className="relative aspect-[16/11] overflow-hidden">
                                            <img
                                                src={pg.coverImage || "/images/placeholder-pg.jpg"}
                                                alt={pg.name}

                                                className="fill object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {/* OVERLAYS */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <Badge className="bg-white/90 backdrop-blur-md text-black border-none font-bold text-[10px] uppercase">
                                                    {pg.pgType}
                                                </Badge>
                                                {pg.messAvailable && (
                                                    <Badge className="bg-primary text-white border-none font-bold text-[10px] uppercase flex items-center gap-1">
                                                        <Utensils className="h-3 w-3" /> Food Inc.
                                                    </Badge>
                                                )}
                                            </div>

                                            {/* PRICE TAG: Glassmorphism */}
                                            <div className="absolute bottom-4 left-4">
                                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl px-4 py-2">
                                                    <span className="text-[10px] uppercase block opacity-70 font-bold">Starts at</span>
                                                    <span className="text-lg font-black">₹{pg.rentStart?.toLocaleString()}</span>
                                                </div>
                                            </div>

                                            {/* QUICK VIEW ICON (Desktop) */}
                                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="bg-primary text-white p-2 rounded-full shadow-lg">
                                                    <Zap className="h-4 w-4 fill-current" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* CONTENT AREA */}
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors truncate">
                                                        {pg.name}
                                                    </h3>
                                                    <div className="flex items-center gap-1.5 text-muted-foreground mt-1 text-sm font-medium">
                                                        <MapPin className="h-3.5 w-3.5 text-primary" />
                                                        {pg.city}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <div className="flex items-center gap-1 bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 px-2 py-0.5 rounded-full text-xs font-bold border border-yellow-400/20">
                                                        <Star className="h-3 w-3 fill-current" />
                                                        4.5
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                                                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                                    Direct Owner
                                                </div>
                                                <Link href={`/pg/${pg.pgCode}`} className="flex items-center text-primary text-sm font-bold group/link">
                                                    View Property
                                                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* BOTTOM CTA: Continuity with a clean button */}
                <div className="mt-20 text-center">
                    <Link href="/pg">
                        <Button
                            size="lg"
                            className="px-10 py-7 rounded-2xl text-base font-bold shadow-xl shadow-primary/20 hover:scale-[1.03] active:scale-95 transition-all"
                        >
                            Explore All {meta?.total || ""} Options
                        </Button>
                    </Link>
                    {meta && (
                        <p className="text-sm font-medium text-muted-foreground mt-6 opacity-60">
                            Verified through <span className="text-foreground">MillionHuts Trust Engine</span>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}