import Shell, { rootMetadata, VIEWPORT } from '@/components/Shell';

// Root layout for Bolivia (/bolivia/…): <html lang> and the header/footer of this country.
export const metadata = rootMetadata('bo');
export const viewport = VIEWPORT;

export default function Layout({ children }) {
  return <Shell cc="bo">{children}</Shell>;
}
