import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coout Engenharia Consultoria, Laudos e Treinamentos.",
  description: "COOUT Engenharia é referência em Laudos de Segurança do Trabalho e Mecânica, consultoria, medições e treinamentos. Com especialistas qualificados, criamos ambientes seguros e eficientes.",
  icons: {
    icon: ['/favicon.ico?=v4'],
    apple:['/apple-touch-icon.png?=v4'],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    images: [
      {
        url: 'https://www.coout.com.br/logo.png',
        width: 400,
        height: 400,
        alt: 'Coout Engenharia Consultoria, Laudos e Treinamentos.',
        hostname: 'https://www.coout.com.br/',
        href: 'https://www.coout.com.br/',
        host: 'https://www.coout.com.br/',
        pathname: '/',
      },
    ],
    title: 'Coout Engenharia Consultoria, Laudos e Treinamentos.',
    url: 'https://www.coout.com.br/',
    siteName: 'Coout Engenharia Consultoria, Laudos e Treinamentos.',
    description: 'COOUT Engenharia é referência em Laudos de Segurança do Trabalho e Mecânica, consultoria, medições e treinamentos. Com especialistas qualificados, criamos ambientes seguros e eficientes.',
    type: 'website',

  },
  twitter: {
    card: 'summary',
    title: 'Coout Engenharia Consultoria, Laudos e Treinamentos.',
    description: 'COOUT Engenharia é referência em Laudos de Segurança do Trabalho e Mecânica, consultoria, medições e treinamentos. Com especialistas qualificados, criamos ambientes seguros e eficientes.',
    site: '@cooutengenharia',
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={robotoCondensed.className}>{children}</body>
    </html>
  );
}
