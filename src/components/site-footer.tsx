import Link from "next/link";
import { CookieSettingsButton } from "@/components/consent/cookie-settings-button";

export function SiteFooter() {
  return (
    <footer className="border-t border-indigo-100 bg-gradient-to-br from-white via-indigo-50/50 to-cyan-50/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5 font-bold"><span className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 text-xs text-white shadow-md shadow-violet-500/20">C</span>Clarify</div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">Clear answers for your biggest home finance decisions. Estimates are educational and are not financial advice.</p>
        </div>
        <div><p className="text-sm font-semibold">Explore</p><div className="mt-4 grid gap-3 text-sm text-slate-500"><Link href="#calculators">Calculators</Link><Link href="#learn">Guides</Link><Link href="#how-it-works">How it works</Link></div></div>
        <div><p className="text-sm font-semibold">Company</p><div className="mt-4 grid gap-3 text-sm text-slate-500"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookies">Cookie Policy</Link><CookieSettingsButton compact /></div></div>
      </div>
    </footer>
  );
}
