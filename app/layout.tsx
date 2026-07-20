import './globalStyles.css';
import { Cinzel, Inter } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata = {
  title: 'Candomble por uma yawo',
  description: 'Minimal Next.js app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-BR">
      <body className={`${inter.variable} ${cinzel.variable}`}>
        {children}
      </body>
    </html>
  );
}
