import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="eyebrow">404</div>
      <h1>Страница не найдена</h1>
      <p>Проверьте адрес или вернитесь на главную.</p>
      <Link className="back-link" href="/">← На главную</Link>
    </div>
  );
}
