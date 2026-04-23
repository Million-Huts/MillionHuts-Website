"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, Loader2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Zod Schema with real-time validation rules ───
const contactSchema = z.object({
    fullName: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(80, "Name is too long"),
    email: z
        .string()
        .email("Please enter a valid email address"),
    subject: z
        .string()
        .min(5, "Subject must be at least 5 characters")
        .max(120, "Subject is too long"),
    message: z
        .string()
        .min(20, "Message must be at least 20 characters")
        .max(2000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
        reset,
        watch,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onChange", // Real-time validation as user types
    });

    const messageValue = watch("message") || "";
    const messageLength = messageValue.length;

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form submitted:", data);
        setIsSubmitting(false);
        setShowSuccess(true);
        reset();

        // Auto-hide after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
    };

    return (
        <div
            className="bg-background border rounded-[1.25rem] p-5 sm:p-8 md:p-12 shadow-xl shadow-black/5 dark:shadow-black/20 relative overflow-hidden"
            id="contact-form-section"
        >
            {/* Subtle corner decoration */}
            <div
                className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
                aria-hidden="true"
            />

            <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
                    Send us a message
                </h2>
                <p className="text-muted-foreground text-sm">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
                aria-label="Contact form"
            >
                <div className="grid sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <Label htmlFor="contact-fullName" className="text-sm font-semibold">
                            Full Name <span className="text-destructive" aria-hidden="true">*</span>
                        </Label>
                        <Input
                            id="contact-fullName"
                            placeholder="Your Name..."
                            className="rounded-xl h-12 text-base"
                            aria-required="true"
                            aria-invalid={errors.fullName ? "true" : "false"}
                            aria-describedby={errors.fullName ? "fullName-error" : undefined}
                            {...register("fullName")}
                        />
                        <AnimatePresence mode="wait">
                            {errors.fullName && (
                                <motion.p
                                    id="fullName-error"
                                    initial={{ opacity: 0, y: -4, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: "auto" }}
                                    exit={{ opacity: 0, y: -4, height: 0 }}
                                    className="text-sm text-destructive flex items-center gap-1"
                                    role="alert"
                                >
                                    <span className="inline-block w-1 h-1 bg-destructive rounded-full" aria-hidden="true" />
                                    {errors.fullName.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="contact-email" className="text-sm font-semibold">
                            Email Address <span className="text-destructive" aria-hidden="true">*</span>
                        </Label>
                        <Input
                            id="contact-email"
                            type="email"
                            placeholder="email@example.com"
                            className="rounded-xl h-12 text-base"
                            aria-required="true"
                            aria-invalid={errors.email ? "true" : "false"}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            {...register("email")}
                        />
                        <AnimatePresence mode="wait">
                            {errors.email && (
                                <motion.p
                                    id="email-error"
                                    initial={{ opacity: 0, y: -4, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: "auto" }}
                                    exit={{ opacity: 0, y: -4, height: 0 }}
                                    className="text-sm text-destructive flex items-center gap-1"
                                    role="alert"
                                >
                                    <span className="inline-block w-1 h-1 bg-destructive rounded-full" aria-hidden="true" />
                                    {errors.email.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                    <Label htmlFor="contact-subject" className="text-sm font-semibold">
                        Subject <span className="text-destructive" aria-hidden="true">*</span>
                    </Label>
                    <Input
                        id="contact-subject"
                        placeholder="Inquiry about PG in Bangalore"
                        className="rounded-xl h-12 text-base"
                        aria-required="true"
                        aria-invalid={errors.subject ? "true" : "false"}
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                        {...register("subject")}
                    />
                    <AnimatePresence mode="wait">
                        {errors.subject && (
                            <motion.p
                                id="subject-error"
                                initial={{ opacity: 0, y: -4, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: "auto" }}
                                exit={{ opacity: 0, y: -4, height: 0 }}
                                className="text-sm text-destructive flex items-center gap-1"
                                role="alert"
                            >
                                <span className="inline-block w-1 h-1 bg-destructive rounded-full" aria-hidden="true" />
                                {errors.subject.message}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="contact-message" className="text-sm font-semibold">
                            Message <span className="text-destructive" aria-hidden="true">*</span>
                        </Label>
                        <span
                            className={`text-xs tabular-nums transition-colors ${
                                messageLength > 0 && messageLength < 20
                                    ? "text-destructive"
                                    : "text-muted-foreground"
                            }`}
                            aria-live="polite"
                            aria-label={`${messageLength} of 2000 characters`}
                        >
                            {messageLength}/2000
                        </span>
                    </div>
                    <Textarea
                        id="contact-message"
                        placeholder="How can we help you? (minimum 20 characters)"
                        className="min-h-[140px] rounded-xl text-base resize-y"
                        aria-required="true"
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : "message-hint"}
                        {...register("message")}
                    />
                    {!errors.message && (
                        <p id="message-hint" className="sr-only">
                            Message must be at least 20 characters
                        </p>
                    )}
                    <AnimatePresence mode="wait">
                        {errors.message && (
                            <motion.p
                                id="message-error"
                                initial={{ opacity: 0, y: -4, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: "auto" }}
                                exit={{ opacity: 0, y: -4, height: 0 }}
                                className="text-sm text-destructive flex items-center gap-1"
                                role="alert"
                            >
                                <span className="inline-block w-1 h-1 bg-destructive rounded-full" aria-hidden="true" />
                                {errors.message.message}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="w-full h-14 text-base sm:text-lg font-bold rounded-xl gap-2 transition-all duration-300 active:scale-[0.98]"
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
            </form>

            {/* ──── Glassmorphic Success Overlay ──── */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-2xl rounded-[1.25rem] z-50"
                        role="alert"
                        aria-live="assertive"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="text-center p-8 max-w-sm relative"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="absolute top-0 right-0 p-2 rounded-full hover:bg-muted transition-colors"
                                aria-label="Close success message"
                            >
                                <X className="h-4 w-4 text-muted-foreground" />
                            </button>

                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                                className="h-20 w-20 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500/20 shadow-lg shadow-green-500/10"
                            >
                                <CheckCircle2 className="h-10 w-10" />
                            </motion.div>

                            <h3 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight">
                                Message Sent!
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}