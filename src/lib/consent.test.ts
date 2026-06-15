import { describe, expect, it } from "vitest";
import { CONSENT_VERSION, createConsent, parseConsent } from "./consent";

describe("cookie consent", () => {
  it("creates essential-only consent and honors GPC", () => {
    const consent = createConsent(true, true, true);
    expect(consent.essential).toBe(true);
    expect(consent.analytics).toBe(true);
    expect(consent.advertising).toBe(false);
  });

  it("rejects malformed or obsolete consent", () => {
    expect(parseConsent("not-json")).toBeNull();
    expect(parseConsent(JSON.stringify({ essential: true, analytics: false, advertising: false, consentVersion: "0.9", timestamp: "now" }))).toBeNull();
  });

  it("parses current consent", () => {
    const value = JSON.stringify({ essential: true, analytics: false, advertising: false, consentVersion: CONSENT_VERSION, timestamp: new Date().toISOString(), gpc: false });
    expect(parseConsent(value)?.analytics).toBe(false);
  });
});
