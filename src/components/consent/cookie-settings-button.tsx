"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useConsent } from "./consent-provider";

export function CookieSettingsButton({ className, compact = false }: { className?: string; compact?: boolean }) {
  const { openPreferences } = useConsent();
  return <Button type="button" variant={compact ? "ghost" : "outline"} className={cn(compact && "h-auto justify-start p-0 text-sm font-normal text-slate-500 hover:bg-transparent hover:text-navy", className)} onClick={openPreferences}>Cookie settings</Button>;
}
