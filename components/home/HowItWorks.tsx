import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ownerSteps, tenantSteps } from '@/data/homepage';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HowItWorks() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.03)_0,transparent_70%)] -z-10" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                        <Sparkles className="h-3 w-3" />
                        Seamless Experience
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                        How It <span className="text-primary italic">Works</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                        Whether you're looking for a bed or managing a hundred, we've automated the hard parts.
                    </p>
                </motion.div>

                <Tabs defaultValue="tenants" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="p-1 h-auto bg-muted/50 rounded-full border">
                            <TabsTrigger
                                value="tenants"
                                className="rounded-full px-8 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                            >
                                🏠 I'm a Tenant
                            </TabsTrigger>
                            <TabsTrigger
                                value="owners"
                                className="rounded-full px-8 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                            >
                                🏢 I'm an Owner
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
        <div className="relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-muted-foreground/20 -translate-y-1/2 -z-10" />

            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="relative group"
                    >
                        {/* Background Number Decal */}
                        <span className="absolute -top-10 -left-4 text-8xl font-black text-muted/30 select-none group-hover:text-primary/10 transition-colors">
                            0{index + 1}
                        </span>

                        <Card className="relative overflow-hidden border-none shadow-xl shadow-shadow/5 bg-card/50 backdrop-blur-sm pt-4">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-inner">
                                    <step.icon className="h-10 w-10 text-primary" />
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>

                                <div className="mt-6 flex items-center text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                                    Learn More <ArrowRight className="ml-2 h-3 w-3" />
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}