import Head from "next/head";
import { motion } from "framer-motion";

import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import OriginStory from "@/components/about/OriginStory";
import PainPoints from "@/components/about/PainPoints";
import ModulesShowcase from "@/components/about/ModulesShowcase";
import Timeline from "@/components/about/Timeline";
import TeamSection from "@/components/about/TeamSection";
import TrustValues from "@/components/about/TrustValues";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
    return (
        <>
            <Head>
                {/* Primary SEO */}
                <title>
                    About MillionHuts | Our Story, Mission & Team | Bengaluru-Born PG Management
                </title>

                <meta
                    name="description"
                    content="Discover the story behind MillionHuts — a Bengaluru-born startup digitizing PG and coliving management. Meet our founder Vikram Hegde, our leadership, and the team powering India's smartest PG platform."
                />

                <meta
                    name="keywords"
                    content="
                        MillionHuts about,
                        MillionHuts team,
                        MillionHuts founder,
                        Vikram Hegde MillionHuts,
                        PG management startup India,
                        Bengaluru PG software,
                        coliving management platform,
                        MillionHuts story,
                        VVCE Mysore internship
                    "
                />

                <meta name="robots" content="index, follow" />
                <meta name="author" content="MillionHuts" />

                {/* Canonical */}
                <link rel="canonical" href="https://millionhuts.com/about" />

                {/* Geo SEO */}
                <meta name="geo.region" content="IN-KA" />
                <meta name="geo.placename" content="Yelahanka, Bengaluru" />
                <meta name="geo.position" content="13.1007;77.5963" />
                <meta name="ICBM" content="13.1007, 77.5963" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="MillionHuts" />
                <meta property="og:url" content="https://millionhuts.com/about" />
                <meta
                    property="og:title"
                    content="About MillionHuts | Bengaluru-Born PG Management Platform"
                />
                <meta
                    property="og:description"
                    content="From a single observation in Yelahanka to a full SaaS platform — discover how MillionHuts is digitizing India's coliving industry."
                />
                <meta
                    property="og:image"
                    content="https://millionhuts.com/og-about.jpg"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="About MillionHuts | Our Story & Team"
                />
                <meta
                    name="twitter:description"
                    content="Meet the team behind India's smartest PG management platform."
                />
                <meta
                    name="twitter:image"
                    content="https://millionhuts.com/og-about.jpg"
                />

                {/* Theme */}
                <meta name="theme-color" content="#0f172a" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            name: "About MillionHuts",
                            url: "https://millionhuts.com/about",
                            description:
                                "The story behind MillionHuts — digitizing PG management from Bengaluru to the world.",
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "MillionHuts",
                            url: "https://millionhuts.com",
                            logo: "https://millionhuts.com/logo.png",
                            founder: [
                                {
                                    "@type": "Person",
                                    name: "Vikram Hegde",
                                    jobTitle: "Co-Founder & Lead Developer",
                                },
                                {
                                    "@type": "Person",
                                    name: "Khamar Sultana",
                                    jobTitle: "Co-Founder & Director",
                                },
                                {
                                    "@type": "Person",
                                    name: "Majid Shaikh",
                                    jobTitle: "Co-Founder & Operations",
                                },
                            ],
                            foundingLocation: {
                                "@type": "Place",
                                name: "Yelahanka, Bengaluru, Karnataka, India",
                            },
                            sameAs: [
                                "https://facebook.com/",
                                "https://instagram.com/",
                                "https://twitter.com/",
                            ],
                        }),
                    }}
                />
            </Head>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col min-h-screen bg-background"
            >
                {/* 1. HERO — The Mission (word-by-word animation) */}
                <AboutHero />

                {/* 2. ABOUT — Mission, Vision, Description */}
                <MissionVision />

                {/* 3. ORIGIN STORY — The Spark */}
                <OriginStory />

                {/* 4. PAIN POINTS — Why PG Management is Broken */}
                <PainPoints />

                {/* 5. MODULES — All 13 PG Management Modules */}
                <ModulesShowcase />

                {/* 6. TIMELINE + LEADERSHIP — Side by side */}
                <Timeline />

                {/* 7. TEAM — All Members */}
                <TeamSection />

                {/* 9. TRUST VALUES */}
                <TrustValues />

                {/* 10. CTA */}
                <AboutCTA />
            </motion.div>
        </>
    );
}
