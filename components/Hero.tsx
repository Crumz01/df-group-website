"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Counter from "./Counter";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // Subtle parallax drift on the atmospheric brass wash + skyline.
  const washY = useTransform(scrollY, [0, 600], [0, 120]);
  const skyY = useTransform(scrollY, [0, 600], [0, 70]);

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay },
        };

  return (
    <section className="hero">
      <motion.div
        className="hero__sky"
        style={reduce ? undefined : { y: skyY }}
        aria-hidden="true"
      >
        <div className="hero__sky-img" />
      </motion.div>
      <motion.div
        className="hero__wash"
        style={reduce ? undefined : { y: washY }}
        aria-hidden="true"
      />
      <div className="hero__grid">
        <motion.p
          className="eyebrow eyebrow--onink hero__eyebrow"
          {...rise(0.05)}
        >
          Hong Kong · Corporate Advisory &amp; Investment
        </motion.p>

        <motion.h1 className="display" {...rise(0.15)}>
          We build and back companies for the <em>long view</em>.
        </motion.h1>

        <motion.p className="lede lede--onink hero__lede" {...rise(0.28)}>
          DF Group partners with founders, corporates, and investors across Asia
          and beyond — pairing a global advisory network with patient capital
          and hands-on execution.
        </motion.p>

        <motion.div className="hero__actions" {...rise(0.4)}>
          <MagneticButton href="#practice" className="btn btn--solid">
            Our areas of work <span className="btn__arrow">→</span>
          </MagneticButton>
          <Link className="txtlink" href="/contact">
            Start a conversation
          </Link>
        </motion.div>

        <div className="horizon" aria-hidden="true">
          <motion.div
            className="horizon__rule"
            initial={reduce ? undefined : { scaleX: 0 }}
            animate={reduce ? undefined : { scaleX: 1 }}
            transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1], delay: 0.3 }}
          />
          <motion.div
            className="horizon__node"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          />
        </div>

        <motion.div className="hero__stats" {...rise(0.5)}>
          <div className="stat">
            <div className="stat__k">
              <Counter value={100} suffix="+" />
            </div>
            <div className="stat__l">Advisors in our network</div>
          </div>
          <div className="stat">
            <div className="stat__k">Asia&ndash;Global</div>
            <div className="stat__l">Cross-border reach</div>
          </div>
          <div className="stat">
            <div className="stat__k">Patient</div>
            <div className="stat__l">Capital &amp; conviction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
