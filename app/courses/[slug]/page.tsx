import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCourse } from '@/data/courses';

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <>
      <Link className="back-link" href="/courses">← Все курсы</Link>
      <div className="eyebrow">Динамический маршрут · /courses/{slug}</div>
      <h1>{course.title}</h1>
      <p className="lead">{course.description}</p>
      <div className="card">
        <span className="tag">{course.lessons} занятий</span>
        <h2>О курсе</h2>
        <p>Это учебная страница курса. Параметр <code>slug</code> взят из адреса через <code>await params</code>.</p>
      </div>
    </>
  );
}
