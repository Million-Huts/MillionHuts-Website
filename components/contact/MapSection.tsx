"use client";

import { useState } from "react";
import { MapPin, Navigation, Clock, ExternalLink, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function MapSection() {
    const [mapLoaded, setMapLoaded] = useState(false);

    return (
        <section
            className="py-24 md:py-32 relative overflow-hidden"
            aria-labelledby="map-heading"
            id="map-section"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 -z-10" aria-hidden="true">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px]" />
                <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-violet-500/[0.03] rounded-full blur-[100px]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <motion.div
                        className="h-14 w-14 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl flex items-center justify-center mb-5 border border-primary/15 mx-auto"
                        whileHover={{ rotate: -12, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        aria-hidden="true"
                    >
                        <Compass className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h2
                        id="map-heading"
                        className="text-3xl md:text-5xl font-black mb-3 tracking-tight"
                    >
                        Come over for a{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500 italic">
                            coffee.
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                        Our headquarters is located in the heart of Bengaluru&apos;s tech
                        hub. We&apos;d love to discuss how we can revolutionize your PG
                        experience in person.
                    </p>
                </motion.div>

                {/* Map + Info Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative"
                >
                    {/* Main Map Container */}
                    <div className="bg-background border rounded-[2rem] overflow-hidden shadow-2xl shadow-black/[0.06] dark:shadow-black/25">
                        {/* Map area */}
                        <div className="relative h-[400px] sm:h-[450px] md:h-[500px]">
                            {!mapLoaded && (
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-muted/40 to-muted/20 flex flex-col items-center justify-center gap-5 cursor-pointer group transition-colors hover:from-muted/50 hover:to-muted/30"
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
                                    {/* Animated pin with pulse ring */}
                                    <div className="relative">
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-primary/20"
                                            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                        <motion.div
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            className="relative h-20 w-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-primary/20"
                                        >
                                            <MapPin className="h-8 w-8 text-white" aria-hidden="true" />
                                        </motion.div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-base font-bold text-foreground mb-1">
                                            Click to load interactive map
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Yelahanka, Bengaluru, Karnataka
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
                                        filter: "grayscale(0.6) contrast(1.1) saturate(0.9)",
                                        minHeight: "100%",
                                    }}
                                    frameBorder="0"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31085.5835456088!2d77.59906409999999!3d13.118311899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1856f737d2d5%3A0xbef78d20185d942f!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1771925785154!5m2!1sen!2sin"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            )}
                        </div>

                        {/* Info bar at bottom */}
                        <div className="p-6 sm:p-8 border-t bg-background/50 backdrop-blur-sm">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                                    <div className="flex items-center gap-2.5">
                                        <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                                        </div>
                                        <span className="font-medium text-sm">
                                            Yelahanka, Bengaluru, Karnataka — 560064
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <div className="h-9 w-9 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                                            <Clock className="h-4 w-4 text-green-600 dark:text-green-400" aria-hidden="true" />
                                        </div>
                                        <span className="font-medium text-sm">
                                            Mon – Sat, 9 AM – 7 PM IST
                                        </span>
                                    </div>
                                </div>

                                <Button
                                    className="rounded-full font-bold gap-2 shrink-0 bg-gradient-to-r from-primary to-blue-600 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
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
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
