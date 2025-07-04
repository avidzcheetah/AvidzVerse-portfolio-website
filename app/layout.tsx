import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Avidu Witharana - Cybersecurity Visionary & AI Pioneer',
  description: 'Portfolio of Avidu Witharana - Combining AI and CySec for a secure cyberspace. Computer Engineering Undergraduate, IEEE Leadership, and AI Innovation.',
  keywords: ['Avidu Witharana', 'Cybersecurity', 'AI', 'Computer Engineering', 'IEEE', 'Portfolio', 'Full Stack Developer'],
  authors: [{ name: 'Avidu Witharana', url: 'https://github.com/avidzcheetah' }],
  openGraph: {
    title: 'Avidu Witharana - Cybersecurity Visionary & AI Pioneer',
    description: 'Portfolio of Avidu Witharana - Combining AI and CySec for a secure cyberspace',
    url: 'https://avidu-portfolio.vercel.app',
    siteName: 'Avidu Witharana Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avidu Witharana - Cybersecurity Visionary & AI Pioneer',
    description: 'Portfolio of Avidu Witharana - Combining AI and CySec for a secure cyberspace',
    creator: '@avidzxv',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}