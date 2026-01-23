"use client";

import { LanguageProvider } from "@/lib/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
