"use client";

import { useState, useEffect, useCallback } from "react";
import { api } from "@/lib/api";
import { PG, SearchMeta, FilterMeta } from "@/interfaces/pg";
import { PGCard } from "@/components/pgs/PGCard";
import SearchBar from "@/components/pgs/SearchBar";
import FiltersPanel from "@/components/pgs/FiltersPanel";
import { MapPreview } from "@/components/pgs/MapPreview";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight, SearchIcon } from "lucide-react";

export default function PGSearchPage() {
    const [pgs, setPgs] = useState<PG[]>([]);
    const [meta, setMeta] = useState<SearchMeta | null>(null);
    const [filterOptions, setFilterOptions] = useState<FilterMeta | null>(null);
    const [loading, setLoading] = useState(true);
    const [showFilters, setShowFilters] = useState(false);

    // Track hovered PG for Map
    const [hoveredLocation, setHoveredLocation] = useState<{ lat: number, lng: number, name: string } | null>(null);

    const [searchTerm, setSearchTerm] = useState("");
    const [appliedFilters, setAppliedFilters] = useState({
        city: "",
        state: "",
        pgType: "",
        messType: "",
        sort: "relevance",
        amenities: [] as string[],
        minRent: 1000,
        maxRent: 20000
    });

    const [currentPage, setCurrentPage] = useState(1);

    const fetchMeta = async () => {
        try {
            const res = await api.get("/pgs/meta");
            setFilterOptions(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchPGs = useCallback(async () => {
        try {
            setLoading(true);
            const params = {
                search: searchTerm || undefined,
                ...appliedFilters,
                amenities: appliedFilters.amenities.length > 0 ? appliedFilters.amenities.join(",") : undefined,
                page: currentPage,
                limit: 10,
            };
            const res = await api.get("/pgs", { params });
            setPgs(res.data.data);
            setMeta(res.data.meta);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [searchTerm, appliedFilters, currentPage]);

    useEffect(() => {
        fetchMeta();
    }, [])
    useEffect(() => {
        fetchPGs();
    }, [fetchPGs]);

    return (
        <div className="min-h-screen bg-background transition-colors duration-300">
            {/* Promotion Banner Placeholder */}
            <div className="container mx-auto px-4 pt-6">
                <Skeleton className="w-full h-[200px] md:h-[300px] rounded-[40px] bg-muted/50" />
            </div>

            {/* Sticky Header with Search */}
            <div className="sticky top-0 z-40 glass border-b border-border/50 py-4 mt-6">
                <div className="container mx-auto px-4">
                    <SearchBar
                        filters={appliedFilters}
                        setAppliedFilters={setAppliedFilters}
                        onOpenFilters={() => setShowFilters(true)}
                    />
                </div>
            </div>

            <FiltersPanel
                open={showFilters}
                onClose={() => setShowFilters(false)}
                filters={appliedFilters}
                setAppliedFilters={setAppliedFilters}
                meta={filterOptions}
            />

            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left: Cards List */}
                    <div className="w-full lg:w-[60%] flex flex-col gap-6">
                        {loading ? (
                            Array(4).fill(0).map((_, i) => <Skeleton key={i} className="h-64 w-full rounded-sm" />)
                        ) : pgs.length > 0 ? (
                            <>
                                {pgs.map((pg) => (
                                    <div
                                        key={pg.pgCode}
                                        onMouseEnter={() => setHoveredLocation({ lat: pg.latitude, lng: pg.longitude, name: pg.name })}
                                    >
                                        <PGCard pg={pg} />
                                    </div>
                                ))}

                                {/* Pagination */}
                                {meta && meta.totalPages > 1 && (
                                    <div className="flex items-center justify-between pt-8 border-t border-border/50">
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                            Page {currentPage} of {meta.totalPages}
                                        </p>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                disabled={currentPage === 1}
                                                onClick={() => setCurrentPage(p => p - 1)}
                                                className="rounded-sm"
                                            >
                                                <ChevronLeft size={16} />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                disabled={currentPage === meta.totalPages}
                                                onClick={() => setCurrentPage(p => p + 1)}
                                                className="rounded-sm"
                                            >
                                                <ChevronRight size={16} />
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="py-20 text-center bg-card rounded-sm border border-dashed border-border">
                                <SearchIcon className="mx-auto text-muted-foreground mb-4" />
                                <h3 className="font-black text-xl">No PGs Found</h3>
                            </div>
                        )}
                    </div>

                    {/* Right: Sticky Map (Hidden on mobile) */}
                    <div className="hidden lg:block lg:w-[40%]">
                        <MapPreview
                            lat={hoveredLocation?.lat}
                            lng={hoveredLocation?.lng}
                            name={hoveredLocation?.name}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}