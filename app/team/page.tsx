import type { Metadata } from "next";
import Link from "next/link";
import Reveal, { RevealItem } from "@/components/Reveal";
import team from "@/content/team.json";

export const metadata: Metadata = {
  title: "Team — DF Group",
  description:
    "Leadership with decades across banking, investment, and industry — supported by analysts covering the sectors DF Group invests in.",
};

// Content lives in content/team.json — editable in the CMS with no code.
const LEADERSHIP = team.leadership;
const ANALYSTS = team.analysts;

export default function TeamPage() {
  return (
    <>
      <section className="pagehead">
        <div className="pagehead__wash" aria-hidden="true" />
        <div className="pagehead__inner">
          <p className="eyebrow eyebrow--onink">The people behind the work</p>
          <h1 className="display">
            A network of judgement, not just headcount.
          </h1>
          <p className="lede">
            Leadership with decades across banking, investment, and industry —
            supported by analysts covering the sectors we invest in.
          </p>
          <div className="pagehead__rule" />
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <p className="eyebrow eyebrow--dim">01 — Leadership</p>
              <h2 className="h2" style={{ marginTop: 14 }}>
                Direction &amp; oversight
              </h2>
            </div>
          </Reveal>
          <Reveal className="people" stagger>
            {LEADERSHIP.map((p) => (
              <RevealItem className="person" as="article" key={p.name}>
                {/* Drop a photo in later: replace the initials with
                    <img src="/team/kenneth.jpg" alt={p.name} /> */}
                <div className="person__ph" aria-hidden="true">
                  {p.mono}
                </div>
                <div className="person__name">{p.name}</div>
                <div className="person__role">{p.role}</div>
                <p className="person__bio">{p.bio}</p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--card">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <p className="eyebrow eyebrow--dim">02 — Investment team</p>
              <h2 className="h2" style={{ marginTop: 14 }}>
                Sector coverage
              </h2>
            </div>
            <div className="sec-head__aside">
              <p className="lede">
                Analysts with focused expertise across the industries where we
                source, diligence, and back companies.
              </p>
            </div>
          </Reveal>
          <Reveal className="people" stagger>
            {ANALYSTS.map((p) => (
              <RevealItem className="person" as="article" key={p.name}>
                <div className="person__ph" aria-hidden="true">
                  {p.mono}
                </div>
                <div className="person__name">{p.name}</div>
                <div className="person__role">Analyst</div>
                <span className="person__tag">{p.tag}</span>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--ink">
        <Reveal className="wrap two-col">
          <div>
            <p className="eyebrow eyebrow--onink">Work with us</p>
            <h2
              className="h2"
              style={{ marginTop: 16, color: "var(--ivory)", maxWidth: "16ch" }}
            >
              Building something worth backing?
            </h2>
          </div>
          <div className="prose" style={{ alignSelf: "center" }}>
            <p>
              We’re always in conversation with founders, operators, and
              co-investors. If your work sits in one of our sectors — or
              somewhere we should be looking — we’d like to hear from you.
            </p>
            <Link className="txtlink" href="/contact" style={{ marginTop: 8 }}>
              Get in touch <span>→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
