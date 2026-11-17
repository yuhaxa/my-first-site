import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xeoag.xyz"),
  title: "[ ] × 헬로키티 콜라보 컬렉션",
  description: "[ ]와 헬로키티가 함께하는 리미티드 에디션 상품 쇼케이스입니다.",
  openGraph: {
    title: "[ ] × 헬로키티 콜라보 컬렉션",
    description: "[ ]와 헬로키티가 함께하는 리미티드 에디션 상품 쇼케이스입니다.",
    url: "https://www.xeoag.xyz",
    siteName: "HELLO KITTY COLLABORATION",
    images: [
      {
        url: "/cat.jpg",
        alt: "헬로키티 콜라보",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "[ ] × 헬로키티 콜라보 컬렉션",
    description: "[ ]와 헬로키티가 함께하는 리미티드 에디션 상품 쇼케이스입니다.",
    images: ["/cat.jpg"],
  },
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
