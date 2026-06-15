"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CookieBanner({ onAccept, onReject, onCustomize }: { onAccept: () => void; onReject: () => void; onCustomize: () => void }) {
  return <section role="dialog" aria-label="Cookie consent" aria-describedby="cookie-description" className="gradient-border fixed inset-x-4 bottom-4 z-50 mx-auto max-w-5xl rounded-3xl bg-white/90 p-5 shadow-2xl shadow-indigo-950/20 backdrop-blur-2xl sm:p-6"><div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"><div className="max-w-2xl"><h2 className="text-lg font-bold tracking-tight">Your privacy, your choice</h2><p id="cookie-description" className="mt-2 text-sm leading-6 text-slate-600">We use essential technologies to operate Clarify. With your permission, we also use analytics to improve the product and advertising technologies to support relevant offers. Optional technologies stay off until you choose. Read our <Link className="font-semibold text-violet-600 hover:underline" href="/cookies">Cookie Policy</Link>.</p></div><div className="grid shrink-0 grid-cols-1 gap-2 sm:grid-cols-3"><Button variant="outline" onClick={onReject}>Reject all</Button><Button variant="outline" onClick={onCustomize}>Customize</Button><Button variant="blue" onClick={onAccept}>Accept all</Button></div></div></section>;
}
