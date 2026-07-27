import type { Metadata } from "next";
import Reveal, { RevealItem } from "@/components/Reveal";
import news from "@/content/news.json";

export const metadata: Metadata = {
  title: "News — DF Group",
  description:
    "Announcements, appointments, and moments from across the DF Group network.",
};

// Content lives in content/news.json — editable in the CMS with no code.
const ENTRIES = news.entries;

export default function NewsPage() {
  return (
    <>
      <section className="pagehead">
        <div className="pagehead__wash" aria-hidden="true" />
        <div className="pagehead__inner">
          <p className="eyebrow eyebrow--onink">Company news</p>
          <h1 className="display">
            What we’re building, backing, and convening.
          </h1>
          <p className="lede">
            Announcements, appointments, and moments from across the DF Group
            network.
          </p>
          <div className="pagehead__rule" />
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap">
          <Reveal className="entries" stagger>
            {ENTRIES.map((e) => (
              <RevealItem
                className="entry"
                as="a"
                key={e.title + e.date}
                href={e.href}
                target="_blank"
                rel="noopener"
              >
                <div className="entry__meta">
                  <span>{e.date}</span>
                  <span className="dot"></span>
                  <span className="entry__cat">{e.cat}</span>
                </div>
                <div>
                  <h2 className="entry__title">{e.title}</h2>
                  <p className="entry__excerpt">{e.excerpt}</p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
          <div style={{ marginTop: 44 }}>
            <a
              className="btn btn--dark"
              href="https://www.linkedin.com/company/df-group-diligentfaith/"
              target="_blank"
              rel="noopener"
            >
              Follow DF Group on LinkedIn <span className="btn__arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
