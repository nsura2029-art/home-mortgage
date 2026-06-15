"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConsent } from "./consent-provider";

export function CookiePreferences({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { consent, gpc, save } = useConsent();
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  useEffect(() => { if (open) { setAnalytics(consent?.analytics ?? false); setAdvertising(gpc ? false : consent?.advertising ?? false); } }, [open, consent, gpc]);
  useEffect(() => { if (!open) return; const close = (event: KeyboardEvent) => event.key === "Escape" && onClose(); document.addEventListener("keydown", close); document.body.style.overflow = "hidden"; return () => { document.removeEventListener("keydown", close); document.body.style.overflow = ""; }; }, [open, onClose]);
  if (!open) return null;
  return <div className="fixed inset-0 z-[60] grid place-items-end bg-indigo-950/55 p-0 backdrop-blur-md sm:place-items-center sm:p-5" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><section role="dialog" aria-modal="true" aria-labelledby="preferences-title" className="gradient-border max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-white/95 p-6 shadow-2xl shadow-indigo-950/25 backdrop-blur-2xl sm:rounded-3xl sm:p-8"><div className="flex items-start justify-between gap-4"><div><h2 id="preferences-title" className="gradient-text text-2xl font-bold tracking-tight">Cookie preferences</h2><p className="mt-2 text-sm leading-6 text-slate-600">Choose which optional technologies Clarify may use. You can change this anytime.</p></div><button autoFocus onClick={onClose} className="grid size-10 shrink-0 place-items-center rounded-full bg-indigo-50 hover:bg-indigo-100" aria-label="Close preferences"><X className="size-5" /></button></div><div className="mt-7 grid gap-3"><Preference title="Essential" description="Required for authentication, security, consent storage, and core functionality." checked disabled onChange={() => undefined} /><Preference title="Analytics" description="Helps us understand performance and improve features through Google Analytics or Microsoft Clarity." checked={analytics} onChange={setAnalytics} /><Preference title="Advertising" description={gpc ? "Disabled because your browser sends a Global Privacy Control signal." : "Supports ad delivery, personalization, and conversion measurement."} checked={advertising} disabled={gpc} onChange={setAdvertising} /></div>{gpc && <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-xs leading-5 text-emerald-800">Global Privacy Control detected. Advertising consent remains off for this browser.</p>}<div className="mt-7 grid gap-2 sm:grid-cols-2"><Button variant="outline" onClick={() => save(false, false)}>Reject optional</Button><Button variant="blue" onClick={() => save(analytics, advertising)}>Save preferences</Button></div></section></div>;
}

function Preference({ title, description, checked, disabled = false, onChange }: { title: string; description: string; checked: boolean; disabled?: boolean; onChange: (value: boolean) => void }) {
  return <div className="flex items-start justify-between gap-5 rounded-2xl border border-slate-200 p-4"><div><p className="font-semibold">{title}</p><p className="mt-1 text-sm leading-5 text-slate-500">{description}</p></div><button role="switch" aria-checked={checked} aria-label={`${title} cookies`} disabled={disabled} onClick={() => onChange(!checked)} className={`relative mt-1 h-7 w-12 shrink-0 rounded-full transition ${checked ? "bg-blue" : "bg-slate-300"} disabled:cursor-not-allowed disabled:opacity-70`}><span className={`absolute top-1 size-5 rounded-full bg-white shadow transition ${checked ? "left-6" : "left-1"}`} /></button></div>;
}
