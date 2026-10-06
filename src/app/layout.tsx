import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My First Site | Next.js",
  description: "Next.js, TypeScript, Tailwind CSS로 만든 첫 번째 웹사이트",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
