import Link from "next/link";

export default function AboutPage() {
  const profileInfo = [
    {
      title: "관심 기술",
      desc: "React, Next.js, TypeScript, 모던 웹 프론트엔드 개발",
      icon: "💻",
    },
    {
      title: "목표",
      desc: "사용자 경험(UX)과 아름다운 디자인을 겸비한 웹 서비스 만들기",
      icon: "🎯",
    },
    {
      title: "취미 & 특기",
      desc: "귀여운 고양이 관찰하기, 새로운 기술 스택 탐구하기",
      icon: "🐾",
    },
    {
      title: "현재 상태",
      desc: "소소한 개인 프로젝트와 [ ] 준비 중",
      icon: "✨",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-4 sm:p-8 md:p-12">
      <div className="max-w-2xl w-full space-y-6">

        {/* 상단 홈으로 돌아가기 버튼 */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="btn-retro-secondary inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs"
          >
            <span>←</span>
            <span>메인 홈으로 돌아가기</span>
          </Link>
          <span className="text-[11px] font-mono text-[var(--text-sub)]">about_me.exe</span>
        </div>

        {/* 소개 윈도우 창 */}
        <section className="rounded-2xl border-2 border-[var(--window-border)] bg-[var(--window-bg)] retro-window-shadow overflow-hidden">
          {/* 타이틀바 */}
          <div className="flex items-center justify-between px-3.5 py-2 bg-gradient-to-r from-[var(--window-bar-start)] to-[var(--window-bar-end)] border-b border-[var(--window-border)] text-[var(--window-bar-text)] select-none">
            <div className="flex items-center gap-2 font-bold text-xs">
              <span>👤</span>
              <span>profile_explorer.exe</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button type="button" aria-label="최소화" className="w-4 h-4 rounded-sm bg-white/70 border border-[var(--window-border)] flex items-center justify-center text-[9px] font-bold text-[var(--window-bar-text)] hover:bg-white shadow-xs">_</button>
              <button type="button" aria-label="최대화" className="w-4 h-4 rounded-sm bg-white/70 border border-[var(--window-border)] flex items-center justify-center text-[9px] font-bold text-[var(--window-bar-text)] hover:bg-white shadow-xs">□</button>
              <button type="button" aria-label="닫기" className="w-4 h-4 rounded-sm bg-[#e8889e] border border-[#a63e55] flex items-center justify-center text-[9px] font-bold text-white hover:bg-[#d66b84] shadow-xs">×</button>
            </div>
          </div>

          <div className="p-5 sm:p-7 space-y-6">
            {/* 상단 프로필 헤더 */}
            <div className="space-y-2 border-b border-[var(--card-border)]/50 pb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] font-semibold text-[var(--primary)] text-xs">
                <span>🌸</span>
                <span>소개 페이지</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-main)]">
                안녕하세요! 깅나라의 소개 페이지입니다 ✨
              </h1>
              <p className="text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed">
                디지털 공간에서 나만의 아이디어를 구체적인 웹 서비스로 구현해 나가는 과정을 기록합니다.
              </p>
            </div>

            {/* 소개 항목 아치형 카드 목록 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {profileInfo.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-xs space-y-1.5 hover:border-[var(--primary)] transition-all"
                >
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[var(--primary)]">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-main)] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 하단 홈으로 가기 액션 */}
            <div className="pt-2 flex justify-center">
              <Link
                href="/"
                className="btn-retro-primary inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm"
              >
                <span>메인 화면으로 돌아가기</span>
                <span>🏠</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
