"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";
import { features } from "@/data/homepage";

export default function Why() {
    const [open, setOpen] = useState(false);

    // Mobile Logic: Show first 2, hide the rest
    const visibleFeatures = features.slice(0, 2);
    const hiddenFeatures = features.slice(2);

    return (
        <section className="py-12 bg-muted/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold mb-3 tracking-tight">
                        Why Choose MillionHuts
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
                        We’ve removed the friction from PG living. From discovery to daily management, everything is digital.
                    </p>
                </div>

                {/* DESKTOP GRID: 4 Columns, 8 Items */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Map existing features (6) + 2 placeholders if needed to reach 8 */}
                    {features.concat(features.slice(0, 2)).slice(0, 8).map((feature, index) => (
                        <motion.div
                            key={`${feature.title}-${index}`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-card/60 backdrop-blur-sm">
                                <CardContent className="p-6 flex flex-col items-start gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0 transition-transform group-hover:scale-110">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold mb-1.5">
                                            {feature.title}
                                        </h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* MOBILE VIEW: List Style with Accordion */}
                <div className="md:hidden space-y-3">
                    {visibleFeatures.map((feature) => (
                        <Card key={feature.title} className="border-none shadow-sm">
                            <CardContent className="p-4 flex gap-4 items-start">
                                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                                    <feature.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        {feature.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {/* COLLAPSIBLE SECTION */}
                    <div className="pt-2">
                        <button
                            onClick={() => setOpen(!open)}
                            className="w-full flex items-center justify-center gap-2 text-xs font-bold py-3 px-4 bg-primary/5 text-primary rounded-xl border border-primary/10 transition-all active:scale-95"
                        >
                            {open ? "Show Less" : "View More Benefits"}
                            <ChevronDown
                                className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                            />
                        </button>

                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden space-y-3 pt-3"
                                >
                                    {hiddenFeatures.map((feature) => (
                                        <Card key={feature.title} className="border-none shadow-sm">
                                            <CardContent className="p-4 flex gap-4 items-start">
                                                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                                                    <feature.icon className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-bold">
                                                        {feature.title}
                                                    </h3>
                                                    <p className="text-xs text-muted-foreground mt-0.5">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Subtle Decorative Element for Desktop */}
            <div className="hidden lg:block absolute left-0 bottom-0 opacity-10 pointer-events-none">
                <div className="w-64 h-64 border-[32px] border-primary rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>
        </section>
    );
}