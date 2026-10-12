export default function AboutPage() {
  return (
    <>
      <div className="eyebrow">Статический маршрут · /about</div>
      <h1>О нас</h1>
      <p className="lead">Мы изучаем маршрутизацию в Next.js.</p>
      <div className="card">
        <h2>Что реализовано</h2>
        <p>
          Эта страница создана с помощью папки <code>app/about</code> и файла <code>page.tsx</code>.
          Для неё не нужны дополнительные настройки роутера.
        </p>
      </div>
    </>
  );
}
