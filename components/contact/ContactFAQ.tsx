"use client";

import { useState, useEffect } from "react";
import { Search, X, Lightbulb, ArrowRight, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
    question: string;
    answer: string;
    category: string;
    popular?: boolean;
}

const MOCK_FAQS: FAQ[] = [
    {
        question: "How do I verify my KYC?",
        answer: "You can complete your KYC verification directly from the Tenant Portal. Navigate to Profile → KYC Verification and upload your Aadhaar or PAN card. Verification is typically completed within 24 hours.",
        category: "Account",
        popular: true,
    },
    {
        question: "Can I manage multiple PGs under one account?",
        answer: "Yes! The Owner Portal supports multi-property management under a single account. You can add unlimited properties depending on your plan, and switch between them from the dashboard.",
        category: "Owners",
        popular: true,
    },
    {
        question: "What happens if my gate QR code isn't scanning?",
        answer: "First, ensure your screen brightness is at maximum. If the issue persists, you can use the manual entry code shown below the QR. Contact support via WhatsApp for immediate assistance.",
        category: "Tech",
        popular: true,
    },
    {
        question: "How do I verify a property before paying?",
        answer: "Every property on MillionHuts goes through a 3-step verification. You can also request a live video tour through our dashboard before booking.",
        category: "Tenants",
        popular: false,
    },
    {
        question: "Can I cancel a booking?",
        answer: "Yes, cancellations made within 24 hours of booking are fully refundable, provided the move-in date is more than 7 days away. Check our cancellation policy for full details.",
        category: "Bookings",
        popular: true,
    },
];

const categories = ["All", ...Array.from(new Set(MOCK_FAQS.map((f) => f.category)))];

