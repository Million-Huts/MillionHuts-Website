import { Check, Minus } from "lucide-react";
import { Plan } from "@/interfaces/pricing";

interface PricingComparisonProps {
    plans: Plan[];
}

export default function PricingComparison({ plans }: PricingComparisonProps) {
    if (plans.length === 0) return null;

    // Helper to render boolean or string values
    const renderValue = (val: any) => {
        if (typeof val === "boolean") {
            return val ? (
                <Check className="h-5 w-5 text-chart-2 mx-auto" />
            ) : (
                <Minus className="h-5 w-5 text-muted-foreground/30 mx-auto" />
            );
        }
        return <span className="text-sm font-semibold">{val}</span>;
    };

    // Define the row structure based on your PlanFeatures interface
    const sections = [
        {
            title: "Usage Limits",
            rows: [
                { label: "Maximum PGs", key: "limits.maxPGs" },
                { label: "User Licenses", key: "limits.maxUsers" },
            ],
        },
        {
            title: "Core Modules",
            rows: [
                { label: "Expense Management", key: "modules.expense" },
                { label: "Complaints & Ticketing", key: "modules.complaints" },
                { label: "Gate Security", key: "modules.gateSecurity" },
                { label: "Entry Logs", key: "modules.entryLogs" },
            ],
        },
        {
            title: "Financials",
            rows: [
                { label: "Tenant Payments", key: "financial.tenantPayments" },
                { label: "Digital Billing", key: "financial.digitalBilling" },
                { label: "Financial Reports", key: "financial.reports" },
            ],
        },
        {
            title: "Support",
            rows: [
                { label: "Priority Support", key: "support.priority" },
            ],
        },
    ];

    // Deep access helper (e.g., gets plan.features['modules']['expense'])
    const getNestedValue = (obj: any, path: string) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    return (
        <section className="py-24 px-4 bg-muted/20">
            <div className="mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                        Compare <span className="text-primary">Features</span>
                    </h2>
                    <p className="text-muted-foreground">Pick the plan that fits your growth.</p>
                </div>

                <div className="rounded-[2.5rem] border bg-background overflow-hidden shadow-soft">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b">
                                    <th className="p-8 text-left text-sm font-black uppercase tracking-widest text-muted-foreground w-1/3">
                                        Feature
                                    </th>
                                    {plans.map((plan) => (
                                        <th key={plan.id} className="p-8 text-center min-w-[150px]">
                                            <span className="block text-lg font-bold">{plan.name}</span>
                                            <span className="text-[10px] text-primary font-black uppercase">
                                                {plan.badge?.[0] || ""}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {sections.map((section) => (
                                    <React.Fragment key={section.title}>
                                        {/* Section Header */}
                                        <tr className="bg-muted/30">
                                            <td
                                                colSpan={plans.length + 1}
                                                className="px-8 py-4 text-xs font-black uppercase tracking-widest text-primary"
                                            >
                                                {section.title}
                                            </td>
                                        </tr>
                                        {/* Feature Rows */}
                                        {section.rows.map((row) => (
                                            <tr key={row.key} className="border-b border-border/50 hover:bg-muted/10 transition-colors">
                                                <td className="p-6 px-8 text-sm font-medium text-foreground/80">
                                                    {row.label}
                                                </td>
                                                {plans.map((plan) => (
                                                    <td key={plan.id} className="p-6 text-center">
                                                        {renderValue(getNestedValue(plan.features, row.key))}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from "react"; // Ensure React is available for Fragment