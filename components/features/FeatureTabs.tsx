import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClipboardCheck, Utensils, BellRing, FileText, HeartHandshake } from "lucide-react";

export default function FeatureTabs() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="mx-auto max-w-5xl px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">Tailored Experiences</h2>

                <Tabs defaultValue="owners" className="w-full">
                    <TabsList className="bg-background border h-14 p-1 rounded-2xl mb-12 shadow-sm">
                        <TabsTrigger value="owners" className="rounded-xl px-8 font-bold data-[state=active]:bg-primary data-[state=active]:text-white">For Owners</TabsTrigger>
                        <TabsTrigger value="tenants" className="rounded-xl px-8 font-bold data-[state=active]:bg-primary data-[state=active]:text-white">For Tenants</TabsTrigger>
                    </TabsList>

                    <TabsContent value="owners" className="grid sm:grid-cols-2 gap-8 text-left">
                        <div className="space-y-4 p-6 bg-background rounded-3xl border">
                            <div className="flex items-center gap-3 text-primary"><BellRing className="h-5 w-5" /><h4 className="font-bold">Announcements</h4></div>
                            <p className="text-sm text-muted-foreground">Blast updates to all floors or specific wings instantly via in-app alerts.</p>
                        </div>
                        <div className="space-y-4 p-6 bg-background rounded-3xl border">
                            <div className="flex items-center gap-3 text-primary"><ClipboardCheck className="h-5 w-5" /><h4 className="font-bold">Complaints Desk</h4></div>
                            <p className="text-sm text-muted-foreground">Manage plumbing, electrical, or Wi-Fi tickets with priority statuses.</p>
                        </div>
                    </TabsContent>

                    <TabsContent value="tenants" className="grid sm:grid-cols-2 gap-8 text-left">
                        <div className="space-y-4 p-6 bg-background rounded-3xl border">
                            <div className="flex items-center gap-3 text-primary"><FileText className="h-5 w-5" /><h4 className="font-bold">Digital Agreements</h4></div>
                            <p className="text-sm text-muted-foreground">Access your rental agreement and move-in documents anytime, anywhere.</p>
                        </div>
                        <div className="space-y-4 p-6 bg-background rounded-3xl border">
                            <div className="flex items-center gap-3 text-primary"><HeartHandshake className="h-5 w-5" /><h4 className="font-bold">Payment Slips</h4></div>
                            <p className="text-sm text-muted-foreground">Get instant PDF receipts for rent and security deposits automatically.</p>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}