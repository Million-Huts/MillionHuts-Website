import Head from "next/head";
import { motion } from "framer-motion";

import ContactHero from "@/components/contact/ContactHero";
import ContactMain from "@/components/contact/ContactMain";
import ContactFAQ from "@/components/contact/ContactFAQ";
import MapSection from "@/components/contact/MapSection";

export default function ContactPage() {
    return (
        <>
            <Head>
                {/* Primary SEO */}
                <title>
                    Contact MillionHuts | PG Booking & Management Support India
                </title>

                <meta
                    name="description"
                    content="Contact MillionHuts for PG bookings, property listings, or SaaS management support. Get help finding PG near you or grow your PG business across India."
                />

                <meta
                    name="keywords"
                    content="
            MillionHuts contact,
            PG contact India,
            PG booking support,
            PG near me contact,
            PG management software contact,
            list your PG India,
            MillionHuts support,
            PG inquiry Bangalore
          "
                />

                <meta name="robots" content="index, follow" />
                <meta name="author" content="MillionHuts" />

                {/* Canonical */}
                <link rel="canonical" href="https://millionhuts.com/contact" />

                {/* Geo SEO */}
                <meta name="geo.region" content="IN" />
                <meta name="geo.placename" content="India" />
                <meta name="geo.position" content="12.9716;77.5946" />
                <meta name="ICBM" content="12.9716, 77.5946" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="MillionHuts" />
                <meta property="og:url" content="https://millionhuts.com/contact" />
                <meta
                    property="og:title"
                    content="Contact MillionHuts | We're Here to Help"
                />
                <meta
                    property="og:description"
                    content="Reach out to MillionHuts for PG bookings, listings, or partnerships. Our team is ready to assist tenants and property owners across India."
                />
                <meta
                    property="og:image"
                    content="https://millionhuts.com/og-contact.jpg"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact MillionHuts" />
                <meta
                    name="twitter:description"
                    content="Need help with PG bookings or management? Contact MillionHuts today."
                />
                <meta
                    name="twitter:image"
                    content="https://millionhuts.com/og-contact.jpg"
                />

                {/* Theme */}
                <meta name="theme-color" content="#0f172a" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* ================= STRUCTURED DATA ================= */}

                {/* Contact Page Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ContactPage",
                            name: "Contact MillionHuts",
                            url: "https://millionhuts.com/contact",
                            description:
                                "Contact MillionHuts for PG bookings, listings, and management support.",
                        }),
                    }}
                />

                {/* Organization Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "MillionHuts",
                            url: "https://millionhuts.com",
                            logo: "https://millionhuts.com/logo.png",
                            contactPoint: [
                                {
                                    "@type": "ContactPoint",
                                    contactType: "customer support",
                                    areaServed: "IN",
                                    availableLanguage: ["English", "Hindi"],
                                },
                            ],
                        }),
                    }}
                />

                {/* Local Business Schema (Trust Booster) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "MillionHuts",
                            image: "https://millionhuts.com/logo.png",
                            "@id": "https://millionhuts.com",
                            url: "https://millionhuts.com",
                            telephone: "+91-XXXXXXXXXX",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Bangalore",
                                addressRegion: "Karnataka",
                                addressCountry: "IN",
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: 12.9716,
                                longitude: 77.5946,
                            },
                        }),
                    }}
                />
            </Head>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col min-h-screen"
            >
                {/* Hero Section - The Hook */}
                <ContactHero />

                {/* Main Interaction - Details & Form */}
                <ContactMain />

                {/* FAQ Section - Reducing Friction */}
                <ContactFAQ />

                {/* Map Section - The Trust Builder */}
                <MapSection />
            </motion.div>
        </>
    );
}