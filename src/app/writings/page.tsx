import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { writings } from "@/lib/data";
import Link from "next/link";

export const metadata = {
  title: "Writings — David T. Atolagbe",
};

export default function WritingsPage() {
  return (
    <main>
      <Nav />
      <header className="pb-6">
        <h1 className="text-xl font-semibold">Writings</h1>
        <p className="text-muted mt-2">
          Notes on backend systems, fintech infrastructure, and what I'm learning along the way.
        </p>
      </header>

      <ul className="hairline pt-6 divide-y divide-border">
        {writings.map((post) => (
          <li key={post.slug} className="py-4">
            <Link href={`/writings/${post.slug}`} className="link font-medium">
              {post.title}
            </Link>
            <p className="text-sm text-muted mt-1">
              {post.date ?? "Date coming soon"} · Full essay coming soon
            </p>
          </li>
        ))}
      </ul>

      <Footer />
    </main>
  );
}
