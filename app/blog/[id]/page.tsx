import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost } from '@/data/posts';

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = getPost(id);
  if (!post) notFound();

  return (
    <>
      <Link className="back-link" href="/blog">← Все посты</Link>
      <div className="eyebrow">Динамический маршрут · /blog/{id}</div>
      <h1>Пост №{id}</h1>
      <div className="card">
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      </div>
      <h2 className="subheading">Комментарии</h2>
      <div className="stack">
        {post.comments.map((comment) => (
          <Link
            className="card interactive comment-link"
            key={comment.id}
            href={`/blog/${id}/comments/${comment.id}`}
          >
            <strong>Комментарий {comment.id} · {comment.author}</strong>
            <p>{comment.text}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
