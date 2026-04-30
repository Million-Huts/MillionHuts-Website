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
                {/* Get in Touch Section — Full Width Vertical */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-24"
                >
                    <ContactDetails />
                </motion.div>

                {/* Contact Form Section — Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    id="contact-form-section"
                >
                    <ContactForm />
                </motion.div>
            </div>
        </section>
    );
}