"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function PGAmenities({ amenities }: { amenities: any[] }) {
    // Flatten all items to show a diverse preview
    const allItems = amenities.flatMap(cat => cat.items);
    const preview = allItems.slice(0, 6);
    const hasMore = allItems.length > 6;

    return (
        <section className="space-y-8 pt-8 border-t border-border/50">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black tracking-tight">Amenities</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {allItems.length} Total
                </span>
            </div>

            {/* Top Grid Preview */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {preview.map((item: any) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-3 p-4 bg-card rounded-sm border border-border/50 shadow-soft hover:border-primary/30 transition-all group"
                    >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Check size={16} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-bold tracking-tight">{item.name}</span>
                    </div>
                ))}
            </div>

            {/* Accordion for Full List */}
            {hasMore && (
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="all" className="border-none">
                        <AccordionTrigger className="flex justify-center w-full py-4 glass rounded-sm border border-border/50 hover:no-underline group">
                            <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary">
                                <Plus size={16} className="group-data-[state=open]:rotate-45 transition-transform" />
                                <span>Show all amenities</span>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="pt-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-10">
                                {amenities.map((cat) => (
                                    <div key={cat.category} className="space-y-4">
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/5 w-fit px-2 py-0.5 rounded">
                                            {cat.category}
                                        </h4>
                                        <div className="grid grid-cols-1 gap-3">
                                            {cat.items.map((item: any) => (
                                                <div key={item.id} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                                                    {item.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            )}
        </section>
    );
}