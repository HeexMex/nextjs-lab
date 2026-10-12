'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Главная' },
  { href: '/about', label: 'О нас' },
  { href: '/blog', label: 'Блог' },
  { href: '/courses', label: 'Курсы' },
];

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string): boolean =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">NextLab<span>.</span></Link>
        <nav className="nav" aria-label="Основная навигация">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${isActive(href) ? 'active' : ''}`}
              aria-current={isActive(href) ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <button className="nav-button" type="button" onClick={() => router.push('/about')}>
          Перейти к «О нас»
        </button>
      </div>
    </header>
  );
}
