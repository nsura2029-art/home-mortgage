import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clarifyhome.com"),
  title: { default: "Clarify | Make smarter home finance decisions", template: "%s | Clarify" },
  description: "Free mortgage, refinance, equity, PMI, property tax, and home insurance calculators with clear next steps.",
  openGraph: { title: "Clarify homeowner intelligence", description: "Understand your mortgage. Find your next best move.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
