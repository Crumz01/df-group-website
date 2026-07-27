// Moving "Trusted by" logo strip — real partner logos carried over from the
// previous diligentfaith.com site. Pure-CSS infinite marquee (see globals.css);
// pauses on hover, brightens the hovered logo, and stops entirely for visitors
// who prefer reduced motion.

const LOGOS = [
  { src: "/partners/tech300.png", alt: "CityU HK Tech 300" },
  { src: "/partners/la-french-tech.png", alt: "La French Tech" },
  { src: "/partners/investors-for-climate.jpeg", alt: "Investors for Climate" },
  { src: "/partners/impact-hub.png", alt: "Impact Hub" },
  { src: "/partners/handprint.jpeg", alt: "Handprint" },
  { src: "/partners/pilot-medical.jpeg", alt: "Pilot Medical Group" },
  { src: "/partners/angel-school.jpeg", alt: "Angel School" },
  { src: "/partners/loyal.png", alt: "Loyal" },
  { src: "/partners/yixu.jpeg", alt: "Yixu" },
  { src: "/partners/a2d.png", alt: "A2D" },
  { src: "/partners/aa.png", alt: "AA" },
  { src: "/partners/partner-1.png", alt: "Partner" },
  { src: "/partners/partner-2.png", alt: "Partner" },
  { src: "/partners/partner-3.png", alt: "Partner" },
  { src: "/partners/partner-4.png", alt: "Partner" },
];

export default function TrustedBy({
  eyebrow = "Trusted by founders & partners",
}: {
  eyebrow?: string;
}) {
  // Rendered twice so the CSS translateX(-50%) loops seamlessly.
  const track = [...LOGOS, ...LOGOS];

  return (
    <section className="section--card trusted">
      <div className="wrap trusted__head">
        <p className="eyebrow eyebrow--dim">{eyebrow}</p>
      </div>
      <div className="marquee" aria-label="Partners and portfolio companies">
        <div className="marquee__track">
          {track.map((l, i) => (
            <div className="marquee__item" key={`${l.src}-${i}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.src} alt={i < LOGOS.length ? l.alt : ""} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
