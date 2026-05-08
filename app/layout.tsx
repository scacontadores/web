import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scacontadores.mx"),
  title: "SCA Contadores Web",
  description: "Servicios contables profesionales de confianza.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "SCA Contadores Web",
    description: "Servicios contables profesionales de confianza.",
    url: "https://www.scacontadores.mx",
    siteName: "SCA Contadores",
    images: [
      {
        url: "https://www.scacontadores.mx/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "SCA Contadores",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCA Contadores Web",
    description: "Servicios contables profesionales de confianza.",
    images: ["https://www.scacontadores.mx/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
