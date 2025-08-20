import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

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
        url: "https://www.scacontadores.mx/og-image-v2.png",
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
    images: ["https://www.scacontadores.mx/og-image-v2.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
