import type {Metadata} from 'next';
import './globals.css';
import {inter} from './fonts';

export const metadata: Metadata = {
  title: {
    default: 'Phishy - From awareness to action - Secure Every Click',
    template: '%s | Phishy',
  },
  description:
    'Ekiplerde siber güvenlik farkındalığını artıran, gelişmiş phishing saldırılarına karşı savunmayı güçlendiren eğitim ve simülasyon araçları',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark ${inter.variable} antialiased bg-background text-white`}>
      <body className={`dark ${inter.variable} antialiased bg-background text-white`}>{children}</body>
    </html>
  );
}
