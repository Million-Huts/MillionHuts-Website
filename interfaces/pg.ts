export interface Amenity {
    id: string;
    name: string;
    slug: string;
    icon?: string;
    isFeatured?: boolean;
}

export interface AmenityGroup {
    id: string;
    name: string;
    slug: string;
    amenities: Amenity[];
}

export interface PG {
    pgCode: string;
    name: string;
    city: string;
    state: string;
    locality: string | null;
    longitude: number;
    latitude: number;
    address: string;
    coverImage: string | null;
    rentStart: string | null;
    rentUpto: string | null;
    pgType: "MENS" | "WOMENS" | "COLIVING" | null;
    messAvailable: boolean;
    amenities: any[];
}

export interface SearchMeta {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

export interface FilterMeta {
    cities: string[];
    states: string[];
    pincodes: string[];
    amenities: AmenityGroup[];
    pgTypes: string[];
    messTypes: string[];
}