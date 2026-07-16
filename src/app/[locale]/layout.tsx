import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {Header} from '@/components/global/Header';
import {Footer} from '@/components/global/Footer';
import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Three Digit Software | Digital Products Built to Move Businesses Forward",
  description: "Three Digit Software designs and develops high-performance websites, business platforms, mobile applications, AI-powered solutions, and digital growth systems for ambitious companies.",
};

import { GlobalBackground } from '@/components/global/GlobalBackground';
import { CustomCursor } from '@/components/global/CustomCursor';
import { FloatingWhatsApp } from '@/components/global/FloatingWhatsApp';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const fontClass = locale === 'ar' ? cairo.className : inter.className;

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body suppressHydrationWarning className={`${fontClass} antialiased bg-transparent text-white min-h-screen flex flex-col relative`}>
        <NextIntlClientProvider messages={messages}>
          <GlobalBackground />
          <CustomCursor />
          <Header />
          <main className="flex-1 relative z-10">
            {children}
          </main>
          <FloatingWhatsApp />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
