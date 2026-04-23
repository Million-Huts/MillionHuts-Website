"use client";

import { MapPin } from "lucide-react";

interface MapPreviewProps {
    lat?: number;
    lng?: number;
    name?: string;
}

export function MapPreview({ lat, lng, name }: MapPreviewProps) {
    const hasLocation = lat && lng;

    // Use a high-quality Google Maps Embed URL
    // We encode the coordinates to ensure the pin drops exactly where the PG is.
    const googleMapsEmbedUrl = hasLocation
        ? `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${lat},${lng}&zoom=15&maptype=roadmap`
        : "";

    /**
     * NOTE: If you don't have an API key ready yet, you can use the free Search URL as a fallback:
     * `https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`
     */
    const freeFallbackUrl = `https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="sticky top-24 w-full h-[calc(100vh-120px)] rounded-sm overflow-hidden border border-border shadow-soft bg-secondary/30 transition-all duration-500">
            {!hasLocation ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-4">
                    <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center animate-pulse shadow-sm border border-border">
                        <MapPin size={24} className="text-primary" />
                    </div>
                    <div className="text-center">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">Interactive Map</p>
                        <p className="text-xs font-bold text-muted-foreground">Hover over a PG to view location</p>
                    </div>
                </div>
            ) : (
                <div className="relative h-full w-full animate-in fade-in duration-700">
                    {/* Google Maps Iframe */}
                    <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={freeFallbackUrl}
                        className="grayscale-[20%] invert-[5%] dark:invert-[90%] dark:hue-rotate-180" // Simple CSS trick to make maps look better in dark mode
                    ></iframe>

                    {/* Overlay Gradient to blend with the UI */}
                    <div className="absolute inset-0 pointer-events-none border-[12px] border-transparent shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] rounded-[32px]" />

                    {/* Floating Info Tag */}
                    <div className="absolute bottom-0 left-6 right-6 glass p-3 rounded-0 border border-white/20 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 bg-primary/10 rounded-xl">
                                <MapPin size={20} className="text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">Location Preview</p>
                                <h4 className="font-black text-sm truncate text-foreground">{name}</h4>
                                <div className="flex gap-2 mt-1">
                                    <span className="text-[9px] font-bold px-2 py-0.5 bg-secondary rounded-full text-muted-foreground">Lat: {lat.toFixed(4)}</span>
                                    <span className="text-[9px] font-bold px-2 py-0.5 bg-secondary rounded-full text-muted-foreground">Lng: {lng.toFixed(4)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}