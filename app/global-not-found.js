import Shell, { rootMetadata } from '@/components/Shell';
import NotFoundPage from '@/components/NotFoundPage';

// The 404 for any URL that matches no page (every country has its own root layout, so this one renders a full
// document). It uses Paraguay's header and footer and lists Paraguay's guides; the country switcher is in the header.
export const metadata = { ...rootMetadata('py'), title: 'Página no encontrada', robots: { index: false, follow: true } };

export default function GlobalNotFound() {
  return (
    <Shell cc="py">
      <NotFoundPage cc="py" />
    </Shell>
  );
}
