"use client"

import Head from "next/head";
import { useEffect, useState } from "react";

import PricingHero from "@/components/pricing/PricingHero";
import PricingGrid from "@/components/pricing/PricingGrid";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingExtraInfo from "@/components/pricing/PricingExtraInfo";
import FinalCTA from "@/components/home/FinalCTA";
import { Plan } from "@/interfaces/pricing";
import { api } from "@/lib/api";

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState<"MONTHLY" | "YEARLY">("MONTHLY");
    const [plans, setPlans] = useState<Plan[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPlans = async () => {
            setIsLoading(true);
            try {
                // Fetching with interval query as requested
                const response = await api.get("/plans", {
                    params: {
                        interval: billingCycle,
                        limit: "10", // reasonable limit for pricing display
                        page: "1"
                    }
                });

                // API returns { data: Plan[] }
                const planData = response.data?.data
                setPlans(planData);
                setError(null);
            } catch (err) {
                console.error("Failed to load plans:", err);
                setError("Failed to load pricing plans. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPlans();
    }, [billingCycle]);

    return (
        <>
            <Head>
                {/* Primary SEO */}
                <title>
                    Pricing | PG Management Software India | MillionHuts Plans
                </title>

                <meta
                    name="description"
                    content="Affordable PG management software pricing for owners in India. Manage tenants, rent, expenses, and operations with MillionHuts. Flexible monthly and yearly plans."
                />

                <meta
                    name="keywords"
                    content="
            PG management software pricing,
            Hostel management software India,
            Property management software India,
            Rent management software,
            PG SaaS India,
            PG software cost India,
            MillionHuts pricing,
            PG business software plans
          "
                />

                <meta name="robots" content="index, follow" />
                <meta name="author" content="MillionHuts" />

                {/* Canonical */}
                <link rel="canonical" href="https://millionhuts.com/pricing" />

                {/* Geo SEO */}
                <meta name="geo.region" content="IN" />
                <meta name="geo.placename" content="India" />
                <meta name="geo.position" content="12.9716;77.5946" />
                <meta name="ICBM" content="12.9716, 77.5946" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="MillionHuts" />
                <meta property="og:url" content="https://millionhuts.com/pricing" />
                <meta
                    property="og:title"
                    content="MillionHuts Pricing | PG Management Software Plans"
                />
                <meta
                    property="og:description"
                    content="Choose the perfect pricing plan for your PG business. Manage tenants, automate rent collection, and scale your operations with MillionHuts."
                />
                <meta
                    property="og:image"
                    content="https://millionhuts.com/og-pricing.jpg"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="MillionHuts Pricing | PG Software Plans"
                />
                <meta
                    name="twitter:description"
                    content="Flexible plans for PG owners and operators across India."
                />
                <meta
                    name="twitter:image"
                    content="https://millionhuts.com/og-pricing.jpg"
                />

                {/* Theme */}
                <meta name="theme-color" content="#0f172a" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* ================= STRUCTURED DATA ================= */}

                {/* Product Schema (SaaS) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            name: "MillionHuts PG Management Software",
                            operatingSystem: "Web",
                            applicationCategory: "BusinessApplication",
                            offers: {
                                "@type": "Offer",
                                priceCurrency: "INR",
                                price: "0",
                                description:
                                    "Flexible pricing plans available for PG owners and operators.",
                                url: "https://millionhuts.com/pricing",
                            },
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.8",
                                ratingCount: "120",
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

            <div className="flex flex-col min-h-screen">
                {/* 1. HERO - Headline + Billing Toggle */}
                <PricingHero
                    billingCycle={billingCycle}
                    setBillingCycle={setBillingCycle}
                />

                {/* 2. PRICING GRID */}
                <PricingGrid
                    plans={plans}
                    isLoading={isLoading}
                    error={error}
                    billingCycle={billingCycle}
                />

                {/* 3. COMPARISON TABLE - Best to pass all plans here for the columns */}
                <PricingComparison plans={plans} />

                {/* 4. EXTRA INFO */}
                <PricingExtraInfo />

                {/* 5. FINAL CTA */}
                <FinalCTA />
            </div>
        </>
    );
}