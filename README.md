# Clarify

Clarify is a modern homeowner intelligence platform that turns mortgage, refinance, equity, PMI, property tax, and insurance data into clear next steps.

## Development

```bash
npm install
npm run dev
```

Run the quality checks with `npm test`, `npm run lint`, and `npm run build`.

## Cloudflare Workers

Use `npm run preview` to build and run the app in Cloudflare's local Workers runtime. After authenticating Wrangler with `npx wrangler login`, deploy with `npm run deploy`.

Production URL: `https://useclarifyhome.us`

## Optional integrations

Copy `.env.example` to `.env.local` and add provider IDs when analytics or advertising is ready. Google Analytics, Microsoft Clarity, and Google AdSense are loaded only after the corresponding cookie consent category is enabled.
