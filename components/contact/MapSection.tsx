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
                            Our headquarters is located in the heart of Bengaluru's tech hub.
                            We'd love to discuss how we can revolutionize your PG experience in person.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-muted">
                                <MapPin className="h-5 w-5 text-primary" />
                                <span className="font-medium text-sm">Yelahanka, Bengaluru, Karnataka, India - 560001</span>
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31085.5835456088!2d77.59906409999999!3d13.118311899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1856f737d2d5%3A0xbef78d20185d942f!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1771925785154!5m2!1sen!2sin"
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        {/* Overlay to make it feel like part of the UI */}
                        <div className="absolute inset-0 pointer-events-none border-[12px] border-background rounded-[3rem] md:rounded-none" />
                    </div>

                </div>
            </div>
        </section>
    );
}