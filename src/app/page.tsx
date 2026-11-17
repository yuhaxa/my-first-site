import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Home() {
  const drinksAndFoods = [
    {
      id: "drink-toffee",
      type: "신규 콜라보 음료",
      name: "헬로키티 토피 초콜릿",
      price: "[19일 매장·앱 공개 / [ ]원]",
      desc: "진한 초콜릿에 고소하고 달콤한 토피 넛 시럽이 어우러지고, 부드러운 휘핑크림 위에 헬로키티 시그니처 '빨간 리본 초콜릿 토핑'이 올라간 스페셜 홀리데이 음료입니다.",
      badge: "⭐ 별 3개 추가 적립",
      badgeColor: "bg-[#D62300] text-white",
      imgUrl: "https://image.istarbucks.co.kr/upload/store/skuimg/2026/11/[9200000007330]_20261104085911677.jpg",
      highlight: "빨간 리본 초콜릿 토핑 장식",
    },
    {
      id: "food-macaron",
      type: "콜라보 디저트",
      name: "헬로키티 마카롱",
      price: "[19일 매장·앱 공개 / [ ]원]",
      desc: "사랑스러운 헬로키티 얼굴 모양을 그대로 살린 수제 마카롱으로, 부드러운 카라멜 풍미의 화이트 가나슈와 상큼달콤한 사과잼이 조화롭게 가득 채워져 있습니다.",
      badge: "LIMITED DESSERT",
      badgeColor: "bg-[#006241] text-white",
      imgUrl: "https://image.istarbucks.co.kr/upload/store/skuimg/2026/11/[9300000006948]_20261104090355093.jpg",
      highlight: "사과잼 & 카라멜 화이트 가나슈 필링",
    },
  ];

  const mdReleaseSchedule = [
    {
      round: "1차 출시",
      date: "11월 19일(목)",
      time: "오전 7시 온라인 오픈 / 매장 오픈 시간",
      count: "총 10종 선공개",
      items: "크리스마스 트리 오브제, 홀리데이 세라믹 머그, 스테인리스 텀블러, 바리스타 인형 등",
      badge: "D-DAY 출시",
      color: "border-[#006241] bg-[#F4F9F5]",
      badgeColor: "bg-[#006241] text-white",
    },
    {
      round: "2차 출시",
      date: "12월 2일(수)",
      time: "오전 7시 온라인 오픈 / 매장 오픈 시간",
      count: "추가 12종 공개",
      items: "스페셜 머그, 홀리데이 토트백, 패브릭 굿즈, 키체인 등",
      badge: "2차 오픈 예정",
      color: "border-[#D62300] bg-[#FFF8F7]",
      badgeColor: "bg-[#D62300] text-white",
    },
  ];

  const salesChannels = [
    {
      name: "스타벅스 앱 온라인 스토어",
      type: "공식 모바일 앱",
      openTime: "11월 19일 오전 7:00 오픈",
      desc: "스타벅스 모바일 앱 내 '온라인 스토어'에서 한정 수량 선착순 판매 및 배송",
      badge: "가장 빠른 오픈",
      url: "https://www.starbucks.co.kr",
    },
    {
      name: "스타벅스 전국 오프라인 매장",
      type: "오프라인 매장",
      openTime: "11월 19일 각 매장 영업 시작 시간",
      desc: "전국 스타벅스 매장 현장 판매 (품목별 1인당 구매 가능 수량 제한 정책 적용)",
      badge: "현장 오픈런",
      url: "https://www.starbucks.co.kr/store/store_map.do",
    },
    {
      name: "카카오톡 선물하기",
      type: "모바일 선물",
      openTime: "11월 19일 오픈 예정",
      desc: "카카오톡 선물하기 스타벅스 브랜드 탭에서 실물 배송 선물 가능",
      badge: "간편 선물",
      url: "https://gift.kakao.com",
    },
    {
      name: "SSG.COM & 네이버 브랜드스토어",
      type: "공식 이커머스",
      openTime: "11월 19일 오전 7:00 순차 오픈",
      desc: "신세계 SSG.COM 및 네이버 스타벅스 공식 브랜드스토어 정식 인증 판매처",
      badge: "온라인 인증관",
      url: "https://www.ssg.com",
    },
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#F5F8F5_0%,#EDF3ED_40%,#F7FAF7_100%)] text-[#1A261E] flex flex-col items-center justify-start p-4 sm:p-8 md:p-12 font-sans selection:bg-[#006241] selection:text-white">
      <div className="max-w-2xl w-full space-y-10">

        {/* =========================================================
            1. 히어로 섹션 (11월 19일 오픈 안내)
           ========================================================= */}
        <header className="relative w-full rounded-3xl p-6 sm:p-9 border border-[#006241]/20 bg-white/95 shadow-sm text-center space-y-5 overflow-hidden">
          {/* 상단 뱃지 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D62300]/40 bg-[#FFF0ED] text-xs font-black text-[#D62300]">
            <span>🎄</span>
            <span>11월 19일 START · 2026 스타벅스 2차 크리스마스 프로모션</span>
          </div>

          {/* 메인 키 비주얼 배너 */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-[#006241]/15 shadow-inner">
            <img
              src="https://about.starbucks.com/uploads/sites/29/2024/09/Hello-Kitty-KV1.png"
              alt="스타벅스 x 헬로키티 크리스마스 프로모션 공식 키 비주얼"
              className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300"
            />
          </div>

          {/* 타이틀 및 행사 개요 */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#11241A]">
              스타벅스 × 헬로키티
              <span className="block text-2xl sm:text-3xl md:text-4xl text-[#006241] font-extrabold mt-1">
                2026 크리스마스 컬렉션
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed font-medium">
              11월 19일부터 12월 31일까지 전국 매장과 온라인 스토어에서 펼쳐지는 특별한 연말 축제!
              리본 초콜릿 음료와 마카롱, 크리스마스 트리 & 머그까지 총 22종 한정판 굿즈를 만나보세요.
            </p>
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#drinks-foods"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#006241] hover:bg-[#004d33] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>신규 음료 & 디저트 보기</span>
              <span>↓</span>
            </a>
            <a
              href="#md-schedule"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-[#D62300] bg-[#FFF0ED] hover:bg-[#FFE3DE] border border-[#F5B8AD] transition-all"
            >
              <span>22종 굿즈 출시 일정</span>
              <span>→</span>
            </a>
          </div>
        </header>

        {/* =========================================================
            2. 신규 콜라보 음료 & 디저트 실물 사진 쇼케이스
           ========================================================= */}
        <section id="drinks-foods" className="space-y-4 scroll-mt-6 sm:scroll-mt-10">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">☕</span>
              <h2 className="text-lg sm:text-xl font-black text-[#11241A]">
                NEW BEVERAGE & DESSERT
              </h2>
            </div>
            <span className="text-xs font-bold text-[#D62300] bg-[#FFF0ED] px-3 py-1 rounded-full border border-[#F5B8AD]">
              11월 19일 출시
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {drinksAndFoods.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl border border-[#006241]/20 bg-white p-5 shadow-xs hover:shadow-md hover:border-[#006241] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#006241] bg-[#E8F2EC] px-2.5 py-0.5 rounded-full">
                      {item.type}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* 공식 실물 사진 */}
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#FAFBF9] border border-neutral-100 flex items-center justify-center">
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* 상품 정보 */}
                  <div>
                    <h3 className="font-extrabold text-base text-[#11241A] group-hover:text-[#006241] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#D62300] mt-0.5">
                      ✨ {item.highlight}
                    </p>
                    <p className="text-xs text-neutral-600 mt-2 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* 가격 정보 */}
                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-medium">출시 가격</span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-700">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tri-Star Dash 이벤트 안내 배너 */}
          <div className="rounded-2xl border border-[#D62300]/30 bg-[#FFF5F2] p-4 sm:p-5 flex items-start gap-3.5">
            <span className="text-2xl mt-0.5">⭐</span>
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="font-black text-[#D62300] text-sm sm:text-base">
                [이벤트] 헬로키티 음료 주문 시 별 3개 추가 적립! (Tri-Star Dash)
              </div>
              <p className="text-neutral-700 leading-relaxed font-medium">
                <strong>11월 19일 ~ 11월 25일 (7일간)</strong> 스타벅스 그린·골드 회원이 사이렌 오더 또는 딜리버스로 <strong>‘헬로키티 토피 초콜릿’</strong> 또는 <strong>‘홀리데이 캐모마일 릴렉서’</strong> 주문 시 한 잔당 <strong>별 3개</strong> 추가 적립 (매장 POS 결제 시 별 2개).
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. 총 22종 굿즈(MD) 분산 출시 일정 & 실물 컷
           ========================================================= */}
        <section id="md-schedule" className="space-y-4 scroll-mt-6 sm:scroll-mt-10">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎀</span>
              <h2 className="text-lg sm:text-xl font-black text-[#11241A]">
                총 22종 콜라보 굿즈 분산 출시 일정
              </h2>
            </div>
            <span className="text-xs font-bold text-[#006241]">
              1차 10종 + 2차 12종
            </span>
          </div>

          {/* 굿즈 단체 실물 컷 이미지 */}
          <div className="rounded-3xl border border-[#006241]/20 bg-white overflow-hidden shadow-xs">
            <img
              src="https://about.starbucks.com/uploads/2025/10/Starbucks-Hello-Kitty-Collaboration-2.jpg"
              alt="스타벅스 x 헬로키티 콜라보레이션 굿즈 실물 컬렉션"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-[#F8FAF8] border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600">
              <span className="font-semibold text-[#006241]">📸 스타벅스 공식 한정판 MD 실물 컷</span>
              <span className="text-[11px] text-neutral-400">가격은 19일 오전 7시 공식 공개</span>
            </div>
          </div>

          {/* 1차 & 2차 분산 출시 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {mdReleaseSchedule.map((sched) => (
              <div
                key={sched.round}
                className={`p-5 rounded-2xl border-2 ${sched.color} space-y-2`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${sched.badgeColor}`}>
                    {sched.badge}
                  </span>
                  <span className="text-xs font-bold text-[#11241A]">{sched.count}</span>
                </div>
                <h3 className="font-extrabold text-base text-[#11241A] pt-1">
                  {sched.round} : {sched.date}
                </h3>
                <p className="text-xs text-[#006241] font-semibold">
                  ⏰ {sched.time}
                </p>
                <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                  {sched.items}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            4. 공식 온·오프라인 판매처 (11월 19일 오전 7시 오픈)
           ========================================================= */}
        <section id="channels" className="rounded-3xl border border-[#006241]/20 bg-white p-6 sm:p-8 space-y-5 shadow-xs scroll-mt-6 sm:scroll-mt-10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006241] uppercase tracking-wider">
              <span>🛒</span>
              <span>11월 19일 오픈 판매 채널</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-[#11241A]">
              온·오프라인 공식 판매처 안내
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              온라인은 11월 19일 오전 7시부터 선착순 판매가 시작되며, 매장은 각 지점별 오픈 시간에 판매됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {salesChannels.map((channel) => (
              <div
                key={channel.name}
                className="p-4 rounded-2xl bg-[#F8FAF8] border border-[#E0EBE2] space-y-2 hover:border-[#006241]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#006241] text-white">
                    {channel.type}
                  </span>
                  <span className="text-[10px] font-bold text-[#D62300] bg-[#FFF0ED] px-2 py-0.5 rounded-full border border-[#F5B8AD]">
                    {channel.badge}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-[#11241A]">
                  {channel.name}
                </h3>
                <p className="text-xs text-[#006241] font-semibold">
                  ⏰ {channel.openTime}
                </p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {channel.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            5. 문의 & 입점/재입고 알림 폼 (Contact Form 연동)
           ========================================================= */}
        <ContactForm />

        {/* 하단 푸터 */}
        <footer className="text-center py-6 text-xs text-neutral-500 space-y-1">
          <p>© 2026 STARBUCKS COFFEE COMPANY & SANRIO CO., LTD. All rights reserved.</p>
          <p className="text-[11px] text-neutral-400">
            스타벅스(Starbucks)와 사이렌 로고는 Starbucks Coffee Company의 상표이며, 헬로키티(Hello Kitty)는 Sanrio Co., Ltd.의 등록 상표입니다.
          </p>
        </footer>

      </div>
    </main>
  );
}
