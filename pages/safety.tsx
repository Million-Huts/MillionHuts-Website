import Head from "next/head";
import SafetyHero from "@/components/safety/SafetyHero";
import SafetyPillars from "@/components/safety/SafetyPillars";
import TenantJourney from "@/components/safety/TenantJourney";
import OwnerCompliance from "@/components/safety/OwnerCompliance";
import CommunityTransparency from "@/components/safety/CommunityTransparency";
import SafetyFAQ from "@/components/safety/SafetyFAQ";
import SafetyCTA from "@/components/safety/SafetyCTA";

export default function SafetyPage() {
    return (
        <>
            <Head>
                {/* Primary SEO */}
                <title>
                    Safety & Security | Verified PG Living in India | MillionHuts
                </title>

                <meta
                    name="description"
                    content="MillionHuts is India's safest PG platform. Every tenant is KYC-verified, every gate entry is digitally logged, and every complaint is tracked to resolution. Safe living, guaranteed."
                />

                <meta
                    name="keywords"
                    content="
                        safe PG India,
                        verified PG accommodation,
                        KYC verified tenants,
                        PG security India,
                        digital gate entry PG,
                        safe coliving India,
                        PG complaint management,
                        verified PG Bangalore,
                        safe hostel India,
                        MillionHuts safety
                    "
                />

                <meta name="robots" content="index, follow" />
                <meta name="author" content="MillionHuts" />

                {/* Canonical */}
                <link rel="canonical" href="https://millionhuts.com/safety" />

                {/* Geo SEO */}
                <meta name="geo.region" content="IN" />
                <meta name="geo.placename" content="India" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="MillionHuts" />
                <meta property="og:url" content="https://millionhuts.com/safety" />
                <meta
                    property="og:title"
                    content="Safety & Security | MillionHuts — India's Safest PG Platform"
                />
                <meta
                    property="og:description"
                    content="KYC-verified residents, digital gate logs, and transparent complaint resolution. MillionHuts is built on a three-layer safety standard."
                />
                <meta property="og:image" content="https://millionhuts.com/og-safety.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="MillionHuts Safety Standard | Verified PG Living" />
                <meta
                    name="twitter:description"
                    content="Every tenant verified. Every entry logged. Every issue resolved. That's the MillionHuts Safety Standard."
                />
                <meta name="twitter:image" content="https://millionhuts.com/og-safety.jpg" />

                <meta name="theme-color" content="#020617" />
                <link rel="icon" href="/favicon.ico" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            name: "MillionHuts Safety & Security",
                            url: "https://millionhuts.com/safety",
                            description:
                                "Learn how MillionHuts protects tenants and property owners through KYC verification, digital gate entry logs, and transparent complaint resolution.",
                            publisher: {
                                "@type": "Organization",
                                name: "MillionHuts",
                                url: "https://millionhuts.com",
                                logo: "https://millionhuts.com/logo.png",
                            },
                        }),
                    }}
                />
            </Head>

            <div className="flex flex-col min-h-screen">
                {/* 1. Hero — Dark, security-first */}
                <SafetyHero />

                {/* 2. Three Pillars Bento Grid */}
                <SafetyPillars />

                {/* 3. Tenant 3-Step Journey */}
                <TenantJourney />

                {/* 4. Owner Compliance Advantage */}
                <OwnerCompliance />

                {/* 5. Community Transparency — Know Your PG-Mates */}
                <CommunityTransparency />

                {/* 6. Safety FAQ Accordion */}
                <SafetyFAQ />

                {/* 7. Final CTA */}
                <SafetyCTA />
            </div>
        </>
    );
}
