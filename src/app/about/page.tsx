import Link from "next/link";

export default function AboutPage() {
  const storyCards = [
    {
      title: "콜라보레이션 기획 의도",
      desc: "[ ] 브랜드가 지향하는 감각적인 일상 라이프스타일과 50년 넘게 사랑받아온 헬로키티의 영원한 사랑스러움을 결합하여, 남녀노소 누구나 미소 지을 수 있는 스페셜 오브제를 제안합니다.",
      tag: "STORY",
      icon: "🎀",
    },
    {
      title: "디자인 콘셉트 & 디테일",
      desc: "과하지 않은 절제된 실루엣 위에 헬로키티의 시그니처 레드 리본과 [ ]만의 유니크한 컬러웨이를 정교하게 배치하여 완성도를 높였습니다.",
      tag: "DESIGN",
      icon: "✨",
    },
    {
      title: "출시 일정 & 온·오프라인 팝업",
      desc: "공식 온라인 스토어 및 오프라인 팝업 스토어 [ ]에서 선공개되며, 상세 출시일은 [ ]에 공식 발표될 예정입니다.",
      tag: "RELEASE",
      icon: "🗓️",
    },
    {
      title: "품질 & 라이선스 안내",
      desc: "본 콜라보레이션 상품은 주식회사 산리오(Sanrio)의 정식 라이선스 계약을 통해 엄격한 품질 관리를 거쳐 [ ]에서 생산됩니다.",
      tag: "LICENSE",
      icon: "🏷️",
    },
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#FFF2F5_0%,#FFEBF0_40%,#FFF5F8_100%)] text-neutral-800 flex flex-col items-center justify-start p-4 sm:p-8 md:p-12 font-sans selection:bg-[#F8A5C2] selection:text-white">
      <div className="max-w-2xl w-full space-y-8">

        {/* 상단 홈으로 돌아가기 버튼 */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm text-[#E03154] bg-white border border-[#F4BAC8] hover:bg-[#FFEAEF] transition-all shadow-xs"
          >
            <span>←</span>
            <span>콜라보 쇼케이스 홈으로</span>
          </Link>
          <span className="text-xs font-semibold text-neutral-400">ABOUT COLLABORATION</span>
        </div>

        {/* 메인 스토리 섹션 */}
        <section className="rounded-3xl border border-[#F4BAC8] bg-white p-6 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-2 border-b border-[#F8E1E7] pb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFEAEF] border border-[#F28B9F] text-xs font-bold text-[#E03154]">
              <span>🎀</span>
              <span>BEHIND THE SCENES</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#2B1B20]">
              [ ] × 헬로키티 콜라보 스토리
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
              특별한 순간을 더욱 빛나게 해줄 한정판 컬렉션의 탄생 배경과 제작 비하인드를 전해드립니다.
            </p>
          </div>

          {/* 스토리 카드 목록 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {storyCards.map((card) => (
              <div
                key={card.title}
                className="p-5 rounded-2xl bg-[#FFF5F8] border border-[#F8D2DD] space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{card.icon}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E03154] text-white">
                    {card.tag}
                  </span>
                </div>
                <h2 className="font-bold text-sm text-[#2B1B20] pt-1">
                  {card.title}
                </h2>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 하단 CTA */}
          <div className="pt-4 border-t border-[#F8E1E7] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <p className="font-bold text-xs sm:text-sm text-[#2B1B20]">
                상품에 대해 더 궁금한 점이 있으신가요?
              </p>
              <p className="text-xs text-neutral-500">
                문의 폼을 통해 사전 알림과 제휴 문의를 남기실 수 있습니다.
              </p>
            </div>
            <Link
              href="/#contact"
              className="px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm text-white bg-[#E03154] hover:bg-[#C92042] transition-colors shrink-0"
            >
              문의하기 바로가기
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
