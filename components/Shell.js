import '../app/globals.css';
import { display, text } from '@/lib/fonts';
import { SITE } from '@/lib/site';
import { COUNTRIES } from '@/lib/countries';
import { getGuides } from '@/lib/content';
import { Header, Footer } from '@/components/Chrome';
import Track from '@/components/Track';

// Every country has its own root layout (app/(py)/layout.js, app/(bo)/layout.js…) so each page's <html lang>
// is right (es-PY, es-BO…). They all render this shell; only the country changes.
export function rootMetadata(cc) {
  return {
    metadataBase: new URL(SITE.url),
    title: { default: SITE.name, template: '%s' },
    description: SITE.description,
    applicationName: SITE.name,
    robots: SITE.indexable ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { siteName: SITE.name, locale: COUNTRIES[cc].locale, type: 'website' },
    icons: { icon: '/icon.svg' },
  };
}

export const VIEWPORT = { themeColor: '#0F2A52', width: 'device-width', initialScale: 1 };

export default async function Shell({ cc, children }) {
  const guides = await getGuides(cc);
  return (
    <html lang={COUNTRIES[cc].lang} className={`${display.variable} ${text.variable}`}>
      <body>
        <a className="skip" href="#contenido">Ir al contenido</a>
        <Header guides={guides} cc={cc} />
        {children}
        <Footer guides={guides} cc={cc} />
        <Track />
        {SITE.gtmId ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${SITE.gtmId}');`,
            }}
          />
        ) : null}
      </body>
    </html>
  );
}
