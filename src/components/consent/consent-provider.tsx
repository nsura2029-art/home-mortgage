"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { clearAnalyticsCookies, CONSENT_STORAGE_KEY, createConsent, parseConsent, type ConsentPreferences } from "@/lib/consent";
import { CookieBanner } from "./cookie-banner";
import { CookiePreferences } from "./cookie-preferences";
import { ConsentScripts } from "./consent-scripts";

type ConsentContextValue = {
  consent: ConsentPreferences | null;
  gpc: boolean;
  openPreferences: () => void;
  save: (analytics: boolean, advertising: boolean) => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentPreferences | null>(null);
  const [ready, setReady] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [gpc, setGpc] = useState(false);

  useEffect(() => {
    const signal = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
    setGpc(signal);
    const stored = parseConsent(localStorage.getItem(CONSENT_STORAGE_KEY));
    if (stored && signal && stored.advertising) {
      const corrected = createConsent(stored.analytics, false, true);
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(corrected));
      setConsent(corrected);
    } else setConsent(stored);
    setReady(true);
  }, []);

  const save = useCallback((analytics: boolean, advertising: boolean) => {
    const next = createConsent(analytics, advertising, gpc);
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
    if (!analytics) clearAnalyticsCookies();
    setConsent(next);
    setPreferencesOpen(false);
  }, [gpc]);

  const value = useMemo(() => ({ consent, gpc, openPreferences: () => setPreferencesOpen(true), save }), [consent, gpc, save]);
  return <ConsentContext.Provider value={value}>{children}{ready && !consent && <CookieBanner onCustomize={() => setPreferencesOpen(true)} onAccept={() => save(true, true)} onReject={() => save(false, false)} />}{ready && <CookiePreferences open={preferencesOpen} onClose={() => setPreferencesOpen(false)} />}{ready && <ConsentScripts consent={consent} />}</ConsentContext.Provider>;
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("useConsent must be used within ConsentProvider");
  return context;
}
