import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xeoag.xyz"),
  title: "11월 19일 오픈! 스타벅스 × 헬로키티 크리스마스 콜라보",
  description: "11월 19일부터 시작되는 스타벅스 코리아 2차 크리스마스 프로모션! 헬로키티 토피 초콜릿 음료, 마카롱, 22종 한정판 MD(트리, 머그, 텀블러) 실물 사진과 판매 정보 안내입니다.",
  openGraph: {
    title: "11월 19일 오픈! 스타벅스 × 헬로키티 크리스마스 콜라보",
    description: "11월 19일부터 시작되는 스타벅스 코리아 2차 크리스마스 프로모션! 헬로키티 토피 초콜릿 음료, 마카롱, 22종 한정판 MD 실물 사진과 판매 정보 안내.",
    url: "https://www.xeoag.xyz",
    siteName: "STARBUCKS × HELLO KITTY HOLIDAY",
    images: [
      {
        url: "https://about.starbucks.com/uploads/sites/29/2024/09/Hello-Kitty-KV1.png",
        alt: "스타벅스 헬로키티 크리스마스 콜라보",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "11월 19일 오픈! 스타벅스 × 헬로키티 크리스마스 콜라보",
    description: "11월 19일부터 시작되는 스타벅스 코리아 2차 크리스마스 프로모션 실물 사진 및 판매 정보.",
    images: ["https://about.starbucks.com/uploads/sites/29/2024/09/Hello-Kitty-KV1.png"],
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
