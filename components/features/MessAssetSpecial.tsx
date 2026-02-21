import { UtensilsCrossed, PackageSearch, PieChart } from "lucide-react";

export default function MessAssetSpecial() {
    return (
        <section className="py-24 px-4">
            <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-black mb-6 tracking-tight">Smart Mess & <br /><span className="text-primary italic">Asset Tracking</span></h2>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0"><UtensilsCrossed className="h-6 w-6" /></div>
                            <div>
                                <h4 className="font-bold text-lg">Daily Meal Planning</h4>
                                <p className="text-muted-foreground text-sm">Announce menus and take headcounts for breakfast, lunch, and dinner to reduce food waste.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0"><PackageSearch className="h-6 w-6" /></div>
                            <div>
                                <h4 className="font-bold text-lg">Asset Lifecycle</h4>
                                <p className="text-muted-foreground text-sm">Track furniture, appliances, and amenities in every room. Log repairs and purchase history effortlessly.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Mockup for Mess Menu */}
                <div className="bg-muted p-8 rounded-[3rem] border shadow-inner">
                    <div className="bg-background rounded-2xl p-6 shadow-xl space-y-4 max-w-sm mx-auto">
                        <div className="flex justify-between items-center border-b pb-4">
                            <span className="font-bold">Today's Menu</span>
                            <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">LUNCH</span>
                        </div>
                        <div className="space-y-2">
                            <div className="h-3 w-3/4 bg-muted rounded" />
                            <div className="h-3 w-1/2 bg-muted rounded" />
                        </div>
                        <div className="flex justify-between text-xs font-bold pt-4">
                            <span>Confirmed: 42 Tenants</span>
                            <PieChart className="h-4 w-4 text-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}