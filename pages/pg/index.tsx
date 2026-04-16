// pages/pg/index.tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { api } from "@/lib/api";
import { PublicPG, ApiMeta } from "@/interfaces/public-pg";
import { PGCard } from "@/components/pgs/PGCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Loader2,
    Search as SearchIcon,
    X,
    MapPin,
    ChevronLeft,
    ChevronRight,
    SlidersHorizontal,
    Navigation,
    Filter,
    Building2,
    Star,
    TrendingUp,
    Sparkles
} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function PGSearchPage() {
    const router = useRouter();
    const { query } = router;

    // Data States
    const [pgs, setPgs] = useState<PublicPG[]>([]);
    const [meta, setMeta] = useState<ApiMeta | null>(null);
    const [filterOptions, setFilterOptions] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // Filter & Search States
    const [searchTerm, setSearchTerm] = useState("");
    const [pincode, setPincode] = useState("");
    const [selectedCity, setSelectedCity] = useState("all");
    const [selectedType, setSelectedType] = useState("all");
    const [sortBy, setSortBy] = useState("newest");
    const [currentPage, setCurrentPage] = useState(1);
    const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    // 1. Fetch Metadata (Cities, Types, etc.)
    useEffect(() => {
        api.get("/pgs/meta").then((res) => setFilterOptions(res.data.data));
    }, []);

    // 2. Sync Search from URL Hero Section
    useEffect(() => {
        if (query.search) setSearchTerm(query.search as string);
        if (query.city) setSelectedCity(query.city as string);
    }, [query]);

    // 3. Browser Geolocation
    const handleGetLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        }
    };

    // 4. Main Fetch Logic
    const fetchPGs = async () => {
        try {
            setLoading(true);
            const params = {
                search: searchTerm || undefined,
                city: selectedCity === "all" ? undefined : selectedCity,
                pgType: selectedType === "all" ? undefined : selectedType,
                pincode: pincode || undefined,
                lat: userLocation?.lat,
                lng: userLocation?.lng,
                sortBy,
                page: currentPage,
                limit: 12
            };
            const res = await api.get("/pgs", { params });
            setPgs(res.data.data);
            setMeta(res.data.meta);
        } catch (err) {
            console.error("Fetch failed", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (router.isReady) fetchPGs();
    }, [selectedCity, selectedType, searchTerm, pincode, sortBy, currentPage, userLocation, router.isReady]);

    // 5. Dynamic Page Title Logic
    const getPageTitle = () => {
        if (searchTerm) return `Results for "${searchTerm}"`;
        if (userLocation) return "Stays Near You";
        if (selectedCity !== "all" || selectedType !== "all" || pincode) return "Filtered Selection";
        return "Explore All Stays";
    };

    const getSubtitle = () => {
        if (searchTerm) return `Found ${meta?.total || 0} properties matching "${searchTerm}"`;
        if (userLocation) return `${meta?.total || 0} premium properties near your location`;
        if (selectedCity !== "all") return `${meta?.total || 0} properties in ${selectedCity}`;
        return `${meta?.total || 0} premium properties across India`;
    };

    const clearFilters = () => {
        setSearchTerm("");
        setPincode("");
        setSelectedCity("all");
        setSelectedType("all");
        setUserLocation(null);
        setSortBy("newest");
        setCurrentPage(1);
        router.push("/pg", undefined, { shallow: true });
    };

    const activeFiltersCount = () => {
        let count = 0;
        if (searchTerm) count++;
        if (pincode) count++;
        if (selectedCity !== "all") count++;
        if (selectedType !== "all") count++;
        if (userLocation) count++;
        return count;
    };

    // Stats cards data
    // const statsCards = [
    //     { icon: Building2, label: "Verified Properties", value: "500+", color: "from-blue-500 to-cyan-500" },
    //     { icon: Star, label: "Happy Tenants", value: "10k+", color: "from-purple-500 to-pink-500" },
    //     { icon: TrendingUp, label: "Zero Brokerage", value: "100%", color: "from-emerald-500 to-teal-500" },
    //     { icon: Sparkles, label: "Premium Amenities", value: "Guaranteed", color: "from-orange-500 to-red-500" }
    // ];

    return (
        <>
            <Head>
                <title>{getPageTitle()} | MillionHuts</title>
                <meta name="description" content="Find the best PGs and Coliving spaces with zero brokerage. Verified listings with premium amenities." />
            </Head>

            <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
                {/* Hero Section */}
                <section className="relative overflow-hidden pt-32 pb-16">
                    {/* Background Decor */}
                    <div className="absolute inset-0 bg-hero-glow opacity-30" />
                    <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

                    <div className="container mx-auto px-4 relative">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                                    Find Your Perfect Stay
                                </Badge>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4">
                                    {getPageTitle().split(' ').map((word, i) =>
                                        word.toLowerCase() === 'near' || word.toLowerCase() === 'results' ?
                                            <span key={i} className="text-primary italic font-serif font-light mr-2">{word} </span> :
                                            <span key={i}>{word} </span>
                                    )}
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    {getSubtitle()}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                {/* <section className="container mx-auto px-4 pb-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {statsCards.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl" />
                                <div className="relative bg-card border border-border rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300">
                                    <div className={`inline-flex p-2 rounded-xl bg-gradient-to-r ${stat.color} bg-opacity-10 mb-3`}>
                                        <stat.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section> */}

                {/* Sticky Filter Bar */}
                <div className="sticky top-[64px] z-30 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
                    <div className="container mx-auto px-4 py-4">
                        {/* Desktop Filters */}
                        <div className="hidden lg:flex flex-wrap items-center gap-3">
                            <div className="relative flex-1 min-w-[240px]">
                                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search by PG name, locality..."
                                    className="pl-10 bg-background border-border rounded-xl focus:ring-2 focus:ring-primary/20 transition-all"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            <div className="relative w-36">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Pincode"
                                    className="pl-9 bg-background border-border rounded-xl"
                                    value={pincode}
                                    onChange={(e) => setPincode(e.target.value)}
                                />
                            </div>

                            <Select value={selectedCity} onValueChange={setSelectedCity}>
                                <SelectTrigger className="w-[140px] bg-background border-border rounded-xl">
                                    <SelectValue placeholder="City" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Cities</SelectItem>
                                    {filterOptions?.cities?.map((c: string) => (
                                        <SelectItem key={c} value={c}>{c}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Select value={selectedType} onValueChange={setSelectedType}>
                                <SelectTrigger className="w-[140px] bg-background border-border rounded-xl">
                                    <SelectValue placeholder="PG Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    {filterOptions?.pgTypes?.map((t: string) => (
                                        <SelectItem key={t} value={t}>{t}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-[160px] bg-background border-border rounded-xl">
                                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                                    <SelectValue placeholder="Sort By" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">Newest First</SelectItem>
                                    <SelectItem value="rating_high">Rating: High to Low</SelectItem>
                                    <SelectItem value="rating_low">Rating: Low to High</SelectItem>
                                    <SelectItem value="price_low">Price: Low to High</SelectItem>
                                    <SelectItem value="price_high">Price: High to Low</SelectItem>
                                    <SelectItem value="name_az">Name: A to Z</SelectItem>
                                    <SelectItem value="name_za">Name: Z to A</SelectItem>
                                </SelectContent>
                            </Select>

                            <Button
                                variant={userLocation ? "default" : "outline"}
                                onClick={handleGetLocation}
                                className="gap-2 rounded-xl"
                            >
                                <Navigation className={`h-4 w-4 ${userLocation ? 'animate-pulse' : ''}`} />
                                {userLocation ? "Near Me Active" : "Near Me"}
                            </Button>

                            {activeFiltersCount() > 0 && (
                                <Button variant="ghost" onClick={clearFilters} className="text-muted-foreground hover:text-destructive rounded-xl">
                                    <X className="h-4 w-4 mr-1" /> Reset All
                                </Button>
                            )}
                        </div>

                        {/* Mobile Filters */}
                        <div className="lg:hidden flex items-center justify-between gap-3">
                            <Button
                                variant="outline"
                                onClick={() => setShowMobileFilters(!showMobileFilters)}
                                className="flex-1 gap-2 rounded-xl"
                            >
                                <Filter className="h-4 w-4" />
                                Filters
                                {activeFiltersCount() > 0 && (
                                    <Badge variant="secondary" className="ml-2">
                                        {activeFiltersCount()}
                                    </Badge>
                                )}
                            </Button>

                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="flex-1 bg-background border-border rounded-xl">
                                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                                    <SelectValue placeholder="Sort" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">Newest First</SelectItem>
                                    <SelectItem value="rating_high">Rating: High to Low</SelectItem>
                                    <SelectItem value="price_low">Price: Low to High</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Mobile Filters Panel */}
                        <AnimatePresence>
                            {showMobileFilters && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="lg:hidden mt-4 pt-4 border-t border-border space-y-3"
                                >
                                    <Input
                                        placeholder="Search by name..."
                                        className="bg-background border-border rounded-xl"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <Input
                                        placeholder="Pincode"
                                        className="bg-background border-border rounded-xl"
                                        value={pincode}
                                        onChange={(e) => setPincode(e.target.value)}
                                    />
                                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                                        <SelectTrigger className="bg-background border-border rounded-xl">
                                            <SelectValue placeholder="City" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Cities</SelectItem>
                                            {filterOptions?.cities?.map((c: string) => (
                                                <SelectItem key={c} value={c}>{c}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Select value={selectedType} onValueChange={setSelectedType}>
                                        <SelectTrigger className="bg-background border-border rounded-xl">
                                            <SelectValue placeholder="PG Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Types</SelectItem>
                                            {filterOptions?.pgTypes?.map((t: string) => (
                                                <SelectItem key={t} value={t}>{t}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <Button
                                        variant={userLocation ? "default" : "outline"}
                                        onClick={handleGetLocation}
                                        className="w-full gap-2 rounded-xl"
                                    >
                                        <Navigation className={`h-4 w-4 ${userLocation ? 'animate-pulse' : ''}`} />
                                        {userLocation ? "Near Me Active" : "Use My Location"}
                                    </Button>
                                    {activeFiltersCount() > 0 && (
                                        <Button variant="ghost" onClick={clearFilters} className="w-full text-muted-foreground hover:text-destructive rounded-xl">
                                            <X className="h-4 w-4 mr-1" /> Reset All Filters
                                        </Button>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Results Section */}
                <section className="container mx-auto px-4 py-12">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-32">
                            <div className="relative">
                                <div className="h-20 w-20 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                                <Loader2 className="h-8 w-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                            </div>
                            <p className="mt-6 font-medium text-muted-foreground">Finding the best stays for you...</p>
                        </div>
                    ) : pgs.length > 0 ? (
                        <>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                                {pgs.map((pg, idx) => (
                                    <motion.div
                                        key={pg.pgCode}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        whileHover={{ y: -8 }}
                                        className="transition-all duration-300"
                                    >
                                        <PGCard pg={pg} index={idx} />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {meta && meta.totalPages > 1 && (
                                <div className="mt-16 flex flex-wrap justify-center items-center gap-3">
                                    <Button
                                        variant="outline"
                                        disabled={currentPage === 1}
                                        onClick={() => setCurrentPage(prev => prev - 1)}
                                        className="gap-2 rounded-xl"
                                    >
                                        <ChevronLeft className="h-4 w-4" /> Previous
                                    </Button>

                                    <div className="flex gap-2">
                                        {[...Array(Math.min(5, meta.totalPages))].map((_, i) => {
                                            let pageNum;
                                            if (meta.totalPages <= 5) {
                                                pageNum = i + 1;
                                            } else if (currentPage <= 3) {
                                                pageNum = i + 1;
                                            } else if (currentPage >= meta.totalPages - 2) {
                                                pageNum = meta.totalPages - 4 + i;
                                            } else {
                                                pageNum = currentPage - 2 + i;
                                            }

                                            return (
                                                <Button
                                                    key={pageNum}
                                                    variant={currentPage === pageNum ? "default" : "ghost"}
                                                    onClick={() => setCurrentPage(pageNum)}
                                                    className="w-10 h-10 rounded-xl font-semibold"
                                                >
                                                    {pageNum}
                                                </Button>
                                            );
                                        })}
                                    </div>

                                    <Button
                                        variant="outline"
                                        disabled={currentPage === meta.totalPages}
                                        onClick={() => setCurrentPage(prev => prev + 1)}
                                        className="gap-2 rounded-xl"
                                    >
                                        Next <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            )}
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20 bg-card rounded-3xl border border-border shadow-lg"
                        >
                            <div className="bg-muted w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                                <SearchIcon className="h-10 w-10 text-muted-foreground" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">No properties found</h3>
                            <p className="text-muted-foreground max-w-sm mx-auto">
                                We couldn't find anything matching those filters. Try adjusting your search or clear all filters.
                            </p>
                            <Button onClick={clearFilters} className="mt-8 rounded-xl px-8 shadow-lg hover:shadow-xl transition-shadow">
                                Clear All Filters
                            </Button>
                        </motion.div>
                    )}
                </section>
            </div>
        </>
    );
}