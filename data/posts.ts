export interface Comment {
  id: string;
  author: string;
  text: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  text: string;
  comments: Comment[];
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Как работает App Router',
    excerpt: 'Страницы Next.js создаются с помощью папок и файлов.',
    text: 'App Router автоматически связывает папки в директории app с адресами страниц. Файл page.tsx делает маршрут доступным.',
    comments: [
      { id: '5', author: 'Аня', text: 'Теперь понятно, откуда берутся адреса страниц.' },
      { id: '6', author: 'Максим', text: 'Удобно, что не нужно прописывать маршруты вручную.' },
    ],
  },
  {
    id: '2',
    title: 'Ссылки через Link',
    excerpt: 'Переходы между страницами без полной перезагрузки.',
    text: 'Компонент Link из next/link используется для внутренних ссылок и поддерживает клиентскую навигацию.',
    comments: [{ id: '1', author: 'Игорь', text: 'Ссылки действительно работают быстро.' }],
  },
  {
    id: '3',
    title: 'Layouts и Templates',
    excerpt: 'Когда сохранять состояние, а когда сбрасывать.',
    text: 'Layout остаётся между переходами внутри раздела, а Template перемонтируется и начинает состояние заново.',
    comments: [{ id: '2', author: 'Катя', text: 'Пример со счётчиками помогает разобраться.' }],
  },
];

export function getPost(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}
