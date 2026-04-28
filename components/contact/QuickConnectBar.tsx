"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const channels = [
    {
        icon: Phone,
        label: "Call Us",
        sublabel: "+91 98765 43210",
        href: "tel:+919876543210",
        ariaLabel: "Direct dial: Call MillionHuts support at +91 98765 43210",
        // High-contrast solid colors per design note
        iconColor: "text-white",
        iconBg: "bg-blue-600",
        labelColor: "text-blue-700 dark:text-blue-300",
        sublabelColor: "text-blue-600/80 dark:text-blue-400/80",
        cardBg: "bg-blue-50 dark:bg-blue-950/40",
        border: "border-blue-200 dark:border-blue-800/60",
        activeBg: "active:bg-blue-100 dark:active:bg-blue-900/50",
        ring: "focus-visible:ring-blue-500",
        shadow: "shadow-blue-500/15",
    },
    {
        icon: Mail,
        label: "Email Us",
        sublabel: "hello@millionhuts.com",
        href: "mailto:hello@millionhuts.com",
        ariaLabel: "Send email to hello@millionhuts.com",
        iconColor: "text-white",
        iconBg: "bg-violet-600",
        labelColor: "text-violet-700 dark:text-violet-300",
        sublabelColor: "text-violet-600/80 dark:text-violet-400/80",
        cardBg: "bg-violet-50 dark:bg-violet-950/40",
        border: "border-violet-200 dark:border-violet-800/60",
        activeBg: "active:bg-violet-100 dark:active:bg-violet-900/50",
        ring: "focus-visible:ring-violet-500",
        shadow: "shadow-violet-500/15",
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        sublabel: "24/7 Chat Support",
        href: "https://wa.me/919876543210?text=Hi%20MillionHuts%2C%20I%20need%20help%20with",
        ariaLabel: "Open WhatsApp 24/7 chat with MillionHuts support",
        iconColor: "text-white",
        iconBg: "bg-green-600",
        labelColor: "text-green-700 dark:text-green-300",
        sublabelColor: "text-green-600/80 dark:text-green-400/80",
        cardBg: "bg-green-50 dark:bg-green-950/40",
        border: "border-green-200 dark:border-green-800/60",
        activeBg: "active:bg-green-100 dark:active:bg-green-900/50",
        ring: "focus-visible:ring-green-500",
        shadow: "shadow-green-500/15",
    },
];

// Two expanding sonar rings for WhatsApp live indicator
function PulseRings() {
    return (
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            {[0, 1].map((i) => (
                <motion.span
                    key={i}
                    className="absolute rounded-full border-2 border-green-500/50"
                    style={{ width: 40, height: 40 }}
                    animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
                    transition={{ duration: 1.8, delay: i * 0.7, repeat: Infinity, ease: "easeOut" }}
                />
            ))}
        </span>
    );
}

export default function QuickConnectBar() {
    return (
        <motion.nav
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            role="navigation"
            aria-label="Quick contact options"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        >
            <div className="mx-2 mb-2 rounded-2xl bg-background/95 backdrop-blur-2xl border border-border/70 shadow-[0_-8px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_-8px_40px_rgba(0,0,0,0.4)] overflow-hidden">

                {/* Header strip — "Quick Connect" label */}
                <div className="flex items-center justify-between px-4 pt-3 pb-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground/60">
                        Quick Connect
                    </span>
                    <div className="flex items-center gap-1.5">
                        <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-green-500"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.4, repeat: Infinity }}
                            aria-hidden="true"
                        />
                        <span className="text-[10px] font-bold text-green-600 dark:text-green-400">Online Now</span>
                    </div>
                </div>

                {/* Channel buttons */}
                <div className="flex items-stretch gap-2 p-2 pt-1.5">
                    {channels.map((ch, i) => (
                        <motion.a
                            key={ch.label}
                            href={ch.href}
                            target={ch.href.startsWith("http") ? "_blank" : undefined}
                            rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            aria-label={ch.ariaLabel}
                            initial={{ opacity: 0, scale: 0.75, y: 14 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.65 + i * 0.1 }}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ y: -2 }}
                            className={`relative flex flex-col items-center justify-center gap-1.5 flex-1 min-h-[72px] min-w-[44px] rounded-xl py-3 px-2 ${ch.cardBg} ${ch.activeBg} border ${ch.border} ${ch.ring} focus-visible:outline-none focus-visible:ring-2 shadow-sm ${ch.shadow} transition-colors duration-150`}
                        >
                            {/* WhatsApp pulse rings */}
                            {ch.label === "WhatsApp" && <PulseRings />}

                            {/* High-contrast icon in solid colored circle */}
                            <div className={`relative w-9 h-9 rounded-full ${ch.iconBg} flex items-center justify-center shadow-sm`} aria-hidden="true">
                                <ch.icon className={`h-[18px] w-[18px] ${ch.iconColor}`} strokeWidth={2.5} />

                                {/* WhatsApp "Online" badge */}
                                {ch.label === "WhatsApp" && (
                                    <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-background rounded-full" aria-label="Online" />
                                )}
                            </div>

                            {/* Label — large enough for all age groups */}
                            <span className={`text-[12px] font-black leading-tight tracking-tight ${ch.labelColor}`}>
                                {ch.label}
                            </span>

                            {/* Sublabel — actual number/email for clarity */}
                            <span className={`text-[9px] font-semibold leading-tight text-center truncate w-full px-1 ${ch.sublabelColor}`}>
                                {ch.sublabel}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
