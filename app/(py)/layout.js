import Shell, { rootMetadata, VIEWPORT } from '@/components/Shell';

// Root layout for Paraguay (the original site, at /): <html lang> and the header/footer of this country.
export const metadata = rootMetadata('py');
export const viewport = VIEWPORT;

export default function Layout({ children }) {
  return <Shell cc="py">{children}</Shell>;
}
