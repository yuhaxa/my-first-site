import Link from "next/link";

export default function AboutPage() {
  const storyCards = [
    {
      title: "2026 크리스마스 2차 프로모션의 시작",
      desc: "스타벅스 코리아가 연말 크리스마스 시즌을 맞아 전 세계적인 사랑을 받는 헬로키티와 손잡고 11월 19일부터 12월 31일까지 전국적인 한정 컬래버레이션을 진행합니다.",
      tag: "PROMOTION",
      icon: "🎄",
    },
    {
      title: "헬로키티 시그니처 음료 & 디저트",
      desc: "달콤한 토피넛에 진한 초콜릿과 빨간 리본 토핑을 얹은 '헬로키티 토피 초콜릿'과 귀여운 얼굴 모양의 '헬로키티 마카롱', '애플시나몬 쿠키 틴 세트'가 연말의 행복을 더합니다.",
      tag: "MENU",
      icon: "☕",
    },
    {
      title: "총 22종 굿즈 분산 출시 (11/19 & 12/2)",
      desc: "오픈런과 빠른 품절을 고려해 11월 19일 1차 10종(트리, 머그, 텀블러, 인형), 12월 2일 2차 12종(머그, 토트백 등)으로 나뉘어 순차 출시됩니다.",
      tag: "MD 22종",
      icon: "🎁",
    },
    {
      title: "온·오프라인 동시 오픈 안내",
      desc: "11월 19일 오전 7시 스타벅스 모바일 앱 온라인 스토어 및 전국 매장 오픈 시간에 선착순 판매가 개시되며, 1인당 구매 가능 수량 제한이 적용됩니다.",
      tag: "SCHEDULE",
      icon: "⏰",
    },
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#F5F8F5_0%,#EDF3ED_40%,#F7FAF7_100%)] text-[#1A261E] flex flex-col items-center justify-start p-4 sm:p-8 md:p-12 font-sans selection:bg-[#006241] selection:text-white">
      <div className="max-w-2xl w-full space-y-8">

        {/* 상단 홈으로 돌아가기 버튼 */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm text-[#006241] bg-white border border-[#006241]/20 hover:bg-[#E8F2EC] transition-all shadow-xs"
          >
            <span>←</span>
            <span>콜라보 쇼케이스 홈으로</span>
          </Link>
          <span className="text-xs font-semibold text-neutral-400">11월 19일 OPEN</span>
        </div>

        {/* 메인 스토리 섹션 */}
        <section className="rounded-3xl border border-[#006241]/20 bg-white p-6 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-2 border-b border-neutral-100 pb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F2EC] border border-[#006241]/30 text-xs font-bold text-[#006241]">
              <span>🎀</span>
              <span>2026 HOLIDAY COLLABORATION</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#11241A]">
              스타벅스 × 헬로키티 크리스마스 스토리
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
              11월 19일부터 시작되는 스타벅스 코리아의 특별한 연말 선물, 헬로키티 컬래버레이션 비하인드 안내입니다.
            </p>
          </div>

          {/* 스토리 카드 목록 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {storyCards.map((card) => (
              <div
                key={card.title}
                className="p-5 rounded-2xl bg-[#F8FAF8] border border-[#E0EBE2] space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{card.icon}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#006241] text-white">
                    {card.tag}
                  </span>
                </div>
                <h2 className="font-bold text-sm text-[#11241A] pt-1">
                  {card.title}
                </h2>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 하단 CTA */}
          <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <p className="font-bold text-xs sm:text-sm text-[#11241A]">
                출시 알림과 문의사항이 있으신가요?
              </p>
              <p className="text-xs text-neutral-500">
                문의 폼을 통해 사전 알림을 신청하실 수 있습니다.
              </p>
            </div>
            <Link
              href="/#contact"
              className="px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm text-white bg-[#006241] hover:bg-[#004d33] transition-colors shrink-0"
            >
              문의 및 알림 신청
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
