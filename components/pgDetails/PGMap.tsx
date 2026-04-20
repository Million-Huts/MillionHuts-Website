"use client";

import { MapPin } from "lucide-react";

interface PGMapProps {
    lat: number;
    lng: number;
    name: string;
}

export function PGMap({ lat, lng, name }: PGMapProps) {
    // Construct the Google Maps Embed URL
    // We use the coordinates to place a pin exactly where the PG is
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
    &q=${lat},${lng}&zoom=15`;

    // NO-KEY ALTERNATIVE (Uncomment below if you don't have an API key yet)
    const noKeyUrl = `https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <section id="location" className="pt-12 border-t mt-12">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-black tracking-tight">Location</h3>
                    <p className="text-sm text-muted-foreground font-medium">Explore the neighborhood</p>
                </div>
                <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:underline"
                >
                    <MapPin size={14} /> Get Directions
                </a>
            </div>

            <div className="relative w-full h-[400px] rounded-[32px] overflow-hidden border shadow-inner bg-slate-50 group">
                {/* Overlay for aesthetic */}
                <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-[32px] z-10" />

                <iframe
                    title={`Map showing ${name}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={noKeyUrl} // Use mapUrl if you have the API Key configured
                    className="grayscale-[0.2] contrast-[1.1] brightness-[1.02] group-hover:grayscale-0 transition-all duration-700"
                />
            </div>

            <div className="mt-4 flex gap-6 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Safe Neighborhood
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Public Transport Nearby
                </div>
            </div>
        </section>
    );
}