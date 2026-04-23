// components/contact/ContactMain.tsx
import { motion } from "framer-motion";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function ContactMain() {
    return (
        <section
            className="pb-16 md:pb-24 px-4 sm:px-6"
            aria-label="Contact form and communication channels"
        >
            <div className="mx-auto max-w-7xl">
                {/* Bento Grid: Two-column on desktop, stacked on mobile */}
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Communication Channels — Left Side (4 Cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-4 space-y-4 lg:sticky lg:top-24"
                    >
                        <ContactDetails />
                    </motion.div>

                    {/* Form — Right Side (8 Cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-8"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}