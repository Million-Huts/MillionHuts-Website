import { cities, featuredPGs } from "@/data/homepage";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, MapPin, Star, Heart, Zap } from "lucide-react";
import { Badge } from "../ui/badge";

export default function FeaturedSection() {
    return (
        <div className="space-y-8">
            {/* ================= CITIES SECTION ================= */}
            <section className="py-20 bg-muted/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-left"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                                Explore <span className="text-primary italic">Top Cities</span>
                            </h2>
                            <p className="text-muted-foreground mt-2 text-lg">
                                Verified listings across India's major tech and education hubs.
                            </p>
                        </motion.div>
                        <Button variant="ghost" className="hidden md:flex gap-2 group">
                            Explore all 20+ cities <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {cities.map((city, index) => (
                            <motion.div
                                key={city.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Link href={`/cities/${city.slug}`}>
                                    <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                                        <img
                                            src={city.image}
                                            alt={city.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.5]"
                                        />
                                        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                                            <h3 className="font-bold text-xl">{city.name}</h3>
                                            <p className="text-sm opacity-80">{city.count} Properties</p>

                                            <div className="h-0 opacity-0 group-hover:h-8 group-hover:opacity-100 transition-all duration-300 mt-2">
                                                <span className="text-xs flex items-center gap-1 font-medium bg-white/20 backdrop-blur-md w-fit px-2 py-1 rounded">
                                                    View Stays <ArrowRight className="h-3 w-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= PROPERTIES SECTION ================= */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center mb-16"
                    >
                        <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                            Featured Stay
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Premium <span className="text-primary">PG Selections</span>
                        </h2>
                        <div className="h-1 w-20 bg-primary rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredPGs.map((pg, index) => (
                            <motion.div
                                key={pg.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="group border-none shadow-none hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden bg-transparent">
                                    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                                        <img
                                            src={pg.image}
                                            alt={pg.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Status Overlays */}
                                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                                            <Badge className="bg-white/90 text-black hover:bg-white flex gap-1 items-center backdrop-blur-sm">
                                                <Zap className="h-3 w-3 fill-primary text-primary" />
                                                Trending
                                            </Badge>
                                        </div>

                                        <button className="absolute top-4 right-4 p-2.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-all">
                                            <Heart className="h-5 w-5" />
                                        </button>

                                        <div className="absolute bottom-4 left-4">
                                            <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20">
                                                <span className="text-lg font-bold">₹{pg.price}</span>
                                                <span className="text-xs opacity-80"> / month</span>
                                            </div>
                                        </div>
                                    </div>

                                    <CardContent className="px-1 py-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                                {pg.name}
                                            </h3>
                                            <div className="flex items-center gap-1.5 bg-primary/5 px-2 py-1 rounded-lg">
                                                <Star className="h-4 w-4 fill-primary text-primary" />
                                                <span className="font-bold text-sm">{pg.rating}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                                            <MapPin className="h-4 w-4 text-primary" />
                                            <span className="text-sm truncate">{pg.location}</span>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-dashed">
                                            <div className="flex -space-x-2">
                                                {pg.amenities.slice(0, 3).map((amenity, i) => (
                                                    <div key={i} title={amenity} className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[10px] font-bold">
                                                        {amenity[0]}
                                                    </div>
                                                ))}
                                                {pg.amenities.length > 3 && (
                                                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary border-2 border-background flex items-center justify-center text-[10px] font-bold">
                                                        +{pg.amenities.length - 3}
                                                    </div>
                                                )}
                                            </div>
                                            <Button variant="link" className="p-0 h-auto font-bold text-primary group/link">
                                                View Details
                                                <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 flex justify-center">
                        <Button size="lg" className="rounded-full px-12 py-7 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all">
                            Browse All 5,000+ Listings
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}