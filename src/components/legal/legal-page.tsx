import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function LegalPage({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return <main><SiteHeader /><section className="aurora-bg border-b border-indigo-100 py-16 sm:py-24"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">Legal</p><h1 className="gradient-text mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p><div className="mt-6 flex flex-wrap gap-4 text-sm font-medium"><Link className="text-violet-600 hover:underline" href="/privacy">Privacy Policy</Link><Link className="text-violet-600 hover:underline" href="/terms">Terms & Conditions</Link><Link className="text-violet-600 hover:underline" href="/cookies">Cookie Policy</Link></div></div></section><article className="mx-auto max-w-4xl px-5 py-16 lg:px-8"><div className="legal-content">{children}</div></article><SiteFooter /></main>;
}

export function LegalMeta() { return <p className="legal-meta"><strong>Effective:</strong> June 15, 2026 <span aria-hidden="true">·</span> <strong>Last updated:</strong> June 15, 2026</p>; }
