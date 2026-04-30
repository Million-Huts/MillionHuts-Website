"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, Loader2, X, User, Mail, FileText, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const contactSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters").max(80, "Name is too long"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters").max(120, "Subject is too long"),
    message: z.string().min(20, "Message must be at least 20 characters").max(2000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [completedFields, setCompletedFields] = useState<Record<string, boolean>>({});
    const [confetti, setConfetti] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onChange",
    });

    const fullName = watch("fullName") || "";
    const email = watch("email") || "";
    const subject = watch("subject") || "";
    const messageValue = watch("message") || "";
    const messageLength = messageValue.length;

    useEffect(() => {
        setCompletedFields({
            fullName: fullName.length >= 2,
            email: email.includes("@"),
            subject: subject.length >= 5,
            message: messageLength >= 20,
        });
    }, [fullName, email, subject, messageLength]);

    useEffect(() => {
        const formData = { fullName, email, subject, message: messageValue };
        localStorage.setItem("contactFormDraft", JSON.stringify(formData));
    }, [fullName, email, subject, messageValue]);

    const completedCount = Object.values(completedFields).filter(Boolean).length;
    const progressPercentage = (completedCount / 4) * 100;

    const Confetti = () => (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full"
                    initial={{ x: window.innerWidth / 2, y: window.innerHeight / 2, opacity: 1 }}
                    animate={{ x: Math.random() * window.innerWidth, y: window.innerHeight + 100, opacity: 0, rotate: Math.random() * 360 }}
                    transition={{ duration: 2.5 + Math.random() * 0.5, ease: "easeIn" }}
                />
            ))}
        </div>
    );

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted:", data);
        setIsSubmitting(false);
        setShowSuccess(true);
        setConfetti(true);
        reset();
        localStorage.removeItem("contactFormDraft");
        setTimeout(() => setConfetti(false), 3000);
        setTimeout(() => setShowSuccess(false), 5000);
    };

    return (
        <>
            {confetti && <Confetti />}
            <div
                className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 border-2 border-gradient rounded-[1.5rem] p-6 sm:p-10 md:p-12 shadow-2xl shadow-primary/10 dark:shadow-primary/5 relative overflow-hidden backdrop-blur-sm"
                id="contact-form-section"
                style={{
                    borderImage: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(168,85,247,0.2), rgba(99,102,241,0.1)) 1"
                }}
            >
                {/* Animated gradient border effect */}
                <div className="absolute inset-0 rounded-[1.5rem] pointer-events-none" style={{ background: "linear-gradient(135deg, var(--primary)/10, transparent)", opacity: 0.5 }} aria-hidden="true" />

                {/* Decorative blur circles */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.08] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none blur-3xl" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/[0.06] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none blur-3xl" aria-hidden="true" />

                {/* Animated floating particles */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/20 rounded-full pointer-events-none"
                        animate={{ y: [0, -20, 0], x: [0, Math.sin(i) * 30, 0], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                        style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
                        aria-hidden="true"
                    />
                ))}

                <motion.div className="mb-10 relative z-10">
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-3 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                            Send us a message
                        </h2>
                        <p className="text-slate-300 text-base leading-relaxed max-w-lg">
                            We&apos;d love to hear from you. Fill out the form below and we&apos;ll respond within 24 hours.
                        </p>
                    </motion.div>

                    {/* Progress Indicator */}
                    <motion.div className="mt-8 space-y-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Form Progress</span>
                            <motion.span className="text-xs font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                                {completedCount}/4 Complete
                            </motion.span>
                        </div>
                        <div className="relative h-3 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50">
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"
                                initial={{ width: 0 }}
                                animate={{ width: `${progressPercentage}%` }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            />
                        </div>
                    </motion.div>
                </motion.div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10" noValidate aria-label="Contact form">
                    <div className="grid sm:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <motion.div className="space-y-3" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}>
                            <div className="flex items-center gap-3 mb-2">
                                <motion.div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30" animate={{ scale: completedFields.fullName ? [1, 1.15, 1] : 1 }} transition={{ duration: 0.3 }}>
                                    <User className="h-4 w-4 text-white" aria-hidden="true" />
                                </motion.div>
                                <Label htmlFor="contact-fullName" className="text-sm font-bold text-slate-200">
                                    Full Name <span className="text-red-400" aria-hidden="true">*</span>
                                </Label>
                                {completedFields.fullName && (
                                    <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} className="ml-auto">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                                            <CheckCircle2 className="h-3 w-3 text-white" />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                            <Input
                                id="contact-fullName"
                                placeholder="John Doe"
                                className="rounded-lg h-12 text-base bg-slate-800/50 border-2 border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:border-blue-500/60 focus:bg-slate-800/80 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300"
                                aria-required="true"
                                aria-invalid={errors.fullName ? "true" : "false"}
                                {...register("fullName")}
                            />
                            <AnimatePresence mode="wait">
                                {errors.fullName && (
                                    <motion.p initial={{ opacity: 0, y: -4, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, y: -4, height: 0 }} className="text-xs text-red-400 flex items-center gap-1" role="alert">
                                        <span className="inline-block w-1 h-1 bg-red-400 rounded-full" aria-hidden="true" />
                                        {errors.fullName.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Email */}
                        <motion.div className="space-y-3" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
                            <div className="flex items-center gap-3 mb-2">
                                <motion.div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30" animate={{ scale: completedFields.email ? [1, 1.15, 1] : 1 }} transition={{ duration: 0.3 }}>
                                    <Mail className="h-4 w-4 text-white" aria-hidden="true" />
                                </motion.div>
                                <Label htmlFor="contact-email" className="text-sm font-bold text-slate-200">
                                    Email Address <span className="text-red-400" aria-hidden="true">*</span>
                                </Label>
                                {completedFields.email && (
                                    <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} className="ml-auto">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                                            <CheckCircle2 className="h-3 w-3 text-white" />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                            <Input
                                id="contact-email"
                                type="email"
                                placeholder="john@example.com"
                                className="rounded-lg h-12 text-base bg-slate-800/50 border-2 border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:border-purple-500/60 focus:bg-slate-800/80 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300"
                                aria-required="true"
                                aria-invalid={errors.email ? "true" : "false"}
                                {...register("email")}
                            />
                            <AnimatePresence mode="wait">
                                {errors.email && (
                                    <motion.p initial={{ opacity: 0, y: -4, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, y: -4, height: 0 }} className="text-xs text-red-400 flex items-center gap-1" role="alert">
                                        <span className="inline-block w-1 h-1 bg-red-400 rounded-full" aria-hidden="true" />
                                        {errors.email.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Subject */}
                    <motion.div className="space-y-3" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
                        <div className="flex items-center gap-3 mb-2">
                            <motion.div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-500/30" animate={{ scale: completedFields.subject ? [1, 1.15, 1] : 1 }} transition={{ duration: 0.3 }}>
                                <FileText className="h-4 w-4 text-white" aria-hidden="true" />
                            </motion.div>
                            <Label htmlFor="contact-subject" className="text-sm font-bold text-slate-200">
                                Subject <span className="text-red-400" aria-hidden="true">*</span>
                            </Label>
                            {completedFields.subject && (
                                <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} className="ml-auto">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                                        <CheckCircle2 className="h-3 w-3 text-white" />
                                    </div>
                                </motion.div>
                            )}
                        </div>
                        <Input
                            id="contact-subject"
                            placeholder="Inquiry about PG in Bangalore"
                            className="rounded-lg h-12 text-base bg-slate-800/50 border-2 border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:border-pink-500/60 focus:bg-slate-800/80 focus:shadow-lg focus:shadow-pink-500/20 transition-all duration-300"
                            aria-required="true"
                            aria-invalid={errors.subject ? "true" : "false"}
                            {...register("subject")}
                        />
                        <AnimatePresence mode="wait">
                            {errors.subject && (
                                <motion.p initial={{ opacity: 0, y: -4, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, y: -4, height: 0 }} className="text-xs text-red-400 flex items-center gap-1" role="alert">
                                    <span className="inline-block w-1 h-1 bg-red-400 rounded-full" aria-hidden="true" />
                                    {errors.subject.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Message */}
                    <motion.div className="space-y-3" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.45 }}>
                        <div className="flex items-center gap-3 mb-2">
                            <motion.div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30" animate={{ scale: completedFields.message ? [1, 1.15, 1] : 1 }} transition={{ duration: 0.3 }}>
                                <MessageSquare className="h-4 w-4 text-white" aria-hidden="true" />
                            </motion.div>
                            <Label htmlFor="contact-message" className="text-sm font-bold text-slate-200">
                                Message <span className="text-red-400" aria-hidden="true">*</span>
                            </Label>
                            {completedFields.message && (
                                <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} className="ml-auto">
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                                        <CheckCircle2 className="h-3 w-3 text-white" />
                                    </div>
                                </motion.div>
                            )}
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-slate-400">Share your message</span>
                            <motion.span className={`text-xs font-bold tabular-nums transition-colors ${messageLength > 0 && messageLength < 20 ? "text-red-400" : "text-slate-400"}`} animate={{ scale: messageLength > 0 && messageLength < 20 ? 1.1 : 1 }}>
                                {messageLength}/2000
                            </motion.span>
                        </div>
                        <Textarea
                            id="contact-message"
                            placeholder="Tell us how we can help you..."
                            className="min-h-[140px] rounded-lg text-base resize-y bg-slate-800/50 border-2 border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/60 focus:bg-slate-800/80 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300"
                            aria-required="true"
                            aria-invalid={errors.message ? "true" : "false"}
                            {...register("message")}
                        />
                        <AnimatePresence mode="wait">
                            {errors.message && (
                                <motion.p initial={{ opacity: 0, y: -4, height: 0 }} animate={{ opacity: 1, y: 0, height: "auto" }} exit={{ opacity: 0, y: -4, height: 0 }} className="text-xs text-red-400 flex items-center gap-1" role="alert">
                                    <span className="inline-block w-1 h-1 bg-red-400 rounded-full" aria-hidden="true" />
                                    {errors.message.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 }}>
                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            id="contact-submit-btn"
                            className="w-full h-14 text-base sm:text-lg font-bold rounded-lg gap-2 transition-all duration-300 active:scale-[0.98] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 text-white"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message <Send className="h-5 w-5" aria-hidden="true" />
                                </>
                            )}
                        </Button>
                    </motion.div>
                </form>

                {/* Success Overlay */}
                <AnimatePresence>
                    {showSuccess && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-3xl rounded-[1.5rem] z-50"
                            role="alert"
                            aria-live="assertive"
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="text-center p-8 max-w-sm relative"
                            >
                                <motion.button
                                    onClick={() => setShowSuccess(false)}
                                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
                                    aria-label="Close success message"
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                                </motion.button>

                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                                    className="h-24 w-24 bg-gradient-to-br from-green-500/20 to-emerald-500/10 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/30 shadow-2xl shadow-green-500/20"
                                >
                                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                                        <CheckCircle2 className="h-12 w-12" />
                                    </motion.div>
                                </motion.div>

                                <motion.h3 className="text-3xl sm:text-4xl font-black mb-3 tracking-tight bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                                    Perfect!
                                </motion.h3>
                                <motion.p className="text-muted-foreground leading-relaxed mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                                </motion.p>

                                <motion.div className="space-y-3 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                                    <motion.div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 flex items-center gap-2" whileHover={{ scale: 1.02 }}>
                                        <motion.span className="w-2 h-2 bg-green-500 rounded-full" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                                        <span className="text-sm font-semibold text-green-700 dark:text-green-300">Confirmation email sent</span>
                                    </motion.div>
                                    <motion.div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 flex items-center gap-2" whileHover={{ scale: 1.02 }}>
                                        <motion.span className="w-2 h-2 bg-green-500 rounded-full" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} />
                                        <span className="text-sm font-semibold text-green-700 dark:text-green-300">Message saved securely</span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
