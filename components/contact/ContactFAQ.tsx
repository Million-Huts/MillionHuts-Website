import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
    { q: "How do I verify a property before paying?", a: "Every property on MillionHuts goes through a 3-step verification. You can also request a live video tour through our dashboard before booking." },
    { q: "What is the 'Owner Partnership' program?", a: "It's our dedicated suite for landlords that automates rent collection, digital agreements, and tenant KYC in one place." },
    { q: "Can I cancel a booking?", a: "Yes, cancellations made within 24 hours of booking are fully refundable, provided the move-in date is more than 7 days away." },
];

export default function ContactFAQ() {
    return (
        <section className="py-24 bg-muted/20">
            <div className="mx-auto max-w-4xl px-4">
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <HelpCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Quick Answers</h2>
                    <p className="text-muted-foreground mt-2">Find instant solutions to the most common inquiries.</p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            className="bg-background border rounded-2xl px-6 py-1 hover:shadow-md transition-shadow"
                        >
                            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-4">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base pb-4 leading-relaxed">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}