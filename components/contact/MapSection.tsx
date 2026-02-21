import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="bg-background border rounded-[3rem] overflow-hidden grid md:grid-cols-2 shadow-2xl shadow-black/5">

                    <div className="p-12 flex flex-col justify-center">
                        <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                            <Navigation className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="text-4xl font-black mb-4 tracking-tight">Come over for a <span className="text-primary italic">coffee.</span></h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            Our headquarters is located in the heart of Gurgaon's tech hub.
                            We'd love to discuss how we can revolutionize your PG experience in person.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-muted">
                                <MapPin className="h-5 w-5 text-primary" />
                                <span className="font-medium text-sm">Building 42, Cyber Hub, Gurgaon</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-[400px] md:h-auto relative group">
                        <iframe
                            title="MillionHuts Location"
                            width="100%"
                            height="100%"
                            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
                            frameBorder="0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14035.172152823616!2d77.060134!3d28.423985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d192080000001%3A0x6b19812497645f0d!2sSector%2062%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                        />
                        {/* Overlay to make it feel like part of the UI */}
                        <div className="absolute inset-0 pointer-events-none border-[12px] border-background rounded-[3rem] md:rounded-none" />
                    </div>

                </div>
            </div>
        </section>
    );
}