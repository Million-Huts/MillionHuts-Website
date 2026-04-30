"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Zap, MessageCircle, Phone, CheckCheck, Clock } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

const words = ["conversation", "partnership", "journey"];

const blobs = [
    { w: 500, h: 500, left: "-5%",  top: "-10%", color: "bg-primary/10",     blur: "blur-[120px]", floatY: [-20, 20] as [number,number],  floatDur: 9,  parallax: 0.025 },
    { w: 400, h: 400, left: "auto", top: "auto",  right: "-5%", bottom: "-10%", color: "bg-violet-500/10", blur: "blur-[100px]", floatY: [15, -15] as [number,number], floatDur: 11, parallax: 0.018 },
    { w: 280, h: 280, left: "60%",  top: "25%",   color: "bg-blue-500/10",    blur: "blur-[80px]",  floatY: [-25, 10] as [number,number],  floatDur: 7,  parallax: 0.035 },
    { w: 220, h: 220, left: "10%",  top: "55%",   color: "bg-cyan-400/8",     blur: "blur-[70px]",  floatY: [18, -18] as [number,number],  floatDur: 13, parallax: 0.02  },
];

const particles = [
    { id: 0,  x: "8%",  y: "15%", size: 3,   delay: 0,   dur: 7  },
    { id: 1,  x: "22%", y: "70%", size: 2,   delay: 1.2, dur: 9  },
    { id: 2,  x: "40%", y: "25%", size: 4,   delay: 0.4, dur: 8  },
    { id: 3,  x: "60%", y: "80%", size: 2.5, delay: 2.1, dur: 6  },
    { id: 4,  x: "75%", y: "18%", size: 1.8, delay: 0.7, dur: 11 },
    { id: 5,  x: "88%", y: "50%", size: 3.2, delay: 3.0, dur: 7  },
    { id: 6,  x: "5%",  y: "55%", size: 2.2, delay: 1.6, dur: 10 },
    { id: 7,  x: "33%", y: "88%", size: 1.5, delay: 0.2, dur: 8  },
    { id: 8,  x: "52%", y: "10%", size: 3.5, delay: 1.9, dur: 9  },
    { id: 9,  x: "93%", y: "75%", size: 2,   delay: 1.3, dur: 7  },
];

// Mock chat messages for the live preview card
const chatMessages = [
    { id: 0, from: "user",    text: "Hi! I need help finding a PG near Yelahanka.", time: "10:42 AM", delay: 0.8 },
    { id: 1, from: "support", text: "Hey! 👋 We have 12 verified PGs in that area. Let me send you the best options.", time: "10:42 AM", delay: 1.6 },
    { id: 2, from: "support", text: "Also, would you prefer AC or non-AC?", time: "10:43 AM", delay: 2.4 },
    { id: 3, from: "user",    text: "AC please, budget under ₹12,000.", time: "10:43 AM", delay: 3.2 },
];

function useCounter(target: number, duration = 1500) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration]);
    return count;
}

