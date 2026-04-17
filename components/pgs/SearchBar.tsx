import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";

export default function SearchBar({ search, setSearch, onSearch, onOpenFilters }: any) {
    return (
        <div className="flex gap-3 max-w-4xl mx-auto">
            <div className="relative flex-1 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                <Input
                    placeholder="Search by PG name, city or locality..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && onSearch()}
                    className="pl-12 h-14 rounded-2xl border-none bg-slate-100 focus-visible:ring-primary focus-visible:bg-white transition-all text-lg font-medium shadow-inner"
                />
            </div>

            <Button onClick={onSearch} size="lg" className="h-14 px-8 rounded-2xl font-bold shadow-lg shadow-primary/20 transition-transform active:scale-95">
                Search
            </Button>

            <Button onClick={onOpenFilters} variant="outline" size="lg" className="h-14 px-6 rounded-2xl font-bold border-2 hover:bg-slate-50 transition-all">
                <Filter className="mr-2 h-5 w-5" />
                Filters
            </Button>
        </div>
    );
}