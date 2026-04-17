import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

type Props = {
    open: boolean;
    onClose: () => void;
    filters: any;
    setAppliedFilters: (f: any) => void;
    meta: any;
};

const SECTIONS = [
    { id: "city", label: "Cities" },
    { id: "state", label: "States" },
    { id: "pgType", label: "PG Type" },
    { id: "messType", label: "Food Type" },
    { id: "sort", label: "Sort By" },
    { id: "amenities", label: "Amenities" },
];

export default function FiltersPanel({ open, onClose, filters, setAppliedFilters, meta }: Props) {
    // Local state to hold changes before clicking "Apply"
    const [draft, setDraft] = useState(filters);
    const [activeTab, setActiveTab] = useState("city");

    useEffect(() => {
        if (open) setDraft(filters);
    }, [open, filters]);

    const handleApply = () => {
        setAppliedFilters(draft);
        onClose();
    };

    const handleReset = () => {
        setDraft({ city: "", state: "", pgType: "", messType: "", sort: "relevance", amenities: [] });
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="!max-w-5xl p-0 overflow-hidden rounded-sm border-none shadow-2xl">
                <DialogHeader className="p-6 border-b bg-white">
                    <DialogTitle className="text-2xl font-black flex items-center gap-2">
                        Refine Search <Badge variant="outline">{draft.amenities.length + (draft.city ? 1 : 0) + (draft.pgType ? 1 : 0)}</Badge>
                    </DialogTitle>
                </DialogHeader>

                <div className="flex h-[60vh] md:h-[500px] bg-slate-50/50">
                    {/* SIDE NAVIGATION */}
                    <div className="w-1/4 border-r bg-white p-3 space-y-1">
                        {SECTIONS.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setActiveTab(s.id)}
                                className={cn(
                                    "w-full text-left px-4 py-4 rounded-sm transition-all font-bold text-sm uppercase tracking-wider",
                                    activeTab === s.id ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]" : "text-slate-500 hover:bg-slate-100"
                                )}
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>

                    {/* CONTENT AREA */}
                    <div className="flex-1 p-8 overflow-y-auto">
                        {activeTab === "city" && <RadioGrid options={meta?.cities || []} value={draft.city} onChange={(v: string) => setDraft({ ...draft, city: v })} />}
                        {activeTab === "state" && <RadioGrid options={meta?.states || []} value={draft.state} onChange={(v: string) => setDraft({ ...draft, state: v })} />}
                        {activeTab === "pgType" && <RadioGrid options={meta?.pgTypes || []} value={draft.pgType} onChange={(v: string) => setDraft({ ...draft, pgType: v })} />}
                        {activeTab === "messType" && <RadioGrid options={meta?.messTypes || []} value={draft.messType} onChange={(v: string) => setDraft({ ...draft, messType: v })} />}
                        {activeTab === "sort" && <RadioGrid options={["price_low_high", "price_high_low", "name_asc", "relevance"]} value={draft.sort} onChange={(v: string) => setDraft({ ...draft, sort: v })} />}
                        {activeTab === "amenities" && <AmenityGrid categories={meta?.amenities || []} selected={draft.amenities} onChange={(val: string) => setDraft({ ...draft, amenities: val })} />}
                    </div>
                </div>

                <DialogFooter className="p-6 bg-white border-t flex justify-between items-center sm:justify-between">
                    <Button variant="ghost" onClick={handleReset} className="font-bold gap-2 text-slate-500 hover:text-destructive">
                        <RotateCcw className="h-4 w-4" /> Reset All
                    </Button>
                    <div className="flex gap-3">
                        <Button variant="outline" onClick={onClose} className="px-8 rounded-sm font-bold">Cancel</Button>
                        <Button onClick={handleApply} className="px-10 rounded-sm font-bold shadow-lg shadow-primary/20">Apply Filters</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

function RadioGrid({ options, value, onChange }: any) {
    return (
        <div className="grid grid-cols-2 gap-3">
            {options.map((o: string) => (
                <button
                    key={o}
                    onClick={() => onChange(o)}
                    className={cn(
                        "flex items-center justify-between px-5 py-4 rounded-sm border-2 transition-all font-semibold capitalize",
                        value === o ? "border-primary bg-primary/5 text-primary shadow-sm" : "border-slate-100 bg-white hover:border-slate-200"
                    )}
                >
                    {o.replace(/_/g, ' ')}
                    {value === o && <Check className="h-4 w-4" />}
                </button>
            ))}
        </div>
    );
}

function AmenityGrid({ categories, selected, onChange }: any) {
    const toggle = (slug: string) => {
        const next = selected.includes(slug) ? selected.filter((s: string) => s !== slug) : [...selected, slug];
        onChange(next);
    };

    return (
        <div className="space-y-8">
            {categories.map((cat: any) => (
                <div key={cat.id}>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">{cat.name}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {cat.amenities.map((a: any) => (
                            <button
                                key={a.slug}
                                onClick={() => toggle(a.slug)}
                                className={cn(
                                    "px-4 py-3 border-2 rounded-sm text-sm font-bold transition-all",
                                    selected.includes(a.slug) ? "bg-primary text-white border-primary shadow-md" : "bg-white border-slate-100 hover:border-slate-200"
                                )}
                            >
                                {a.name}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}