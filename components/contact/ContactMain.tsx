// components/contact/ContactMain.tsx
import { motion } from "framer-motion";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function ContactMain() {
    return (
        <section className="pb-24 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Details - Left Side (4 Cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        <ContactDetails />
                    </div>

                    {/* Form - Right Side (8 Cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-8 shadow-2xl shadow-primary/5  bg-card/50 backdrop-blur-sm"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}