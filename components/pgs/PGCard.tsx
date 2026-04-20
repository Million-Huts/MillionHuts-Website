import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Utensils, ArrowRight, ShieldCheck, Waves, Wifi, Wind, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Mapping icons to common amenity slugs for visual flair
const AMENITY_ICONS: Record<string, any> = {
    "wi-fi": Wifi,
    "air-conditioning": Wind,
    "ro-water": Waves,
    "cctv-surveillance": ShieldCheck,
};

export function PGCard({ pg, index = 0 }: { pg: any; index?: number }) {
    const amenitiesToShow = pg.amenities?.slice(0, 4) || [];
    const remainingCount = (pg.amenities?.length || 0) - amenitiesToShow.length;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="w-full mb-6"
        >
            <Link href={`/pg/${pg.pgCode}`}>
                <Card className="group flex flex-col md:flex-row overflow-hidden border border-border shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer bg-card min-h-[280px]">

                    {/* LEFT: Image Section (Flex-1 on Desktop) */}
                    <div className="relative w-full md:flex-1 overflow-hidden bg-muted aspect-video md:aspect-auto">
                        <img
                            src={pg.coverImage || "/images/placeholder-pg.jpg"}
                            alt={pg.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Type Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {pg.pgType && (
                                <Badge className="w-fit bg-background/70 backdrop-blur-md text-foreground border-none font-black px-3 py-1 text-[10px] tracking-widest uppercase">
                                    {pg.pgType}
                                </Badge>
                            )}
                            {pg.messAvailable && (
                                <Badge className="w-fit bg-primary text-primary-foreground border-none font-black px-3 py-1 text-[10px] tracking-widest uppercase shadow-lg">
                                    <Utensils className="h-3 w-3 mr-1" /> Mess Inc.
                                </Badge>
                            )}
                        </div>

                        {/* Rent Overlay (Mobile Only) */}
                        <div className="absolute bottom-4 left-4 md:hidden">
                            <div className="bg-background px-3 py-1.5 rounded-lg shadow-xl border border-border font-bold text-sm text-foreground">
                                ₹{pg.rentStart || "N/A"}+
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Details Section (Flex-2 on Desktop) */}
                    <div className="flex-[2] p-6 md:p-8 flex flex-col justify-between">
                        <div className="space-y-4">
                            {/* Header */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black tracking-tighter group-hover:text-primary transition-colors leading-none mb-2 text-card-foreground">
                                        {pg.name}
                                    </h3>
                                    <p className="flex items-center gap-1.5 text-muted-foreground text-sm font-medium italic">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        {pg.locality && `${pg.locality}, `}{pg.city}, {pg.state}
                                    </p>
                                </div>
                                <div className="hidden md:block text-right">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">Monthly Rent</p>
                                    <p className="text-2xl font-black text-primary leading-none">
                                        ₹{pg.rentStart || "—"}
                                        <span className="text-xs text-muted-foreground font-medium"> / mo</span>
                                    </p>
                                </div>
                            </div>

                            {/* Address (Desktop Only) */}
                            <p className="hidden md:block text-sm text-muted-foreground font-medium max-w-xl line-clamp-1">
                                {pg.address}
                            </p>

                            {/* Amenities (Desktop Only) */}
                            <div className="hidden md:flex flex-wrap gap-2 pt-2">
                                {amenitiesToShow.map((item: any) => {
                                    const Icon = AMENITY_ICONS[item.amenity.slug] || Info;
                                    return (
                                        <Badge
                                            key={item.id}
                                            variant="secondary"
                                            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold px-3 py-1.5 rounded-xl border-none gap-2 flex items-center"
                                        >
                                            <Icon className="h-3.5 w-3.5" />
                                            {item.amenity.name}
                                        </Badge>
                                    );
                                })}
                                {remainingCount > 0 && (
                                    <Badge variant="outline" className="font-bold px-3 py-1.5 rounded-xl border-dashed border-2 border-border text-muted-foreground">
                                        +{remainingCount} More
                                    </Badge>
                                )}
                            </div>
                        </div>

                        {/* Footer Section */}
                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                            <div className="flex gap-4">
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">PG Code</span>
                                    <span className="text-xs font-bold font-mono text-card-foreground">{pg.pgCode}</span>
                                </div>
                            </div>

                            <Button className="rounded-sm font-bold gap-2 px-6 h-11 shadow-lg shadow-primary/20 bg-primary text-primary-foreground hover:bg-primary/90">
                                View Property <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
}