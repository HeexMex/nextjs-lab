import Link from 'next/link';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  return (
    <>
      <div className="eyebrow">Статический маршрут · /courses</div>
      <h1>Курсы</h1>
      <p className="lead">Каждый курс открывается по динамическому адресу <code>/courses/[slug]</code>.</p>
      <div className="grid cards">
        {courses.map((course) => (
          <Link key={course.slug} className="card interactive" href={`/courses/${course.slug}`}>
            <span className="card-num">{course.lessons} занятий</span>
            <h2>{course.title} →</h2>
            <p>{course.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
