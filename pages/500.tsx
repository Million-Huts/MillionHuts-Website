// pages/500.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Custom500() {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="mb-8"
                >
                    <div className="relative inline-block">
                        <AlertTriangle className="h-32 w-32 text-destructive/20" />
                        <AlertTriangle className="h-16 w-16 text-destructive absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4 mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Something went wrong! 🔧
                    </h1>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        We're experiencing some technical difficulties. Our team has been notified
                        and is working to fix the issue.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button onClick={() => window.location.reload()} className="gap-2">
                        <RefreshCw className="h-4 w-4" />
                        Try Again
                    </Button>
                    <Link href="/">
                        <Button variant="outline" className="gap-2">
                            <Home className="h-4 w-4" />
                            Go Home
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" className="gap-2">
                            <Mail className="h-4 w-4" />
                            Contact Support
                        </Button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 text-sm text-muted-foreground"
                >
                    <p>Error Code: 500 - Internal Server Error</p>
                    <p className="mt-2">
                        If the problem persists, please{' '}
                        <Link href="/contact" className="text-primary hover:underline">
                            contact our support team
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}