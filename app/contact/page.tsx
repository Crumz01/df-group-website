import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — DF Group",
  description:
    "Whether you’re raising capital, exploring a transaction, or want to join the network — get in touch with DF Group.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pagehead">
        <div className="pagehead__wash" aria-hidden="true" />
        <div className="pagehead__inner">
          <p className="eyebrow eyebrow--onink">Contact</p>
          <h1 className="display">Let’s start a conversation.</h1>
          <p className="lede">
            Whether you’re raising capital, exploring a transaction, or want to
            join the network — we’d like to hear from you.
          </p>
          <div className="pagehead__rule" />
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap contact-grid">
          <Reveal className="contact-block">
            <div className="contact-item">
              <div className="k">Email</div>
              <div className="v">
                <a href="mailto:admin@diligentfaith.com">
                  admin@diligentfaith.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="k">Office</div>
              <div className="v">Hong Kong SAR</div>
            </div>
            <div className="contact-item">
              <div className="k">LinkedIn</div>
              <div className="v">
                <a
                  href="https://www.linkedin.com/company/df-group-diligentfaith/"
                  target="_blank"
                  rel="noopener"
                >
                  DF Group · Diligent Faith
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="k">Website</div>
              <div className="v">
                <a
                  href="https://diligentfaith.com"
                  target="_blank"
                  rel="noopener"
                >
                  diligentfaith.com
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
