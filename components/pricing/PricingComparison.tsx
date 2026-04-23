export default function PricingComparison() {
    const rows = [
        { feature: "Maximum Beds", starter: "10", pro: "500", enterprise: "Unlimited" },
        { feature: "Staff Accounts", starter: "1", pro: "5", enterprise: "Unlimited" },
        { feature: "Digital Agreements", starter: "✕", pro: "✓", enterprise: "✓" },
        { feature: "Custom Subdomain", starter: "✕", pro: "✕", enterprise: "✓" },
    ];

    return (
        <section className="py-24 px-4 overflow-hidden">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-12">Detailed Comparison</h2>
                <div className="rounded-[2rem] border bg-background overflow-hidden shadow-sm">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-muted/50">
                                <th className="p-6 text-left text-sm font-bold uppercase tracking-widest opacity-60">Features</th>
                                <th className="p-6 text-center text-sm font-bold">Starter</th>
                                <th className="p-6 text-center text-sm font-bold text-primary">Pro</th>
                                <th className="p-6 text-center text-sm font-bold">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-muted">
                            {rows.map((row, i) => (
                                <tr key={i} className="hover:bg-muted/20 transition-colors">
                                    <td className="p-6 text-sm font-medium">{row.feature}</td>
                                    <td className="p-6 text-center text-sm text-muted-foreground">{row.starter}</td>
                                    <td className="p-6 text-center text-sm font-bold">{row.pro}</td>
                                    <td className="p-6 text-center text-sm text-muted-foreground">{row.enterprise}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}