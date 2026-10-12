import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <div className="eyebrow">Практическая работа · Next.js</div>
      <h1>Маршрутизация и навигация</h1>
      <p className="lead">
        Небольшой учебный сайт с обычными и динамическими страницами,
        общей навигацией, вложенными layout и template.
      </p>
      <div className="grid cards">
        <Link className="card interactive" href="/about">
          <span className="card-num">01 / Статическая страница</span>
          <h2>О нас →</h2>
          <p>Обычная страница по адресу /about.</p>
        </Link>
        <Link className="card interactive" href="/blog">
          <span className="card-num">02 / Динамические страницы</span>
          <h2>Блог →</h2>
          <p>Посты, комментарии и разница между layout и template.</p>
        </Link>
        <Link className="card interactive" href="/courses">
          <span className="card-num">03 / Вложенный layout</span>
          <h2>Курсы →</h2>
          <p>Список курсов и отдельные страницы по slug.</p>
        </Link>
      </div>
      <div className="note">
        Попробуйте переходить по ссылкам. Они используют <code>Link</code> из <code>next/link</code>,
        а активный пункт меню выделяется автоматически.
      </div>
    </>
  );
}
