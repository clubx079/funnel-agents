import Shell, { rootMetadata, VIEWPORT } from '@/components/Shell';

// Root layout for El Salvador (/el-salvador/…): <html lang> and the header/footer of this country.
export const metadata = rootMetadata('sv');
export const viewport = VIEWPORT;

export default function Layout({ children }) {
  return <Shell cc="sv">{children}</Shell>;
}
