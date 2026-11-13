// Renders the content blocks of a guide as plain, server-side HTML (see content/SCHEMA.md).
const H = ({ as: Tag = 'span', html, ...rest }) => <Tag {...rest} dangerouslySetInnerHTML={{ __html: html || '' }} />;

function Table({ b }) {
  return (
    <figure className="tbl">
      {b.caption ? <figcaption className="tbl-cap">{b.caption}</figcaption> : null}
      <div className="tbl-scroll" tabIndex={0} role="region" aria-label={b.caption || 'Tabla'}>
        <table>
          {b.head?.length ? (
            <thead><tr>{b.head.map((h, i) => <H as="th" scope="col" key={i} html={h} />)}</tr></thead>
          ) : null}
          <tbody>
            {b.rows.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => (j === 0 ? <H as="th" scope="row" key={j} html={c} /> : <H as="td" key={j} html={c} />))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {b.note ? <H as="p" className="tbl-note" html={b.note} /> : null}
    </figure>
  );
}

const TONE_LABEL = { tip: 'Consejo', warn: 'Importante', fact: 'Dato' };

export function Block({ b }) {
  switch (b.t) {
    case 'p': return <H as="p" html={b.html} />;
    case 'h3': return <h3>{b.text}</h3>;
    case 'ul': return <ul>{b.items.map((it, i) => <H as="li" key={i} html={it} />)}</ul>;
    case 'ol': return <ol>{b.items.map((it, i) => <H as="li" key={i} html={it} />)}</ol>;
    case 'steps':
      return (
        <ol className="steps">
          {b.items.map((it, i) => (
            <li key={i}><strong className="step-title">{it.title}</strong><H as="span" html={it.html} /></li>
          ))}
        </ol>
      );
    case 'table': return <Table b={b} />;
    case 'callout':
      return (
        <aside className={`callout callout-${b.tone || 'tip'}`}>
          <p className="callout-title">{b.title || TONE_LABEL[b.tone] || 'Nota'}</p>
          <H as="p" html={b.html} />
        </aside>
      );
    case 'example':
      return (
        <aside className="example">
          <p className="example-title">{b.title}</p>
          {b.html ? <H as="p" html={b.html} /> : null}
          {b.rows?.length ? (
            <table className="example-rows"><tbody>
              {b.rows.map((r, i) => (
                <tr key={i}><H as="th" scope="row" html={r[0]} />{r.slice(1).map((c, j) => <H as="td" key={j} html={c} />)}</tr>
              ))}
            </tbody></table>
          ) : null}
        </aside>
      );
    case 'casalibre':
      return (
        <aside className="cl-block" data-pos="block">
          <img src="/casa-libre-cuate.svg" alt="" width="44" height="43" />
          <div>
            <p className="cl-title">{b.title}</p>
            <H as="p" html={b.html} />
            <a className="btn" href={b.href}>{b.button}</a>
          </div>
        </aside>
      );
    default: return null;
  }
}

export function Blocks({ blocks }) {
  return (blocks || []).map((b, i) => <Block b={b} key={i} />);
}
