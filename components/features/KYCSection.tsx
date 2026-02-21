import { ShieldCheck, FileCheck } from "lucide-react";

export default function KYCSection() {
    return (
        <section className="py-24 bg-primary text-primary-foreground rounded-[4rem] mx-4 mb-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 h-full w-1/3 bg-white/5 skew-x-12 translate-x-12" />
            <div className="mx-auto max-w-7xl px-8 flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase mb-6 tracking-widest">
                        <ShieldCheck className="h-3 w-3" /> Secure Data
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Digital KYC & <br />Security First.</h2>
                    <p className="text-primary-foreground/80 text-lg mb-8">
                        Complete verification of every tenant. Store ID proofs securely and
                        generate police verification PDFs in one click.
                    </p>
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20">
                        <FileCheck className="h-6 w-6" />
                        <span className="text-sm font-semibold italic">Automated PDF Reporting System</span>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative h-64 w-64 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                        <ShieldCheck className="h-32 w-32 opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-32 w-32 bg-white rounded-3xl rotate-12 flex items-center justify-center shadow-2xl">
                                <ShieldCheck className="h-16 w-16 text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}