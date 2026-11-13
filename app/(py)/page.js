import { HomePage, homeMetadata } from '@/components/routes';

export const dynamic = 'force-static';

export function generateMetadata() {
  return homeMetadata('py');
}

export default function Page() {
  return <HomePage cc="py" />;
}
