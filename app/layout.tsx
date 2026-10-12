import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import NavBar from './components/NavBar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Практическая работа — маршрутизация Next.js',
  description: 'Статические и динамические маршруты, Link, layouts и templates',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>
        <NavBar />
        <main className="container main-content">{children}</main>
        <footer className="footer">
          <div className="container">Практическая работа по Next.js · App Router + TypeScript</div>
        </footer>
      </body>
    </html>
  );
}
