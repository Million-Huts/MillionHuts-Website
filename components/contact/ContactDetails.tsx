import { Mail, Phone, MapPin, MessageCircle, ExternalLink, ArrowUpRight, Clock, Building2, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const contactChannels = [
    {
        icon: Phone,
        title: "Direct Dial",
        value: "+91 98765 43210",
        description: "Mon – Sat, 9 AM – 7 PM IST",
        color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        gradient: "from-blue-500 to-cyan-400",
        hoverBorder: "hover:border-blue-500/40",
        href: "tel:+919876543210",
        ariaLabel: "Call our support line at +91 98765 43210",
        badge: "~5 min",
        responseTime: "Average response time",
        availability: "Available now",
        icon2: Clock,
    },
    {
        icon: Mail,
        title: "Email Us",
        value: "hello@millionhuts.com",
        description: "Response within 24 hours",
        color: "bg-primary/10 text-primary",
        gradient: "from-violet-500 to-primary",
        hoverBorder: "hover:border-primary/40",
        href: "mailto:hello@millionhuts.com",
        ariaLabel: "Send an email to hello@millionhuts.com",
        badge: "24 hrs",
        responseTime: "Professional response",
        availability: "Always available",
        icon2: Mail,
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        value: "24/7 Chat Support",
        description: "Instant replies, always available",
        color: "bg-green-500/10 text-green-600 dark:text-green-400",
        gradient: "from-green-500 to-emerald-400",
        hoverBorder: "hover:border-green-500/40",
        href: "https://wa.me/919876543210?text=Hi%20MillionHuts%2C%20I%20need%20help%20with",
        ariaLabel: "Open WhatsApp chat with MillionHuts support — available 24/7",
        badge: "~2 min",
        responseTime: "Fastest response",
        availability: "Online now",
        icon2: MessageCircle,
        isLive: true,
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
            className="max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">Get in Touch</h2>
                <p className="text-base text-muted-foreground max-w-xl mx-auto">Choose your preferred way to reach us. We're here to help and answer any questions you might have.</p>
            </motion.div>

            {/* Contact Cards — Vertical Stack */}
            <div className="space-y-4 mb-8">
                {contactChannels.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        className="group"
                    >
                        <motion.a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            aria-label={item.ariaLabel}
                            whileHover={{ y: -6, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative block p-6 rounded-2xl border-2 bg-gradient-to-br from-background to-background/50 ${item.hoverBorder} transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30`}
                        >
                            {/* Gradient overlay */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 rounded-2xl pointer-events-none`}
                                aria-hidden="true"
                            />

                            {/* Shine effect */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl pointer-events-none"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                style={{
                                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                                }}
                                aria-hidden="true"
                            />

                            <div className="relative z-10">
                                {/* Top Section: Icon + Badge + Status */}
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    {/* Icon Container */}
                                    <motion.div
                                        className={`w-16 h-16 rounded-xl ${item.color} flex items-center justify-center shadow-md shrink-0 border border-current/30 relative`}
                                        whileHover={{ scale: 1.15, rotate: 8 }}
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <item.icon className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
                                        {item.isLive && (
                                            <motion.span
                                                className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                aria-hidden="true"
                                            />
                                        )}
                                    </motion.div>

                                    {/* Badge + Status */}
                                    <div className="flex flex-col gap-2 items-end">
                                        <motion.span 
                                            className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-muted/60 text-muted-foreground border border-current/20 whitespace-nowrap"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            {item.badge}
                                        </motion.span>
                                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${item.isLive ? 'bg-green-500/15 text-green-600 dark:text-green-400' : 'bg-muted/40 text-muted-foreground'}`}>
                                            {item.availability}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="mb-4">
                                    <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground/70 group-hover:text-primary transition-colors duration-300 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                                        {item.value}
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        {item.description}
                                    </p>
                                    
                                    {/* Response Time Info */}
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground/70 mb-4 p-2 rounded-lg bg-muted/30">
                                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                                        <span>{item.responseTime}</span>
                                    </div>
                                </div>

                                {/* CTA Section */}
                                <motion.div
                                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold px-4 py-2 rounded-lg bg-primary/5 border border-primary/20 group-hover:bg-primary/10 transition-colors duration-300"
                                    whileHover={{ x: 6 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <span>Connect now</span>
                                    <motion.div
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.a>
                    </motion.div>
                ))}
            </div>

            {/* HQ Card */}
            <motion.div
                variants={itemVariants}
                className="group relative rounded-2xl overflow-hidden border-2 border-amber-500/30 hover:border-amber-500/60 transition-all duration-300"
            >
                {/* Gradient background - warm tones */}
                <motion.div
                    className="absolute inset-0"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    style={{
                        background: "linear-gradient(135deg, #fbbf24, #f59e0b, #d97706, #b45309, #fbbf24)",
                        backgroundSize: "300% 300%",
                    }}
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/30 to-black/40 group-hover:via-black/25 transition-colors duration-300" aria-hidden="true" />

                {/* Decorative mesh pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }} aria-hidden="true" />

                {/* Decorative elements - geometric */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-20 -top-20 w-56 h-56 border border-white/5 rounded-full"
                    aria-hidden="true"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute -left-16 -bottom-16 w-48 h-48 border-2 border-white/10 rounded-3xl"
                    aria-hidden="true"
                />

                <div className="relative z-10 p-8 md:p-12">
                    {/* Header Section - Horizontal Layout */}
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {/* Left: Icon + Title */}
                        <div className="md:col-span-2">
                            <div className="flex items-start gap-4 mb-4">
                                <motion.div
                                    className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 shrink-0"
                                    whileHover={{ scale: 1.15, rotate: -15 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Building2 className="h-7 w-7 text-white" aria-hidden="true" />
                                </motion.div>
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70 block mb-1">Our Office</span>
                                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                                        Visit us in<br />Bengaluru
                                    </h3>
                                </div>
                            </div>
                            <p className="text-white/80 text-sm leading-relaxed max-w-lg mt-4">
                                Experience our workspace firsthand. Our modern office in Yelahanka welcomes you with a collaborative environment designed for innovation and excellence.
                            </p>
                        </div>

                        {/* Right: Quick Stats */}
                        <div className="flex flex-col gap-3">
                            <motion.div
                                className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                                whileHover={{ scale: 1.05 }}
                            >
                                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Status</p>
                                <div className="flex items-center gap-2">
                                    <motion.span
                                        className="w-2.5 h-2.5 bg-green-400 rounded-full"
                                        animate={{ scale: [1, 1.3, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                    <span className="text-sm font-bold text-white">Open Today</span>
                                </div>
                            </motion.div>
                            <motion.div
                                className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                                whileHover={{ scale: 1.05 }}
                            >
                                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Team Size</p>
                                <p className="text-sm font-bold text-white">50+ Professionals</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Info Cards - Horizontal Layout */}
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {/* Location Card */}
                        <motion.div
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 group/card hover:bg-white/15 transition-all duration-300"
                            whileHover={{ y: -6, scale: 1.02 }}
                        >
                            <div className="flex items-start gap-4">
                                <motion.div
                                    className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0 border border-white/30"
                                    whileHover={{ rotate: 12, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                                </motion.div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Address</p>
                                    <p className="text-base font-bold text-white mb-1">Yelahanka, Bengaluru</p>
                                    <p className="text-sm text-white/70">Karnataka 560064, India</p>
                                    <motion.a
                                        href="https://maps.google.com/?q=Yelahanka,Bengaluru,Karnataka"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-semibold text-white/80 hover:text-white mt-2 inline-flex items-center gap-1 transition-colors"
                                        whileHover={{ x: 2 }}
                                    >
                                        View on map
                                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Hours Card */}
                        <motion.div
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 group/card hover:bg-white/15 transition-all duration-300"
                            whileHover={{ y: -6, scale: 1.02 }}
                        >
                            <div className="flex items-start gap-4">
                                <motion.div
                                    className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0 border border-white/30"
                                    whileHover={{ rotate: -12, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Clock className="h-6 w-6 text-white" aria-hidden="true" />
                                </motion.div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">Hours</p>
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold text-white">Mon – Fri: 9 AM – 6 PM</p>
                                        <p className="text-sm font-bold text-white">Sat: 10 AM – 4 PM</p>
                                        <p className="text-xs text-white/70 mt-2">Closed on Sundays & Holidays</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/20">
                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.25)" }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 px-6 py-3 rounded-lg font-bold text-white bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <Navigation className="h-4 w-4" aria-hidden="true" />
                            Get Directions
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 px-6 py-3 rounded-lg font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="h-4 w-4" aria-hidden="true" />
                            Schedule Visit
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
