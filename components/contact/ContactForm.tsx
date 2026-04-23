import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Add your API logic here
    };

    return (
        <div className="bg-background border rounded-[1rem] p-4 md:p-12 shadow-xl shadow-black/5 relative overflow-hidden">
            <AnimatePresence mode="wait">
                {!submitted ? (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onSubmit={handleSubmit} className="space-y-6"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Full Name</label>
                                <Input placeholder="Your Name..." required className="rounded-xl h-12" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Email Address</label>
                                <Input type="email" placeholder="email@example.com" required className="rounded-xl h-12" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold">Subject</label>
                            <Input placeholder="Inquiry about PG in Bangalore" required className="rounded-xl h-12" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold">Message</label>
                            <Textarea placeholder="How can we help you?" className="min-h-[150px] rounded-xl" required />
                        </div>
                        <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-xl gap-2">
                            Send Message <Send className="h-5 w-5" />
                        </Button>
                    </motion.form>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="h-10 w-10" />
                        </div>
                        <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                        <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>Send another message</Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}