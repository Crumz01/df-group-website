import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import site from "@/content/site.json";

export const metadata: Metadata = {
  title: "Reports & Articles — DF Group",
  description:
    "Sector notes, deal perspectives, and market views from the DF Group research desk.",
};

export default function ReportsPage() {
  const r = site.reportsPage;
  return (
    <>
      <section className="pagehead">
        <div className="pagehead__wash" aria-hidden="true" />
        <div className="pagehead__inner">
          <p className="eyebrow eyebrow--onink">{r.eyebrow}</p>
          <h1 className="display">{r.heading}</h1>
          <p className="lede">{r.lede}</p>
          <div className="pagehead__rule" />
        </div>
      </section>

      <section className="section section--paper">
        <Reveal className="wrap">
          <div style={{ textAlign: "center", maxWidth: 660, margin: "0 auto" }}>
            <p className="eyebrow eyebrow--dim">{r.bodyEyebrow}</p>
            <p
              className="statement"
              style={{
                margin: "20px auto 0",
                textAlign: "center",
                maxWidth: "24ch",
              }}
            >
              {r.bodyStatement}
            </p>
            <p
              className="lede"
              style={{ margin: "22px auto 0", textAlign: "center" }}
            >
              {r.bodyText}
            </p>
            <div style={{ marginTop: 34 }}>
              <a
                className="btn btn--dark"
                href={r.buttonLink}
                target="_blank"
                rel="noopener"
              >
                {r.buttonLabel} <span className="btn__arrow">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
