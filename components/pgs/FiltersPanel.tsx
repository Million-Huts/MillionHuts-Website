"use client";

import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";

type Props = {
    open: boolean;
    onClose: () => void;
    filters: any;
    setAppliedFilters: (f: any) => void;
    meta: any;
};

export default function FiltersPanel({ open, onClose, filters, setAppliedFilters, meta }: Props) {
    const [draft, setDraft] = useState(filters);

    const [openItems, setOpenItems] = useState<string[]>([]);

    useEffect(() => {
        if (open) setDraft(filters);
    }, [open, filters]);

    const handleApply = () => {
        setAppliedFilters(draft);
        onClose();
    };

    const handleReset = () => {
        setAppliedFilters({
            search: "", city: "", state: "", pgType: "",
            messType: "", sort: "relevance", amenities: [],
            minRent: 0, maxRent: 20000
        });
    };

    const updateField = (key: string, value: any) => {
        setDraft({ ...draft, [key]: value });
    };

    // Helper to render filter sections
    const FilterSection = ({ title, children, desktopHidden = false }: any) => (
        <div className={cn("py-6 border-b border-border", desktopHidden && "md:hidden")}>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">
                {title}
            </h4>
            {children}
        </div>
    );

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="!max-w-3xl p-0 overflow-hidden rounded-3xl border border-border bg-background shadow-2xl">
                <DialogHeader className="p-6 border-b border-border bg-card">
                    <div className="flex justify-between items-center">
                        <DialogTitle className="text-2xl font-black tracking-tighter text-card-foreground">
                            Filters
                        </DialogTitle>
                        <Badge className="bg-primary text-primary-foreground font-black">
                            {Object.values(draft).filter(v => v && (Array.isArray(v) ? v.length > 0 : v !== "relevance" && v !== 20000)).length} Active
                        </Badge>
                    </div>
                </DialogHeader>

                <div className="max-h-[70vh] overflow-y-auto p-6 space-y-2">
                    {/* These are hidden on desktop because they are in the SearchBar */}
                    <FilterSection title="Gender / PG Type" desktopHidden>
                        <BadgeGrid
                            options={["MENS", "WOMENS", "COLIVING"]}
                            value={draft.pgType}
                            onChange={(v: string) => updateField("pgType", v)}
                        />
                    </FilterSection>

                    <FilterSection title="Food Preference" desktopHidden>
                        <BadgeGrid
                            options={["VEG", "NON_VEG", "MIXED"]}
                            value={draft.messType}
                            onChange={(v: string) => updateField("messType", v)}
                        />
                    </FilterSection>

                    {/* Location Filters - Shown on both */}
                    <FilterSection title="Location (City)">
                        <BadgeGrid
                            options={meta?.cities || []}
                            value={draft.city}
                            onChange={(v: string) => updateField("city", v)}
                        />
                    </FilterSection>

                    <FilterSection title="State">
                        <BadgeGrid
                            options={meta?.states || []}
                            value={draft.state}
                            onChange={(v: string) => updateField("state", v)}
                        />
                    </FilterSection>

                    {/* Amenities with Accordion */}
                    <FilterSection title="Amenities">
                        <div className="space-y-4">
                            {/* Featured / Common Amenities (First Category) */}
                            <AmenityChips
                                amenities={meta?.amenities?.[0]?.amenities?.slice(0, 6) || []}
                                selected={draft.amenities}
                                onToggle={(slug: string) => {
                                    const next = draft.amenities.includes(slug)
                                        ? draft.amenities.filter((s: string) => s !== slug)
                                        : [...draft.amenities, slug];
                                    updateField("amenities", next);
                                }}
                            />

                            <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="w-full border-none">
                                <AccordionItem value="all-amenities" className="border-none">
                                    <AccordionTrigger className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:no-underline py-2">
                                        View All Categories
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-4 space-y-6">
                                        {meta?.amenities?.map((cat: any) => (
                                            <div key={cat.id} className="space-y-2">
                                                <p className="text-[9px] font-bold text-muted-foreground/60 uppercase tracking-tighter italic">{cat.name}</p>
                                                <AmenityChips
                                                    amenities={cat.amenities}
                                                    selected={draft.amenities}
                                                    onToggle={(slug: string) => {
                                                        const next = draft.amenities.includes(slug)
                                                            ? draft.amenities.filter((s: string) => s !== slug)
                                                            : [...draft.amenities, slug];
                                                        updateField("amenities", next);
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </FilterSection>
                </div>

                <DialogFooter className="p-6 bg-card border-t border-border flex flex-row justify-between items-center gap-4">
                    <Button
                        variant="ghost"
                        onClick={handleReset}
                        className="font-black text-[10px] uppercase tracking-widest text-muted-foreground hover:text-destructive"
                    >
                        <RotateCcw className="h-4 w-4 mr-2" /> Reset
                    </Button>
                    <div className="flex gap-3">
                        <Button variant="outline" onClick={onClose} className="rounded-xl font-bold px-6">
                            Cancel
                        </Button>
                        <Button onClick={handleApply} className="rounded-xl font-black px-8 bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                            Apply Filters
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

function BadgeGrid({ options, value, onChange }: any) {
    return (
        <div className="flex flex-wrap gap-2">
            {options.map((o: string) => (
                <button
                    key={o}
                    onClick={() => onChange(value === o ? "" : o)}
                    className={cn(
                        "px-4 py-2 rounded-xl border-2 text-xs font-bold transition-all capitalize",
                        value === o
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-secondary bg-secondary/30 text-muted-foreground hover:border-border"
                    )}
                >
                    {o.toLowerCase().replace(/_/g, ' ')}
                </button>
            ))}
        </div>
    );
}

function AmenityChips({ amenities, selected, onToggle }: any) {
    return (
        <div className="flex flex-wrap gap-2">
            {amenities.map((a: any) => (
                <button
                    key={a.slug}
                    onClick={() => onToggle(a.slug)}
                    className={cn(
                        "px-3 py-1.5 rounded-lg border text-[11px] font-bold transition-all",
                        selected.includes(a.slug)
                            ? "bg-primary border-primary text-primary-foreground shadow-md"
                            : "bg-background border-border text-muted-foreground hover:bg-secondary"
                    )}
                >
                    {a.name}
                </button>
            ))}
        </div>
    );
}