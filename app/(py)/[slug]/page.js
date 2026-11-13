import { GuidePage, guideMetadata, guideParams } from '@/components/routes';

export const dynamic = 'force-static';
export const dynamicParams = false; // only the pages that exist as content files; anything else is a 404

export function generateStaticParams() {
  return guideParams('py');
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return guideMetadata('py', slug);
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <GuidePage cc="py" slug={slug} />;
}
