import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.headline}`,
  description: profile.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-[680px] px-6">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
