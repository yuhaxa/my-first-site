import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xeoag.xyz"),
  title: "깅월",
  description: "오늘도 행복한 하루",
  openGraph: {
    title: "깅월",
    description: "오늘도 행복한 하루",
    url: "https://www.xeoag.xyz",
    siteName: "깅월",
    images: [
      {
        url: "/cat.jpg",
        alt: "깅월",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "깅월",
    description: "오늘도 행복한 하루",
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
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
