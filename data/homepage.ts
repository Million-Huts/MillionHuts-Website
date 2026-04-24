// data/homepage.ts
import { Search, Home, Key, Building2, Users, Shield, Zap, CreditCard, Wifi } from 'lucide-react';
;

export const features = [
    { icon: Shield, title: 'Zero Brokerage', description: 'Connect directly with owners and save on hidden commissions.' },
    { icon: Zap, title: 'Speedy Move-in', description: 'Digital documentation ensures you can move in within 24 hours.' },
    { icon: CreditCard, title: 'Easy Rent Pay', description: 'Pay via UPI, Credit Card or Netbanking with detailed invoices.' },
    { icon: Building2, title: 'Verified Owners', description: 'We vet every property owner to ensure a safe environment.' },
    { icon: Wifi, title: 'High Speed Tech', description: 'Smart management app for raising maintenance tickets.' },
    { icon: Users, title: 'Community Events', description: 'Regular meetups and events for our coliving residents.' },
];

export const testimonials = [
    {
        id: 1,
        name: 'Rahul Sharma',
        role: 'Software Engineer',
        content: 'The "Verified Listings" actually mean something here. I booked my Koramangala stay while sitting in Jaipur, and it was exactly as shown.',
        avatar: '/images/avatars/rahul.jpg',
        rating: 5
    },
    {
        id: 2,
        name: 'Priya Verma',
        role: 'Student, DU',
        content: 'Being a student, safety was my priority. The ladies-only PGs listed on MillionHuts are excellent and centrally located.',
        avatar: '/images/avatars/priya.jpg',
        rating: 5
    },
    {
        id: 3,
        name: 'Amit Patel',
        role: 'Property Owner',
        content: 'Managing 50 tenants used to be a nightmare. Now, rent collection is automated and my occupancy has stayed at 95%!',
        avatar: '/images/avatars/amit.jpg',
        rating: 4
    }
];

export const faqs = [
    {
        question: "Is there any brokerage involved?",
        answer: "No, MillionHuts is a direct-to-owner platform. We do not charge any brokerage from tenants."
    },
    {
        question: "How do I schedule a visit?",
        answer: "Once you like a property, click on the 'Schedule Visit' button, pick a time, and the owner will be notified."
    },
    {
        question: "Can I pay my rent via Credit Card?",
        answer: "Yes, our platform supports Credit Cards, Debit Cards, and all major UPI apps."
    }
];