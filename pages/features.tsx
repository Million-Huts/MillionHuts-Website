import Head from "next/head";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  LayoutGrid,
  DoorOpen,
  Receipt,
  Bell,
  CheckCircle2,
  ArrowRight,
  UserPlus,
  ShieldCheck,
  Package,
  User,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─────────────────────────────────────────────
// SECTION 1 — Hero
// ─────────────────────────────────────────────
function FeaturesHero() {
  const pills = [
    { label: "Identity & KYC", color: "bg-blue-500" },
    { label: "Floor Management", color: "bg-purple-500" },
    { label: "Gate Security", color: "bg-amber-500" },
    { label: "Finance & ERP", color: "bg-green-500" },
    { label: "Live Alerts", color: "bg-indigo-500" },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
      {/* Blobs */}
      <div className="absolute top-0 left-[-10%] w-[45%] h-[60%] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-[-10%] w-[40%] h-[50%] bg-blue-400/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Pill badge */}
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2">
            ✦ Platform Overview
          </span>

          {/* H1 */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05]">
            One platform.
            <br />
            <span className="text-primary italic">Total control.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            From digital identity vaults to real-time gate security — MillionHuts
            is the complete operating system for modern PG management.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {pills.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 text-sm font-medium text-foreground"
              >
                <span className={`h-2 w-2 rounded-full ${pill.color}`} />
                {pill.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION 2 — Bento Grid ("The 5 Pillars")
// ─────────────────────────────────────────────
interface BentoCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  accentBg: string;
  accentText: string;
  colSpan?: string;
  index: number;
  mockup?: React.ReactNode;
}

function BentoCard({
  icon,
  title,
  desc,
  accentBg,
  accentText,
  colSpan = "",
  index,
  mockup,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`rounded-3xl border border-border bg-card/60 backdrop-blur-sm p-7 hover:border-primary/30 transition-all flex flex-col gap-4 ${colSpan}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-3 flex-1">
          <span className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${accentBg} ${accentText}`}>
            {icon}
          </span>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
        {mockup && (
          <div className="hidden md:block flex-shrink-0">{mockup}</div>
        )}
      </div>
    </motion.div>
  );
}

// Mini mockup: Tenant Profile card
function TenantProfileMockup() {
  return (
    <div className="bg-background/80 border border-border rounded-2xl p-4 w-52 shadow-lg text-xs">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-9 h-9 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-sm">
          RK
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">Rahul Kumar</p>
          <p className="text-muted-foreground text-[10px]">Verified Tenant</p>
        </div>
      </div>
      <div className="space-y-1.5">
        {[
          { doc: "Aadhaar Card", status: "✅ Verified" },
          { doc: "PAN Card", status: "✅ Verified" },
          { doc: "Passport", status: "⏳ Pending" },
        ].map((row) => (
          <div key={row.doc} className="flex justify-between items-center bg-muted/40 rounded-lg px-2 py-1">
            <span className="text-foreground/80">{row.doc}</span>
            <span className="text-[10px]">{row.status}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 text-center">
        <span className="inline-block bg-green-500/15 text-green-600 dark:text-green-400 text-[10px] font-bold px-3 py-1 rounded-full">
          KYC Complete
        </span>
      </div>
    </div>
  );
}

// Mini mockup: Notification card
function NotificationMockup() {
  return (
    <div className="w-52 space-y-2">
      {[
        {
          icon: <Bell className="h-3.5 w-3.5 text-blue-500" />,
          title: "Rent Due",
          body: "₹8,500 due in 2 days",
          time: "2 min ago",
        },
        {
          icon: <Megaphone className="h-3.5 w-3.5 text-indigo-500" />,
          title: "Announcement",
          body: "Water off 10AM–2PM",
          time: "15 min ago",
        },
      ].map((n, i) => (
        <div
          key={i}
          className="bg-background/80 border border-border rounded-xl p-3 shadow text-xs flex gap-2 items-start"
        >
          <span className="mt-0.5">{n.icon}</span>
          <div>
            <p className="font-semibold text-foreground">{n.title}</p>
            <p className="text-muted-foreground">{n.body}</p>
            <p className="text-muted-foreground/60 text-[10px] mt-0.5">{n.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeatureBentoGrid() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
            Everything your PG needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Five core pillars that cover every aspect of modern PG operations.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <BentoCard
            index={0}
            colSpan="md:col-span-2"
            icon={<Shield className="h-5 w-5" />}
            accentBg="bg-blue-500/10"
            accentText="text-blue-500"
            title="Digital Identity & KYC Vault"
            desc="One-time onboarding. Tenants manage their own verified profile — Aadhaar, PAN, Passport — all in a secure vault. Owners import verified data in seconds."
            mockup={<TenantProfileMockup />}
          />
          <BentoCard
            index={1}
            icon={<LayoutGrid className="h-5 w-5" />}
            accentBg="bg-purple-500/10"
            accentText="text-purple-500"
            title="Visual Floor Mapping"
            desc="Floor-wise room grid with real-time occupancy. Single, Double, AC, Non-AC — all at a glance."
          />
          <BentoCard
            index={2}
            icon={<DoorOpen className="h-5 w-5" />}
            accentBg="bg-amber-500/10"
            accentText="text-amber-500"
            title="QR Gate Registry"
            desc="Replace paper registers. Digital visitor & delivery logs with tamper-proof audit trails."
          />
          <BentoCard
            index={3}
            icon={<Receipt className="h-5 w-5" />}
            accentBg="bg-green-500/10"
            accentText="text-green-500"
            title="Finance & Complaint ERP"
            desc="Centralized ledger for bills, salaries, repairs. Tenants raise tickets with media proof."
          />
          <BentoCard
            index={4}
            colSpan="md:col-span-2"
            icon={<Bell className="h-5 w-5" />}
            accentBg="bg-indigo-500/10"
            accentText="text-indigo-500"
            title="Omnichannel Alerts"
            desc="Hybrid FCM + Socket.io. Push notifications for background, live events for active users. Blast to specific floors instantly."
            mockup={<NotificationMockup />}
          />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION 3 — Scroll-Triggered Timeline
// ─────────────────────────────────────────────

interface TimelineFeatureProps {
  index: number;
  categoryIcon: React.ReactNode;
  categoryLabel: string;
  categoryColor: string;
  accentColor: string;
  h2: string;
  body: string;
  bullets: { text: string }[];
  calloutColor: string;
  calloutText: string;
  mockup: React.ReactNode;
}

function TimelineFeature({
  index,
  categoryIcon,
  categoryLabel,
  categoryColor,
  accentColor,
  h2,
  body,
  bullets,
  calloutColor,
  calloutText,
  mockup,
}: TimelineFeatureProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Text animations
  const textOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -60]);

  // Mockup animations with parallax
  const mockupOpacity = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);
  const mockupY = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [100, 0, 0, -50]);
  const mockupScale = useTransform(smoothProgress, [0, 0.35, 0.65, 1], [0.8, 1, 1, 0.95]);

  // Timeline dot scale
  const dotScale = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0.5, 1.2, 0.5]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="space-y-6 lg:pr-12"
          >
            {/* Category tag */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 text-sm font-bold ${categoryColor} bg-card/60 backdrop-blur-sm border border-border rounded-full px-4 py-2`}
            >
              {categoryIcon}
              {categoryLabel}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-black tracking-tight text-foreground"
            >
              {h2}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              {body}
            </motion.p>

            {/* Bullets with stagger */}
            <ul className="space-y-3">
              {bullets.map((b, i) => (
                <motion.li
                  key={b.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className={`h-5 w-5 ${categoryColor} mt-0.5 flex-shrink-0`} />
                  <span className="text-foreground/90">{b.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className={`rounded-2xl border px-5 py-4 text-sm font-semibold ${calloutColor}`}
            >
              {calloutText}
            </motion.div>
          </motion.div>

          {/* Right: Animated Mockup */}
          <motion.div
            style={{ opacity: mockupOpacity, y: mockupY, scale: mockupScale }}
            className="relative"
          >
            <div className="bg-card/80 backdrop-blur-md border border-border/60 rounded-3xl p-8 shadow-2xl">
              {mockup}
            </div>
            {/* Glow effect */}
            <div className={`absolute inset-0 ${accentColor} opacity-20 blur-3xl -z-10 rounded-3xl`} />
          </motion.div>
        </div>

        {/* Timeline dot (visible on desktop) */}
        <motion.div
          style={{ scale: dotScale }}
          className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10"
        />
      </div>
    </div>
  );
}

// ── Mockup: Tenant Profile (Pillar 1) — documents slide in one by one ──
function MockupTenantProfile() {
  const docs = [
    { doc: "Aadhaar Card", status: "✅ Verified", statusColor: "text-green-500" },
    { doc: "PAN Card",     status: "✅ Verified", statusColor: "text-green-500" },
    { doc: "Passport",     status: "⏳ Pending",  statusColor: "text-amber-500" },
  ];
  return (
    <div className="space-y-4">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Tenant Profile</p>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
        className="flex items-center gap-3"
      >
        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-black text-base">RK</div>
        <div>
          <p className="font-bold text-foreground">Rahul Kumar</p>
          <p className="text-xs text-muted-foreground">Verified Tenant</p>
        </div>
      </motion.div>
      <div className="space-y-2">
        {docs.map((row, i) => (
          <motion.div
            key={row.doc}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 100 }}
            className="flex justify-between items-center bg-muted/40 rounded-xl px-4 py-2.5 text-sm"
          >
            <span className="text-foreground/80 font-medium">{row.doc}</span>
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 260 }}
              className={`text-xs font-semibold ${row.statusColor}`}
            >
              {row.status}
            </motion.span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
        className="pt-1 text-center"
      >
        <span className="inline-block bg-green-500/15 text-green-600 dark:text-green-400 text-xs font-bold px-4 py-1.5 rounded-full">
          KYC Complete
        </span>
      </motion.div>
    </div>
  );
}

// ── Mockup: Floor Map (Pillar 2) — rooms fill up sequentially ──
function MockupFloorMap() {
  const rooms = [
    { num: "201", occupied: true },
    { num: "202", occupied: true },
    { num: "203", occupied: false },
    { num: "204", occupied: true },
    { num: "205", occupied: false },
    { num: "206", occupied: true },
  ];
  return (
    <div className="space-y-4">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Floor 2 — Block A</p>
      <div className="grid grid-cols-3 gap-2">
        {rooms.map((r, i) => (
          <motion.div
            key={r.num}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200, damping: 14 }}
            className={`rounded-xl border p-3 text-center text-sm font-semibold ${
              r.occupied
                ? "bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400"
                : "bg-muted/40 border-border text-muted-foreground"
            }`}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.1, type: "spring", stiffness: 300 }}
              className={`w-2 h-2 rounded-full mx-auto mb-1.5 ${r.occupied ? "bg-green-500" : "bg-muted-foreground/40"}`}
            />
            {r.num}
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
        className="text-xs text-muted-foreground text-center pt-1"
      >
        4 Occupied · 2 Vacant
      </motion.p>
    </div>
  );
}

// ── Mockup: Gate Log (Pillar 3) — entries appear like real-time logging ──
function MockupGateLog() {
  const entries = [
    { icon: <User className="h-4 w-4 text-blue-500" />,   name: "Amit Sharma",   sub: "Visitor · Room 304",  time: "10:32 AM", status: "✅ Checked In",  statusColor: "text-green-500" },
    { icon: <Package className="h-4 w-4 text-amber-500" />, name: "Swiggy Delivery", sub: "Delivery · Room 201", time: "11:15 AM", status: "✅ Received",    statusColor: "text-green-500" },
    { icon: <User className="h-4 w-4 text-purple-500" />, name: "Priya Nair",    sub: "Visitor · Room 102",  time: "12:04 PM", status: "🔴 Checked Out", statusColor: "text-red-500"   },
  ];
  return (
    <div className="space-y-3">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Gate Log — Today</p>
      {entries.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -32, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.18, type: "spring", stiffness: 90, damping: 14 }}
          className="flex items-start gap-3 bg-muted/30 rounded-xl p-3"
        >
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 + i * 0.18, type: "spring", stiffness: 220 }}
            className="mt-0.5 flex-shrink-0"
          >
            {e.icon}
          </motion.span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground text-sm">{e.name}</p>
            <p className="text-xs text-muted-foreground">{e.sub}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-xs text-muted-foreground">{e.time}</p>
            <p className={`text-xs font-semibold ${e.statusColor}`}>{e.status}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Mockup: Expense Ledger (Pillar 4) — items appear one by one, total expands ──
function MockupExpenseLedger() {
  const items = [
    { label: "Electricity Bill", amount: "₹4,200",  status: "Paid ✅",    statusColor: "text-green-500" },
    { label: "Plumber Repair",   amount: "₹850",    status: "Pending ⏳", statusColor: "text-amber-500" },
    { label: "Staff Salary",     amount: "₹12,000", status: "Paid ✅",    statusColor: "text-green-500" },
  ];
  return (
    <div className="space-y-3">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Expense Ledger — June</p>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 100 }}
          className="flex items-center justify-between bg-muted/30 rounded-xl px-4 py-3 text-sm"
        >
          <div>
            <p className="font-medium text-foreground">{item.label}</p>
            <p className={`text-xs font-semibold ${item.statusColor}`}>{item.status}</p>
          </div>
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.15, type: "spring", stiffness: 220 }}
            className="font-bold text-foreground"
          >
            {item.amount}
          </motion.span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.85, duration: 0.4, ease: "easeOut" }}
        style={{ originX: 0 }}
        className="flex items-center justify-between border-t border-border pt-3 px-1"
      >
        <span className="text-sm font-bold text-foreground">Total</span>
        <span className="text-sm font-black text-primary">₹17,050</span>
      </motion.div>
    </div>
  );
}

// ── Mockup: Notification Stack (Pillar 5) — cards fly in from right with bounce ──
function MockupNotifications() {
  const notes = [
    { icon: <Bell className="h-4 w-4 text-blue-500" />,     title: "Rent Due Reminder",    body: "Your rent of ₹8,500 is due in 2 days.", time: "2 min ago",  bg: "bg-blue-500/5 border-blue-500/20" },
    { icon: <Megaphone className="h-4 w-4 text-indigo-500" />, title: "Announcement · Floor 2", body: "Water supply off tomorrow 10AM–2PM.",  time: "15 min ago", bg: "bg-indigo-500/5 border-indigo-500/20" },
  ];
  return (
    <div className="space-y-3">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Notifications</p>
      {notes.map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 48, rotate: 4 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 + i * 0.2, type: "spring", stiffness: 90, damping: 13 }}
          className={`flex gap-3 items-start rounded-2xl border p-4 ${n.bg}`}
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 + i * 0.2, type: "spring", stiffness: 300 }}
            className="mt-0.5 flex-shrink-0"
          >
            {n.icon}
          </motion.span>
          <div className="flex-1">
            <p className="font-semibold text-foreground text-sm">{n.title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{n.body}</p>
            <p className="text-[10px] text-muted-foreground/60 mt-1">{n.time}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function FeatureDeepDive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animated progress bar that fills as you scroll through the section
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <section ref={containerRef} className="relative bg-background">
      {/* Vertical timeline line — desktop only */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 overflow-hidden">
        {/* Static faint track */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-border to-transparent" />
        {/* Animated fill */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary to-primary/60"
        />
      </div>

      {/* Section heading */}
      <div className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2 mb-6">
            ✦ Deep Dive
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            A closer look
          </h2>
          <p className="text-muted-foreground text-lg">
            Every feature built around how PGs actually operate.
          </p>
        </motion.div>
      </div>

      {/* Pillar 1 — Identity & KYC */}
      <TimelineFeature
        index={0}
        categoryIcon={<Shield className="h-4 w-4" />}
        categoryLabel="Identity & KYC"
        categoryColor="text-blue-500"
        accentColor="bg-blue-500"
        h2="Portable Tenant Profiles"
        body="A one-time onboarding experience that travels with the tenant. No more re-submitting documents at every new PG."
        bullets={[
          { text: "Secure KYC Vault — Aadhaar, PAN, Passport stored encrypted" },
          { text: "Owners import verified tenant data in seconds" },
          { text: "Eliminates manual paperwork and verification delays" },
        ]}
        calloutColor="bg-blue-500/8 border-blue-500/20 text-blue-600 dark:text-blue-400"
        calloutText="Property owners can verify a new tenant in under 60 seconds."
        mockup={<MockupTenantProfile />}
      />

      {/* Pillar 2 — Floor Management */}
      <TimelineFeature
        index={1}
        categoryIcon={<LayoutGrid className="h-4 w-4" />}
        categoryLabel="Precision Inventory"
        categoryColor="text-purple-500"
        accentColor="bg-purple-500"
        h2="Visual Floor Mapping"
        body="Total control over your building. See every room, every bed, every tenant — all on one screen."
        bullets={[
          { text: "Manage multiple PGs with floor-wise room mapping" },
          { text: "Real-time occupancy tracking per room" },
          { text: "Filter by sharing type: Single, Double, Triple" },
        ]}
        calloutColor="bg-purple-500/8 border-purple-500/20 text-purple-600 dark:text-purple-400"
        calloutText="Instantly view bed availability across all your properties."
        mockup={<MockupFloorMap />}
      />

      {/* Pillar 3 — Gate Security */}
      <TimelineFeature
        index={2}
        categoryIcon={<DoorOpen className="h-4 w-4" />}
        categoryLabel="Smart Security"
        categoryColor="text-amber-500"
        accentColor="bg-amber-500"
        h2="QR-Powered Digital Registry"
        body="Replace the physical register book forever. Every visitor and delivery is logged digitally with a timestamp."
        bullets={[
          { text: "Self-service check-in via Gate QR codes" },
          { text: "Tamper-proof security audit trail" },
          { text: "Separate logs for Visitors and Deliveries" },
        ]}
        calloutColor="bg-amber-500/8 border-amber-500/20 text-amber-600 dark:text-amber-400"
        calloutText="Reduces staff burden while creating a complete security record."
        mockup={<MockupGateLog />}
      />

      {/* Pillar 4 — Finance ERP */}
      <TimelineFeature
        index={3}
        categoryIcon={<Receipt className="h-4 w-4" />}
        categoryLabel="Operational ERP"
        categoryColor="text-green-500"
        accentColor="bg-green-500"
        h2="Integrated Expense & Complaint Desk"
        body="One ledger for everything. Utility bills, salaries, repairs — all tracked. Tenants raise tickets with photo proof."
        bullets={[
          { text: "Centralized ledger for all PG expenses" },
          { text: "Tenants raise maintenance tickets with media proof" },
          { text: "Link repair costs directly to complaints" },
        ]}
        calloutColor="bg-green-500/8 border-green-500/20 text-green-600 dark:text-green-400"
        calloutText="100% financial transparency — every rupee accounted for."
        mockup={<MockupExpenseLedger />}
      />

      {/* Pillar 5 — Notifications */}
      <TimelineFeature
        index={4}
        categoryIcon={<Bell className="h-4 w-4" />}
        categoryLabel="Real-Time Comms"
        categoryColor="text-indigo-500"
        accentColor="bg-indigo-500"
        h2="Hybrid FCM + Socket.io Alerts"
        body="Never miss a critical update. Background push notifications via FCM, live socket events for active users."
        bullets={[
          { text: "Instant PWA push notifications for background alerts" },
          { text: "Live socket events for active app users" },
          { text: "Blast updates to specific floors or entire PG" },
        ]}
        calloutColor="bg-indigo-500/8 border-indigo-500/20 text-indigo-600 dark:text-indigo-400"
        calloutText="Never miss a rent payment or urgent announcement again."
        mockup={<MockupNotifications />}
      />
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION 4 — Trust Banner
// ─────────────────────────────────────────────
function TrustBanner() {
  const stats = [
    { label: "KYC Verified" },
    { label: "Digital Logs" },
    { label: "Encrypted Vault" },
    { label: "Audit Trail" },
  ];

  return (
    <section className="px-4 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="relative py-20 px-8 md:px-16 rounded-[3rem] bg-primary text-primary-foreground overflow-hidden">
          {/* Decorative skew shape */}
          <div className="absolute top-0 right-0 h-full w-1/3 bg-white/5 skew-x-12 pointer-events-none" />

          {/* Large background icon */}
          <ShieldCheck
            className="absolute left-6 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
            style={{ width: 120, height: 120 }}
          />

          <div className="relative z-10 flex flex-col items-center text-center gap-8">
            {/* Pill */}
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2">
              Trusted Infrastructure
            </span>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
              Built on a secure, verified foundation.
            </h2>

            <p className="text-primary-foreground/80 text-lg max-w-2xl leading-relaxed">
              Every tenant verified. Every transaction logged. Every entry recorded.
              MillionHuts gives you the audit trail that traditional PG management never could.
            </p>

            {/* Stat boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl mt-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-2 bg-white/10 border border-white/15 rounded-2xl px-4 py-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground/80" />
                  <span className="text-sm font-semibold text-primary-foreground text-center">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION 5 — Final CTA
// ─────────────────────────────────────────────
function FeatureCTA() {
  const stats = [
    "0% Brokerage",
    "100% Verified",
    "24/7 Support",
    "Secure KYC Vault",
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-background">
      {/* Background blobs */}
      <div className="absolute top-0 left-[-10%] w-[40%] h-[80%] bg-primary/8 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-[-10%] w-[35%] h-[70%] bg-blue-400/8 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[3rem] bg-card border border-border/60 p-12 md:p-16 text-center overflow-hidden shadow-xl"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,var(--color-primary)/0.06,transparent)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest rounded-full px-4 py-2">
              Ready to upgrade?
            </span>

            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-[1.05]">
              Stop managing.
              <br />
              <span className="text-primary italic">Start growing.</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Join 500+ owners and thousands of tenants who have switched to a
              smarter, digital-first coliving experience.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-bold rounded-2xl shadow-lg shadow-primary/20"
              >
                <Link href="/owners">
                  List Your Property
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base font-bold rounded-2xl border-border hover:border-primary/40"
              >
                <Link href="/pg">
                  Find a PG
                  <UserPlus className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-4 pt-6 border-t border-border w-full">
              {stats.map((s) => (
                <div key={s} className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PAGE EXPORT
// ─────────────────────────────────────────────
export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>Features | PG Management Software India | MillionHuts Platform</title>
        <meta
          name="description"
          content="Discover powerful PG management software features by MillionHuts. Manage tenants, rent, expenses, rooms, mess, assets, complaints, staff and reports in one smart platform for PG owners in India."
        />
        <meta
          name="keywords"
          content="PG management software features, Hostel management software India, Property management software PG, Tenant management system, Rent management software India, Mess management software, Asset management PG, Complaint management hostel, Coliving management software, MillionHuts features"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MillionHuts" />
        <link rel="canonical" href="https://millionhuts.com/features" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MillionHuts" />
        <meta property="og:url" content="https://millionhuts.com/features" />
        <meta property="og:title" content="MillionHuts Features | Complete PG Management Platform" />
        <meta
          property="og:description"
          content="From tenant management to mess automation, explore the tools built for modern PG and coliving operators."
        />
        <meta property="og:image" content="https://millionhuts.com/og-features.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MillionHuts Features | Smart PG Management" />
        <meta name="twitter:description" content="All-in-one PG management platform for owners across India." />
        <meta name="twitter:image" content="https://millionhuts.com/og-features.jpg" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data — Software Application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "MillionHuts PG Management Software",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "All-in-one PG and hostel management software for property owners to manage tenants, rent, rooms, expenses, assets, and operations.",
              featureList: [
                "Property Management",
                "Tenant Management",
                "Room and Floor Management",
                "Rent Collection & Payment Tracking",
                "Expense Management",
                "Staff Management",
                "Mess Management",
                "Asset Tracking",
                "Complaint Management",
                "Alerts & Notifications",
                "Announcements",
                "Reports & PDF Generation",
                "Digital KYC Verification",
              ],
              url: "https://millionhuts.com/features",
              offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                price: "0",
                description: "Flexible pricing plans available for PG owners and operators.",
              },
            }),
          }}
        />

        {/* Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MillionHuts",
              url: "https://millionhuts.com",
              logo: "https://millionhuts.com/logo.png",
              sameAs: [
                "https://facebook.com/",
                "https://instagram.com/",
                "https://twitter.com/",
              ],
            }),
          }}
        />
      </Head>

      <div className="flex flex-col min-h-screen bg-background">
        <FeaturesHero />
        <FeatureBentoGrid />
        <FeatureDeepDive />
        <TrustBanner />
        <FeatureCTA />
      </div>
    </>
  );
}
