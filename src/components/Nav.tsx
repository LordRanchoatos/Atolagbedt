import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <nav className="flex items-center justify-between py-8 text-sm">
      <div className="flex gap-5">
        <Link href="/" className="link">
          home
        </Link>
        <Link href="/writings" className="link">
          writings
        </Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}
