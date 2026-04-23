// pages/404.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Building2, Home, ArrowLeft, Compass, Search, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Custom404() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/properties?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    if (!mounted) return null;

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
            {/* Background Decoration */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="max-w-3xl w-full text-center">
                {/* Animated 404 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <h1 className="text-[12rem] font-bold leading-none bg-gradient-to-r from-primary to-primary/40 bg-clip-text text-transparent select-none">
                        404
                    </h1>

                    {/* Floating huts decoration */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
                    >
                        <Building2 className="h-40 w-40 text-primary" />
                    </motion.div>
                </motion.div>

                {/* Error Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-4 mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-bold">
                        This hut doesn't exist! 🏠
                    </h2>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        Looks like you've wandered off the beaten path. The page you're looking for
                        might have been moved, deleted, or never existed.
                    </p>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                >
                    <Link href="/">
                        <Button variant="outline" className="w-full group">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            Homepage
                        </Button>
                    </Link>
                    <Link href="/properties">
                        <Button variant="outline" className="w-full group">
                            <Compass className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                            Browse PGs
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" className="w-full">
                            Contact Support
                        </Button>
                    </Link>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-md mx-auto mb-8"
                >
                    <form onSubmit={handleSearch} className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search for PGs in your city..."
                            className="pl-10 pr-24"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button
                            type="submit"
                            size="sm"
                            className="absolute right-1 top-1/2 -translate-y-1/2"
                        >
                            Search
                        </Button>
                    </form>
                </motion.div>

                {/* Popular Destinations */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <p className="text-sm text-muted-foreground mb-3 flex items-center justify-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Popular cities
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai'].map((city) => (
                            <Link key={city} href={`/cities/${city.toLowerCase()}`}>
                                <Button variant="ghost" size="sm" className="text-xs">
                                    {city}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* App Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-12 pt-8 border-t border-border"
                >
                    <p className="text-sm text-muted-foreground mb-4">
                        Looking for your dashboard?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.millionhuts.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                            <Building2 className="mr-2 h-4 w-4" />
                            Owner Dashboard
                        </a>
                        <a
                            href="https://tenant.millionhuts.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                            <Home className="mr-2 h-4 w-4" />
                            Tenant Portal
                        </a>
                    </div>
                </motion.div>

                {/* Quick Tips */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-8 text-xs text-muted-foreground"
                >
                    <p>💡 Quick tip: Try checking the URL for typos or start from our homepage</p>
                </motion.div>
            </div>
        </div>
    );
}