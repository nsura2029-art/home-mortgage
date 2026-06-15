# Clarify Legal Compliance Audit

Audit date: June 15, 2026

This engineering audit is not legal advice. Qualified counsel should approve the policies, product claims, vendor contracts, and jurisdiction-specific implementation before launch.

## Executive summary

Before this change, Clarify had no policy pages, consent record, preference controls, or optional-script controls. Privacy and Terms footer links were placeholders. The implementation now provides versioned opt-in consent globally, independent analytics and advertising controls, GPC handling, conditional vendor script loading, and substantive Privacy, Terms, and Cookie policies.

## Privacy Policy coverage

- Implemented: service identity, effective and updated dates.
- Implemented: account, email, submitted content, usage, device, browser, IP, cookies, and tracking disclosures.
- Implemented: service delivery, authentication, security, fraud prevention, analytics, improvement, marketing, support, and legal-compliance purposes.
- Implemented: Cloudflare, Clerk, Supabase, Google Analytics, Microsoft Clarity, Google AdSense, and future advertising partner disclosures.
- Implemented: global processing and international transfer safeguards.
- Implemented: purpose-based retention, account deletion, backups, legal and security exceptions.
- Implemented: GDPR access, rectification, erasure, restriction, portability, objection, withdrawal, and authority complaint rights.
- Implemented: CCPA/CPRA know, access, delete, correct, opt-out, nondiscrimination, and authorized-agent rights.
- Implemented: encryption, access control, least privilege, monitoring, and no-absolute-security caveat.
- Implemented: COPPA statement and 18+ account/financial-decision restriction.
- Implemented: privacy email and identity-verification process.

## Terms coverage

- Implemented: educational calculator service description and availability disclaimer.
- Implemented: acceptable use, prohibited conduct, automation, abuse, security, and fraud restrictions.
- Implemented: account accuracy, credentials, authorization, and verification obligations.
- Implemented: user content license, platform ownership, and trademark protections.
- Implemented: as-is, accuracy, savings, eligibility, rate, availability, and professional-advice disclaimers.
- Implemented: indirect-damages exclusion and liability cap, subject to local law.
- Implemented: third-party service and link disclaimer.
- Implemented: ads, sponsorship, provider matching, compensation, and affiliate disclosure.
- Implemented: suspension and termination rights.
- Implemented: Delaware governing-law placeholder with mandatory consumer-law savings clause.
- Implemented: posted updates, effective date, and additional notice where required.

## Cookie Policy and consent controls

- Essential category is always active and cannot be disabled.
- Analytics and advertising are independent and default off for every user, including GDPR regions.
- Banner provides Accept All, Reject All, and Customize with equal-access choices.
- Preferences are stored in `localStorage` as `clarify_cookie_consent` with essential, analytics, advertising, consent version, timestamp, and GPC state.
- Invalid or old consent versions trigger a new consent request.
- Google Analytics and Microsoft Clarity mount only when analytics consent is true and a provider ID exists.
- Google AdSense mounts only when advertising consent is true and a provider ID exists.
- GPC forces advertising off and prevents it from being enabled in the modal.
- Withdrawing analytics consent clears common first-party Google Analytics and Clarity cookie names where accessible. Third-party cookie removal remains browser/provider controlled.
- Footer and Cookie Policy provide a persistent Cookie Settings control.

## Required pre-launch decisions

1. Replace "Clarify" with the full legal entity name and add its postal address.
2. Confirm that `privacy@useclarifyhome.us` and `legal@useclarifyhome.us` are monitored mailboxes.
3. Confirm governing law and venue. Delaware is a drafting placeholder, not a verified business fact.
4. Confirm actual retention periods with Cloudflare, Clerk, Supabase, analytics, backup, and support configurations; publish a more specific schedule where legally required.
5. Execute data processing agreements and review international transfer mechanisms with each provider.
6. Configure a verified data-subject request workflow, identity verification, response tracking, and authorized-agent handling.
7. Perform a data inventory and record of processing activities before enabling accounts, saved calculator data, support intake, or marketing.
8. Add a California "Do Not Sell or Share My Personal Information" label if advertising or provider matching constitutes sale/sharing; Cookie Settings currently supplies the technical opt-out.
9. Review financial advertising, affiliate, lead-generation, fair lending, mortgage, insurance, and state licensing obligations before lender matching or monetization.
10. Re-audit cookies against production browser storage and network traffic whenever a vendor, tag manager, chat tool, A/B test, embedded media, or ad partner is added.

## Configuration

Optional provider IDs are documented in `.env.example`. Leaving an ID blank prevents that vendor from loading even when a user grants category consent.
