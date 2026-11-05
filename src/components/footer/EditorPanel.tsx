/** Decorative, tilted code-editor panel for the closing call to action. Pure markup, no images. */
const tree = [
  { n: "app", d: 0, dir: true },
  { n: "page.tsx", d: 1, on: true },
  { n: "services", d: 1, dir: true },
  { n: "work", d: 1, dir: true },
  { n: "components", d: 0, dir: true },
  { n: "Hero.tsx", d: 1 },
  { n: "QuoteForm.tsx", d: 1 },
  { n: "lib", d: 0, dir: true },
  { n: "seo.ts", d: 1 },
];

export function EditorPanel() {
  return (
    <div className="ft-editor" aria-hidden="true">
      <div className="ft-editor-in">
        <div className="ft-editor-bar">
          <span />
          <span />
          <span />
          <em>7code — app/page.tsx</em>
        </div>
        <div className="ft-editor-body">
          <div className="ft-editor-tree">
            <b>Project</b>
            {tree.map((t) => (
              <i key={t.n} className={t.on ? "on" : ""} style={{ paddingLeft: `${0.7 + t.d * 0.9}em` }}>
                {t.dir ? "▸ " : ""}
                {t.n}
              </i>
            ))}
          </div>
          <pre className="ft-editor-code">
            <b>Code</b>
            <code>
              <span className="k">export default function</span> <span className="f">Home</span>() {"{"}
              {"\n"}  <span className="k">return</span> (
              {"\n"}    &lt;<span className="c">Hero</span>
              {"\n"}      <span className="a">title</span>=<span className="s">&quot;Your next website&quot;</span>
              {"\n"}      <span className="a">cta</span>=<span className="s">&quot;Get a free quote&quot;</span>
              {"\n"}      <span className="a">market</span>=<span className="s">&quot;Dubai · Abu Dhabi&quot;</span>
              {"\n"}    /&gt;
              {"\n"}  );
              {"\n"}
              {"}"}
              {"\n"}
              {"\n"}
              <span className="m">{"// ships to staging, then your own domain"}</span>
              {"\n"}
              <span className="k">export const</span> <span className="f">revalidate</span> = <span className="s">3600</span>;
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
