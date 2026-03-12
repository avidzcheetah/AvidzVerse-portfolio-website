import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { CustomCursor } from '@/components/custom-cursor';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Avidu Witharana - Cybersecurity Visionary & Developer',
  description: 'Portfolio of Avidu Witharana - Combining AI and CySec for a secure cyberspace. Explore my missions, skills, and background.',
  keywords: ['Avidu Witharana', 'Cybersecurity', 'AI', 'Full Stack Developer', 'Portfolio', 'Sci-Fi'],
  authors: [{ name: 'Avidu Witharana', url: 'https://github.com/avidzcheetah' }],
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased text-slate-300 min-h-screen relative selection:bg-energy-blue/30 selection:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <CustomCursor />
          {/* Subtle Ambient Vignette Overlay */}
          <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] mix-blend-multiply" />
          
          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
          <Toaster theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}