const categoryColors: Record<string, { bg: string; text: string; badge: string }> = {
    Account: { bg: "from-blue-50 to-blue-50/50 dark:from-blue-950/30 dark:to-blue-950/10", text: "text-blue-700 dark:text-blue-300", badge: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" },
    Owners: { bg: "from-violet-50 to-violet-50/50 dark:from-violet-950/30 dark:to-violet-950/10", text: "text-violet-700 dark:text-violet-300", badge: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300" },
    Tech: { bg: "from-amber-50 to-amber-50/50 dark:from-amber-950/30 dark:to-amber-950/10", text: "text-amber-700 dark:text-amber-300", badge: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300" },
    Tenants: { bg: "from-green-50 to-green-50/50 dark:from-green-950/30 dark:to-green-950/10", text: "text-green-700 dark:text-green-300", badge: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300" },
    Bookings: { bg: "from-pink-50 to-pink-50/50 dark:from-pink-950/30 dark:to-pink-950/10", text: "text-pink-700 dark:text-pink-300", badge: "bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300" },
};

function HighlightText({ text, query }: { text: string; query: string }) {
    if (!query.trim()) return <>{text}</>;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);

    return (
        <>
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <motion.mark
                        key={i}
                        initial={{ opacity: 0, backgroundColor: "rgba(250,204,21,0)" }}
                        animate={{ opacity: 1, backgroundColor: "rgba(250,204,21,0.3)" }}
                        transition={{ duration: 0.3 }}
                        className="rounded px-1 font-semibold not-italic"
                    >
                        {part}
                    </motion.mark>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </>
    );
}

function FAQItem({
    faq,
    index,
    searchQuery,
    isOpen,
    onToggle,
}: {
    faq: FAQ;
    index: number;
    searchQuery: string;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const colors = categoryColors[faq.category] || categoryColors.Account;
    const badge = String(index + 1).padStart(2, "0");

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                    ? `bg-gradient-to-br ${colors.bg} border-primary/20 shadow-lg shadow-primary/5`
                    : "bg-background border-border/40 hover:border-border/70 hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/20"
            }`}
        >
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full flex items-center gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
            >
                {/* Badge */}
                <motion.div
                    animate={isOpen ? { scale: 1.15 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black tabular-nums ${colors.badge}`}
                >
                    {badge}
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1.5">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${colors.badge}`}>
                            {faq.category}
                        </span>
                    </div>
                    <h3 className={`font-bold text-base leading-snug transition-colors duration-300 ${
                        isOpen ? colors.text : "text-foreground group-hover:text-primary"
                    }`}>
                        <HighlightText text={faq.question} query={searchQuery} />
                    </h3>
                </div>

                {/* Chevron */}
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="shrink-0"
                >
                    <ChevronDown className={`h-5 w-5 transition-colors ${isOpen ? colors.text : "text-muted-foreground"}`} />
                </motion.div>
            </button>

            {/* Content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            height: { type: "spring", stiffness: 280, damping: 28 },
                            opacity: { duration: 0.2 },
                        }}
                        style={{ overflow: "hidden" }}
                    >
                        <div className="px-6 pb-6 pl-20">
                            <div className={`border-l-2 pl-4 text-sm leading-relaxed ${colors.text} opacity-85`}>
                                <HighlightText text={faq.answer} query={searchQuery} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function ContactFAQ() {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [openItem, setOpenItem] = useState<number | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFaqs(MOCK_FAQS);
            setLoading(false);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setOpenItem(null);
    }, [searchQuery, activeCategory]);

    const filteredFaqs = faqs.filter((faq) => {
        const q = searchQuery.toLowerCase();
        const matchesSearch = !q || faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
        const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="py-24 md:py-32 relative overflow-hidden" aria-labelledby="faq-heading" id="faq-section">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10" aria-hidden="true">
                <div className="absolute top-20 left-1/3 w-80 h-80 bg-primary/[0.04] rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-violet-500/[0.04] rounded-full blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 space-y-4"
                >
                    <div className="flex items-center gap-4">
                        <motion.div
                            className="h-14 w-14 bg-gradient-to-br from-primary/15 to-violet-500/10 rounded-2xl flex items-center justify-center border border-primary/20"
                            whileHover={{ rotate: 12, scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Lightbulb className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div>
                            <h2 id="faq-heading" className="text-4xl md:text-5xl font-black tracking-tight">
                                Quick{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-violet-500">
                                    Answers
                                </span>
                            </h2>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                        Find instant solutions to the most common inquiries about our platform.
                    </p>
                </motion.div>

                {/* Most Asked Questions - Highlighted Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-20 p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-violet-500/5 to-blue-500/5 border border-primary/10"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-2xl"
                        >
                            🔥
                        </motion.span>
                        <h3 className="text-lg font-bold">Most Asked Questions</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {MOCK_FAQS.filter(f => f.popular).map((faq, i) => (
                            <motion.button
                                key={i}
                                whileHover={{ scale: 1.02, y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    setSearchQuery(faq.question);
                                    setActiveCategory(faq.category);
                                }}
                                className="p-4 rounded-xl bg-background/60 hover:bg-background border border-border/50 hover:border-primary/30 transition-all text-left group"
                            >
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 group-hover:text-primary transition-colors">
                                    {faq.category}
                                </p>
                                <p className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                                    {faq.question}
                                </p>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* FAQ Accordion - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-20"
                >
                    {loading ? (
                        <div className="space-y-4">
                            {Array(3)
                                .fill(0)
                                .map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Skeleton className="h-20 w-full rounded-2xl" />
                                    </motion.div>
                                ))}
                        </div>
                    ) : filteredFaqs.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20"
                        >
                            <div className="h-16 w-16 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Lightbulb className="h-8 w-8 text-muted-foreground/20" />
                            </div>
                            <p className="text-muted-foreground font-semibold mb-3">No matching questions found</p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveCategory("All");
                                }}
                                className="text-primary text-sm font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                            >
                                Reset filters
                            </button>
                        </motion.div>
                    ) : (
                        <div className="space-y-4">
                            {filteredFaqs.map((faq, i) => (
                                <FAQItem
                                    key={`${faq.category}-${i}`}
                                    faq={faq}
                                    index={i}
                                    searchQuery={searchQuery}
                                    isOpen={openItem === i}
                                    onToggle={() => setOpenItem(openItem === i ? null : i)}
                                />
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Search & Filters - Below Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid lg:grid-cols-3 gap-12 lg:gap-16"
                >
                    {/* Search Section */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-lg font-bold mb-4">Search & Filter</h3>
                            
                            {/* Search Input */}
                            <div className="relative group mb-6">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                                <Input
                                    type="search"
                                    placeholder="Search questions..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-12 pr-10 h-12 rounded-xl text-base bg-background border-border/60 focus:border-primary/50 focus:ring-primary/20 transition-all"
                                    aria-label="Search frequently asked questions"
                                />
                                <AnimatePresence>
                                    {searchQuery && (
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            onClick={() => setSearchQuery("")}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-muted transition-colors"
                                            aria-label="Clear search"
                                        >
                                            <X className="h-4 w-4 text-muted-foreground" />
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Category Filters */}
                            <div className="space-y-3">
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Filter by category</p>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((cat) => (
                                        <motion.button
                                            key={cat}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setActiveCategory(cat)}
                                            aria-pressed={activeCategory === cat}
                                            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                                                activeCategory === cat
                                                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                                    : "bg-background text-muted-foreground border-border/50 hover:border-primary/30 hover:text-foreground"
                                            }`}
                                        >
                                            {cat}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Results Count */}
                        {!loading && (
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-violet-500/5 border border-primary/10">
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Results</p>
                                <motion.div
                                    key={filteredFaqs.length}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-baseline gap-2"
                                >
                                    <motion.span
                                        initial={{ y: -6, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="font-black text-primary text-3xl"
                                    >
                                        {filteredFaqs.length}
                                    </motion.span>
                                    <span className="text-muted-foreground text-sm">
                                        {filteredFaqs.length === 1 ? "question" : "questions"} found
                                    </span>
                                </motion.div>
                            </div>
                        )}

                        {/* CTA */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-50/50 dark:from-blue-950/20 dark:to-blue-950/10 border border-blue-200/50 dark:border-blue-900/30">
                            <p className="text-muted-foreground text-sm font-semibold mb-3">Still have questions?</p>
                            <motion.a
                                href="#contact-form-section"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold border border-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all"
                            >
                                Ask us directly
                                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                                    <ArrowRight className="h-4 w-4" />
                                </motion.span>
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
