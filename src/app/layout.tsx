import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coout Engenharia consultoria, Laudos e treinamentos.",
  description: "A COOUT Engenharia se destaca como uma referência no mercado de Segurança e Saúde no Trabalho (SST). Com um time de especialistas altamente qualificados e uma sólida trajetória, estamos aqui para transformar sua abordagem de segurança, promovendo ambientes de trabalho mais seguros e eficientes.",
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
