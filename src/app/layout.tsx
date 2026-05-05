import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const poppins = Poppins({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--var-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Fake Api | Documentação Oficial",
    template: "%s | Fake Api",
  },
  description:
    "A API mais rápida e segura para desenvolvedores modernos. Documentação completa e SDKs.",
  keywords: ["API", "Desenvolvimento", "SaaS", "Documentação", "Next.js"],
  authors: [{ name: "Leonardo Camelo" }],
  openGraph: {
    title: "Fake Api - Documentação",
    description: "Integre nossa solução em minutos.",
    url: "https://sua-api.com",
    siteName: "Fake Api",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MinhaAPI - Documentação",
    description: "Integre nossa solução em minutos.",
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "any" }],
    shortcut: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
