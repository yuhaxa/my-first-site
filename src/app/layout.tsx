import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My First Site | Next.js",
  description: "Next.js, TypeScript, Tailwind CSS로 만든 첫 번째 웹사이트",
  verification: {
    google: "-C_jUeBbB_VlP4HgqpPJ5Ep2mB8u3JSop_5VBC9CpUo",
    other: {
      "naver-site-verification": "b07a69a975b9b3fddd2624f0a10a2e4dc5a25956",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
