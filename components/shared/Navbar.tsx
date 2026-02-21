// components/layout/navbar.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Building2, Users, Home, LogIn } from 'lucide-react';

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
    {
        name: 'For Owners',
        href: '/owners',
        dropdown: [
            { name: 'Owner Dashboard', href: '/owners', description: 'Manage your properties' },
            { name: 'Owner Resources', href: '/blog?category=owners', description: 'Tips & guides' },
        ],
    },
    {
        name: "PG's",
        href: '/pg',
        dropdown: [
            { name: "All PG's", href: '/pg', description: 'Browse all listings' },
            { name: 'Popular Cities', href: '/cities', description: 'Find PG in your city' },
            { name: 'Student Specials', href: '/pg?type=student', description: 'Near universities' },
        ],
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [router.pathname]);

    return (
        <nav className={`glass z-50 ${scrolled ? 'shadow-soft' : ''}`}>
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
                            <div key={item.name} className="relative">
                                {item.dropdown ? (
                                    <DropdownMenu
                                        open={activeDropdown === item.name}
                                        onOpenChange={(open) => setActiveDropdown(open ? item.name : null)}
                                    >
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors
                          ${router.pathname === item.href
                                                        ? 'text-primary'
                                                        : 'text-foreground/70 hover:text-primary'
                                                    }`}
                                            >
                                                <span>{item.name}</span>
                                                <ChevronDown className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="center" className="w-56">
                                            {item.dropdown.map((dropdownItem) => (
                                                <DropdownMenuItem key={dropdownItem.href} asChild>
                                                    <Link
                                                        href={dropdownItem.href}
                                                        className="flex flex-col items-start p-2"
                                                    >
                                                        <span className="font-medium">{dropdownItem.name}</span>
                                                        <span className="text-xs text-muted-foreground">
                                                            {dropdownItem.description}
                                                        </span>
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`inline-flex px-3 py-2 text-sm font-medium transition-colors rounded-md
                      ${router.pathname === item.href
                                                ? 'text-primary bg-primary/10'
                                                : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right side actions */}
                    <div className="hidden md:flex md:items-center md:space-x-2">
                        <ThemeToggle />

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex items-center space-x-2">
                                    <Users className="h-4 w-4" />
                                    <span>Login</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                    <a href="https://tenant.millionhuts.com" target='_blank' className="flex items-center space-x-2">
                                        <Home className="h-4 w-4" />
                                        <span>Tenant Login</span>
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href="https://app.millionhuts.com" target='_blank' className="flex items-center space-x-2">
                                        <Building2 className="h-4 w-4" />
                                        <span>Owner Login</span>
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button className="bg-primary hover:bg-primary/90">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center space-x-2 md:hidden">
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
                        className="md:hidden overflow-hidden border-t border-border"
                    >
                        <div className="space-y-1 px-4 pb-3 pt-2">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    {item.dropdown ? (
                                        <div className="space-y-1">
                                            <div className="px-3 py-2 text-sm font-medium text-foreground/70">
                                                {item.name}
                                            </div>
                                            <div className="ml-4 space-y-1 border-l-2 border-primary/20 pl-2">
                                                {item.dropdown.map((dropdownItem) => (
                                                    <Link
                                                        key={dropdownItem.href}
                                                        href={dropdownItem.href}
                                                        className="block px-3 py-2 text-sm hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                                                    >
                                                        <div className="font-medium">{dropdownItem.name}</div>
                                                        <div className="text-xs text-muted-foreground">
                                                            {dropdownItem.description}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors
                        ${router.pathname === item.href
                                                    ? 'text-primary bg-primary/10'
                                                    : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            {/* Mobile auth buttons */}
                            <div className="pt-4 space-y-2 border-t border-border">
                                <a href="https://tenant.millionhuts.com" target='_blank'>
                                    <Button variant="outline" className="w-full justify-start">
                                        <Home className="mr-2 h-4 w-4" />
                                        Tenant Login
                                    </Button>
                                </a>
                                <a href="https://app.millionhuts.com" target='_blank'>
                                    <Button variant="outline" className="w-full justify-start">
                                        <Building2 className="mr-2 h-4 w-4" />
                                        Owner Login
                                    </Button>
                                </a>
                                <Button className="w-full bg-primary hover:bg-primary/90">
                                    <LogIn className="mr-2 h-4 w-4" />
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}