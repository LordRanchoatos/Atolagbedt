import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { writings } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return writings.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const post = writings.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — David T. Atolagbe` : "Writings" };
}

export default async function WritingPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = writings.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <Nav />
      <article className="pb-16">
        <h1 className="text-xl font-semibold leading-snug">{post.title}</h1>
        <p className="text-muted mt-2">{post.date ?? "Date coming soon"}</p>

        <div className="hairline mt-6 pt-6">
          <p>
            This essay hasn&apos;t been published here yet — the full write-up is coming soon.
            In the meantime, you can{" "}
            <Link href="/writings" className="link">
              browse the rest of the writings
            </Link>{" "}
            or{" "}
            <Link href="/" className="link">
              head back home
            </Link>
            .
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
