import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="relative z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight">
          <span className="grid size-9 place-items-center rounded-xl bg-navy text-sm text-white">C</span>
          <span className="text-lg">Clarify</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          <Link className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-navy" href="#calculators">Calculators</Link>
          <Link className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-navy" href="#how-it-works">How it works</Link>
          <Link className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-navy" href="#learn">Learn</Link>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost">Sign in</Button>
          <Button variant="primary">Analyze my mortgage <ArrowUpRight className="size-4" /></Button>
        </div>
        <button className="grid size-10 place-items-center rounded-full border border-slate-200 md:hidden" aria-label="Open menu"><Menu className="size-5" /></button>
      </div>
    </header>
  );
}
