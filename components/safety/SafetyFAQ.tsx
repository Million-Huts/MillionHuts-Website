import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck } from "lucide-react";

const faqs = [
    {
        q: "Who can see my KYC documents?",
        a: "Your KYC documents are encrypted and stored securely. Only the verified property manager of the PG you are actively staying at can view them — and only for the duration of your stay. MillionHuts staff do not have routine access to your documents.",
    },
    {
        q: "What happens to my data when I leave a PG?",
        a: "When your stay ends, the property manager's access to your documents is automatically revoked. Your profile and KYC data remain in your personal vault and can be reused for future MillionHuts properties without re-uploading.",
    },
    {
        q: "How does the QR gate system prevent unauthorized entry?",
        a: "Every visitor must be logged through the gate system — either by the security guard scanning a QR code or by manual entry. All logs are timestamped and immutable. Neither staff nor management can alter or delete an entry record after it is created.",
    },
    {
        q: "Can I raise a complaint anonymously?",
        a: "Complaints are tied to your verified profile so that management can follow up effectively. However, your identity is only visible to the property manager — not to other tenants. This ensures accountability without exposing you to the person you are complaining about.",
    },
    {
        q: "What if my complaint is not resolved?",
        a: "Every complaint has a resolution timer. If a complaint is marked resolved but you are not satisfied, you can reopen it directly from the app. Reopened complaints are escalated and flagged for priority attention.",
    },
    {
        q: "Is my profile visible to all housemates?",
        a: "Only your name and KYC verification status are visible to housemates — nothing else. Your contact details, documents, and personal information remain private. The goal is community awareness, not exposure.",
    },
    {
        q: "How does MillionHuts help with police verification?",
        a: "MillionHuts organizes all tenant KYC data in a structured, exportable format. Property owners can generate a police verification report in one click — with all required fields pre-filled from the tenant's verified profile.",
    },
];

export default function SafetyFAQ() {
    return (
        <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950/50">
            <div className="mx-auto max-w-3xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">
                        <ShieldCheck className="h-3 w-3" />
                        Safety FAQ
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                        Questions about your safety?
                    </h2>
                    <p className="text-muted-foreground">
                        Straight answers to the things that matter most.
                    </p>
                </motion.div>

                {/* Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="border border-border bg-card rounded-2xl px-6 overflow-hidden data-[state=open]:border-slate-300 dark:data-[state=open]:border-slate-600 transition-all"
                            >
                                <AccordionTrigger className="text-left font-bold text-sm py-5 hover:no-underline hover:text-primary transition-colors">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
