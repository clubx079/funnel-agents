'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/** A menu link that marks itself as the current page. The link text is in the server HTML either way. */
export default function NavLink({ href, title, children }) {
  const here = usePathname() === href;
  return <Link href={href} title={title} aria-current={here ? 'page' : undefined}>{children}</Link>;
}
