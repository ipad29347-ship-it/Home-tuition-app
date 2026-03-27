import type { Metadata, Viewport } from 'next';
import { Poppins, Nunito } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
});

export const viewport: Viewport = {
  themeColor: '#ef4444', // Red-500
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'Happy Minds Tuition',
  description: 'Building Strong Foundations for Bright Futures. Tuition for Grades 1-5.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Happy Minds',
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/icons/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/logo.png" />
      </head>
      <body suppressHydrationWarning className="font-nunito bg-slate-50 text-slate-900 antialiased selection:bg-red-200 selection:text-red-900 flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
