// components/layout/navbar.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Building2, Home, LogIn, Search, FileText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'PG', href: '/pg' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Docs', href: '/docs' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change and prevent body scroll
    useEffect(() => {
        setIsOpen(false);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [router.pathname]);

    // Check if link is active
    const isActive = (href: string) => {
        if (href === '/') {
            return router.pathname === href;
        }
        return router.pathname.startsWith(href);
    };

    // Underline animation variants
    const underlineVariants = {
        initial: { width: 0 },
        animate: { width: '100%' },
        exit: { width: 0 }
    };

    return (
        <nav className={`glass fixed top-0 w-full z-50 ${scrolled ? 'shadow-soft' : ''}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <Building2 className="h-8 w-8 text-primary" />
                            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                                MillionHuts
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative inline-flex px-3 py-2 text-sm font-medium transition-colors rounded-md group"
                            >
                                <span className={`relative ${isActive(item.href)
                                    ? 'text-primary'
                                    : 'text-foreground/70 group-hover:text-primary'
                                    }`}>
                                    {item.name}
                                    {/* Active link underline */}
                                    {isActive(item.href) && (
                                        <motion.span
                                            layoutId="active-underline"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                            initial={{ width: 0 }}
                                            animate={{ width: '100%' }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                    {/* Hover underline for non-active links */}
                                    {!isActive(item.href) && (
                                        <motion.span
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                            initial={{ width: 0 }}
                                            whileHover={{ width: '100%' }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </span>
                            </Link>
                        ))}

                        {/* Search Button */}
                        <Button variant="ghost" size="icon" className="ml-2">
                            <Search className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Right side actions */}
                    {/* Right side actions */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <ThemeToggle />

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="font-semibold gap-2 hover:bg-primary/5 transition-all">
                                    <LogIn className="h-4 w-4 text-primary" />
                                    <span>Login</span>
                                    <ChevronDown className="h-3 w-3 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-64 p-2 mt-2 rounded-xl shadow-xl border-border/50 glass">
                                <DropdownMenuItem asChild className="rounded-lg cursor-pointer focus:bg-primary/5 p-3">
                                    <a href="https://tenant.millionhuts.com" target='_blank' className="flex items-start gap-3">
                                        <div className="p-2 bg-blue-500/10 rounded-md">
                                            <Home className="h-4 w-4 text-blue-500" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-sm">Tenant Portal</span>
                                            <span className="text-[10px] text-muted-foreground leading-tight">Pay rent, view receipts & raise tickets</span>
                                        </div>
                                    </a>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild className="rounded-lg cursor-pointer focus:bg-primary/5 p-3">
                                    <a href="https://app.millionhuts.com" target='_blank' className="flex items-start gap-3">
                                        <div className="p-2 bg-primary/10 rounded-md">
                                            <Building2 className="h-4 w-4 text-primary" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-sm">PG Owner Portal</span>
                                            <span className="text-[10px] text-muted-foreground leading-tight">Manage properties, tenants & analytics</span>
                                        </div>
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center space-x-2 md:hidden">
                        <Button variant="ghost" size="icon">
                            <Search className="h-4 w-4" />
                        </Button>
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={isOpen ? 'close' : 'menu'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                                </motion.div>
                            </AnimatePresence>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-y-auto border-t border-border"
                        style={{ maxHeight: 'calc(100vh - 64px)' }}
                    >
                        <div className="space-y-1 px-4 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative block px-3 py-2 text-sm font-medium rounded-md transition-colors
                                        ${isActive(item.href)
                                            ? 'text-primary bg-primary/10'
                                            : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="relative inline-block">
                                        {item.name}
                                        {isActive(item.href) && (
                                            <motion.span
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                                initial={{ width: 0 }}
                                                animate={{ width: '100%' }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </span>
                                </Link>
                            ))}

                            {/* Mobile auth portals */}
                            <div className="pt-6 mt-4 space-y-4 border-t border-border/50">
                                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-2">Access Portals</p>

                                <div className="grid grid-cols-2 gap-3">
                                    <a href="https://tenant.millionhuts.com" target='_blank'
                                        className="flex flex-col items-center justify-center p-4 rounded-2xl bg-secondary/50 border border-border/40 active:scale-95 transition-all">
                                        <div className="p-3 bg-blue-500/10 rounded-xl mb-2">
                                            <Home className="h-6 w-6 text-blue-500" />
                                        </div>
                                        <span className="text-xs font-bold">Tenant</span>
                                    </a>

                                    <a href="https://app.millionhuts.com" target='_blank'
                                        className="flex flex-col items-center justify-center p-4 rounded-2xl bg-secondary/50 border border-border/40 active:scale-95 transition-all">
                                        <div className="p-3 bg-primary/10 rounded-xl mb-2">
                                            <Building2 className="h-6 w-6 text-primary" />
                                        </div>
                                        <span className="text-xs font-bold">Owner</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}