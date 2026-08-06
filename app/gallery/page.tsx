import type { Metadata } from "next";
import Reveal, { RevealItem } from "@/components/Reveal";
import site from "@/content/site.json";
import gallery from "@/content/gallery.json";

export const metadata: Metadata = {
  title: "Gallery — DF Group",
  description: "Events, convenings, and milestones from across DF Group.",
};

type Photo = { image: string; caption?: string };

export default function GalleryPage() {
  const g = site.galleryPage;
  const photos = (gallery.photos as Photo[]).filter((p) => p.image);

  return (
    <>
      <section className="pagehead">
        <div className="pagehead__wash" aria-hidden="true" />
        <div className="pagehead__inner">
          <p className="eyebrow eyebrow--onink">{g.eyebrow}</p>
          <h1 className="display">{g.heading}</h1>
          <p className="lede">{g.lede}</p>
          <div className="pagehead__rule" />
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap">
          {photos.length === 0 ? (
            <Reveal>
              <p className="lede" style={{ margin: "0 auto", textAlign: "center" }}>
                Photos coming soon.
              </p>
            </Reveal>
          ) : (
            <Reveal className="gallery" stagger>
              {photos.map((p, i) => (
                <RevealItem className="gallery__item" key={`${p.image}-${i}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.caption || ""} loading="lazy" />
                  {p.caption ? (
                    <p className="gallery__caption">{p.caption}</p>
                  ) : null}
                </RevealItem>
              ))}
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
