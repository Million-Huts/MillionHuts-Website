import Head from 'next/head';
import HeroSection from '@/components/home/HeroSection';
import FeaturedSection from '@/components/home/FeaturedSection';
import HowItWorks from '@/components/home/HowItWorks';
import Why from '@/components/home/Why';
import Testimonials from '@/components/home/Testimonials';
import OwnerCTA from '@/components/home/OwnerCTA';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
    return (
        <>
            <Head>
                {/* Primary SEO */}
                <title>
                    PG Near Me | Find Verified PG in Bangalore & India | MillionHuts
                </title>

                <meta
                    name="description"
                    content="Find verified PG accommodations near you with zero brokerage. Explore PG in Bangalore, Hyderabad & across India. Trusted by tenants & PG owners for smart living and management."
                />

                <meta
                    name="keywords"
                    content="
      PG near me,
      PG in Bangalore,
      PG accommodation India,
      Coliving spaces India,
      PG for men,
      PG for women,
      Best PG in Bangalore,
      No brokerage PG,
      PG booking platform,
      PG management software India,
      Hostel management software,
      MillionHuts
    "
                />

                <meta name="robots" content="index, follow" />
                <meta name="author" content="MillionHuts" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Canonical */}
                <link rel="canonical" href="https://millionhuts.com/" />

                {/* Geo SEO (Important for India ranking) */}
                <meta name="geo.region" content="IN" />
                <meta name="geo.placename" content="India" />
                <meta name="geo.position" content="12.9716;77.5946" />
                <meta name="ICBM" content="12.9716, 77.5946" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="MillionHuts" />
                <meta property="og:url" content="https://millionhuts.com/" />
                <meta
                    property="og:title"
                    content="Find Verified PG Near You | MillionHuts"
                />
                <meta
                    property="og:description"
                    content="Search verified PG accommodations with modern amenities. No brokerage, instant move-in, and digital rent management for tenants and owners."
                />
                <meta property="og:image" content="https://millionhuts.com/og-main-preview.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="MillionHuts | Find Your Perfect PG" />
                <meta
                    name="twitter:description"
                    content="Simplifying PG living for tenants and management for owners across India."
                />
                <meta name="twitter:image" content="https://millionhuts.com/og-main-preview.jpg" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />

                {/* Theme Color */}
                <meta name="theme-color" content="#0f172a" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "MillionHuts",
                            url: "https://millionhuts.com",
                            potentialAction: {
                                "@type": "SearchAction",
                                target: "https://millionhuts.com/pg?search={search_term_string}",
                                "query-input": "required name=search_term_string",
                            },
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
                            sameAs: [
                                "https://facebook.com/",
                                "https://instagram.com/",
                                "https://twitter.com/"
                            ]
                        }),
                    }}
                />
            </Head>


            <div className="flex flex-col min-h-screen">
                <HeroSection />
                <FeaturedSection />
                <HowItWorks />
                <Why />
                <Testimonials />
                <OwnerCTA />
                <FinalCTA />
            </div>
        </>
    );
}