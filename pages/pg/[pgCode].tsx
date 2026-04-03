"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { api } from "@/lib/api";
import { PGDetails } from "@/interfaces/public-pg";
import {
    MapPin, Star, Share2, Heart, ShieldCheck,
    Clock, Utensils, Zap, Phone, Info, CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function PGInfoPage() {
    const { pgCode } = useParams();
    const [pg, setPg] = useState<PGDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
    if (!pg) return <div className="p-20 text-center font-bold">PG Not Found</div>;

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* 1. HEADER SECTION */}
            <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-primary/10 text-primary border-none font-bold uppercase tracking-widest text-[10px]">
                                {pg.details.pgType}
                            </Badge>
                            <span className="text-muted-foreground text-sm font-medium flex items-center gap-1">
                                <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.8 (120 Reviews)
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                            {pg.name}
                        </h1>
                        <p className="flex items-center gap-1 text-muted-foreground mt-2 font-medium">
                            <MapPin size={18} className="text-primary" />
                            {pg.address}, {pg.city}, {pg.state} - {pg.pincode}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full"><Share2 size={18} /></Button>
                        <Button variant="outline" size="icon" className="rounded-full"><Heart size={18} /></Button>
                    </div>
                </div>

                {/* 2. IMAGE GALLERY (Bento Grid Style) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[300px] md:h-[500px] mb-12">
                    <div className="md:col-span-2 relative overflow-hidden rounded-[32px] group">
                        <img src={pg.coverImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Cover" />
                    </div>
                    <div className="hidden md:grid col-span-2 grid-cols-2 gap-4">
                        {pg.images.slice(0, 4).map((img, i) => (
                            <div key={img.id} className="relative overflow-hidden rounded-[24px] bg-muted group">
                                <img src={img.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Gallery" />
                                {i === 3 && pg.images.length > 4 && (
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold cursor-pointer">
                                        +{pg.images.length - 4} More
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. CONTENT LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Quick Specs */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <SpecCard icon={<Clock size={20} />} label="Notice Period" value={`${pg.details.noticePeriod} Days`} />
                            <SpecCard icon={<Utensils size={20} />} label="Mess" value={pg.details.messAvailable ? pg.details.messType || 'Available' : 'N/A'} />
                            <SpecCard icon={<ShieldCheck size={20} />} label="Verified" value="Govt Regd." />
                            <SpecCard icon={<Zap size={20} />} label="Rent Cycle" value={`${pg.details.rentCycleDay}th / Month`} />
                        </div>

                        {/* About / Description (Static Placeholder + Logic) */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4">About this PG</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Experience premium living at {pg.name}. Located in the heart of {pg.city}, this {pg.details.pgType.toLowerCase()} accommodation offers a blend of comfort and security. With high-speed internet and professional management, it's perfect for students and working professionals.
                            </p>
                        </div>

                        {/* Rules Section */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">House Rules</h3>
                            <div className="space-y-6">
                                {pg.rules.map((section, i) => (
                                    <div key={i} className="bg-muted/30 rounded-[24px] p-6 border border-border/50">
                                        <h4 className="font-black text-primary uppercase tracking-widest text-xs mb-4">{section.title}</h4>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {section.items.map((rule, j) => (
                                                <div key={j} className="flex gap-3">
                                                    <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                                                    <div>
                                                        <p className="font-bold text-sm">{rule.name}</p>
                                                        <p className="text-xs text-muted-foreground">{rule.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Pricing Sidebar */}
                    <div className="lg:relative">
                        <div className="sticky top-24 rounded-[32px] border border-border/50 bg-card p-8 shadow-2xl shadow-primary/5">
                            <div className="mb-6">
                                <p className="text-muted-foreground font-bold text-sm mb-1 uppercase tracking-tighter">Starting from</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black">₹{pg.details.rentStart.toLocaleString()}</span>
                                    <span className="text-muted-foreground font-medium">/ month</span>
                                </div>
                                <p className="text-xs text-primary font-bold mt-2 bg-primary/5 w-fit px-2 py-1 rounded">
                                    Upto ₹{pg.details.rentUpto.toLocaleString()} based on occupancy
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm py-2 border-b border-dashed">
                                    <span className="text-muted-foreground">Security Deposit</span>
                                    <span className="font-bold">1 Month Rent</span>
                                </div>
                                <div className="flex justify-between text-sm py-2 border-b border-dashed">
                                    <span className="text-muted-foreground">Electricity</span>
                                    <span className="font-bold">As per meter</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Button className="w-full h-14 rounded-2xl text-lg font-black uppercase tracking-widest">
                                    Book Visit
                                </Button>
                                <Button variant="outline" className="w-full h-14 rounded-2xl font-bold flex gap-2">
                                    <Phone size={18} /> Contact Manager
                                </Button>
                            </div>

                            <div className="mt-6 p-4 bg-muted/50 rounded-2xl flex gap-3 items-center">
                                <Info size={20} className="text-muted-foreground" />
                                <p className="text-[11px] text-muted-foreground leading-snug">
                                    Registration No: <span className="font-mono font-bold uppercase">{pg.details.registrationNo}</span>.
                                    Always verify the PG in person before making payments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Sub-component for specs
function SpecCard({ icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex flex-col items-center justify-center p-4 rounded-3xl border border-border/50 bg-card hover:border-primary/30 transition-colors">
            <div className="text-primary mb-2">{icon}</div>
            <p className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">{label}</p>
            <p className="text-sm font-bold">{value}</p>
        </div>
    );
}

// Loading UI
function DetailsSkeleton() {
    return (
        <div className="mx-auto max-w-7xl px-4 pt-20 animate-pulse">
            <Skeleton className="h-12 w-1/3 mb-4 rounded-xl" />
            <Skeleton className="h-6 w-1/2 mb-8 rounded-lg" />
            <Skeleton className="h-[500px] w-full rounded-[32px] mb-12" />
            <div className="grid grid-cols-3 gap-12">
                <div className="col-span-2 space-y-8">
                    <Skeleton className="h-20 w-full rounded-2xl" />
                    <Skeleton className="h-64 w-full rounded-2xl" />
                </div>
                <Skeleton className="h-96 w-full rounded-[32px]" />
            </div>
        </div>
    );
}