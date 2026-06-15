import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="relative z-30 border-b border-indigo-100/70 bg-white/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 text-sm text-white shadow-lg shadow-violet-500/25">C</span>
          <span className="text-lg">Clarify</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          <Link className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:bg-indigo-50/80 hover:text-indigo-950" href="#calculators">Calculators</Link>
          <Link className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:bg-indigo-50/80 hover:text-indigo-950" href="#how-it-works">How it works</Link>
          <Link className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:bg-indigo-50/80 hover:text-indigo-950" href="#learn">Learn</Link>
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
