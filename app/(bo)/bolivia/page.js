import { HomePage, homeMetadata } from '@/components/routes';

export const dynamic = 'force-static';

export function generateMetadata() {
  return homeMetadata('bo');
}

export default function Page() {
  return <HomePage cc="bo" />;
}
