"use client";

import { Button } from "@/components/ui/button";
import {
    Phone,
    MessageCircle,
    Map as MapIcon,
    ShieldCheck,
    Clock,
    Wallet
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

export function PGSidebarCard({ pg }: { pg: any }) {
    const scrollToLocation = () => {
        const element = document.getElementById('location');
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-card text-card-foreground rounded-[32px] border border-border shadow-soft p-6 md:p-8 transition-colors duration-300">
            {/* Pricing Header */}
            <div className="mb-8">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">
                    Rent Starts From
                </p>
                <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tighter">
                        ₹{Number(pg.details.rentStart).toLocaleString()}
                    </span>
                    <span className="text-muted-foreground font-bold text-lg">/mo</span>
                </div>
            </div>

            {/* Quick Details Grid */}
            <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-secondary/50 border border-border/50">
                    <div className="flex items-center gap-3">
                        <Wallet size={16} className="text-primary" />
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Max Rent</span>
                    </div>
                    <span className="font-black text-sm">₹{Number(pg.details.rentUpto).toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-secondary/50 border border-border/50">
                    <div className="flex items-center gap-3">
                        <ShieldCheck size={16} className="text-primary" />
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Security</span>
                    </div>
                    <span className="font-black text-sm text-primary">1 Month</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-secondary/50 border border-border/50">
                    <div className="flex items-center gap-3">
                        <Clock size={16} className="text-primary" />
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Notice</span>
                    </div>
                    <span className="font-black text-sm">{pg.details.noticePeriod || "30"} Days</span>
                </div>
            </div>

            {/* Primary Actions */}
            <div className="space-y-3">
                <Button className="w-full h-16 rounded-2xl text-md font-black uppercase tracking-[0.1em] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Book a Visit
                </Button>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-full h-16 rounded-2xl font-bold flex gap-3 border-border hover:bg-accent">
                            <Phone size={18} /> Contact Manager
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md rounded-[32px] bg-card border-border">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-black tracking-tight text-center">Inquiry</DialogTitle>
                        </DialogHeader>
                        <div className="flex flex-col gap-3 py-4">
                            {/* Call Action */}
                            <a
                                href={`tel:${pg.details.contactNumber}`}
                                className="flex items-center justify-between p-5 bg-secondary rounded-2xl border border-border hover:border-primary/50 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-background rounded-xl shadow-soft group-hover:text-primary transition-colors">
                                        <Phone size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Direct Line</span>
                                        <span className="font-black text-lg">{pg.details.contactNumber}</span>
                                    </div>
                                </div>
                            </a>

                            {/* WhatsApp Action */}
                            <a
                                href={`https://wa.me/${pg.details.contactNumber}`}
                                target="_blank"
                                className="flex items-center justify-between p-5 bg-[#25D366]/5 rounded-2xl border border-[#25D366]/20 hover:bg-[#25D366]/10 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-soft text-[#25D366]">
                                        <MessageCircle size={20} fill="currentColor" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#25D366]">WhatsApp</span>
                                        <span className="font-black text-lg">Instant Chat</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </DialogContent>
                </Dialog>

                <Button
                    variant="ghost"
                    onClick={scrollToLocation}
                    className="w-full h-12 font-bold gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                    <MapIcon size={18} /> Explore Neighborhood
                </Button>
            </div>

            {/* Micro-copy */}
            <p className="text-[10px] text-center text-muted-foreground font-medium mt-6 px-4 leading-relaxed">
                *Final rent depends on room occupancy (Single/Double/Triple Sharing)
            </p>
        </div>
    );
}