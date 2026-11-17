import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Home() {
  const products = [
    {
      id: "product-1",
      name: "[ ] 헬로키티 에디션 A",
      tag: "LIMITED",
      category: "[ ]",
      price: "[ ]",
      desc: "헬로키티의 시그니처 리본 포인트와 [ ]의 독창적인 디자인이 조화를 이루는 한정판 아이템입니다.",
      status: "출시 예정",
    },
    {
      id: "product-2",
      name: "[ ] 헬로키티 에디션 B",
      tag: "NEW",
      category: "[ ]",
      price: "[ ]",
      desc: "일상 속 사랑스러운 무드를 더해주는 스페셜 콜라보레이션 라인업입니다.",
      status: "출시 예정",
    },
    {
      id: "product-3",
      name: "[ ] 헬로키티 에디션 C",
      tag: "SPECIAL",
      category: "[ ]",
      price: "[ ]",
      desc: "소장 가치를 높인 프리미엄 디테일과 [ ] 한정 컬러웨이가 적용되었습니다.",
      status: "출시 예정",
    },
  ];

  const highlights = [
    {
      icon: "🎀",
      title: "시그니처 레드 리본 디테일",
      desc: "헬로키티의 상징적인 리본 참과 고유의 아트워크가 [ ] 곳곳에 섬세하게 각인되었습니다.",
    },
    {
      icon: "✨",
      title: "한정판 전용 기프트 패키지",
      desc: "콜라보 전용 스페셜 핑크 박스와 [ ] 더스트백이 모든 구매 고객에게 함께 제공됩니다.",
    },
    {
      icon: "🎁",
      title: "선착순 스페셜 콜라보 굿즈",
      desc: "사전 예약 및 출시 기간 동안 [ ] 이상 구매 시 한정판 굿즈를 선착순 증정합니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#FFF2F5_0%,#FFEBF0_40%,#FFF5F8_100%)] text-neutral-800 flex flex-col items-center justify-start p-4 sm:p-8 md:p-12 font-sans selection:bg-[#F8A5C2] selection:text-white">
      <div className="max-w-2xl w-full space-y-10">

        {/* =========================================================
            1. 히어로 섹션 (Hero Section)
           ========================================================= */}
        <header className="relative w-full rounded-3xl p-6 sm:p-10 border border-[#F4BAC8] bg-white/85 shadow-sm text-center space-y-5 overflow-hidden">
          {/* 상단 핑크 리본 장식 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#F28B9F] bg-[#FFEAEF] text-xs font-bold text-[#E03154]">
            <span>🎀</span>
            <span>[ ] × HELLO KITTY LIMITED COLLABORATION</span>
          </div>

          {/* 중앙 타이틀 영역 */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#2B1B20]">
              [ ] × 헬로키티
              <span className="block text-2xl sm:text-3xl md:text-4xl text-[#E03154] font-extrabold mt-1">
                콜라보레이션 컬렉션
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed font-medium">
              [ ]의 고유한 감성과 전 세계에서 사랑받는 헬로키티의 특별한 만남.
              일상에 사랑스러운 마법을 불어넣는 한정판 상품 라인업을 만나보세요.
            </p>
          </div>

          {/* 버튼 영역 */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#E03154] hover:bg-[#C92042] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>콜라보 라인업 보기</span>
              <span>↓</span>
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-[#E03154] bg-[#FFF0F4] hover:bg-[#FFE3EC] border border-[#F4BAC8] transition-all"
            >
              <span>콜라보 스토리</span>
              <span>→</span>
            </Link>
          </div>
        </header>

        {/* =========================================================
            2. 상품 라인업 쇼케이스 (Product Grid)
           ========================================================= */}
        <section id="products" className="space-y-4 scroll-mt-6 sm:scroll-mt-10">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌸</span>
              <h2 className="text-lg sm:text-xl font-black text-[#2B1B20]">
                COLLABORATION LINEUP
              </h2>
            </div>
            <span className="text-xs font-semibold text-[#E03154] bg-[#FFEAEF] px-2.5 py-1 rounded-full border border-[#F4BAC8]">
              총 3개 라인업
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-[#F4BAC8] bg-white p-5 shadow-xs hover:shadow-md hover:border-[#E03154] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* 상단 태그 및 상태 */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E03154] text-white">
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-medium text-neutral-500">
                      {item.status}
                    </span>
                  </div>

                  {/* 상품 이미지 플레이스홀더 */}
                  <div className="w-full aspect-square rounded-xl bg-[#FFF5F8] border border-[#FBE3EA] flex flex-col items-center justify-center text-center p-3 group-hover:scale-[1.02] transition-transform">
                    <span className="text-4xl mb-1">🎀</span>
                    <span className="text-xs font-bold text-[#E03154]">{item.category}</span>
                    <span className="text-[10px] text-neutral-400 mt-0.5">Hello Kitty Edition</span>
                  </div>

                  {/* 상품 정보 */}
                  <div>
                    <h3 className="font-bold text-sm text-[#2B1B20] group-hover:text-[#E03154] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* 가격 정보 */}
                <div className="pt-4 mt-4 border-t border-[#F8E1E7] flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-medium">판매가</span>
                  <span className="text-sm font-extrabold text-[#E03154]">
                    {item.price}원
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            3. 콜라보 특별 포인트 (Special Highlights)
           ========================================================= */}
        <section className="rounded-3xl border border-[#F4BAC8] bg-white/90 p-6 sm:p-8 space-y-5 shadow-xs">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold text-[#E03154] uppercase tracking-wider">
              SPECIAL HIGHLIGHTS
            </span>
            <h2 className="text-lg sm:text-xl font-black text-[#2B1B20]">
              이번 콜라보레이션의 특별한 3가지 포인트
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {highlights.map((point) => (
              <div
                key={point.title}
                className="p-4 rounded-2xl bg-[#FFF5F8] border border-[#F8D2DD] space-y-2 text-left"
              >
                <div className="text-2xl">{point.icon}</div>
                <h3 className="font-bold text-xs sm:text-sm text-[#2B1B20]">
                  {point.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            4. 문의 & 사전 예약 신청 폼 (Contact Form 연동)
           ========================================================= */}
        <ContactForm />

        {/* 하단 푸터 */}
        <footer className="text-center py-6 text-xs text-neutral-500 space-y-1">
          <p>© [ ] × HELLO KITTY · All rights reserved.</p>
          <p className="text-[11px] text-neutral-400">
            헬로키티(Hello Kitty)는 Sanrio Co., Ltd.의 등록 상표입니다.
          </p>
        </footer>

      </div>
    </main>
  );
}
