import { GuidePage, guideMetadata, guideParams } from '@/components/routes';

export const dynamic = 'force-static';
export const dynamicParams = false; // only the pages that exist as content files; anything else is a 404

export function generateStaticParams() {
  return guideParams('ve');
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return guideMetadata('ve', slug);
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <GuidePage cc="ve" slug={slug} />;
}
