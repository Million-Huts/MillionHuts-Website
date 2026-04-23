import { Phone, Mail, MessageCircle } from "lucide-react";

const channels = [
    {
        icon: Phone,
        label: "Call",
        sublabel: "+91 98765 43210",
        href: "tel:+919876543210",
        ariaLabel: "Direct dial: Call MillionHuts support at +91 98765 43210",
        color: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-500/10 hover:bg-blue-500/20 active:bg-blue-500/30",
        ring: "focus-visible:ring-blue-500/40",
    },
    {
        icon: Mail,
        label: "Email",
        sublabel: "hello@millionhuts.com",
        href: "mailto:hello@millionhuts.com",
        ariaLabel: "Send email to hello@millionhuts.com",
        color: "text-primary",
        bg: "bg-primary/10 hover:bg-primary/20 active:bg-primary/30",
        ring: "focus-visible:ring-primary/40",
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        sublabel: "24/7 Chat",
        href: "https://wa.me/919876543210?text=Hi%20MillionHuts%2C%20I%20need%20help%20with",
        ariaLabel: "Open WhatsApp 24/7 chat with MillionHuts support",
        color: "text-green-600 dark:text-green-400",
        bg: "bg-green-500/10 hover:bg-green-500/20 active:bg-green-500/30",
        ring: "focus-visible:ring-green-500/40",
    },
];

export default function QuickConnectBar() {
    return (
        <nav
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/80 backdrop-blur-2xl border-t border-border/60 safe-area-pb shadow-[0_-4px_30px_rgba(0,0,0,0.08)]"
            role="navigation"
            aria-label="Quick contact options"
        >
            <div className="flex items-center justify-around gap-1 px-2 py-2">
                {channels.map((ch) => (
                    <a
                        key={ch.label}
                        href={ch.href}
                        target={ch.href.startsWith("http") ? "_blank" : undefined}
                        rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={ch.ariaLabel}
                        className={`flex flex-col items-center justify-center gap-0.5 flex-1 min-h-[56px] min-w-[44px] rounded-2xl py-2.5 px-1 transition-all duration-200 ${ch.bg} ${ch.ring} focus-visible:outline-none focus-visible:ring-2`}
                    >
                        <span
                            className={`h-6 w-6 flex items-center justify-center ${ch.color}`}
                            aria-hidden="true"
                        >
                            <ch.icon className="h-5 w-5" strokeWidth={2.5} />
                        </span>
                        <span className={`text-[11px] font-bold leading-tight ${ch.color}`}>
                            {ch.label}
                        </span>
                    </a>
                ))}
            </div>
        </nav>
    );
}
