'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  const [layoutClicks, setLayoutClicks] = useState(0);

  return (
    <section className="section-shell">
      <div className="state-panel">
        <div>
          <strong>Blog layout.tsx</strong>
          <p>Состояние сохраняется при переходах внутри блога.</p>
        </div>
        <button type="button" onClick={() => setLayoutClicks((value) => value + 1)}>
          Layout: {layoutClicks}
        </button>
      </div>
      {children}
    </section>
  );
}
