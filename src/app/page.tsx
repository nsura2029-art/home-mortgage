import { ArrowRight, Calculator, ChartNoAxesCombined, CircleDollarSign, Clock3, Home, Percent, ReceiptText, ShieldCheck, Sparkles, WalletCards } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { HomeAnalysis } from "@/features/calculators/components/home-analysis";

const calculators = [
  { slug: "mortgage", icon: Home, title: "Mortgage payment", copy: "See principal, interest, taxes, insurance, and your true monthly cost.", color: "bg-blue-50 text-blue-700" },
  { slug: "refinance", icon: ChartNoAxesCombined, title: "Refinance savings", copy: "Compare your current loan and find your exact break-even point.", color: "bg-emerald-50 text-emerald-700" },
  { slug: "home-equity", icon: WalletCards, title: "Home equity", copy: "Estimate accessible equity and understand your borrowing options.", color: "bg-violet-50 text-violet-700" },
  { slug: "pmi", icon: Percent, title: "PMI removal", copy: "Estimate when you can stop paying private mortgage insurance.", color: "bg-amber-50 text-amber-700" },
  { slug: "property-tax", icon: ReceiptText, title: "Property tax", copy: "Estimate annual taxes and how they affect affordability.", color: "bg-rose-50 text-rose-700" },
  { slug: "home-insurance", icon: ShieldCheck, title: "Home insurance", copy: "Benchmark your premium and uncover potential overpayment.", color: "bg-cyan-50 text-cyan-700" },
];

export default function HomePage() {
  const schema = { "@context": "https://schema.org", "@type": "WebSite", name: "Clarify", url: "https://clarifyhome.com", description: "Homeowner financial calculators and intelligence." };
  return (
    <main className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />
      <section className="relative pt-20 sm:pt-28">
        <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[650px]" />
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 size-[480px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-2 text-xs font-semibold text-blue-700"><Sparkles className="size-3.5" /> Home finance, finally made clear</div>
          <h1 className="text-balance mx-auto mt-7 max-w-4xl text-5xl font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Your home is worth more than a monthly payment.</h1>
          <p className="text-balance mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">Clarify turns your mortgage into clear, personalized opportunities to save, build equity, and make your next move with confidence.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild variant="blue" className="px-7 py-3.5"><Link href="#analysis">Analyze my mortgage <ArrowRight className="size-4" /></Link></Button><Button asChild variant="outline" className="px-7 py-3.5"><Link href="#calculators"><Calculator className="size-4" /> Explore calculators</Link></Button></div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500"><span className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-emerald-600" /> Free and private</span><span className="flex items-center gap-1.5"><Clock3 className="size-4 text-emerald-600" /> Takes under 2 minutes</span><span className="flex items-center gap-1.5"><CircleDollarSign className="size-4 text-emerald-600" /> No credit check</span></div>
        </div>
        <div className="mt-16 sm:mt-20"><HomeAnalysis /></div>
      </section>

      <section id="calculators" className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">Calculator library</p><h2 className="text-balance mt-4 text-4xl font-bold tracking-tight sm:text-5xl">One home. Six clearer decisions.</h2><p className="mt-5 text-lg leading-8 text-slate-400">Explore focused tools built to explain the result, not just calculate it.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {calculators.map(({ slug, icon: Icon, title, copy, color }) => <Link href={`/calculators/${slug}`} key={slug} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"><div className={`grid size-11 place-items-center rounded-2xl ${color}`}><Icon className="size-5" /></div><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">Open calculator <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span></Link>)}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid items-start gap-16 lg:grid-cols-2"><div className="lg:sticky lg:top-24"><p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">How Clarify works</p><h2 className="text-balance mt-4 text-4xl font-bold tracking-tight sm:text-5xl">From numbers to a confident next move.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Most calculators stop at an answer. Clarify connects the numbers across your entire home finance picture and shows what deserves your attention.</p></div><div className="grid gap-4">{[["01", "Tell us about your home", "Add a few estimates about your home's value and current mortgage. No account required."], ["02", "See the whole picture", "We calculate your payment, equity, loan-to-value, PMI timeline, and refinance potential together."], ["03", "Take the right next step", "Get a prioritized recommendation with the context you need to act or confidently wait."]].map(([number, title, copy]) => <div key={number} className="rounded-3xl border border-slate-200 bg-surface p-7 sm:p-8"><span className="text-sm font-bold text-blue">{number}</span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{copy}</p></div>)}</div></div></div>
      </section>

      <section id="learn" className="border-y border-slate-200 bg-surface py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">Learn with Clarify</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Know what the numbers mean.</h2></div><Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-blue">Explore all guides <ArrowRight className="size-4" /></Link></div><div className="mt-10 grid gap-5 md:grid-cols-3">{[["Refinancing", "When is refinancing actually worth it?", "A practical guide to rates, closing costs, and your break-even point."], ["Home equity", "How much equity can you safely use?", "Understand accessible equity without putting your financial foundation at risk."], ["PMI", "Four ways to remove PMI sooner", "Know the milestones, appraisal options, and lender rules that can lower your payment."]].map(([tag, title, copy]) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7"><span className="text-xs font-bold uppercase tracking-wider text-blue">{tag}</span><h3 className="mt-5 text-xl font-bold leading-7">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{copy}</p><Link className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" href="#">Read guide <ArrowRight className="size-4" /></Link></article>)}</div></div></section>

      <section className="px-5 py-24"><div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-blue px-6 py-16 text-center text-white shadow-2xl shadow-blue-600/20 sm:px-12"><h2 className="text-balance mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Your mortgage should work as hard as you do.</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-blue-100">Get a clear view of your opportunities in less than two minutes.</p><Button asChild className="mt-8 bg-white text-navy hover:bg-blue-50"><Link href="#analysis">Analyze my mortgage <ArrowRight className="size-4" /></Link></Button></div></section>
      <SiteFooter />
    </main>
  );
}
