import Head from "next/head";
import { motion } from "framer-motion";

import ContactHero from "@/components/contact/ContactHero";
import ContactMain from "@/components/contact/ContactMain";
import ContactFAQ from "@/components/contact/ContactFAQ";
import QuickConnectBar from "@/components/contact/QuickConnectBar";
import FloatingFAB from "@/components/contact/FloatingFAB";
import ScrollProgress from "@/components/contact/ScrollProgress";

export default function ContactPage() {
    return (
        <>
            <Head>
                {/* Primary SEO */}
                <title>Contact MillionHuts | PG Booking & Management Support India</title>
                <meta
                    name="description"
                    content="Contact MillionHuts for PG bookings, property listings, or SaaS management support. Get help finding PG near you or grow your PG business across India."
                />
                <meta
                    name="keywords"
                    content="MillionHuts contact, PG contact India, PG booking support, PG near me contact, PG management software contact, list your PG India, MillionHuts support, PG inquiry Bangalore"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="MillionHuts" />
                <link rel="canonical" href="https://millionhuts.com/contact" />

                {/* Geo */}
                <meta name="geo.region" content="IN" />
                <meta name="geo.placename" content="India" />
                <meta name="geo.position" content="12.9716;77.5946" />
                <meta name="ICBM" content="12.9716, 77.5946" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="MillionHuts" />
                <meta property="og:url" content="https://millionhuts.com/contact" />
                <meta property="og:title" content="Contact MillionHuts | We're Here to Help" />
                <meta property="og:description" content="Reach out to MillionHuts for PG bookings, listings, or partnerships. Our team is ready to assist tenants and property owners across India." />
                <meta property="og:image" content="https://millionhuts.com/og-contact.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact MillionHuts" />
                <meta name="twitter:description" content="Need help with PG bookings or management? Contact MillionHuts today." />
                <meta name="twitter:image" content="https://millionhuts.com/og-contact.jpg" />

                <meta name="theme-color" content="#0f172a" />
                <link rel="icon" href="/favicon.ico" />

                {/* Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    name: "Contact MillionHuts",
                    url: "https://millionhuts.com/contact",
                    description: "Contact MillionHuts for PG bookings, listings, and management support.",
                })}} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "MillionHuts",
                    url: "https://millionhuts.com",
                    logo: "https://millionhuts.com/logo.png",
                    contactPoint: [{
                        "@type": "ContactPoint",
                        telephone: "+91-98765-43210",
                        email: "hello@millionhuts.com",
                        contactType: "customer support",
                        areaServed: "IN",
                        availableLanguage: ["English", "Hindi"],
                    }],
                    sameAs: ["https://wa.me/919876543210"],
                })}} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    name: "MillionHuts",
                    image: "https://millionhuts.com/logo.png",
                    "@id": "https://millionhuts.com",
                    url: "https://millionhuts.com",
                    telephone: "+91-98765-43210",
                    email: "hello@millionhuts.com",
                    address: {
                        "@type": "PostalAddress",
                        streetAddress: "Yelahanka",
                        addressLocality: "Bengaluru",
                        addressRegion: "Karnataka",
                        postalCode: "560064",
                        addressCountry: "IN",
                    },
                    geo: { "@type": "GeoCoordinates", latitude: 13.1183, longitude: 77.5991 },
                    openingHoursSpecification: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                        opens: "09:00",
                        closes: "19:00",
                    },
                })}} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: [
                        { "@type": "Question", name: "How do I verify my KYC?", acceptedAnswer: { "@type": "Answer", text: "You can complete your KYC verification directly from the Tenant Portal. Navigate to Profile → KYC Verification and upload your Aadhaar or PAN card." }},
                        { "@type": "Question", name: "Can I manage multiple PGs under one account?", acceptedAnswer: { "@type": "Answer", text: "Yes! The Owner Portal supports multi-property management under a single account." }},
                        { "@type": "Question", name: "What happens if my gate QR code isn't scanning?", acceptedAnswer: { "@type": "Answer", text: "Ensure your screen brightness is at maximum. If the issue persists, use the manual entry code shown below the QR." }},
                    ],
                })}} />
            </Head>

            {/* Scroll progress bar — fixed top */}
            <ScrollProgress />

            {/* Sticky mobile quick-connect bar */}
            <QuickConnectBar />

            {/* Desktop floating speed dial */}
            <FloatingFAB />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col min-h-screen pb-20 md:pb-0"
            >
                <ContactHero />
                <ContactMain />
                <ContactFAQ />
            </motion.div>
        </>
    );
}
