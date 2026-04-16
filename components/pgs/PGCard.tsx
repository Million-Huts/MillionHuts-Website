// components/pg/PGCard.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Star, Zap, Utensils, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PublicPG } from "@/interfaces/public-pg";

interface PGCardProps {
    pg: PublicPG;
    index?: number;
}

export function PGCard({ pg, index = 0 }: PGCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
        >
            <Card className="group border-none shadow-none hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden bg-card">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                        src={pg.coverImage || "/images/placeholder-pg.jpg"}
                        alt={pg.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Badges Overlay */}
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

                    {/* Rent Overlay */}
                    <div className="absolute bottom-4 left-4">
                        <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20">
                            <span className="text-lg font-bold">₹{pg.rentStart?.toLocaleString()}</span>
                            <span className="text-xs opacity-80"> onwards</span>
                        </div>
                    </div>
                </div>

                <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors truncate pr-4">
                            {pg.name}
                        </h3>
                        <div className="flex items-center gap-1.5 bg-primary/5 px-2 py-0.5 rounded-lg shrink-0">
                            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                            <span className="font-bold text-xs">4.5</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-xs truncate">{pg.city}, {pg.state}</span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-dashed">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                            ID: {pg.pgCode}
                        </span>
                        <Link href={`/pg/${pg.pgCode}`}>
                            <Button variant="link" className="p-0 h-auto font-bold text-primary text-sm group/link">
                                View Details
                                <ArrowRight className="ml-1 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}