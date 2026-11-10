import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Home() {
  const techStack = [
    {
      name: "Next.js 16",
      desc: "App Router & Turbopack",
      tag: "FRAMEWORK",
    },
    {
      name: "TypeScript",
      desc: "안정적인 정적 타입 시스템",
      tag: "LANGUAGE",
    },
    {
      name: "Tailwind CSS",
      desc: "모던 유틸리티 스타일링",
      tag: "STYLING",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-4 sm:p-8 md:p-12">
      <div className="max-w-2xl w-full space-y-6">

        {/* =========================================================
            1. 레트로 Y2K 엠블럼 헤더 (타원형 알약 프레임 & 미니 상태 위젯)
           ========================================================= */}
        <header className="relative w-full rounded-[36px] sm:rounded-[44px] p-5 sm:p-7 border-2 border-[var(--window-border)] bg-[var(--window-bg)] retro-window-shadow overflow-hidden">
          {/* 상단 미니 상태 위젯 바 */}
          <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[var(--card-border)]/60 text-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] font-semibold text-[var(--primary)] text-[11px] sm:text-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span>프로젝트 준비 완료</span>
            </div>

            {/* 레트로 날짜/무드 뱃지 (없는 정보는 [ ] 처리) */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 border border-[var(--window-border)]/50 text-[11px] text-[var(--text-sub)]">
              <span>Mood:</span>
              <span className="font-semibold text-[var(--primary)]">[ ]</span>
              <span className="text-[10px] text-gray-400">|</span>
              <span>Status:</span>
              <span className="font-semibold text-emerald-600">[ ]</span>
            </div>
          </div>

          {/* 중앙 알약 엠블럼: 별 고양이 5개 + 대제목 */}
          <div className="flex flex-col items-center text-center space-y-3">
            {/* 별 고양이 5개 (SVG clipPath) */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2.5">
              <svg width="0" height="0" className="absolute">
                <defs>
                  <clipPath id="star-clip">
                    <path d="M 50 2 Q 53 2 55 8 L 63 28 L 88 32 Q 93 33 91 38 L 74 56 L 79 82 Q 80 87 75 85 L 50 73 L 25 85 Q 20 87 21 82 L 26 56 L 9 38 Q 7 33 12 32 L 37 28 L 45 8 Q 47 2 50 2 Z" />
                  </clipPath>
                </defs>
              </svg>
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-9 h-9 sm:w-12 sm:h-12 drop-shadow-sm hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <image href="/cat.jpg" x="0" y="0" width="100" height="100" preserveAspectRatio="xMidYMid slice" clipPath="url(#star-clip)" />
                  <path d="M 50 2 Q 53 2 55 8 L 63 28 L 88 32 Q 93 33 91 38 L 74 56 L 79 82 Q 80 87 75 85 L 50 73 L 25 85 Q 20 87 21 82 L 26 56 L 9 38 Q 7 33 12 32 L 37 28 L 45 8 Q 47 2 50 2 Z" stroke="var(--primary)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none" />
                </svg>
              ))}
            </div>

            {/* 타이틀 타이포그래피 (모바일 28px / 데스크톱 36px) */}
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-main)]">
              안녕하세요, 깅나라입니다
            </h1>

            {/* 한 줄 본문 소개 */}
            <p className="text-xs sm:text-sm text-[var(--text-sub)] max-w-md leading-relaxed font-normal">
              Next.js와 TypeScript로 소소하고 특별한 디지털 공간을 만들어갑니다.
            </p>

            {/* 레트로 볼록 캡슐 버튼 (Beveled Pill Buttons) */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <Link
                href="/about"
                className="btn-retro-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm"
              >
                <span>소개 보러가기</span>
                <span className="text-xs">→</span>
              </Link>
              <a
                href="#contact"
                className="btn-retro-secondary inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm"
              >
                <span>💬 문의하기</span>
              </a>
            </div>
          </div>
        </header>

        {/* =========================================================
            2. 클래식 OS 윈도우 창 프레임 (기술 스택 & 시작하기)
           ========================================================= */}
        <section className="rounded-2xl border-2 border-[var(--window-border)] bg-[var(--window-bg)] retro-window-shadow overflow-hidden">
          {/* 클래식 윈도우 타이틀바 */}
          <div className="flex items-center justify-between px-3.5 py-2 bg-gradient-to-r from-[var(--window-bar-start)] to-[var(--window-bar-end)] border-b border-[var(--window-border)] text-[var(--window-bar-text)] select-none">
            <div className="flex items-center gap-2 font-bold text-xs">
              <span>📁</span>
              <span>desktop_system_info.exe</span>
            </div>
            {/* 윈도우 제어 버튼 [_][□][X] */}
            <div className="flex items-center gap-1.5">
              <button type="button" aria-label="최소화" className="w-4 h-4 rounded-sm bg-white/70 border border-[var(--window-border)] flex items-center justify-center text-[9px] font-bold text-[var(--window-bar-text)] hover:bg-white shadow-xs">_</button>
              <button type="button" aria-label="최대화" className="w-4 h-4 rounded-sm bg-white/70 border border-[var(--window-border)] flex items-center justify-center text-[9px] font-bold text-[var(--window-bar-text)] hover:bg-white shadow-xs">□</button>
              <button type="button" aria-label="닫기" className="w-4 h-4 rounded-sm bg-[#e8889e] border border-[#a63e55] flex items-center justify-center text-[9px] font-bold text-white hover:bg-[#d66b84] shadow-xs">×</button>
            </div>
          </div>

          {/* 윈도우 창 내부 콘텐츠 */}
          <div className="p-4 sm:p-6 space-y-5">
            {/* 상단 서브 헤더 */}
            <div className="flex items-center justify-between border-b border-[var(--card-border)]/50 pb-2">
              <h2 className="text-xs sm:text-sm font-bold text-[var(--primary)] uppercase tracking-wider flex items-center gap-1.5">
                <span>⚡</span>
                <span>기술 스택 (Tech Stack)</span>
              </h2>
              <span className="text-[11px] text-[var(--text-sub)]">v[ ]</span>
            </div>

            {/* 기술 스택 3대 아치/위젯형 카드 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="p-3.5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-xs hover:border-[var(--primary)] hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pill-bg)] text-[var(--primary)] border border-[var(--pill-border)]">
                      {tech.tag}
                    </span>
                  </div>
                  <div className="font-bold text-sm text-[var(--text-main)]">{tech.name}</div>
                  <div className="text-xs text-[var(--text-sub)] mt-1">{tech.desc}</div>
                </div>
              ))}
            </div>

            {/* 시작 안내 미니 터미널 박스 */}
            <div className="p-3.5 sm:p-4 rounded-xl border border-[var(--card-border)] bg-white/90 space-y-2">
              <div className="flex items-center justify-between text-xs text-[var(--text-sub)] font-semibold">
                <span className="flex items-center gap-1 text-[var(--primary)]">
                  <span>💻</span>
                  <span>로컬 개발 안내</span>
                </span>
                <span className="text-[11px] font-mono text-gray-400">terminal</span>
              </div>
              <div className="flex items-center justify-between bg-[var(--text-main)] text-white px-3.5 py-2 rounded-lg font-mono text-xs shadow-inner">
                <span className="text-emerald-400 font-bold">$ npm run dev</span>
                <span className="text-gray-400 font-sans text-[11px]">http://localhost:3000</span>
              </div>
              <p className="text-[11px] sm:text-xs text-[var(--text-sub)] leading-normal pt-0.5">
                <code className="text-[var(--primary)] font-mono bg-[var(--primary-light)] px-1.5 py-0.5 rounded border border-[var(--primary)]/30 font-semibold">src/app/page.tsx</code> 파일을 열어 나만의 콘텐츠를 자유롭게 수정해 보세요.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. 문의사항 폼 (레트로 윈도우 스타일 적용)
           ========================================================= */}
        <ContactForm />

        {/* 하단 푸터 카피라이트 */}
        <footer className="text-center py-4 text-[11px] text-[var(--text-sub)] font-medium">
          <p>© [ ] 깅나라 (ginnara) · All rights reserved.</p>
        </footer>

      </div>
    </main>
  );
}
