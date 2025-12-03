import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bascorp",
  description: "Azienda di costruzione",
  icons: {
    icon: [
      { url: "/logo_light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/logo_dark.svg", media: "(prefers-color-scheme: dark)" },
    ],
  },
  openGraph: {
    title: "Bascorp",
    description: "Azienda di costruzione",
    siteName: "Bascorp", // <--- il nome del tuo sito
    url: "https://bascorp.it", // <--- l'URL del tuo sito
    locale: "it_IT", // <--- la lingua del tuo sito
    type: "website", // <--- il tipo di sito, puoi scegliere tra "website" o "article
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <meta name="theme-color" content="#0f172a" />
      <body className={`${inter.variable} antialiased min-h-dvh flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="flex flex-col flex-1 select-none">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
