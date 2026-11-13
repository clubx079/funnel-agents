import Shell, { rootMetadata, VIEWPORT } from '@/components/Shell';

// Root layout for Uruguay (/uruguay/…): <html lang> and the header/footer of this country.
export const metadata = rootMetadata('uy');
export const viewport = VIEWPORT;

export default function Layout({ children }) {
  return <Shell cc="uy">{children}</Shell>;
}
