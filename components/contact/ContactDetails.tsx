import { Mail, Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const contactChannels = [
    {
        icon: Phone,
        title: "Direct Dial",
        value: "+91 98765 43210",
        description: "Mon – Sat, 9 AM – 7 PM IST",
        color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        hoverBorder: "hover:border-blue-500/40",
        href: "tel:+919876543210",
        ariaLabel: "Call our support line at +91 98765 43210",
    },
    {
        icon: Mail,
        title: "Email Us",
        value: "hello@millionhuts.com",
        description: "Response within 24 hours",
        color: "bg-primary/10 text-primary",
        hoverBorder: "hover:border-primary/40",
        href: "mailto:hello@millionhuts.com",
        ariaLabel: "Send an email to hello@millionhuts.com",
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        value: "24/7 Chat Support",
        description: "Instant replies, always available",
        color: "bg-green-500/10 text-green-600 dark:text-green-400",
        hoverBorder: "hover:border-green-500/40",
        href: "https://wa.me/919876543210?text=Hi%20MillionHuts%2C%20I%20need%20help%20with",
        ariaLabel: "Open WhatsApp chat with MillionHuts support — available 24/7",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ContactDetails() {
    return (
        <motion.div
            className="h-full flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {contactChannels.map((item, i) => (
                <motion.a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={item.ariaLabel}
                    variants={itemVariants}
                    className={`group p-5 rounded-2xl border bg-background ${item.hoverBorder} transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20`}
                >
                    <div className="flex items-start gap-4">
                        <div
                            className={`w-12 h-12 min-w-[48px] rounded-2xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                            <item.icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-1">
                                {item.title}
                            </h3>
                            <p className="text-base font-bold truncate">{item.value}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                                {item.description}
                            </p>
                        </div>
                        <ExternalLink
                            className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors mt-1 shrink-0"
                            aria-hidden="true"
                        />
                    </div>
                </motion.a>
            ))}

            {/* Visit HQ Card */}
            <motion.div
                variants={itemVariants}
                className="flex-1 p-8 rounded-2xl bg-primary text-primary-foreground relative overflow-hidden group min-h-[160px] flex flex-col justify-center"
            >
                {/* Background decoration */}
                <MapPin
                    className="absolute -right-4 -bottom-4 h-32 w-32 opacity-[0.08] rotate-12 group-hover:rotate-0 transition-transform duration-700"
                    aria-hidden="true"
                />
                <div
                    className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"
                    aria-hidden="true"
                />

                <h3 className="text-2xl font-black mb-2 tracking-tight">Visit our HQ</h3>
                <p className="text-primary-foreground/80 mb-5 text-sm leading-relaxed">
                    Yelahanka, Bengaluru, Karnataka
                    <br />
                    India — 560064
                </p>
                <Button
                    variant="secondary"
                    className="rounded-full font-bold w-fit"
                    asChild
                >
                    <a
                        href="https://maps.google.com/?q=Yelahanka,Bengaluru,Karnataka"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Get directions to MillionHuts HQ on Google Maps"
                    >
                        <MapPin className="h-4 w-4 mr-1.5" aria-hidden="true" />
                        Get Directions
                    </a>
                </Button>
            </motion.div>
        </motion.div>
    );
}
