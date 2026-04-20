"use client";

import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function PGImageCarousel({ images }: { images: any[] }) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="relative w-full group">
            {/* Main Container with Nordic styling */}
            <div className="bg-card rounded-sm overflow-hidden">
                <Carousel setApi={setApi} className="w-full">
                    <CarouselContent className="ml-0">
                        {images.map((img) => (
                            <CarouselItem key={img.id} className="pl-0">
                                {/* 🔥 Image Wrapper with Dark Mode support */}
                                <div className="w-full flex items-center justify-center bg-background aspect-[16/10] md:aspect-[16/9]">
                                    <img
                                        src={img.url}
                                        alt="PG Gallery"
                                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            {/* Image Counter (Optional but elegant for high-end feel) */}
            <div className="absolute top-6 right-6 z-10">
                <div className="glass px-3 py-1 rounded-lg border border-white/10 text-[10px] font-black uppercase tracking-widest text-foreground">
                    {current + 1} / {images.length}
                </div>
            </div>
        </div>
    );
}