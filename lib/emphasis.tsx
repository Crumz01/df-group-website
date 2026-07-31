import { Fragment, type ReactNode } from "react";

/**
 * Renders text in which [square brackets] mark the emphasised words — shown
 * italic in the brass accent colour.
 *
 * This lets an editor control the highlight from the CMS without touching
 * code, e.g. "We build and back companies for the [long view]."
 */
export function withEmphasis(text: string): ReactNode {
  return text.split(/(\[[^\]]*\])/g).map((part, i) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <em key={i}>{part.slice(1, -1)}</em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
