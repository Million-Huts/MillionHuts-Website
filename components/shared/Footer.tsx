// components/layout/footer.tsx
import Link from 'next/link';
import { Building2, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const footerSections = [
    {
        title: 'Product',
        links: [
            { name: 'Features', href: '/features' },
            { name: 'Pricing', href: '/pricing' },
            { name: 'How It Works', href: '/how-it-works' },
            { name: 'For Owners', href: '/owners' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { name: 'Blog', href: '/blog' },
            { name: 'FAQ', href: '/faq' },
            { name: 'Cities', href: '/cities' },
            { name: 'Contact', href: '/contact' },
        ],
    },
    {
        title: 'Company',
        links: [
            { name: 'About', href: '/about' },
            { name: 'Privacy Policy', href: '/legal/privacy-policy' },
            { name: 'Terms of Service', href: '/legal/terms' },
            { name: 'Refund Policy', href: '/legal/refund-policy' },
        ],
    },
];

export function Footer() {
    return (
        <footer className="bg-background border-t border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Building2 className="h-6 w-6 text-primary" />
                            <span className="text-lg font-semibold">MillionHuts</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Streamlining PG accommodations for owners and tenants with modern management solutions.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Footer Sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold mb-3">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} MillionHuts. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <a href="mailto:support@millionhuts.com" className="flex items-center">
                                <Mail className="h-4 w-4 mr-1" />
                                support@millionhuts.com
                            </a>
                            <a href='tel:+911234567890' className="flex items-center">
                                <Phone className="h-4 w-4 mr-1" />
                                +91 12345 67890
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}