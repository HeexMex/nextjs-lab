export interface Course {
  slug: string;
  title: string;
  description: string;
  lessons: number;
}

export const courses: Course[] = [
  {
    slug: 'nextjs',
    title: 'Основы Next.js',
    description: 'Страницы, маршруты и работа с компонентами в App Router.',
    lessons: 8,
  },
  {
    slug: 'typescript',
    title: 'TypeScript для начинающих',
    description: 'Типизация переменных, объектов и параметров компонентов.',
    lessons: 10,
  },
  {
    slug: 'react',
    title: 'React на практике',
    description: 'Компоненты, props, состояние и обработчики событий.',
    lessons: 12,
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}
