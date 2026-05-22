import './globals.css';
import type { ReactNode } from 'react';
import SiteShell from './components/SiteShell';

export const metadata = {
  title: 'Prime Point Surveying',
  description: 'Independent building inspections and property advice in Melbourne',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}