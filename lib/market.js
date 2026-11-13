// Casa-Libre listings snapshots, one file per country: content/data/<cc>-market.json.
//   py-market.json  Paraguay (Nov 12 2026, built separately; the Paraguay pages still carry their own numbers)
//   bo/uy/ve/sv     built by scripts/build-market.mjs (vender-mi-casa; re-run it to refresh, it writes both sites)
// Every file has the same shape: snapshot_date, source, <cur>_per_usd (when there is a local currency), total_active,
// cities.{slug} (name, for_sale, for_rent, price quartiles in USD per type, terreno_usd_per_m2_median,
// casas_venta_median_bedrooms, gross rent yields, casa_libre_pages) and notes. null = too few listings to say.
// Server side only (content pages and lib/): it reads the JSON from disk, like lib/content.js reads content/pages.
// See content/COUNTRY_GUIDE.md for how a country city page uses it.
import { readFileSync } from 'node:fs';
import path from 'node:path';

const cache = new Map();

/** The snapshot of a country ('py', 'bo', 'uy', 've', 'sv'), or null when that country has no file. */
export function marketFor(cc = 'py') {
  const code = String(cc || 'py').toLowerCase();
  if (!/^[a-z]{2}$/.test(code)) return null;
  if (!cache.has(code)) {
    let data = null;
    try { data = JSON.parse(readFileSync(path.join(process.cwd(), 'content', 'data', `${code}-market.json`), 'utf8')); } catch { data = null; }
    cache.set(code, data);
  }
  return cache.get(code);
}

/** Slugs of the cities with market data in that country (largest first, as in the file). */
export const marketCities = (cc) => Object.keys(marketFor(cc)?.cities || {});

/** One city's data, or null when the country or the city has none (then: no city page, no city numbers). */
export const cityMarket = (cc, slug) => marketFor(cc)?.cities?.[slug] || null;

/** Local currency units per USD written in the snapshot (pyg_per_usd, bob_per_usd, ...), or null (El Salvador: USD). */
export function localPerUsd(cc) {
  const m = marketFor(cc);
  if (!m) return null;
  const k = Object.keys(m).find((key) => key.endsWith('_per_usd'));
  return k ? m[k] : null;
}

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
/** '2026-11-13' -> '13 de noviembre de 2026' */
export function snapshotDateEs(cc) {
  const d = marketFor(cc)?.snapshot_date;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d || '');
  return m ? `${Number(m[3])} de ${MONTHS[Number(m[2]) - 1]} de ${m[1]}` : '';
}

/** 145500 -> 'USD 145.500' (Spanish thousands separator, as on the Paraguay pages). */
export const fmtUsd = (n) => (n == null ? null : `USD ${Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`);

const FLAT = { py: 'departamentos', bo: 'departamentos', uy: 'apartamentos', ve: 'apartamentos', sv: 'apartamentos' };

/**
 * A ready table block ({ t: 'table', ... }, components/Blocks.js) with a city's numbers, straight from the snapshot.
 * Rows with no data are left out (never filled). Returns null when the city has no data.
 *   cityMarketTable('bo', 'la-paz')                       sale + rent overview
 *   cityMarketTable('uy', 'montevideo', { rent: false })  sale only
 */
export function cityMarketTable(cc, slug, { sale = true, rent = true, flat = FLAT[cc] || 'departamentos' } = {}) {
  const c = cityMarket(cc, slug);
  if (!c) return null;
  const date = snapshotDateEs(cc);
  const Flat = flat.charAt(0).toUpperCase() + flat.slice(1);
  const rows = [];
  const range = (p) => `${fmtUsd(p.p25_usd)} a ${fmtUsd(p.p75_usd).replace('USD ', '')}`;
  if (sale) {
    const parts = [[c.for_sale.casas, 'casas'], [c.for_sale.departamentos, flat], [c.for_sale.duplex, 'dúplex'], [c.for_sale.terrenos, 'terrenos']]
      .filter(([n]) => n > 0).map(([n, w]) => `${n} ${w}`);
    rows.push(['En venta', `${c.for_sale.total} avisos${parts.length ? ` (${parts.join(', ')})` : ''}`]);
    if (c.casas_venta_price) rows.push(['Casas: mediana', `${fmtUsd(c.casas_venta_price.median_usd)} (${c.casas_venta_price.listings_with_price} con precio)`], ['Casas: mitad central', range(c.casas_venta_price)]);
    if (c.departamentos_venta_price) rows.push([`${Flat}: mediana`, `${fmtUsd(c.departamentos_venta_price.median_usd)} (${c.departamentos_venta_price.listings_with_price} con precio)`], [`${Flat}: mitad central`, range(c.departamentos_venta_price)]);
    if (c.terrenos_venta_price) rows.push(['Terrenos: mediana', `${fmtUsd(c.terrenos_venta_price.median_usd)}${c.terreno_usd_per_m2_median != null ? `; ${fmtUsd(c.terreno_usd_per_m2_median)} por m²` : ''}`]);
    if (c.casas_venta_median_bedrooms != null) rows.push(['Dormitorios de las casas (mediana)', String(c.casas_venta_median_bedrooms)]);
  }
  if (rent) {
    const parts = [[c.for_rent.casas, 'casas'], [c.for_rent.departamentos, flat]].filter(([n]) => n > 0).map(([n, w]) => `${n} ${w}`);
    rows.push(['En alquiler', `${c.for_rent.total} avisos${parts.length ? ` (${parts.join(', ')})` : ''}`]);
    if (c.casas_alquiler_price_month) rows.push(['Alquiler de casas: mediana', `${fmtUsd(c.casas_alquiler_price_month.median_usd)} por mes`]);
    if (c.departamentos_alquiler_price_month) rows.push([`Alquiler de ${flat}: mediana`, `${fmtUsd(c.departamentos_alquiler_price_month.median_usd)} por mes`]);
  }
  return {
    t: 'table',
    caption: `${c.name} en Casa-Libre, ${date}`,
    head: ['Dato', c.name],
    rows,
    note: `Propiedades activas publicadas en Casa-Libre al ${date}. Precios pedidos, no de cierre, en dólares. La mitad central deja afuera el 25% más barato y el 25% más caro. Sin dato = muy pocos avisos con precio.`,
  };
}
