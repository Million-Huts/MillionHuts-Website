"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, X } from "lucide-react";

const actions = [
    {
        icon: Phone,
        label: "Call",
        href: "tel:+919876543210",
        ariaLabel: "Call MillionHuts support",
        bg: "bg-blue-500",
        shadow: "shadow-blue-500/40",
        // arc position: top-left
        angle: -100,
        distance: 68,
    },
    {
        icon: Mail,
        label: "Email",
        href: "mailto:hello@millionhuts.com",
        ariaLabel: "Email MillionHuts",
        bg: "bg-violet-500",
        shadow: "shadow-violet-500/40",
        // arc position: top
        angle: -60,
        distance: 68,
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        href: "https://wa.me/919876543210?text=Hi%20MillionHuts%2C%20I%20need%20help%20with",
        ariaLabel: "Chat on WhatsApp",
        bg: "bg-green-500",
        shadow: "shadow-green-500/40",
        // arc position: top-right
        angle: -20,
        distance: 68,
    },
];

// Convert polar angle + distance to x/y offset
function polarToXY(angleDeg: number, distance: number) {
    const rad = (angleDeg * Math.PI) / 180;
    return {
        x: Math.cos(rad) * distance,
        y: Math.sin(rad) * distance,
    };
}

export default function FloatingFAB() {
    const [open, setOpen] = useState(false);

    return (
        // Desktop only — mobile uses QuickConnectBar
        <div className="hidden md:block fixed bottom-6 right-6 z-50" aria-label="Quick contact speed dial">
            {/* Mini action buttons — fan out in arc */}
            <AnimatePresence>
                {open && actions.map((action, i) => {
                    const { x, y } = polarToXY(action.angle, action.distance);
                    return (
                        <motion.div
                            key={action.label}
                            className="absolute bottom-0 right-0"
                            initial={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
                            animate={{ opacity: 1, x, y, scale: 1 }}
                            exit={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
                            transition={{
                                type: "spring",
                                stiffness: 320,
                                damping: 22,
                                delay: i * 0.07,
                            }}
                        >
                            {/* Tooltip label */}
                            <motion.span
                                initial={{ opacity: 0, x: 6 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 6 }}
                                transition={{ delay: i * 0.07 + 0.1 }}
                                className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-bold bg-foreground text-background px-2 py-1 rounded-lg shadow-lg pointer-events-none"
                            >
                                {action.label}
                            </motion.span>

                            <motion.a
                                href={action.href}
                                target={action.href.startsWith("http") ? "_blank" : undefined}
                                rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                aria-label={action.ariaLabel}
                                whileHover={{ scale: 1.18 }}
                                whileTap={{ scale: 0.92 }}
                                className={`flex items-center justify-center w-11 h-11 rounded-full ${action.bg} text-white shadow-lg ${action.shadow} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white`}
                            >
                                <action.icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                            </motion.a>
                        </motion.div>
                    );
                })}
            </AnimatePresence>

            {/* Main FAB button */}
            <motion.button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close contact options" : "Open contact options — Need Help?"}
                aria-expanded={open}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
                className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white shadow-xl shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
                {/* Notification badge — shows when closed */}
                <AnimatePresence>
                    {!open && (
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 18 }}
                            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-md z-10"
                            aria-label="3 contact options available"
                        >
                            3
                        </motion.span>
                    )}
                </AnimatePresence>
                {/* Subtle pulse rings — only when closed */}
                {!open && (
                    <>
                        {[0, 1].map((i) => (
                            <motion.span
                                key={i}
                                className="absolute inset-0 rounded-full bg-primary/40"
                                animate={{ scale: [1, 1.9], opacity: [0.4, 0] }}
                                transition={{
                                    duration: 2,
                                    delay: i * 0.8,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                }}
                                aria-hidden="true"
                            />
                        ))}
                    </>
                )}

                {/* Icon toggles between chat and X */}
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.span
                            key="close"
                            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            <X className="h-6 w-6" aria-hidden="true" />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="chat"
                            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                            <MessageCircle className="h-6 w-6" aria-hidden="true" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* "Need Help?" label — fades in below button when closed */}
            <AnimatePresence>
                {!open && (
                    <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ delay: 0.3 }}
                        className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold text-muted-foreground/70 uppercase tracking-widest pointer-events-none"
                        aria-hidden="true"
                    >
                        Need Help?
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}
