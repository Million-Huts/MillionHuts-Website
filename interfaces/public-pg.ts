export interface PublicPG {
    pgCode: string;
    name: string;
    city: string;
    state: string;
    coverImage: string | null;
    rentStart: number | null;
    rentUpto: number | null;
    pgType: "MENS" | "WOMENS" | "COLIVING" | null;
    messAvailable: boolean;
}

export interface ApiMeta {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

export interface PGDetails {
    pgCode: string;
    name: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    coverImage: string;
    details: {
        contactNumber: string;
        registrationNo: string;
        pgType: "MENS" | "WOMENS" | "COLIVING";
        messAvailable: boolean;
        messType: "VEG" | "NON-VEG" | "BOTH" | null;
        rentStart: number;
        rentUpto: number;
        rentCycleDay: number;
        noticePeriod: number;
    };
    images: { id: string; url: string }[];
    rules: {
        title: string;
        items: { name: string; description: string }[];
    }[];
}