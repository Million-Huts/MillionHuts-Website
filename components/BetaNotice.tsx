import React from "react";

const BetaNotice = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="max-w-xl w-full text-center space-y-6">
                {/* Brand */}
                <h1 className="text-4xl font-bold tracking-tight">
                    MillionHuts
                </h1>

                {/* Message */}
                <p className="text-muted-foreground text-lg">
                    We’re getting things ready 🚀
                </p>

                <p className="text-base text-muted-foreground">
                    MillionHuts will be entering <span className="font-medium text-foreground">beta testing</span> in
                    just a few days.
                    We’re polishing the experience and can’t wait to show you what’s coming.
                </p>

                {/* Divider */}
                <div className="flex items-center justify-center">
                    <span className="h-px w-24 bg-border" />
                </div>

                {/* Footer note */}
                <p className="text-sm text-muted-foreground">
                    Thanks for your patience 💙
                </p>
            </div>
        </main>
    );
};

export default BetaNotice;
