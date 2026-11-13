import Shell, { rootMetadata, VIEWPORT } from '@/components/Shell';

// Root layout for Venezuela (/venezuela/…): <html lang> and the header/footer of this country.
export const metadata = rootMetadata('ve');
export const viewport = VIEWPORT;

export default function Layout({ children }) {
  return <Shell cc="ve">{children}</Shell>;
}
