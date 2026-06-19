import { MaybeLink } from "./MaybeLink";
import type { Highlight } from "@/lib/data";

export function HighlightList({ items }: { items: Highlight[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.text} className="flex gap-2.5">
          <span className="text-muted select-none">—</span>
          <span>
            {item.href ? <MaybeLink href={item.href}>{item.text}</MaybeLink> : item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
