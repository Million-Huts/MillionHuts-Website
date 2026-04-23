"use client";

import { ShieldAlert, Info, ArrowRight } from "lucide-react";

export function PGRules({ rules }: { rules: any[] }) {
    return (
        <section className="pt-12 border-t border-border/50 space-y-8">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <ShieldAlert className="text-primary" size={24} />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">House Rules & Policies</h3>
                </div>
                <p className="text-sm text-muted-foreground font-medium ml-12">
                    To ensure a comfortable stay for everyone
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {rules.map((section: any, idx: number) => (
                    <div
                        key={idx}
                        className="group relative p-8 bg-card rounded-[32px] border border-border/50 shadow-soft transition-all duration-300 hover:border-primary/20"
                    >
                        {/* Decorative category label */}
                        <div className="mb-6 flex items-center justify-between">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded-full">
                                {section.title}
                            </h4>
                            <Info size={14} className="text-muted-foreground/40 group-hover:text-primary/50 transition-colors" />
                        </div>

                        <ul className="space-y-6">
                            {section.items.map((rule: any, j: number) => (
                                <li key={j} className="flex gap-4">
                                    {/* Minimalist bullet point using your Chart-2 (Success Green) */}
                                    <div className="mt-1 shrink-0">
                                        <div className="w-5 h-5 rounded-full bg-chart-2/10 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-chart-2" />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <p className="text-sm font-black tracking-tight text-foreground/90">
                                            {rule.name}
                                        </p>
                                        {rule.description && (
                                            <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                                                {rule.description}
                                            </p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom Note */}
            <div className="bg-secondary/50 rounded-2xl p-4 flex items-center gap-4 border border-border/30">
                <div className="w-2 h-10 bg-primary/20 rounded-full" />
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                    Violation of house rules may lead to immediate termination of the stay agreement.
                    <span className="text-primary ml-1 cursor-pointer hover:underline">Read full terms</span>
                </p>
            </div>
        </section>
    );
}