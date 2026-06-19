import Link from "next/link";
import type { ReactNode } from "react";

type MaybeLinkProps = {
  href?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Renders a real link when `href` is a usable URL. When it's missing or
 * still the literal string "PLACEHOLDER", renders plain text with a small
 * "(soon)" marker instead of a dead or fabricated link.
 */
export function MaybeLink({ href, children, className = "" }: MaybeLinkProps) {
  const isPlaceholder = !href || href === "PLACEHOLDER";

  if (isPlaceholder) {
    return (
      <span className={className}>
        {children}
        <span className="ml-1.5 text-[0.8em] text-muted align-middle">(link soon)</span>
      </span>
    );
  }

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={`link ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`link ${className}`}>
      {children}
    </Link>
  );
}
