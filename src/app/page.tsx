import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Home() {
  // 이번 11월 19일(목) 1차 공식 출시 굿즈(MD) 리스트 및 정가
  const mdItems = [
    {
      id: "md-tree",
      name: "크리스마스 미니 트리",
      price: "61,000원",
      tag: "HOT & LIMITED",
      tagColor: "bg-[#D62300] text-white",
      desc: "레드 깅엄 체크 패턴의 화분과 헬로키티 & 스타벅스 커피 클립 오너먼트가 포함된 크리스마스 인테리어 트리 오브제입니다.",
      icon: "🎄",
      highlight: "키티 & 커피 클립 오너먼트 포함",
    },
    {
      id: "md-handle-tumbler",
      name: "레드 핸들 텀블러",
      price: "52,000원",
      tag: "NEW",
      tagColor: "bg-[#006241] text-white",
      desc: "편리한 그립감의 튼튼한 핸들과 감각적인 레드 컬러웨이가 돋보이는 대용량 보온·보냉 스테인리스 텀블러입니다.",
      icon: "🥤",
      highlight: "인체공학적 핸들 & 진공 보온 구조",
    },
    {
      id: "md-ribbon-coldcup",
      name: "화이트 리본 콜드컵",
      price: "48,000원",
      tag: "SIGNATURE",
      tagColor: "bg-[#D62300] text-white",
      desc: "사탕 지팡이(캔디 케인) 스트라이프 빨대와 헬로키티의 시그니처 대형 레드 리본 장식이 더해진 크리스마스 콜드컵입니다.",
      icon: "🎀",
      highlight: "캔디 케인 스트로우 + 대형 레드 리본",
    },
    {
      id: "md-face-mug",
      name: "헬로키티 페이스 머그",
      price: "38,000원",
      tag: "BEST",
      tagColor: "bg-[#006241] text-white",
      desc: "헬로키티의 사랑스러운 얼굴 형태를 입체적으로 형상화한 소장 가치 100% 한정판 도자기 세라믹 머그잔입니다.",
      icon: "☕",
      highlight: "3D 입체 키티 얼굴 디자인",
    },
    {
      id: "md-slim-thermos",
      name: "화이트 슬림 보온병",
      price: "38,000원",
      tag: "PORTABLE",
      tagColor: "bg-[#006241] text-white",
      desc: "슬림한 크림 화이트 바디에 헬로키티 포인트 아트워크와 산뜻한 레드 리드가 결합된 휴대용 보온병입니다.",
      icon: "✨",
      highlight: "초경량 슬림 바디 & 완전 밀폐 리드",
    },
    {
      id: "md-doll-keyring",
      name: "헬로키티 인형 키링",
      price: "35,000원",
      tag: "1인 1개 한정",
      tagColor: "bg-[#D62300] text-white",
      desc: "초록색 스타벅스 컵을 품에 꼬옥 안고 있는 헬로키티 미니 봉제인형 키링으로, 가방에 걸어 연출하기 좋습니다.",
      icon: "🧸",
      highlight: "스타벅스 그린 컵을 안고 있는 키링",
    },
    {
      id: "md-glass-mug",
      name: "투명 글라스 머그",
      price: "23,000원",
      tag: "VINTAGE",
      tagColor: "bg-[#006241] text-white",
      desc: "투명한 내열 유리 위에 크리스마스 헬로키티 일러스트와 산뜻한 빨간 손잡이로 포인트를 준 빈티지 무드의 유리컵입니다.",
      icon: "🥛",
      highlight: "빨간 손잡이 포인트 내열 글라스",
    },
    {
      id: "md-foldable-bag",
      name: "레드 접이식 에코백",
      price: "[출시 당일 공개 / [ ]원]",
      tag: "ECO BAG",
      tagColor: "bg-neutral-700 text-white",
      desc: "‘HAPPINESS IN EVERY CUP’ 문구와 아기자기한 키티 패턴이 가득 담긴 접이식 휴대용 포켓 에코백입니다.",
      icon: "👜",
      highlight: "간편한 접이식 휴대용 파우치 일체형",
    },
  ];

  const drinksAndFoods = [
    {
      id: "drink-toffee",
      type: "신규 콜라보 음료",
      name: "헬로키티 토피 초콜릿",
      price: "[19일 매장·앱 공개 / [ ]원]",
      desc: "진한 초콜릿에 고소하고 달콤한 토피 넛 시럽이 어우러지고, 부드러운 휘핑크림 위에 헬로키티 시그니처 '빨간 리본 초콜릿 토핑'이 올라간 스페셜 홀리데이 음료입니다.",
      badge: "⭐ 별 3개 추가 적립",
      badgeColor: "bg-[#D62300] text-white",
      imgUrl: "/kitty-toffee-drink.jpg",
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
      imgUrl: "/kitty-macaron.jpg",
      highlight: "사과잼 & 카라멜 화이트 가나슈 필링",
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
      name: "SSG.COM, 29CM, 무신사 등 8개 채널",
      type: "공식 이커머스",
      openTime: "11월 19일 오전 7:00 순차 오픈",
      desc: "신세계 SSG.COM, 네이버 브랜드스토어, G마켓, 29CM, 무신사, W컨셉 등 8개 정식 판매처",
      badge: "온라인 공식관",
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
                A Sweeter Winter Together
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed font-medium">
              <strong>11월 19일(목) 오전 7시 온라인 오픈!</strong> 스타벅스 2차 크리스마스 프로모션으로 찾아온 헬로키티 한정판 미니 트리, 머그, 텀블러 실물 굿즈 사진과 개별 정가를 확인해 보세요.
            </p>
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#md-items"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#D62300] hover:bg-[#b81e00] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>올해 굿즈 사진 & 가격 보기</span>
              <span>↓</span>
            </a>
            <a
              href="#drinks-foods"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-[#006241] bg-[#E8F2EC] hover:bg-[#d6e7dc] border border-[#006241]/20 transition-all"
            >
              <span>신규 음료 & 마카롱</span>
              <span>→</span>
            </a>
          </div>
        </header>

        {/* =========================================================
            2. 올해 공식 굿즈 실물 보도사진 & 개별 품목/가격 쇼케이스
           ========================================================= */}
        <section id="md-items" className="space-y-5 scroll-mt-6 sm:scroll-mt-10">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎁</span>
              <h2 className="text-lg sm:text-xl font-black text-[#11241A]">
                2026 스타벅스 헬로키티 크리스마스 굿즈 (11/19 1차)
              </h2>
            </div>
            <span className="text-xs font-bold text-[#D62300] bg-[#FFF0ED] px-3 py-1 rounded-full border border-[#F5B8AD]">
              1차 10종 출시
            </span>
          </div>

          {/* ⭐ 올해 실제 보도자료 실물 굿즈 단체 사진 */}
          <div className="rounded-3xl border-2 border-[#006241]/25 bg-white overflow-hidden shadow-sm">
            <div className="relative w-full overflow-hidden bg-neutral-100">
              <img
                src="/starbucks-kitty-2026.jpg"
                alt="2026 스타벅스 헬로키티 크리스마스 프로모션 공식 보도자료 실물 굿즈 사진"
                className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            <div className="p-4 bg-[#F8FAF8] border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-neutral-600">
              <span className="font-bold text-[#006241]">
                📸 2026 크리스마스 프로모션 공식 실물 보도사진 (미니 트리, 머그, 텀블러, 키링 등)
              </span>
              <span className="text-[11px] text-neutral-500">
                11월 19일 오전 7시 온라인 8개 채널 & 매장 오픈
              </span>
            </div>
          </div>

          {/* 굿즈 8대 주요 품목 개별 가격 & 스펙 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {mdItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl border border-[#006241]/20 bg-white p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-[#006241] transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.icon}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-base text-[#11241A] group-hover:text-[#006241] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#D62300] mt-0.5">
                      ✨ {item.highlight}
                    </p>
                    <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* 가격 정보 */}
                <div className="pt-3.5 mt-3.5 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-medium">공식 정가</span>
                  <span className="text-base font-black text-[#D62300]">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 캠프컵 별도 출시 주의사항 안내 배너 */}
          <div className="rounded-2xl border border-amber-300 bg-amber-50/80 p-4 flex items-start gap-3">
            <span className="text-xl">⚠️</span>
            <div className="text-xs text-amber-900 leading-relaxed">
              <strong className="font-bold block text-sm mb-0.5">[출시 품목 참고 안내]</strong>
              기대를 모았던 <strong>‘SS 위드 헬로키티 캠프컵 텀블러 591ml (레드·크림·초코 3종)’</strong>은 11월 19일 1차 오픈 목록에서 제외되었으며, <strong>추후 별도 일정으로 재공지</strong>되어 출시될 예정입니다.
            </div>
          </div>
        </section>

        {/* =========================================================
            3. 신규 콜라보 음료 & 마카롱 실물 사진
           ========================================================= */}
        <section id="drinks-foods" className="space-y-4 scroll-mt-6 sm:scroll-mt-10">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">☕</span>
              <h2 className="text-lg sm:text-xl font-black text-[#11241A]">
                신규 음료 & 디저트 실물 사진
              </h2>
            </div>
            <span className="text-xs font-bold text-[#006241]">
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

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-medium">출시 가격</span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-700">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tri-Star Dash 이벤트 안내 */}
          <div className="rounded-2xl border border-[#D62300]/30 bg-[#FFF5F2] p-4 sm:p-5 flex items-start gap-3.5">
            <span className="text-2xl mt-0.5">⭐</span>
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="font-black text-[#D62300] text-sm sm:text-base">
                [이벤트] 헬로키티 음료 주문 시 별 3개 추가 적립! (Tri-Star Dash)
              </div>
              <p className="text-neutral-700 leading-relaxed font-medium">
                <strong>11월 19일 ~ 11월 25일 (7일간)</strong> 스타벅스 그린·골드 회원이 사이렌 오더 또는 딜리버스로 <strong>‘헬로키티 토피 초콜릿’</strong> 또는 <strong>‘홀리데이 캐모마일 릴렉서’</strong> 주문 시 한 잔당 <strong>별 3개</strong> 추가 적립 (매장 POS 주문 시 별 2개).
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. 1차 & 2차 분산 출시 일정
           ========================================================= */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-lg sm:text-xl font-black text-[#11241A] flex items-center gap-2">
              <span>🗓️</span>
              <span>총 22종 분산 출시 일정 캘린더</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-5 rounded-2xl border-2 border-[#006241] bg-[#F4F9F5] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#006241] text-white">
                  D-DAY 1차 오픈
                </span>
                <span className="text-xs font-bold text-[#006241]">총 10종 선공개</span>
              </div>
              <h3 className="font-extrabold text-base text-[#11241A] pt-1">
                1차 출시 : 11월 19일(목)
              </h3>
              <p className="text-xs text-[#006241] font-semibold">
                ⏰ 오전 7시 온라인 오픈 / 매장 영업시간 오픈
              </p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                크리스마스 미니 트리(61,000원), 머그(38,000원), 텀블러(52,000원), 인형 키링(35,000원) 등 10종
              </p>
            </div>

            <div className="p-5 rounded-2xl border-2 border-[#D62300] bg-[#FFF8F7] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#D62300] text-white">
                  2차 오픈 예정
                </span>
                <span className="text-xs font-bold text-[#D62300]">추가 12종 공개</span>
              </div>
              <h3 className="font-extrabold text-base text-[#11241A] pt-1">
                2차 출시 : 12월 2일(수)
              </h3>
              <p className="text-xs text-[#D62300] font-semibold">
                ⏰ 오전 7시 온라인 오픈 / 매장 영업시간 오픈
              </p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                스페셜 홀리데이 머그, 토트백, 패브릭 굿즈 등 12종 추가 라인업 순차 공개
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            5. 온·오프라인 8개 공식 판매처 안내
           ========================================================= */}
        <section id="channels" className="rounded-3xl border border-[#006241]/20 bg-white p-6 sm:p-8 space-y-5 shadow-xs scroll-mt-6 sm:scroll-mt-10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006241] uppercase tracking-wider">
              <span>🛒</span>
              <span>11월 19일 오전 7시 판매 채널</span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-[#11241A]">
              온·오프라인 공식 판매처 안내
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              온라인은 11월 19일 오전 7시부터 선착순 판매가 시작되며, 오프라인 매장은 지점별 오픈 시간에 판매됩니다.
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
            6. 문의 폼
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
