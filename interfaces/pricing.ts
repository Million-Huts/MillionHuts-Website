// types/pricing.ts

export type PlanInterval = "MONTHLY" | "YEARLY";

export interface PlanDiscount {
    id: string;
    type: "PERCENTAGE" | "AMOUNT";
    value: number;
    validFrom: string;
    validTill: string;
}

export interface PlanFeatures {
    limits: {
        maxPGs: number;
        maxUsers: number;
    };
    modules: {
        expense: boolean;
        complaints: boolean;
        announcements: boolean;
        gateSecurity: boolean;
        entryLogs: boolean;
    };
    financial: {
        tenantPayments: boolean;
        digitalBilling: boolean;
        reports: boolean;
    };
    analytics: {
        dashboard: boolean;
        advancedReports: boolean;
    };
    support: {
        priority: boolean;
    };
}

export interface Plan {
    id: string;
    name: string;
    description?: string;
    price: number; // in paise (e.g., 49900 for ₹499.00)
    currency: string;
    interval: PlanInterval;
    features: PlanFeatures;
    badge?: string[]; // e.g., ["Most Popular", "Best Value"]
    isActive: boolean;
    isPublic: boolean;
    discounts?: PlanDiscount[];
    createdAt: string;
    updatedAt: string;
}