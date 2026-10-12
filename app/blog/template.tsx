'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

interface BlogTemplateProps {
  children: ReactNode;
}

export default function BlogTemplate({ children }: BlogTemplateProps) {
  const [templateClicks, setTemplateClicks] = useState(0);

  useEffect(() => {
    console.log('BlogTemplate смонтирован заново');
  }, []);

  return (
    <div>
      <div className="state-panel template-panel">
        <div>
          <strong>Blog template.tsx</strong>
          <p>При переходе создаётся заново. Проверьте счётчики и консоль браузера.</p>
        </div>
        <button type="button" onClick={() => setTemplateClicks((value) => value + 1)}>
          Template: {templateClicks}
        </button>
      </div>
      {children}
    </div>
  );
}
