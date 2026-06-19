import type { ReactNode } from "react";

export function Section({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="hairline pt-10 pb-2">
      <h2 className="eyebrow mb-5">{label}</h2>
      {children}
    </section>
  );
}
