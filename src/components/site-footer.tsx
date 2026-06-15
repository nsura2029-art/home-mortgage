import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5 font-bold"><span className="grid size-8 place-items-center rounded-xl bg-navy text-xs text-white">C</span>Clarify</div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">Clear answers for your biggest home finance decisions. Estimates are educational and are not financial advice.</p>
        </div>
        <div><p className="text-sm font-semibold">Explore</p><div className="mt-4 grid gap-3 text-sm text-slate-500"><Link href="#calculators">Calculators</Link><Link href="#learn">Guides</Link><Link href="#how-it-works">How it works</Link></div></div>
        <div><p className="text-sm font-semibold">Company</p><div className="mt-4 grid gap-3 text-sm text-slate-500"><Link href="#">About</Link><Link href="#">Privacy</Link><Link href="#">Terms</Link></div></div>
      </div>
    </footer>
  );
}
