"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { api } from "@/lib/api"; // Adjust path to your axios instance
import { PublicPG, ApiMeta } from "@/interfaces/public-pg";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, MapPin, Star, Heart, Zap, Loader2, Utensils } from "lucide-react";
import { Badge } from "../ui/badge";
import { cities } from "@/data/homepage"; // Keep static cities for now or fetch if needed

export default function FeaturedSection() {
    const [pgs, setPgs] = useState<PublicPG[]>([]);
    const [meta, setMeta] = useState<ApiMeta | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                setLoading(true);
                // Fetching with a limit of 6 for the homepage "Featured" view
                const res = await api.get("/pgs", { params: { limit: 6 } });
                if (res.data.success) {
                    setPgs(res.data.data);
                    setMeta(res.data.meta);
                }
            } catch (error) {
                console.error("Failed to fetch featured PGs");
            } finally {
                setLoading(false);
            }
        };

        fetchFeatured();
    }, []);

    return (
        <div className="space-y-8">
            {/* ================= CITIES SECTION (Static or Dynamic) ================= */}
            <section className="py-20 bg-muted/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                                Explore <span className="text-primary italic">Top Cities</span>
                            </h2>
                            <p className="text-muted-foreground mt-2 text-lg">
                                Verified listings across India's major hubs.
                            </p>
                        </motion.div>
                        <Link href="/search">
                            <Button variant="ghost" className="group">
                                Explore all cities <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {cities.map((city, index) => (
                            <motion.div key={city.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                                <Link href={`/search?city=${city.name}`}>
                                    <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                                        <img src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.5]" />
                                        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                                            <h3 className="font-bold text-xl">{city.name}</h3>
                                            <span className="text-xs flex items-center gap-1 font-medium bg-white/20 backdrop-blur-md w-fit px-2 py-1 rounded mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                View <ArrowRight className="h-3 w-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= PROPERTIES SECTION (Live Data) ================= */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center text-center mb-16">
                        <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Live Listings</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Premium <span className="text-primary">PG Selections</span>
                        </h2>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                    </motion.div>

                    {loading ? (
                        /* Skeleton / Loading State */
                        <div className="flex flex-col items-center justify-center py-20 gap-4">
                            <Loader2 className="h-10 w-10 animate-spin text-primary" />
                            <p className="font-bold text-muted-foreground animate-pulse">Fetching the best stays for you...</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {pgs.map((pg, index) => (
                                <motion.div key={pg.pgCode} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                                    <Card className="group border-none shadow-none hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden bg-transparent">
                                        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-muted">
                                            <img
                                                src={pg.coverImage || "/images/placeholder-pg.jpg"}
                                                alt={pg.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />

                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <Badge className="bg-white/90 text-black hover:bg-white flex gap-1 items-center backdrop-blur-sm border-none font-bold">
                                                    <Zap className="h-3 w-3 fill-primary text-primary" />
                                                    {pg.pgType}
                                                </Badge>
                                                {pg.messAvailable && (
                                                    <Badge className="bg-primary text-white border-none font-bold">
                                                        <Utensils className="h-3 w-3 mr-1" /> Mess
                                                    </Badge>
                                                )}
                                            </div>

                                            <div className="absolute bottom-4 left-4">
                                                <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20">
                                                    <span className="text-lg font-bold">₹{pg.rentStart?.toLocaleString()}</span>
                                                    <span className="text-xs opacity-80"> - ₹{pg.rentUpto?.toLocaleString()}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <CardContent className="px-1 py-6">
                                            <div className="flex justify-between items-center mb-3">
                                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors truncate pr-4">
                                                    {pg.name}
                                                </h3>
                                                <div className="flex items-center gap-1.5 bg-primary/5 px-2 py-1 rounded-lg shrink-0">
                                                    <Star className="h-4 w-4 fill-primary text-primary" />
                                                    <span className="font-bold text-sm">4.5</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-muted-foreground mb-4">
                                                <MapPin className="h-4 w-4 text-primary shrink-0" />
                                                <span className="text-sm truncate">{pg.city}, {pg.state}</span>
                                            </div>

                                            <div className="flex items-center justify-between pt-4 border-t border-dashed">
                                                <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                                    Code: {pg.pgCode}
                                                </div>
                                                <Link href={`/pg/${pg.pgCode}`}>
                                                    <Button variant="link" className="p-0 h-auto font-bold text-primary group/link">
                                                        View Details
                                                        <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    <div className="mt-16 flex flex-col items-center gap-4">
                        <Link href="/search">
                            <Button size="lg" className="rounded-full px-12 py-7 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                                Browse All {meta?.total || ""} Listings
                            </Button>
                        </Link>
                        {meta && <p className="text-sm text-muted-foreground font-medium">Showing {pgs.length} of {meta.total} properties</p>}
                    </div>
                </div>
            </section>
        </div>
    );
}