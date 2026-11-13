import NotFoundPage from '@/components/NotFoundPage';

export const metadata = { title: 'Página no encontrada', robots: { index: false, follow: true } };

export default function NotFound() {
  return <NotFoundPage cc="bo" />;
}
