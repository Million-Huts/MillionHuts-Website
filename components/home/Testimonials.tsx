import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { testimonials } from "@/data/homepage";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Testimonials() {
    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Voices of <span className="text-primary italic">Trust</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Join thousands of happy residents and property owners who have simplified their lives with MillionHuts.
                    </p>
                </motion.div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="break-inside-avoid"
                        >
                            <Card className="relative group border-none shadow-md hover:shadow-xl transition-all duration-300 bg-background/60 backdrop-blur-sm overflow-hidden">
                                {/* Quote Icon Watermark */}
                                <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/5 group-hover:text-primary/10 transition-colors" />

                                <CardContent className="p-8">
                                    <div className="flex items-center gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`}
                                            />
                                        ))}
                                    </div>

                                    <blockquote className="text-muted-foreground italic mb-8 leading-relaxed relative z-10">
                                        "{testimonial.content}"
                                    </blockquote>

                                    <div className="flex items-center justify-between border-t border-muted pt-6">
                                        <div className="flex items-center gap-3">
                                            <Avatar className="h-12 w-12 border-2 border-primary/10 group-hover:border-primary/50 transition-colors">
                                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                                                    {testimonial.name[0]}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-bold text-foreground leading-none mb-1">
                                                    {testimonial.name}
                                                </p>
                                                <p className="text-xs text-primary font-medium px-2 py-0.5 bg-primary/5 rounded-full w-fit">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 flex flex-wrap justify-center items-center gap-12 border-y border-muted-foreground/10 py-8"
                >
                    <div className="text-center">
                        <p className="text-3xl font-bold text-primary">4.8/5</p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Avg. User Rating</p>
                    </div>
                    <div className="w-px h-12 bg-muted-foreground/10 hidden md:block" />
                    <div className="text-center">
                        <p className="text-3xl font-bold text-primary">12k+</p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Stays Booked</p>
                    </div>
                    <div className="w-px h-12 bg-muted-foreground/10 hidden md:block" />
                    <div className="text-center">
                        <p className="text-3xl font-bold text-primary">500+</p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Verified Owners</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}