import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost } from '@/data/posts';

interface CommentPageProps {
  params: Promise<{ id: string; commentId: string }>;
}

export default async function CommentPage({ params }: CommentPageProps) {
  const { id, commentId } = await params;
  const post = getPost(id);
  const comment = post?.comments.find((item) => item.id === commentId);
  if (!comment) notFound();

  return (
    <>
      <Link className="back-link" href={`/blog/${id}`}>← Вернуться к посту</Link>
      <div className="eyebrow">Вложенный динамический маршрут</div>
      <h1>Комментарий {commentId}</h1>
      <p className="lead">К посту №{id}</p>
      <div className="card">
        <h2>{comment.author}</h2>
        <p>{comment.text}</p>
      </div>
    </>
  );
}
