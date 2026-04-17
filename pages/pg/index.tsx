import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import { api } from "@/lib/api";
import { PGCard } from "@/components/pgs/PGCard";
import SearchBar from "@/components/pgs/SearchBar";
import FiltersPanel from "@/components/pgs/FiltersPanel";
import { Button } from "@/components/ui/button";
import { Loader2, X, SearchIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export default function PGSearchPage() {
    // ---------------- STATE ----------------
    const [pgs, setPgs] = useState<any[]>([]);
    const [meta, setMeta] = useState<any>(null);
    const [filterOptions, setFilterOptions] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [showFilters, setShowFilters] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");
    const [appliedFilters, setAppliedFilters] = useState({
        city: "",
        state: "",
        pgType: "",
        messType: "",
        sort: "relevance",
        amenities: [] as string[],
    });

    const [currentPage, setCurrentPage] = useState(1);

    // ---------------- FETCHERS ----------------
    useEffect(() => {
        api.get("/pgs/meta").then((res) => setFilterOptions(res.data.data));
    }, []);

    const fetchPGs = useCallback(async () => {
        try {
            setLoading(true);
            const params = {
                search: searchTerm || undefined,
                city: appliedFilters.city || undefined,
                state: appliedFilters.state || undefined,
                pgType: appliedFilters.pgType || undefined,
                messType: appliedFilters.messType || undefined,
                amenities: appliedFilters.amenities.length > 0 ? appliedFilters.amenities.join(",") : undefined,
                sort: appliedFilters.sort,
                page: currentPage,
                limit: 12,
            };
            const res = await api.get("/pgs", { params });
            setPgs(res.data.data);
            setMeta(res.data.meta);
        } catch (err) {
            console.error("Fetch failed", err);
        } finally {
            setLoading(false);
        }
    }, [searchTerm, appliedFilters, currentPage]);

    useEffect(() => {
        fetchPGs();
    }, [fetchPGs]);

    // ---------------- HELPERS ----------------
    const removeFilter = (key: string, value?: string) => {
        if (key === "amenities" && value) {
            setAppliedFilters(prev => ({
                ...prev,
                amenities: prev.amenities.filter(a => a !== value)
            }));
        } else {
            setAppliedFilters(prev => ({ ...prev, [key]: "" }));
        }
    };

    return (
        <>
            <Head><title>Find Your Home | MillionHuts</title></Head>

            <div className="min-h-screen bg-slate-50/50">
                {/* 🔥 BANNER SKELETON */}
                <div className="container mx-auto px-4 pt-6">
                    <Skeleton className="w-full h-[300px] md:h-[400px] rounded-3xl bg-slate-200" />
                </div>

                {/* 🔥 STICKY SEARCH BAR */}
                <div className="sticky top-[64px] z-30 bg-white/80 backdrop-blur-md border-b shadow-sm mt-8 transition-all">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        <SearchBar
                            search={searchTerm}
                            setSearch={setSearchTerm}
                            onSearch={fetchPGs}
                            onOpenFilters={() => setShowFilters(true)}
                        />

                        {/* 🔥 APPLIED FILTERS CHIPS */}
                        <div className="flex flex-wrap gap-2 items-center min-h-[32px]">
                            {Object.entries(appliedFilters).map(([key, value]) => {
                                if (!value || (Array.isArray(value) && value.length === 0) || key === 'sort') return null;
                                if (Array.isArray(value)) {
                                    return value.map(v => (
                                        <Badge key={v} variant="secondary" className="pl-3 pr-1 py-1 rounded-full gap-1 border-primary/20 bg-primary/5 text-primary capitalize">
                                            {v} <X className="h-3 w-3 cursor-pointer hover:text-destructive" onClick={() => removeFilter(key, v)} />
                                        </Badge>
                                    ));
                                }
                                return (
                                    <Badge key={key} variant="secondary" className="pl-3 pr-1 py-1 rounded-full gap-1 border-primary/20 bg-primary/5 text-primary capitalize">
                                        {value} <X className="h-3 w-3 cursor-pointer hover:text-destructive" onClick={() => removeFilter(key)} />
                                    </Badge>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <FiltersPanel
                    open={showFilters}
                    onClose={() => setShowFilters(false)}
                    filters={appliedFilters}
                    setAppliedFilters={(f) => {
                        setAppliedFilters(f);
                        setCurrentPage(1);
                    }}
                    meta={filterOptions}
                />

                {/* 🔥 RESULTS */}
                <div className="container mx-auto px-4 py-12">
                    {loading ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {[...Array(8)].map((_, i) => <Skeleton key={i} className="h-[350px] rounded-2xl" />)}
                        </div>
                    ) : pgs.length > 0 ? (
                        <div className="space-y-12">
                            <div className="flex flex-col gap-8">
                                {pgs.map((pg, idx) => <PGCard key={pg.pgCode} pg={pg} index={idx} />)}
                            </div>
                            {/* Pagination Logic here... */}
                        </div>
                    ) : (
                        <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-slate-300">
                            <SearchIcon className="mx-auto h-12 w-12 text-slate-300 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900">No properties found</h3>
                            <p className="text-slate-500 mb-6">Try adjusting your filters or search term.</p>
                            <Button onClick={() => setAppliedFilters({ city: "", state: "", pgType: "", messType: "", sort: "relevance", amenities: [] })} variant="outline">Reset All Filters</Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}