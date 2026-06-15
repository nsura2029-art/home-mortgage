import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HomeAnalysis } from "@/features/calculators/components/home-analysis";

const calculators = {
  mortgage: { title: "Mortgage Calculator", description: "Estimate your complete monthly mortgage payment, including taxes, insurance, and PMI." },
  refinance: { title: "Refinance Calculator", description: "Compare your current mortgage with a new loan and estimate your break-even point." },
  "home-equity": { title: "Home Equity Calculator", description: "Estimate how much home equity you have and understand your loan-to-value ratio." },
  pmi: { title: "PMI Removal Calculator", description: "Estimate when you may be eligible to remove private mortgage insurance." },
  "property-tax": { title: "Property Tax Calculator", description: "Estimate annual property taxes and their effect on your monthly housing cost." },
  "home-insurance": { title: "Home Insurance Calculator", description: "Estimate home insurance costs and compare them with your current premium." },
} as const;

type Slug = keyof typeof calculators;
export function generateStaticParams() { return Object.keys(calculators).map((slug) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const calculator = calculators[params.slug as Slug];
  return calculator ? { title: calculator.title, description: calculator.description } : {};
}

export default function CalculatorPage({ params }: { params: { slug: string } }) {
  const calculator = calculators[params.slug as Slug];
  if (!calculator) notFound();
  const schema = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: calculator.title, applicationCategory: "FinanceApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: 0, priceCurrency: "USD" } };
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><SiteHeader /><section className="bg-surface pb-8 pt-16 sm:pt-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Link href="/#calculators" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-navy"><ArrowLeft className="size-4" /> All calculators</Link><div className="mt-10 max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">Free homeowner tool</p><h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">{calculator.title}</h1><p className="mt-5 text-lg leading-8 text-slate-600">{calculator.description} Enter your numbers below to get a result, plain-English context, and a useful next step.</p></div></div></section><div className="bg-surface pt-10"><HomeAnalysis /></div><SiteFooter /></main>;
}
