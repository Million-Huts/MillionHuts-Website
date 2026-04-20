"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { api } from "@/lib/api";
import { PGImageCarousel } from "@/components/pgDetails/PGImageCarousel";
import { PGSidebarCard } from "@/components/pgDetails/PGSidebarCard";
import { PGAmenities } from "@/components/pgDetails/PGAmenities";
import { PGRules } from "@/components/pgDetails/PGRules";
import { DetailsSkeleton } from "@/components/pgDetails/DetailsSkeleton";
import { PGMap } from "@/components/pgDetails/PGMap";
import { MapPin, Star, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PGInfoPage() {
    const params = useParams();
    const pgCode = params?.pgCode as string;
    const [pg, setPg] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!pgCode) return;
        const fetchDetails = async () => {
            try {
                const res = await api.get(`/pgs/${pgCode}`);
                if (res.data.success) setPg(res.data.data);
            } catch (err) {
                console.error("Error fetching PG details");
            } finally {
                setLoading(false);
            }
        };
        fetchDetails();
    }, [pgCode]);

    if (loading) return <DetailsSkeleton />;
    if (!pg) return <div className="p-20 text-center font-bold text-foreground">PG Not Found</div>;

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {/* Header Information */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold px-3 py-1 uppercase tracking-widest text-[10px]">
                                {pg.details.pgType}
                            </Badge>
                            <div className="flex items-center gap-1 text-sm font-bold">
                                <Star className="w-4 h-4 fill-chart-3 text-chart-3" />
                                <span>4.8</span>
                                <span className="text-muted-foreground font-medium">(124 reviews)</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
                            {pg.name}
                        </h1>
                        <p className="flex items-center gap-2 text-muted-foreground font-medium">
                            <MapPin size={18} className="text-primary" />
                            {pg.address}, {pg.city}, {pg.state}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-accent"><Share2 size={18} /></Button>
                        <Button variant="outline" size="icon" className="rounded-full border-border hover:bg-accent"><Heart size={18} /></Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Carousel is now inside the content grid */}
                        <PGImageCarousel images={pg.images} />

                        <section id="description" className="space-y-4">
                            <h3 className="text-2xl font-black tracking-tight">About this property</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Experience premium {pg.details.pgType.toLowerCase()} accommodation in the heart of {pg.locality || pg.city}.
                                This property is managed by professionals and features {pg.details.messAvailable ? `a ${pg.details.messType} mess` : 'self-cooking'} with top-tier security.
                            </p>
                        </section>

                        <div className="lg:hidden">
                            <PGSidebarCard pg={pg} />
                        </div>

                        <PGAmenities amenities={pg.amenities} />
                        <PGRules rules={pg.rules} />
                        <PGMap lat={pg.latitude} lng={pg.longitude} name={pg.name} />
                    </div>

                    {/* Sticky Sidebar */}
                    <aside className="hidden lg:block sticky top-24">
                        <PGSidebarCard pg={pg} />
                    </aside>
                </div>
            </div>
        </div>
    );
}