"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
    Search,
    Home,
    LayoutDashboard,
    PlusCircle,
    Users,
    Settings2,
    ArrowRight
} from "lucide-react";

const tenantSteps = [
    {
        icon: <Search className="w-5 h-5" />,
        title: "Search PGs",
        description: "Browse verified PGs by location, budget, and amenities.",
    },
    {
        icon: <Home className="w-5 h-5" />,
        title: "Visit & Confirm",
        description: "Visit the PG, check facilities, and finalize directly.",
    },
    {
        icon: <LayoutDashboard className="w-5 h-5" />,
        title: "Use Dashboard",
        description: "Manage complaints, payments, and connect with PG mates.",
    },
];

const ownerSteps = [
    {
        icon: <PlusCircle className="w-5 h-5" />,
        title: "List Your PG",
        description: "Add your property with details, photos, and pricing.",
    },
    {
        icon: <Users className="w-5 h-5" />,
        title: "Manage Tenants",
        description: "Track tenants, rent, and occupancy in one place.",
    },
    {
        icon: <Settings2 className="w-5 h-5" />,
        title: "Automate Operations",
        description: "Handle complaints, payments, and updates easily.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-12 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER - Compact Sizes */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold mb-3">
                        How It Works
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
                        Simple steps for tenants and PG owners.
                    </p>
                </div>

                {/* TABS - Compact Pill Style */}
                <Tabs defaultValue="tenants" className="w-full">
                    <div className="flex justify-center mb-8">
                        <TabsList className="rounded-full h-11 p-1 bg-muted/50 border">
                            <TabsTrigger value="tenants" className="px-6 rounded-full text-sm font-semibold">
                                Tenant
                            </TabsTrigger>
                            <TabsTrigger value="owners" className="px-6 rounded-full text-sm font-semibold">
                                Owner
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <AnimatePresence mode="wait">
                        <TabsContent value="tenants" key="tenants">
                            <StepGrid steps={tenantSteps} />
                        </TabsContent>
                        <TabsContent value="owners" key="owners">
                            <StepGrid steps={ownerSteps} />
                        </TabsContent>
                    </AnimatePresence>
                </Tabs>
            </div>
        </section>
    );
}

function StepGrid({ steps }: { steps: any[] }) {
    return (
        <div className="grid md:grid-cols-3 gap-5">
            {steps.map((step, index) => (
                <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Card className="h-full border hover:border-primary/40 transition-colors rounded-2xl group">
                        <CardContent className="p-5">

                            {/* ICON & STEP HEADER */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                    {step.icon}
                                </div>
                                <span className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-widest">
                                    Step {index + 1}
                                </span>
                            </div>

                            {/* TITLE */}
                            <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-sm text-muted-foreground leading-snug">
                                {step.description}
                            </p>

                            {/* COMPACT CTA */}
                            <div className="mt-4 flex items-center text-xs text-primary font-bold group/link">
                                Learn more
                                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                            </div>

                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}