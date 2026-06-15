export const CONSENT_STORAGE_KEY = "clarify_cookie_consent";
export const CONSENT_VERSION = "1.0";

export type ConsentPreferences = {
  essential: true;
  analytics: boolean;
  advertising: boolean;
  consentVersion: string;
  timestamp: string;
  gpc: boolean;
};

export function createConsent(analytics: boolean, advertising: boolean, gpc = false): ConsentPreferences {
  return { essential: true, analytics, advertising: gpc ? false : advertising, consentVersion: CONSENT_VERSION, timestamp: new Date().toISOString(), gpc };
}

export function parseConsent(value: string | null): ConsentPreferences | null {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value) as Partial<ConsentPreferences>;
    if (parsed.consentVersion !== CONSENT_VERSION || parsed.essential !== true || typeof parsed.analytics !== "boolean" || typeof parsed.advertising !== "boolean" || typeof parsed.timestamp !== "string") return null;
    return { ...parsed, gpc: parsed.gpc === true } as ConsentPreferences;
  } catch { return null; }
}

export function clearAnalyticsCookies() {
  if (typeof document === "undefined") return;
  const names = document.cookie.split(";").map((item) => item.split("=")[0]?.trim()).filter((name) => name?.startsWith("_ga") || name === "_gid" || name === "_gat" || name === "_clck" || name === "_clsk");
  for (const name of names) document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
}
