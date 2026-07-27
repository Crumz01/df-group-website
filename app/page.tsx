import Link from "next/link";
import Hero from "@/components/Hero";
import PracticeIndex from "@/components/PracticeIndex";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import TrustedBy from "@/components/TrustedBy";

const AFFILIATIONS = [
  "Hong Kong Academy for Wealth Legacy",
  "Blue Economy & Finance Forum",
  "Fondation Prince Albert II de Monaco",
  "Investors for Climate",
  "Sustainable Finance Initiative",
  "La French Tech",
  "INSEAD Alumni Entrepreneurship Club",
  "TEDxHongKong",
  "HKSTP",
  "CityU HK Tech 300",
  "LEAP East",
  "2050",
];

export default function Home() {
  return (
    <>
      <Hero />

      <TrustedBy />

      <section className="section section--paper">
        <Reveal className="wrap two-col">
          <div>
            <p className="eyebrow eyebrow--dim">Who we are</p>
            <p className="statement" style={{ marginTop: 20 }}>
              Diligent in our research. <em>Faithful</em> to the companies we
              back.
            </p>
          </div>
          <div className="prose">
            <p>
              DF Group is a Hong Kong&ndash;based corporate advisory and
              investment house. We work at the intersection of strategy and
              capital — advising boards, structuring transactions, and investing
              alongside founders we believe in.
            </p>
            <p>
              Our strength is our people: a multidisciplinary network of more
              than one hundred advisors spanning finance, technology, industry,
              and operations across Asia, Europe, and the Middle East. We bring
              that collective judgement to every mandate, and we stay for the
              long term.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section section--ink" id="practice">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <p className="eyebrow eyebrow--onink">What we do</p>
              <h2 className="h2" style={{ marginTop: 16 }}>
                Six practices, one partnership
              </h2>
            </div>
            <div className="sec-head__aside">
              <p className="lede lede--onink">
                From first strategy to exit, we operate across the full
                lifecycle of a business — as advisor, builder, and investor.
              </p>
            </div>
          </Reveal>
          <PracticeIndex />
        </div>
      </section>

      <section className="section section--card">
        <Reveal className="wrap two-col">
          <div>
            <p className="eyebrow eyebrow--dim">Our approach</p>
            <p className="statement" style={{ marginTop: 20 }}>
              We create value with our network, our expertise, and{" "}
              <em>capital that waits</em>.
            </p>
          </div>
          <div className="prose">
            <p>
              Good companies are rarely built in a single quarter. We take the
              time to understand a business, price it on fundamentals rather
              than narrative, and support it through the parts of the journey
              that don’t make headlines.
            </p>
            <p>
              That patience is only possible because of who sits around the
              table — operators, researchers, and specialists who have built and
              run companies themselves. When we commit, we commit as partners.
            </p>
            <Link
              className="txtlink txtlink--dark"
              href="/team"
              style={{ marginTop: 8 }}
            >
              Meet the team <span>→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section section--paper">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <p className="eyebrow eyebrow--dim">Networks &amp; affiliations</p>
              <h2 className="h2" style={{ marginTop: 14 }}>
                The company we keep
              </h2>
            </div>
            <div className="sec-head__aside">
              <p className="lede">
                DF Group partners with, sponsors, and takes part in leading
                institutions and communities across Asia and Europe.
              </p>
            </div>
          </Reveal>
          <Reveal className="affil">
            {AFFILIATIONS.map((a) => (
              <div className="affil__item" key={a}>
                {a}
              </div>
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
              Let’s start a conversation.
            </h2>
          </div>
          <div className="prose" style={{ alignSelf: "center" }}>
            <p>
              Whether you’re raising capital, exploring a transaction, or want to
              join the network, we’d like to hear from you.
            </p>
            <MagneticButton href="/contact" className="btn btn--solid">
              Get in touch <span className="btn__arrow">→</span>
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
