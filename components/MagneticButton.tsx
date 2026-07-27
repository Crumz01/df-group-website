"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

/**
 * A CTA that subtly leans toward the cursor. Renders a next/link (internal)
 * or a plain anchor (external / mailto). Falls back to a static link when the
 * user prefers reduced motion.
 */
export default function MagneticButton({
  href,
  children,
  className = "btn btn--solid",
  external = false,
  strength = 0.35,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setPos({ x, y });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const inner = (
    <motion.span
      style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.3 }}
    >
      {children}
    </motion.span>
  );

  const shared = {
    ref,
    className,
    onMouseMove: handleMove,
    onMouseLeave: reset,
  };

  if (external) {
    return (
      <a {...shared} href={href} target="_blank" rel="noopener">
        {inner}
      </a>
    );
  }

  return (
    <Link {...shared} href={href}>
      {inner}
    </Link>
  );
}
