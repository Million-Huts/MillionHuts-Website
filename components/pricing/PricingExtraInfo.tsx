import { Gift } from "lucide-react";

export default function PricingExtraInfo() {
    return (
        <section className="pb-24 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="relative rounded-[2.5rem] bg-gradient-to-r from-purple-600 to-primary p-1 md:p-[2px]">
                    <div className="bg-background rounded-[2.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                <Gift className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-1">Seasonal Launch Offer!</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    List your first property and get <strong>3 months of Pro</strong> absolutely free. <br />
                                    <span className="text-xs uppercase font-bold tracking-tighter text-primary">Limited time offer for new owners</span>
                                </p>
                            </div>
                        </div>
                        <button className="whitespace-nowrap px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                            Claim Offer Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}