"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, DollarSign, Home, Landmark, ShieldCheck, Sparkles, TrendingDown } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { calculateInsights } from "../engine";
import type { HomeownerProfile } from "../types";

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const defaults: HomeownerProfile = {
  homeValue: 525000,
  loanBalance: 386000,
  interestRate: 7.125,
  remainingYears: 27,
  monthlyPmi: 168,
  annualPropertyTax: 6800,
  annualInsurance: 2100,
};

type Field = { key: keyof HomeownerProfile; label: string; prefix?: string; suffix?: string; min: number; max: number; step: number };
const fields: Field[] = [
  { key: "homeValue", label: "Estimated home value", prefix: "$", min: 100000, max: 2000000, step: 5000 },
  { key: "loanBalance", label: "Mortgage balance", prefix: "$", min: 10000, max: 1500000, step: 5000 },
  { key: "interestRate", label: "Current interest rate", suffix: "%", min: 2, max: 12, step: 0.125 },
  { key: "remainingYears", label: "Years remaining", suffix: " yrs", min: 1, max: 30, step: 1 },
];

export function HomeAnalysis() {
  const [profile, setProfile] = useState(defaults);
  const [showResults, setShowResults] = useState(false);
  const results = useMemo(() => calculateInsights(profile, { newInterestRate: 6.125, newTermYears: 30, closingCosts: 6200 }), [profile]);
  const update = (key: keyof HomeownerProfile, value: number) => setProfile((current) => ({ ...current, [key]: value }));

  return (
    <section id="analysis" className="relative mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <div className="gradient-border overflow-hidden rounded-[36px] shadow-soft">
        <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
          <div className="border-b border-indigo-100 bg-white/90 p-6 backdrop-blur-xl sm:p-9 lg:border-b-0 lg:border-r">
            <div className="mb-8 flex items-center justify-between">
              <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">Your home snapshot</p><h2 className="mt-2 text-2xl font-bold tracking-tight">Start with what you know.</h2></div>
              <span className="hidden rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 sm:inline-flex"><ShieldCheck className="mr-1 size-3.5" /> Private by design</span>
            </div>
            <div className="grid gap-7">
              {fields.map((field) => (
                <label key={field.key} className="block">
                  <span className="mb-2.5 flex items-center justify-between text-sm font-medium text-slate-600"><span>{field.label}</span><span className="font-semibold text-navy">{field.prefix}{profile[field.key].toLocaleString(undefined, { maximumFractionDigits: 3 })}{field.suffix}</span></span>
                  <input className="w-full" type="range" min={field.min} max={field.max} step={field.step} value={profile[field.key]} onChange={(event) => update(field.key, Number(event.target.value))} />
                </label>
              ))}
            </div>
            <Button variant="blue" className="mt-9 w-full py-3.5" onClick={() => setShowResults(true)}>Reveal my opportunities <Sparkles className="size-4" /></Button>
            <p className="mt-3 text-center text-xs text-slate-400">No credit check. No contact information required.</p>
          </div>

          <div className="relative min-h-[590px] overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-6 sm:p-9">
            <div className="absolute -right-12 -top-12 size-64 rounded-full bg-violet-300/30 blur-3xl" />
            <div className="absolute -bottom-20 left-8 size-56 rounded-full bg-cyan-300/25 blur-3xl" />
            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div key="preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative flex h-full min-h-[500px] flex-col justify-between">
                  <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-500">Live estimate</p><div className="mt-5 rounded-3xl border border-white/80 bg-white/70 p-6 shadow-xl shadow-indigo-900/5 backdrop-blur-xl"><p className="text-sm text-slate-500">Estimated monthly payment</p><p className="mt-2 text-4xl font-extrabold tracking-tight">{usd.format(results.totalMonthlyPayment)}<span className="text-base font-medium text-slate-400"> / mo</span></p><div className="mt-6 h-2 overflow-hidden rounded-full bg-indigo-100"><div className="h-full w-[72%] rounded-full bg-gradient-to-r from-indigo-600 via-violet-500 to-cyan-400" /></div><div className="mt-4 flex justify-between text-xs text-slate-500"><span>Principal & interest</span><span>Taxes, insurance & PMI</span></div></div></div>
                  <div className="dark-aurora rounded-3xl p-6 text-white shadow-xl shadow-indigo-950/20"><div className="flex size-10 items-center justify-center rounded-xl bg-white/10"><Sparkles className="size-5 text-cyan-300" /></div><p className="mt-5 text-lg font-semibold">There may be more in your mortgage than a monthly payment.</p><p className="mt-2 text-sm leading-6 text-slate-300">We’ll look for savings, PMI milestones, equity, and your refinance break-even point.</p></div>
                </motion.div>
              ) : (
                <motion.div key="results" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="relative">
                  <div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">Analysis complete</p><h3 className="mt-2 text-2xl font-bold">Your clearest next moves</h3></div><span className="grid size-10 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check className="size-5" /></span></div>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <Insight icon={TrendingDown} label="Potential savings" value={`${usd.format(Math.max(0, results.monthlySavings))}/mo`} detail={results.breakEvenMonths ? `Break even in about ${results.breakEvenMonths} months` : "Current loan may be competitive"} accent />
                    <Insight icon={Home} label="Estimated equity" value={usd.format(results.equity)} detail={`${results.equityPercent.toFixed(1)}% of your home value`} />
                    <Insight icon={ShieldCheck} label="PMI status" value={results.pmiEligible ? "May be removable" : `${results.estimatedPmiRemovalMonths ?? "—"} months`} detail={results.pmiEligible ? "Your estimated LTV is below 80%" : "Until estimated 80% LTV"} />
                    <Insight icon={Landmark} label="Loan-to-value" value={`${results.loanToValue.toFixed(1)}%`} detail={results.loanToValue < 75 ? "Strong refinance position" : "Track this as equity grows"} />
                  </div>
                  <div className="mt-5 rounded-2xl border border-violet-200/70 bg-white/65 p-5 shadow-lg shadow-violet-900/5 backdrop-blur"><div className="flex gap-3"><div className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white"><DollarSign className="size-4" /></div><div><p className="font-semibold">Refinancing deserves a closer look.</p><p className="mt-1 text-sm leading-6 text-slate-600">At an illustrative 6.125% rate, you could lower principal and interest while reaching break-even in {results.breakEvenMonths ?? "more than 60"} months.</p></div></div><Button variant="blue" className="mt-4 w-full">Compare refinance options <ArrowRight className="size-4" /></Button></div>
                  <button onClick={() => setShowResults(false)} className="mt-4 w-full text-center text-sm font-medium text-slate-500 hover:text-navy">Adjust my numbers</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Insight({ icon: Icon, label, value, detail, accent = false }: { icon: typeof Home; label: string; value: string; detail: string; accent?: boolean }) {
  return <div className={`rounded-2xl border p-5 shadow-sm backdrop-blur ${accent ? "border-teal-200 bg-gradient-to-br from-emerald-50 to-cyan-50" : "border-indigo-100 bg-white/75"}`}><div className="flex items-center gap-2 text-xs font-semibold text-slate-500"><Icon className={`size-4 ${accent ? "text-teal-600" : "text-violet-600"}`} />{label}</div><p className="mt-3 text-2xl font-extrabold tracking-tight">{value}</p><p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p></div>;
}
