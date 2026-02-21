import { motion } from "framer-motion";
import { Building2, Users2, CreditCard, LayoutGrid, FileStack, TrendingDown } from "lucide-react";

const mainFeatures = [
    {
        title: "Property & Floor Management",
        desc: "Manage multiple buildings with floor-wise room mapping and real-time occupancy tracking.",
        icon: Building2,
        size: "md:col-span-2",
        color: "text-blue-500 bg-blue-50"
    },
    {
        title: "Staff Roles",
        desc: "Assign roles to wardens and cleaning staff.",
        icon: Users2,
        size: "md:col-span-1",
        color: "text-purple-500 bg-purple-50"
    },
    {
        title: "Expense Tracker",
        desc: "Monitor utility bills and maintenance costs.",
        icon: TrendingDown,
        size: "md:col-span-1",
        color: "text-red-500 bg-red-50"
    },
    {
        title: "Smart Payments",
        desc: "Automated rent collection with digital ledger tracking for every single tenant.",
        icon: CreditCard,
        size: "md:col-span-2",
        color: "text-green-500 bg-green-50"
    }
];

export default function FeatureBentoGrid() {
    return (
        <section className="py-20 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mainFeatures.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className={`${f.size} p-8 rounded-[2.5rem] border bg-card/50 backdrop-blur-sm group transition-all`}
                        >
                            <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center mb-6`}>
                                <f.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 tracking-tight">{f.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}