import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactDetails() {
    const items = [
        { icon: Phone, title: "Call Support", val: "+91 98765 43210", color: "bg-blue-500/10 text-blue-600" },
        { icon: Mail, title: "Email Us", val: "hello@millionhuts.com", color: "bg-primary/10 text-primary" },
        { icon: MessageCircle, title: "WhatsApp", val: "Chat with us 24/7", color: "bg-green-500/10 text-green-600" },
    ];

    return (
        <div className="h-full flex flex-col gap-4">
            {items.map((item, i) => (
                <div key={i} className="group p-6 rounded-xl border bg-background hover:border-primary/50 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-1">{item.title}</h3>
                    <p className="text-xl font-bold">{item.val}</p>
                </div>
            ))}

            {/* Special "Visit Us" Card */}
            <div className="flex-1 p-8 rounded-xl bg-primary text-primary-foreground relative overflow-hidden group">
                <MapPin className="absolute -right-4 -bottom-4 h-32 w-32 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                <h3 className="text-2xl font-bold mb-2">Visit our HQ</h3>
                <p className="text-primary-foreground/80 mb-6">Yelahanka, Bengaluru, Karnataka, India - 560001</p>
                <Button variant="secondary" className="rounded-full font-bold">Get Directions</Button>
            </div>
        </div>
    );
}