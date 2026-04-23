"use client";

import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Terminal, Construction, Rocket, CheckCircle2 } from "lucide-react";

export default function BetaNotice() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show modal after 1.5 seconds to ensure the client sees the page first
        const timer = setTimeout(() => setIsOpen(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[450px] overflow-hidden border-none shadow-2xl">
                {/* Background Accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-purple-500 to-blue-500" />

                <DialogHeader className="pt-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/10 border-none px-3">
                            <Terminal className="h-3 w-3 mr-1" />
                            Developer Preview
                        </Badge>
                        <Badge variant="outline" className="font-mono text-[10px] opacity-60">
                            v0.1.2-beta
                        </Badge>
                    </div>
                    <DialogTitle className="text-2xl font-bold tracking-tight">
                        MillionHuts <span className="text-primary italic">Live Build</span>
                    </DialogTitle>
                    <DialogDescription className="text-base pt-2">
                        Welcome to our early-access preview! You are viewing the live development build of our new PG ecosystem.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-muted">
                            <Construction className="h-5 w-5 text-orange-500 mt-0.5" />
                            <div>
                                <p className="text-sm font-semibold">Active Development</p>
                                <p className="text-xs text-muted-foreground">Some interactive elements and payment gateways are currently simulated for UI demonstration.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-muted">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                                <p className="text-sm font-semibold">Verified Components</p>
                                <p className="text-xs text-muted-foreground">The UI/UX architecture and property listing flows are 100% functional for testing.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <Button
                        onClick={() => setIsOpen(false)}
                        className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20"
                    >
                        Start Exploring <Rocket className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-medium pt-2">
                        Built with Next.js 15 & Framer Motion
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
}