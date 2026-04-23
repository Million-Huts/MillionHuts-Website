import Head from "next/head";

import FeaturesHero from "@/components/features/FeaturesHero";
import FeatureBentoGrid from "@/components/features/FeatureBentoGrid";
import FeatureTabs from "@/components/features/FeatureTabs";
import MessAssetSpecial from "@/components/features/MessAssetSpecial";
import KYCSection from "@/components/features/KYCSection";
import FeatureCTA from "@/components/features/FeatureCTA";

export default function FeaturesPage() {
    return (
        <>
            <Head>
                {/* ================= PRIMARY SEO ================= */}

                <title>
                    Features | PG Management Software India | MillionHuts Platform
                </title>

                <meta
                    name="description"
                    content="Discover powerful PG management software features by MillionHuts. Manage tenants, rent, expenses, rooms, mess, assets, complaints, staff and reports in one smart platform for PG owners in India."
                />

                <meta
                    name="keywords"
                    content="
            PG management software features,
            Hostel management software India,
            Property management software PG,
            Tenant management system,
            Rent management software India,
            Mess management software,
            Asset management PG,
            Complaint management hostel,
            Coliving management software,
            MillionHuts features
          "
                />

                <meta name="robots" content="index, follow" />
                <meta name="author" content="MillionHuts" />

                {/* Canonical */}
                <link rel="canonical" href="https://millionhuts.com/features" />

                {/* Geo SEO */}
                <meta name="geo.region" content="IN" />
                <meta name="geo.placename" content="India" />
                <meta name="geo.position" content="12.9716;77.5946" />
                <meta name="ICBM" content="12.9716, 77.5946" />

                {/* ================= OPEN GRAPH ================= */}

                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="MillionHuts" />
                <meta property="og:url" content="https://millionhuts.com/features" />
                <meta
                    property="og:title"
                    content="MillionHuts Features | Complete PG Management Platform"
                />
                <meta
                    property="og:description"
                    content="From tenant management to mess automation, explore the tools built for modern PG and coliving operators."
                />
                <meta
                    property="og:image"
                    content="https://millionhuts.com/og-features.jpg"
                />

                {/* ================= TWITTER ================= */}

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="MillionHuts Features | Smart PG Management"
                />
                <meta
                    name="twitter:description"
                    content="All-in-one PG management platform for owners across India."
                />
                <meta
                    name="twitter:image"
                    content="https://millionhuts.com/og-features.jpg"
                />

                {/* Theme */}
                <meta name="theme-color" content="#0f172a" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* ================= STRUCTURED DATA ================= */}

                {/* Software Application Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            name: "MillionHuts PG Management Software",
                            applicationCategory: "BusinessApplication",
                            operatingSystem: "Web",
                            description:
                                "All-in-one PG and hostel management software for property owners to manage tenants, rent, rooms, expenses, assets, and operations.",
                            featureList: [
                                "Property Management",
                                "Tenant Management",
                                "Room and Floor Management",
                                "Rent Collection & Payment Tracking",
                                "Expense Management",
                                "Staff Management",
                                "Mess Management",
                                "Asset Tracking",
                                "Complaint Management",
                                "Alerts & Notifications",
                                "Announcements",
                                "Reports & PDF Generation",
                                "Digital KYC Verification",
                            ],
                            url: "https://millionhuts.com/features",
                            offers: {
                                "@type": "Offer",
                                priceCurrency: "INR",
                                price: "0",
                                description:
                                    "Flexible pricing plans available for PG owners and operators.",
                            },
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
                            sameAs: [
                                "https://facebook.com/",
                                "https://instagram.com/",
                                "https://twitter.com/",
                            ],
                        }),
                    }}
                />
            </Head>

            <div className="flex flex-col min-h-screen bg-background">
                {/* 1. HERO */}
                <FeaturesHero />

                {/* 2. CORE MANAGEMENT GRID */}
                <FeatureBentoGrid />

                {/* 3. OWNER vs TENANT EXPERIENCE */}
                <FeatureTabs />

                {/* 4. SPECIAL MODULES */}
                <MessAssetSpecial />

                {/* 5. SECURITY & KYC */}
                <KYCSection />

                {/* 6. FINAL CTA */}
                <FeatureCTA />
            </div>
        </>
    );
}