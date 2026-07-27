import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Reports & Articles — DF Group",
  description:
    "Sector notes, deal perspectives, and market views from the DF Group research desk.",
};

export default function ReportsPage() {
  return (
    <>
      <section className="pagehead">
        <div className="pagehead__wash" aria-hidden="true" />
        <div className="pagehead__inner">
          <p className="eyebrow eyebrow--onink">Reports &amp; Articles</p>
          <h1 className="display">Original research, plainly written.</h1>
          <p className="lede">
            Sector notes, deal perspectives, and market views from our research
            desk — the thinking behind how we invest.
          </p>
          <div className="pagehead__rule" />
        </div>
      </section>

      <section className="section section--paper">
        <Reveal className="wrap">
          <div style={{ textAlign: "center", maxWidth: 660, margin: "0 auto" }}>
            <p className="eyebrow eyebrow--dim">Reports &amp; Articles</p>
            <p
              className="statement"
              style={{
                margin: "20px auto 0",
                textAlign: "center",
                maxWidth: "24ch",
              }}
            >
              Research, coming soon.
            </p>
            <p
              className="lede"
              style={{ margin: "22px auto 0", textAlign: "center" }}
            >
              We’re preparing a home for our published reports and articles. In
              the meantime, our latest thinking is shared on LinkedIn.
            </p>
            <div style={{ marginTop: 34 }}>
              <a
                className="btn btn--dark"
                href="https://www.linkedin.com/company/df-group-diligentfaith/"
                target="_blank"
                rel="noopener"
              >
                See more on LinkedIn <span className="btn__arrow">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
