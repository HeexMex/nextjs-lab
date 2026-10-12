import type { ReactNode } from 'react';

interface CoursesLayoutProps {
  children: ReactNode;
}

export default function CoursesLayout({ children }: CoursesLayoutProps) {
  return (
    <section className="section-shell courses-shell">
      <div className="section-heading">
        <span className="tag">Вложенный layout</span>
        <span>Этот общий блок виден на всех страницах раздела «Курсы».</span>
      </div>
      {children}
    </section>
  );
}
