"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, Search, ChevronDown, Utensils, Users, IndianRupee, RotateCcw } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import { Slider } from "../ui/slider";

export default function SearchBar({ filters, setAppliedFilters, onOpenFilters }: any) {
    const [localTerm, setLocalTerm] = useState(filters.search || "");

    const handleSearchClick = () => {
        setAppliedFilters({ ...filters, search: localTerm });
    };

    const updateFilter = (key: string, value: any) => {
        setAppliedFilters({ ...filters, [key]: value });
    };

    const handleReset = () => {
        setAppliedFilters({
            search: "", city: "", state: "", pgType: "",
            messType: "", sort: "relevance", amenities: [],
            minRent: 0, maxRent: 20000
        });
    }

    return (
        <div className="w-full max-w-6xl mx-auto space-y-4">
            {/* Top Row: Search & Mobile Filter Toggle */}
            <div className="flex gap-3 items-center">
                <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                        placeholder="Search by PG name, city or locality..."
                        value={localTerm}
                        onChange={(e) => setLocalTerm(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}
                        className="pl-12 md:h-14 h-12 rounded-sm border-none bg-secondary/50 focus-visible:ring-primary focus-visible:bg-background transition-all font-medium shadow-soft text-foreground"
                    />
                </div>

                <Button
                    onClick={handleSearchClick}
                    className="md:h-14 h-12 px-8 rounded-sm font-black bg-primary text-primary-foreground shadow-lg shadow-primary/20 flex"
                >
                    Search
                </Button>

                {/* Mobile-only Filter Button */}
                <Button
                    onClick={onOpenFilters}
                    variant="outline"
                    className="md:hidden h-12 w-12 rounded-sm border-border bg-card shadow-soft p-0"
                >
                    <Filter className="h-6 w-6 text-primary" />
                </Button>
            </div>

            {/* Desktop Quick Filters (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-3 py-2">

                {/* Gender Selector */}
                <Select value={filters.pgType} onValueChange={(v) => updateFilter("pgType", v)}>
                    <SelectTrigger className="w-[160px] h-12 rounded-sm bg-card border-border font-bold text-[11px] uppercase tracking-wider shadow-sm">
                        <div className="flex items-center gap-2">
                            <Users className="h-3.5 w-3.5 text-primary" />
                            <SelectValue placeholder="Gender" />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="MENS">Men</SelectItem>
                        <SelectItem value="WOMENS">Women</SelectItem>
                        <SelectItem value="COLIVING">Coliving</SelectItem>
                    </SelectContent>
                </Select>

                {/* Price Range Popover with Dual Selection Logic */}
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className="h-12 rounded-sm bg-card border-border font-bold text-[11px] uppercase tracking-wider gap-2 shadow-sm">
                            <IndianRupee className="h-3.5 w-3.5 text-primary" />
                            Rent: ₹{filters.minRent || 0} - {filters.maxRent || '20k'}
                            <ChevronDown className="h-3 w-3 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-72 p-6 bg-card border-border shadow-2xl rounded-2xl" align="start">
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h4 className="font-black text-[10px] uppercase tracking-widest text-primary">Price Range</h4>
                                <span className="text-[10px] font-bold text-muted-foreground">₹0 - ₹20,000+</span>
                            </div>

                            <div className="space-y-6 pt-2">
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Min</span>
                                        <span className="text-sm font-bold text-foreground">₹{filters.minRent ?? 0}</span>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Max</span>
                                        <span className="text-sm font-bold text-foreground">₹{filters.maxRent ?? 20000}</span>
                                    </div>
                                </div>

                                <Slider
                                    defaultValue={[filters.minRent ?? 1000, filters.maxRent ?? 20000]}
                                    max={20000}
                                    step={500}
                                    onValueChange={(vals) => {
                                        if (vals.length === 2) {
                                            updateFilter("minRent", vals[0]);
                                            updateFilter("maxRent", vals[1]);
                                        }
                                    }}
                                    className="py-4"
                                />

                                <div className="flex justify-between px-1">
                                    <span className="text-[8px] font-medium text-muted-foreground/30">0</span>
                                    <span className="text-[8px] font-medium text-muted-foreground/30">10k</span>
                                    <span className="text-[8px] font-medium text-muted-foreground/30">20k</span>
                                </div>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>

                {/* Food Type Selector */}
                <Select value={filters.messType} onValueChange={(v) => updateFilter("messType", v)}>
                    <SelectTrigger className="w-[160px] h-12 rounded-sm bg-card border-border font-bold text-[11px] uppercase tracking-wider shadow-sm">
                        <div className="flex items-center gap-2">
                            <Utensils className="h-3.5 w-3.5 text-primary" />
                            <SelectValue placeholder="Food Type" />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="VEG">Veg</SelectItem>
                        <SelectItem value="NON_VEG">Non-Veg</SelectItem>
                        <SelectItem value="MIXED">Mixed</SelectItem>
                    </SelectContent>
                </Select>

                {/* Sort Filter */}
                <Select value={filters.sort} onValueChange={(v) => updateFilter("sort", v)}>
                    <SelectTrigger className="w-[180px] h-12 rounded-sm bg-card border-border font-bold text-[11px] uppercase tracking-wider shadow-sm">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="price_low_high">Price: Low to High</SelectItem>
                        <SelectItem value="price_high_low">Price: High to Low</SelectItem>
                        <SelectItem value="name_asc">Name: A-Z</SelectItem>
                    </SelectContent>
                </Select>

                <div className="flex-1" /> {/* Spacer */}

                <Button
                    onClick={onOpenFilters}
                    variant="ghost"
                    className="h-12 px-5 rounded-sm font-black text-[10px] uppercase tracking-[0.15em] text-primary hover:bg-primary/5"
                >
                    <Filter className="mr-2 h-4 w-4" />
                    More Filters
                </Button>
                <Button
                    onClick={handleReset}
                    variant="ghost"
                    className="h-12 px-5 rounded-sm font-black text-[10px] uppercase tracking-[0.15em] text-primary hover:bg-primary/5"
                >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset Filters
                </Button>
            </div>
        </div>
    );
}