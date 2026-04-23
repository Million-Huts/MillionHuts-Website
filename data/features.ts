// ─────────────────────────────────────────────
// /data/features.ts
// All static content for the /features page
// ─────────────────────────────────────────────

export const heroPills = [
  { label: "Identity & KYC",   color: "bg-blue-500"   },
  { label: "Floor Management", color: "bg-purple-500" },
  { label: "Gate Security",    color: "bg-amber-500"  },
  { label: "Finance & ERP",    color: "bg-green-500"  },
  { label: "Live Alerts",      color: "bg-indigo-500" },
];

export const bentoPillars = [
  {
    id: "kyc",
    colSpan: "md:col-span-2",
    accentBg: "bg-blue-500/10",
    accentText: "text-blue-500",
    title: "Digital Identity & KYC Vault",
    desc: "One-time onboarding. Tenants manage their own verified profile — Aadhaar, PAN, Passport — all in a secure vault. Owners import verified data in seconds.",
    hasMockup: true,
  },
  {
    id: "floor",
    colSpan: "",
    accentBg: "bg-purple-500/10",
    accentText: "text-purple-500",
    title: "Visual Floor Mapping",
    desc: "Floor-wise room grid with real-time occupancy. Single, Double, AC, Non-AC — all at a glance.",
    hasMockup: false,
  },
  {
    id: "gate",
    colSpan: "",
    accentBg: "bg-amber-500/10",
    accentText: "text-amber-500",
    title: "QR Gate Registry",
    desc: "Replace paper registers. Digital visitor & delivery logs with tamper-proof audit trails.",
    hasMockup: false,
  },
  {
    id: "finance",
    colSpan: "",
    accentBg: "bg-green-500/10",
    accentText: "text-green-500",
    title: "Finance & Complaint ERP",
    desc: "Centralized ledger for bills, salaries, repairs. Tenants raise tickets with media proof.",
    hasMockup: false,
  },
  {
    id: "alerts",
    colSpan: "md:col-span-2",
    accentBg: "bg-indigo-500/10",
    accentText: "text-indigo-500",
    title: "Omnichannel Alerts",
    desc: "Hybrid FCM + Socket.io. Push notifications for background, live events for active users. Blast to specific floors instantly.",
    hasMockup: true,
  },
];

export interface TimelineFeatureData {
  id: string;
  categoryLabel: string;
  categoryColor: string;
  accentBg: string;
  calloutBg: string;
  h2: string;
  body: string;
  bullets: string[];
  calloutText: string;
  mockupImage: string; // path under /public/mockups/
}

export const featureTimeline: TimelineFeatureData[] = [
  {
    id: "kyc",
    categoryLabel: "Identity & KYC",
    categoryColor: "text-blue-500",
    accentBg: "bg-blue-500",
    calloutBg: "bg-blue-500/8 border-blue-500/20 text-blue-600 dark:text-blue-400",
    h2: "Portable Tenant Profiles",
    body: "A one-time onboarding experience that travels with the tenant. No more re-submitting documents at every new PG.",
    bullets: [
      "Secure KYC Vault — Aadhaar, PAN, Passport stored encrypted",
      "Owners import verified tenant data in seconds",
      "Eliminates manual paperwork and verification delays",
    ],
    calloutText: "Property owners can verify a new tenant in under 60 seconds.",
    mockupImage: "/mockups/kyc-profile.png",
  },
  {
    id: "floor",
    categoryLabel: "Precision Inventory",
    categoryColor: "text-purple-500",
    accentBg: "bg-purple-500",
    calloutBg: "bg-purple-500/8 border-purple-500/20 text-purple-600 dark:text-purple-400",
    h2: "Visual Floor Mapping",
    body: "Total control over your building. See every room, every bed, every tenant — all on one screen.",
    bullets: [
      "Manage multiple PGs with floor-wise room mapping",
      "Real-time occupancy tracking per room",
      "Filter by sharing type: Single, Double, Triple",
    ],
    calloutText: "Instantly view bed availability across all your properties.",
    mockupImage: "/mockups/floor-map.png",
  },
  {
    id: "gate",
    categoryLabel: "Smart Security",
    categoryColor: "text-amber-500",
    accentBg: "bg-amber-500",
    calloutBg: "bg-amber-500/8 border-amber-500/20 text-amber-600 dark:text-amber-400",
    h2: "QR-Powered Digital Registry",
    body: "Replace the physical register book forever. Every visitor and delivery is logged digitally with a timestamp.",
    bullets: [
      "Self-service check-in via Gate QR codes",
      "Tamper-proof security audit trail",
      "Separate logs for Visitors and Deliveries",
    ],
    calloutText: "Reduces staff burden while creating a complete security record.",
    mockupImage: "/mockups/gate-log.png",
  },
  {
    id: "finance",
    categoryLabel: "Operational ERP",
    categoryColor: "text-green-500",
    accentBg: "bg-green-500",
    calloutBg: "bg-green-500/8 border-green-500/20 text-green-600 dark:text-green-400",
    h2: "Integrated Expense & Complaint Desk",
    body: "One ledger for everything. Utility bills, salaries, repairs — all tracked. Tenants raise tickets with photo proof.",
    bullets: [
      "Centralized ledger for all PG expenses",
      "Tenants raise maintenance tickets with media proof",
      "Link repair costs directly to complaints",
    ],
    calloutText: "100% financial transparency — every rupee accounted for.",
    mockupImage: "/mockups/expense-ledger.png",
  },
  {
    id: "alerts",
    categoryLabel: "Real-Time Comms",
    categoryColor: "text-indigo-500",
    accentBg: "bg-indigo-500",
    calloutBg: "bg-indigo-500/8 border-indigo-500/20 text-indigo-600 dark:text-indigo-400",
    h2: "Hybrid FCM + Socket.io Alerts",
    body: "Never miss a critical update. Background push notifications via FCM, live socket events for active users.",
    bullets: [
      "Instant PWA push notifications for background alerts",
      "Live socket events for active app users",
      "Blast updates to specific floors or entire PG",
    ],
    calloutText: "Never miss a rent payment or urgent announcement again.",
    mockupImage: "/mockups/notifications.png",
  },
];

export const trustStats = [
  { label: "KYC Verified"    },
  { label: "Digital Logs"    },
  { label: "Encrypted Vault" },
  { label: "Audit Trail"     },
];

export const ctaStats = [
  "0% Brokerage",
  "100% Verified",
  "24/7 Support",
  "Secure KYC Vault",
];
