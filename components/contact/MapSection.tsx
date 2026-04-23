"use client";

import { useState } from "react";
import { MapPin, Navigation, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function MapSection() {
    const [mapLoaded, setMapLoaded] = useState(false);

    return (
        <section
            className="py-20 md:py-24 bg-muted/30"
            aria-labelledby="map-heading"
            id="map-section"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="bg-background border rounded-[2rem] sm:rounded-[3rem] overflow-hidden grid md:grid-cols-2 shadow-2xl shadow-black/5 dark:shadow-black/20"
                >
                    {/* Info Side */}
                    <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-center order-1">
                        <div
                            className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20"
                            aria-hidden="true"
                        >
                            <Navigation className="h-5 w-5 text-primary" />
                        </div>
                        <h2
                            id="map-heading"
                            className="text-3xl sm:text-4xl font-black mb-4 tracking-tight"
                        >
                            Come over for a{" "}
                            <span className="text-primary italic">coffee.</span>
                        </h2>
                        <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
                            Our headquarters is located in the heart of Bengaluru&apos;s tech
                            hub. We&apos;d love to discuss how we can revolutionize your PG
                            experience in person.
                        </p>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/50 border border-muted">
                                <MapPin
                                    className="h-5 w-5 text-primary shrink-0"
                                    aria-hidden="true"
                                />
                                <span className="font-medium text-sm">
                                    Yelahanka, Bengaluru, Karnataka, India — 560064
                                </span>
                            </div>
                            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/50 border border-muted">
                                <Clock
                                    className="h-5 w-5 text-primary shrink-0"
                                    aria-hidden="true"
                                />
                                <span className="font-medium text-sm">
                                    Mon – Sat, 9:00 AM – 7:00 PM IST
                                </span>
                            </div>
                        </div>

                        <Button
                            className="rounded-full font-bold w-fit gap-2"
                            asChild
                        >
                            <a
                                href="https://maps.google.com/?q=Yelahanka,Bengaluru,Karnataka"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Get directions to MillionHuts HQ on Google Maps"
                            >
                                <Navigation className="h-4 w-4" aria-hidden="true" />
                                Get Directions
                                <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                            </a>
                        </Button>
                    </div>

                    {/* Map Side — Lazy-loaded for performance */}
                    <div className="h-[350px] sm:h-[400px] md:h-auto md:min-h-[500px] relative order-2">
                        {!mapLoaded && (
                            <div
                                className="absolute inset-0 bg-muted/40 flex flex-col items-center justify-center gap-4 cursor-pointer group transition-colors hover:bg-muted/50"
                                onClick={() => setMapLoaded(true)}
                                role="button"
                                tabIndex={0}
                                aria-label="Click to load interactive map showing MillionHuts HQ location in Yelahanka, Bengaluru"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setMapLoaded(true);
                                    }
                                }}
                            >
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="h-16 w-16 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                                >
                                    <MapPin
                                        className="h-7 w-7 text-primary"
                                        aria-hidden="true"
                                    />
                                </motion.div>
                                <div className="text-center">
                                    <p className="text-sm font-bold text-foreground">
                                        Click to load map
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        Yelahanka, Bengaluru
                                    </p>
                                </div>
                            </div>
                        )}
                        {mapLoaded && (
                            <iframe
                                title="MillionHuts HQ Location — Yelahanka, Bengaluru"
                                width="100%"
                                height="100%"
                                style={{
                                    filter: "grayscale(0.8) contrast(1.1) saturate(0.9)",
                                    minHeight: "100%",
                                }}
                                frameBorder="0"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31085.5835456088!2d77.59906409999999!3d13.118311899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1856f737d2d5%3A0xbef78d20185d942f!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1771925785154!5m2!1sen!2sin"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        )}
                        {/* Premium border overlay */}
                        <div
                            className="absolute inset-0 pointer-events-none border-[8px] sm:border-[12px] border-background rounded-[2rem] sm:rounded-[3rem] md:rounded-none md:rounded-r-[3rem]"
                            aria-hidden="true"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