function NeonWord({ text }: { text: string }) {
    return (
        <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-violet-500">{text}</span>
            <motion.span aria-hidden="true" className="absolute inset-0 text-transparent bg-clip-text pointer-events-none"
                style={{ backgroundImage: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.85) 50%, transparent 80%)", backgroundSize: "200% 100%" }}
                animate={{ backgroundPosition: ["-200% 0%", "200% 0%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
            >{text}</motion.span>
            <motion.span aria-hidden="true" className="absolute inset-0 text-transparent bg-clip-text pointer-events-none"
                style={{ backgroundImage: "linear-gradient(to right, hsl(var(--primary)), #60a5fa, #a78bfa)", filter: "blur(8px)", opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
            >{text}</motion.span>
        </span>
    );
}

// Live chat preview card — right side of hero
function LiveChatPreview() {
    const [visibleCount, setVisibleCount] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        chatMessages.forEach((msg) => {
            setTimeout(() => {
                if (msg.from === "support") setIsTyping(true);
                setTimeout(() => {
                    setIsTyping(false);
                    setVisibleCount((v) => Math.max(v, msg.id + 1));
                }, msg.from === "support" ? 700 : 0);
            }, msg.delay * 1000);
        });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="relative w-full max-w-sm mx-auto lg:mx-0"
        >
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-violet-500/20 rounded-3xl blur-2xl scale-110" aria-hidden="true" />

            <div className="relative bg-background/90 backdrop-blur-xl border border-border/60 rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                {/* Chat header */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50 bg-muted/30">
                    <div className="relative">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-xs font-black">MH</div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-background rounded-full" aria-hidden="true" />
                    </div>
                    <div>
                        <p className="text-sm font-bold leading-none">MillionHuts Support</p>
                        <p className="text-[11px] text-green-600 dark:text-green-400 font-medium mt-0.5">Online · Replies instantly</p>
                    </div>
                    <div className="ml-auto flex gap-1" aria-hidden="true">
                        {["bg-red-400", "bg-yellow-400", "bg-green-400"].map((c, i) => (
                            <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                        ))}
                    </div>
                </div>

                {/* Messages */}
                <div className="p-4 space-y-3 min-h-[220px]">
                    {chatMessages.slice(0, visibleCount).map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 22 }}
                            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                                msg.from === "user"
                                    ? "bg-primary text-primary-foreground rounded-br-sm"
                                    : "bg-muted text-foreground rounded-bl-sm"
                            }`}>
                                {msg.text}
                                <div className={`flex items-center gap-1 mt-1 ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                                    <span className="text-[9px] opacity-60">{msg.time}</span>
                                    {msg.from === "user" && <CheckCheck className="h-2.5 w-2.5 opacity-60" aria-hidden="true" />}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Typing indicator */}
                    <AnimatePresence>
                        {isTyping && (
                            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                                className="flex justify-start"
                            >
                                <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1">
                                    {[0, 1, 2].map((i) => (
                                        <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
                                            animate={{ y: [0, -4, 0] }}
                                            transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Input bar */}
                <div className="px-4 py-3 border-t border-border/50 flex items-center gap-2">
                    <div className="flex-1 h-9 rounded-full bg-muted/60 flex items-center px-3">
                        <span className="text-xs text-muted-foreground/50">Type a message...</span>
                    </div>
                    <motion.a
                        href="https://wa.me/919876543210?text=Hi%20MillionHuts%2C%20I%20need%20help%20with"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Open WhatsApp chat"
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0"
                    >
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    </motion.a>
                </div>
            </div>

            {/* Floating badge */}
            <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -bottom-4 -left-4 flex items-center gap-2 bg-background border border-border/60 rounded-2xl px-3 py-2 shadow-lg"
            >
                <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                <span className="text-[11px] font-bold">Avg. reply: 2 min</span>
            </motion.div>
        </motion.div>
    );
}

export default function ContactHero() {
    const [wordIndex, setWordIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const sectionRef = useRef<HTMLElement>(null);
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const spotX = useSpring(rawX, { stiffness: 80, damping: 20 });
    const spotY = useSpring(rawY, { stiffness: 80, damping: 20 });

    const blobSprings = blobs.map((b) => ({
        x: useSpring(useTransform(rawX, [0, 1], [0, 0]), { stiffness: 60, damping: 25 }),
        y: useSpring(useTransform(rawY, [0, 1], [0, 0]), { stiffness: 60, damping: 25 }),
        strength: b.parallax,
    }));

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        const nx = e.clientX - rect.left;
        const ny = e.clientY - rect.top;
        rawX.set(nx); rawY.set(ny);
        blobSprings.forEach((bs) => {
            bs.x.set((nx - rect.width / 2) * bs.strength);
            bs.y.set((ny - rect.height / 2) * bs.strength);
        });
    }, [rawX, rawY, blobSprings]);

    useEffect(() => {
        const el = sectionRef.current;
        el?.addEventListener("mousemove", handleMouseMove);
        return () => el?.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    useEffect(() => {
        const w = setInterval(() => setWordIndex((p) => (p + 1) % words.length), 3000);
        const c = setInterval(() => setShowCursor((v) => !v), 530);
        return () => { clearInterval(w); clearInterval(c); };
    }, []);

    return (
        <section ref={sectionRef}
            className="relative min-h-[90vh] flex items-center overflow-hidden bg-background"
            aria-labelledby="contact-hero-heading"
        >
            {/* Mouse spotlight */}
            <motion.div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true"
                style={{ background: `radial-gradient(650px circle at ${spotX}px ${spotY}px, rgba(99,102,241,0.08), transparent 70%)` }}
            />

            {/* Background */}
            <div className="absolute inset-0 -z-10" aria-hidden="true">
                <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
                    style={{ backgroundImage: `radial-gradient(circle, rgba(99,102,241,0.8) 1px, transparent 1px)`, backgroundSize: "44px 44px" }}
                />
                {blobs.map((blob, i) => (
                    <motion.div key={i} className={`absolute rounded-full ${blob.color} ${blob.blur}`}
                        style={{ width: blob.w, height: blob.h, left: blob.left, top: blob.top,
                            // @ts-ignore
                            right: blob.right, bottom: blob.bottom, x: blobSprings[i].x, y: blobSprings[i].y }}
                        animate={{ y: blob.floatY, scale: [1, 1.08, 1] }}
                        transition={{ duration: blob.floatDur, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
                    />
                ))}
                {particles.map((p) => (
                    <motion.div key={p.id} className="absolute rounded-full bg-primary/50 dark:bg-primary/30"
                        style={{ width: p.size, height: p.size, left: p.x, top: p.y }}
                        animate={{ y: [0, -24, 0], opacity: [0.1, 0.6, 0.1], scale: [1, 1.6, 1] }}
                        transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
                    />
                ))}
                <motion.div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/25 to-transparent"
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                />
            </div>

            {/* ── Asymmetric split layout ── */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 py-20 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT — heading + CTAs */}
                    <div>
                        {/* Badge */}
                        <motion.div initial={{ opacity: 0, y: 20, scale: 0.85 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/[0.08] text-primary text-xs font-bold uppercase tracking-widest mb-8 border border-primary/20 backdrop-blur-sm"
                        >
                            <motion.span animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                                <Zap className="h-3.5 w-3.5" aria-hidden="true" />
                            </motion.span>
                            We respond in under 2 hours
                            <span className="relative flex h-2 w-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <div className="overflow-hidden mb-3">
                            <motion.h1 id="contact-hero-heading"
                                initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
                            >
                                Let&apos;s start a
                            </motion.h1>
                        </div>

                        {/* Animated word */}
                        <div className="relative inline-block mb-6">
                            <AnimatePresence mode="wait">
                                <motion.div key={words[wordIndex]}
                                    initial={{ opacity: 0, y: 40, rotateX: -80, filter: "blur(12px)" }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -40, rotateX: 80, filter: "blur(12px)" }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                                    className="block text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight italic"
                                    style={{ perspective: 1000 }}
                                >
                                    {words[wordIndex] === "conversation"
                                        ? <NeonWord text="conversation" />
                                        : <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-violet-500">{words[wordIndex]}</span>
                                    }
                                </motion.div>
                            </AnimatePresence>
                            <motion.span animate={{ opacity: showCursor ? 1 : 0 }} transition={{ duration: 0.08 }}
                                className="absolute -right-3 top-1/2 -translate-y-1/2 w-[4px] h-[0.8em] bg-primary rounded-sm" aria-hidden="true"
                            />
                            <motion.div key={`ul-${words[wordIndex]}`}
                                className="absolute -bottom-2 left-0 right-0 h-[4px] rounded-full bg-gradient-to-r from-primary via-blue-400 to-violet-500"
                                initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay: 0.1 }}
                                style={{ originX: 0 }}
                            />
                        </div>

                        {/* Subtitle */}
                        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-muted-foreground text-lg max-w-md leading-relaxed mb-6 font-light"
                        >
                            Whether you&apos;re searching for the perfect room or scaling your rental empire — our team is just a message away.
                        </motion.p>

                        {/* Typing indicator */}
                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
                            className="flex items-center gap-2 mb-8"
                        >
                            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 w-fit">
                                <div className="flex items-center gap-1" aria-hidden="true">
                                    {[0, 1, 2].map((i) => (
                                        <motion.span key={i} className="w-1.5 h-1.5 rounded-full bg-green-500"
                                            animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                                            transition={{ duration: 0.8, delay: i * 0.18, repeat: Infinity }}
                                        />
                                    ))}
                                </div>
                                <span className="text-xs font-semibold text-green-600 dark:text-green-400">Support team is online</span>
                            </div>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
                            className="flex flex-wrap gap-3"
                        >
                            <motion.a href="#contact-form-section"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99,102,241,0.3)" }} whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-bold text-sm shadow-lg shadow-primary/25"
                            >
                                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                                Send a Message
                            </motion.a>
                            <motion.a href="tel:+919876543210"
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-background/80 backdrop-blur-sm font-bold text-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                            >
                                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                                Call Us Now
                            </motion.a>
                        </motion.div>

                        {/* Stats row */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                            className="flex items-center gap-6 mt-10"
                        >
                            {[
                                { value: "< 2hr", label: "Response" },
                                { value: "24/7", label: "WhatsApp" },
                                { value: "98%", label: "Satisfaction" },
                            ].map((s, i) => (
                                <div key={s.label} className="text-center">
                                    <p className="text-xl font-black text-foreground">{s.value}</p>
                                    <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">{s.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT — live chat preview */}
                    <div className="hidden lg:flex justify-center items-center">
                        <LiveChatPreview />
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                    className="hidden md:flex flex-col items-center gap-2 mt-16" aria-hidden="true"
                >
                    <motion.span className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.2em] font-semibold"
                        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity }}
                    >Scroll to connect</motion.span>
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center pt-1.5"
                    >
                        <motion.div animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-2 rounded-full bg-primary/60"
                        />
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" aria-hidden="true" />
        </section>
    );
}
