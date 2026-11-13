import { urlOf, urlIn } from '@/lib/site';
import { OTHER_COUNTRIES } from '@/lib/countries';
import { getGuides, getInfoPages } from '@/lib/content';

export const dynamic = 'force-static';

export default async function sitemap() {
  const pages = [...(await getGuides()), ...(await getInfoPages())];
  // lastModified is the date the content really changed, never the build date.
  const latest = pages.map((p) => p.updated).filter(Boolean).sort().pop();
  const out = [
    ...pages.map((p) => ({ url: urlOf(p.slug), lastModified: p.updated })),
    { url: `${urlOf('')}guias/`, lastModified: latest },   // the index of every guide (app/(py)/guias)
  ];
  // Other countries (2026-11-13): home, guides and /<país>/guias/, after Paraguay's entries.
  for (const cc of OTHER_COUNTRIES) {
    const guides = await getGuides(cc);
    const last = guides.map((p) => p.updated).filter(Boolean).sort().pop() || latest;
    if (!guides.some((g) => g.slug === '')) out.push({ url: urlIn(cc, ''), lastModified: last });
    out.push(...guides.map((p) => ({ url: urlIn(cc, p.slug), lastModified: p.updated })));
    out.push({ url: `${urlIn(cc, '')}guias/`, lastModified: last });
  }
  return out;
}
