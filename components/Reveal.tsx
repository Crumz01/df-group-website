"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  },
};

/**
 * Scroll-reveal wrapper. Wrap a block to fade/rise it in when it enters view.
 * Set `stagger` to animate direct <Reveal.Item> children in sequence.
 */
export default function Reveal({
  children,
  className,
  stagger = false,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  as?: "div" | "section" | "ul";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as ElementType;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={stagger ? container : item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </MotionTag>
  );
}

/** A single staggered child; use inside a <Reveal stagger>. */
export function RevealItem({
  children,
  className,
  as = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "a";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as ElementType;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag className={className} variants={item} {...rest}>
      {children}
    </MotionTag>
  );
}
