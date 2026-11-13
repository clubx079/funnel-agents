import { Archivo, Public_Sans } from 'next/font/google';

// Archivo (with its width axis) for headings, UI and figures; Public Sans for reading. Both carry tabular numerals.
export const display = Archivo({ subsets: ['latin', 'latin-ext'], variable: '--font-display', display: 'swap', axes: ['wdth'] });
export const text = Public_Sans({ subsets: ['latin', 'latin-ext'], variable: '--font-text', display: 'swap', style: ['normal', 'italic'] });
