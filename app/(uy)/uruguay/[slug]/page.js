import { GuidePage, guideMetadata, guideParams } from '@/components/routes';

export const dynamic = 'force-static';
export const dynamicParams = false; // only the pages that exist as content files; anything else is a 404

export function generateStaticParams() {
  return guideParams('uy');
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return guideMetadata('uy', slug);
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <GuidePage cc="uy" slug={slug} />;
}
