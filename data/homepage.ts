// data/homepage.ts
import { Search, Home, Key, Building2, Users, Shield, Zap, CreditCard, Wifi, Coffee, Car, Wind, Tv, Utensils } from 'lucide-react';

export const cities = [
    { name: 'Bangalore', slug: 'bangalore', count: '1.2k+', image: '/images/cities/bangalore.png' },
    { name: 'Mumbai', slug: 'mumbai', count: '850+', image: '/images/cities/mumbai.png' },
    { name: 'Delhi', slug: 'delhi', count: '900+', image: '/images/cities/delhi.png' },
    { name: 'Pune', slug: 'pune', count: '600+', image: '/images/cities/pune.png' },
    { name: 'Hyderabad', slug: 'hyderabad', count: '750+', image: '/images/cities/hyderabad.png' },
    { name: 'Chennai', slug: 'chennai', count: '400+', image: '/images/cities/chennai.png' },
];

export const featuredPGs = [
    {
        id: 1,
        name: 'Sunrise Luxury Living',
        location: 'Koramangala, Bangalore',
        price: '8,500',
        rating: 4.8,
        image: '/images/pgs/sunrise.jpg',
        type: 'Coliving',
        gender: 'Unisex',
        amenities: ['WiFi', 'Food', 'AC', 'Parking'],
    },
    {
        id: 2,
        name: 'The Urban Nest',
        location: 'Hitech City, Hyderabad',
        price: '12,000',
        rating: 4.9,
        image: '/images/pgs/urban-nest.jpg',
        type: 'Premium PG',
        gender: 'Mens',
        amenities: ['WiFi', 'Laundry', 'Gym', 'Food'],
    },
    {
        id: 3,
        name: 'Starlight Residency',
        location: 'Powai, Mumbai',
        price: '15,500',
        rating: 4.7,
        image: '/images/pgs/starlight.jpg',
        type: 'Studio',
        gender: 'Ladies',
        amenities: ['Security', 'AC', 'Power Backup', 'Cleaning'],
    },
    {
        id: 4,
        name: 'Blue Sky Abodes',
        location: 'Sector 62, Noida',
        price: '7,000',
        rating: 4.5,
        image: '/images/pgs/bluesky.jpg',
        type: 'Budget PG',
        gender: 'Unisex',
        amenities: ['WiFi', 'Food', 'TV'],
    },
];

export const tenantSteps = [
    { icon: Search, title: 'Browse & Filter', description: 'Filter by budget, gender, and amenities to find your ideal home.' },
    { icon: Home, title: 'Virtual/Physical Visit', description: 'Check high-quality photos or schedule a visit with one click.' },
    { icon: Key, title: 'Instant Booking', description: 'Pay the token amount online and secure your bed instantly.' },
];

export const ownerSteps = [
    { icon: Building2, title: 'List Property', description: 'Fill in details, upload photos, and set your own house rules.' },
    { icon: Users, title: 'Tenant Management', description: 'Automate KYC, digital agreements, and daily attendance.' },
    { icon: Zap, title: 'Collect Rent', description: 'Get automated rent reminders and secure online collections.' },
];

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