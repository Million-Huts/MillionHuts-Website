"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { testimonials } from "@/data/homepage";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from "../ui/button";

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [displayCount, setDisplayCount] = useState(3);

    // Responsive card count
    useEffect(() => {
        const updateCount = () => {
            setDisplayCount(window.innerWidth < 768 ? 1 : 3);
        };
        updateCount();
        window.addEventListener("resize", updateCount);
        return () => window.removeEventListener("resize", updateCount);
    }, []);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-12 bg-muted/20 relative overflow-hidden">
            {/* CONTINUITY: Subtle gradient line from Why section */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

                {/* COMPACT HEADER */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-left max-w-xl">
                        <h2 className="text-2xl md:text-4xl font-bold mb-3">
                            Voices of <span className="text-primary italic">Trust</span>
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground">
                            Join 12,000+ residents who simplified their PG life.
                        </p>
                    </div>

                    {/* SLIDER CONTROLS */}
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={prev} className="rounded-full h-10 w-10">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={next} className="rounded-full h-10 w-10">
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* UNIFORM HEIGHT SLIDER */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    <AnimatePresence mode="popLayout">
                        {testimonials
                            .slice(index, index + displayCount)
                            .concat(
                                // Handle array wrapping for the slider
                                testimonials.slice(0, Math.max(0, (index + displayCount) - testimonials.length))
                            )
                            .map((testimonial, i) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="h-full flex"
                                >
                                    <Card className="relative w-full border-none shadow-sm hover:shadow-md transition-all bg-card overflow-hidden flex flex-col rounded-2xl">
                                        <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/5" />

                                        <CardContent className="p-6 flex flex-col h-full">
                                            <div className="flex items-center gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-3 w-3 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`}
                                                    />
                                                ))}
                                            </div>

                                            {/* CONTENT: flex-1 ensures the footer stays at the bottom */}
                                            <blockquote className="text-sm md:text-base text-foreground font-medium italic mb-6 leading-relaxed flex-1">
                                                "{testimonial.content}"
                                            </blockquote>

                                            <div className="flex items-center gap-3 pt-5 border-t border-muted/50 mt-auto">
                                                <Avatar className="h-10 w-10 border border-primary/10">
                                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
                                                        {testimonial.name[0]}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-bold text-sm leading-none mb-1">
                                                        {testimonial.name}
                                                    </p>
                                                    <p className="text-[10px] text-primary font-bold uppercase tracking-tighter">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </div>

                {/* COMPACT STATS FOOTER */}
                <div className="pt-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
                        <div className="text-center">
                            <p className="text-2xl font-black text-primary">4.8/5</p>
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Rating</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-black text-primary">12k+</p>
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Stays Booked</p>
                        </div>
                        <div className="text-center col-span-2 md:col-span-1">
                            <p className="text-2xl font-black text-primary">500+</p>
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Owners</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}