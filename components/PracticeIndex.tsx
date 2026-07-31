"use client";

import Reveal, { RevealItem } from "./Reveal";

export type Practice = { no: string; title: string; desc: string };

export default function PracticeIndex({ items }: { items: Practice[] }) {
  return (
    <Reveal className="index" stagger>
      {items.map((p) => (
        <RevealItem className="index__row" key={p.no + p.title}>
          <div className="index__no">{p.no}</div>
          <div className="index__body">
            <h3 className="index__title">{p.title}</h3>
            <p className="index__desc">{p.desc}</p>
          </div>
        </RevealItem>
      ))}
    </Reveal>
  );
}
