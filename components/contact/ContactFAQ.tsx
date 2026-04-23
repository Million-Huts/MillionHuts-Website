"use client";

import { useState, useEffect } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

interface FAQ {
    question: string;
    answer: string;
}

// ─── Mock Data (Spec-exact) — Replace with API call when endpoint is ready ───
const MOCK_FAQS: FAQ[] = [
    {
        question: "How do I verify my KYC?",
        answer: "You can complete your KYC verification directly from the Tenant Portal. Navigate to Profile → KYC Verification and upload your Aadhaar or PAN card. Verification is typically completed within 24 hours.",
    },
    {
        question: "Can I manage multiple PGs under one account?",
        answer: "Yes! The Owner Portal supports multi-property management under a single account. You can add unlimited properties depending on your plan, and switch between them from the dashboard.",
    },
    {
        question: "What happens if my gate QR code isn't scanning?",
        answer: "First, ensure your screen brightness is at maximum. If the issue persists, you can use the manual entry code shown below the QR. Contact support via WhatsApp for immediate assistance.",
    },
    {
        question: "How do I verify a property before paying?",
        answer: "Every property on MillionHuts goes through a 3-step verification. You can also request a live video tour through our dashboard before booking.",
    },
    {
        question: "Can I cancel a booking?",
        answer: "Yes, cancellations made within 24 hours of booking are fully refundable, provided the move-in date is more than 7 days away. Check our cancellation policy for full details.",
    },
];

export default function ContactFAQ() {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // ──────────────────────────────────────────────────────
        // API-ready: Swap the mock block below with a real fetch
        // Example:
        //   const fetchFAQs = async () => {
        //     try {
        //       const res = await fetch("/api/faqs");
        //       if (!res.ok) throw new Error("Failed to load FAQs");
        //       const data = await res.json();
        //       setFaqs(data.data);
        //     } catch (err) {
        //       setError("Unable to load FAQs. Please try again.");
        //       setFaqs(MOCK_FAQS); // fallback to mock
        //     } finally {
        //       setLoading(false);
        //     }
        //   };
        //   fetchFAQs();
        // ──────────────────────────────────────────────────────

        const timer = setTimeout(() => {
            setFaqs(MOCK_FAQS);
            setLoading(false);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    const filteredFaqs = faqs.filter(
        (faq) =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section
            className="py-20 md:py-24 bg-muted/20"
            aria-labelledby="faq-heading"
            id="faq-section"
        >
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-10"
                >
                    <div
                        className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/20"
                        aria-hidden="true"
                    >
                        <HelpCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h2
                        id="faq-heading"
                        className="text-3xl md:text-4xl font-black tracking-tight"
                    >
                        Quick Answers
                    </h2>
                    <p className="text-muted-foreground mt-2 max-w-lg">
                        Find instant solutions to the most common inquiries.
                    </p>
                </motion.div>

                {/* Search filter */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mb-8 relative max-w-md mx-auto"
                >
                    <Search
                        className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none"
                        aria-hidden="true"
                    />
                    <Input
                        type="search"
                        placeholder="Search FAQs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-11 h-12 rounded-full text-base bg-background"
                        aria-label="Search frequently asked questions"
                        id="faq-search"
                    />
                </motion.div>

                {/* Error state */}
                {error && (
                    <div
                        className="mb-6 p-4 rounded-2xl bg-destructive/10 text-destructive text-sm text-center border border-destructive/20"
                        role="alert"
                    >
                        {error}
                    </div>
                )}

                {/* Loading state */}
                {loading ? (
                    <div className="space-y-4" aria-busy="true" aria-label="Loading FAQs">
                        {Array(3)
                            .fill(0)
                            .map((_, i) => (
                                <Skeleton key={i} className="h-[72px] w-full rounded-2xl" />
                            ))}
                    </div>
                ) : filteredFaqs.length === 0 ? (
                    /* Empty state */
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <HelpCircle className="h-10 w-10 text-muted-foreground/30 mx-auto mb-3" />
                        <p className="text-muted-foreground font-medium">
                            No matching questions found.
                        </p>
                        <p className="text-muted-foreground text-sm mt-1">
                            Try a different search term or{" "}
                            <button
                                onClick={() => setSearchQuery("")}
                                className="text-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                            >
                                clear the filter
                            </button>
                            .
                        </p>
                    </motion.div>
                ) : (
                    /* FAQ Accordion */
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full space-y-3"
                    >
                        {filteredFaqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                            >
                                <AccordionItem
                                    value={`item-${i}`}
                                    className="bg-background border rounded-2xl px-5 sm:px-6 py-1 hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/15 transition-shadow data-[state=open]:shadow-md data-[state=open]:shadow-black/5 data-[state=open]:border-primary/20"
                                >
                                    <AccordionTrigger
                                        className="text-left font-bold text-base sm:text-lg hover:no-underline py-4 gap-4"
                                        aria-label={`FAQ: ${faq.question}`}
                                    >
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-5 leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                )}
            </div>
        </section>
    );
}
