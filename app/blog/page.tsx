import Link from 'next/link';
import { posts } from '@/data/posts';

export default function BlogPage() {
  return (
    <>
      <div className="eyebrow">Статический маршрут · /blog</div>
      <h1>Блог</h1>
      <p className="lead">Выберите пост. Его адрес будет иметь вид <code>/blog/[id]</code>.</p>
      <div className="stack">
        {posts.map((post) => (
          <Link key={post.id} className="card interactive" href={`/blog/${post.id}`}>
            <span className="card-num">Пост №{post.id}</span>
            <h2>{post.title} →</h2>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
