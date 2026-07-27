"use client";

import Reveal, { RevealItem } from "./Reveal";

const PRACTICES = [
  {
    no: "01",
    title: "Corporate & Investment Strategy",
    desc: "Board-level advice on growth, capital allocation, and market entry — grounded in original research and cross-border perspective.",
  },
  {
    no: "02",
    title: "Venture Building",
    desc: "We co-found and scale new ventures, supplying operating talent, structure, and capital from the earliest stage.",
  },
  {
    no: "03",
    title: "Mergers & Acquisitions",
    desc: "Buy-side and sell-side execution — sourcing, valuation, diligence, and negotiation through to completion.",
  },
  {
    no: "04",
    title: "Investor Relations",
    desc: "Positioning companies with the right capital partners, and managing the relationship long after the deal closes.",
  },
  {
    no: "05",
    title: "Executive Training & Networking",
    desc: "Programmes and convenings that connect leaders across our network and sharpen how they lead.",
  },
  {
    no: "06",
    title: "Event & Media Management",
    desc: "End-to-end production of the events, panels, and media that build a company’s profile and relationships.",
  },
];

export default function PracticeIndex() {
  return (
    <Reveal className="index" stagger>
      {PRACTICES.map((p) => (
        <RevealItem className="index__row" key={p.no}>
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
