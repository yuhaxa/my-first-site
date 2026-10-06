export default function Home() {
  const techStack = [
    {
      name: "Next.js 16",
      desc: "App Router & Turbopack",
    },
    {
      name: "TypeScript",
      desc: "안정적인 정적 타입 시스템",
    },
    {
      name: "Tailwind CSS",
      desc: "모던 유틸리티 스타일링",
    },
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#DAE9DF_0%,#D8EFF2_33%,#D8EFF2_100%)] text-gray-800 flex flex-col items-center justify-center p-6 sm:p-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 상단 뱃지 */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#AD2953]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#AD2953]" />
          프로젝트 준비 완료
        </div>

        {/* 메인 타이틀 및 별 고양이 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-max mx-auto space-y-3">
            {/* 별 고양이 5개 */}
            <div className="flex items-center justify-between w-full px-1">
              <svg width="0" height="0" className="absolute">
                <defs>
                  <clipPath id="star-clip">
                    <path d="M 50 2 Q 53 2 55 8 L 63 28 L 88 32 Q 93 33 91 38 L 74 56 L 79 82 Q 80 87 75 85 L 50 73 L 25 85 Q 20 87 21 82 L 26 56 L 9 38 Q 7 33 12 32 L 37 28 L 45 8 Q 47 2 50 2 Z" />
                  </clipPath>
                </defs>
              </svg>
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <image href="/cat.jpg" x="0" y="0" width="100" height="100" preserveAspectRatio="xMidYMid slice" clipPath="url(#star-clip)" />
                  <path d="M 50 2 Q 53 2 55 8 L 63 28 L 88 32 Q 93 33 91 38 L 74 56 L 79 82 Q 80 87 75 85 L 50 73 L 25 85 Q 20 87 21 82 L 26 56 L 9 38 Q 7 33 12 32 L 37 28 L 45 8 Q 47 2 50 2 Z" stroke="#AD2953" strokeWidth="1" vectorEffect="non-scaling-stroke" fill="none" />
                </svg>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl font-black tracking-tighter text-neutral-900 whitespace-nowrap">
              안녕하세요, 깅나라입니다
            </h1>
          </div>

          <p className="text-neutral-700 font-medium text-xs sm:text-sm text-center leading-relaxed whitespace-nowrap">
            Next.js App Router, TypeScript, Tailwind CSS 기반의 가장 단순하고 깔끔한 스타터 템플릿입니다.
          </p>
        </div>

        {/* 기술 스택 카드 (박스 색상 통일) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="p-4 rounded-2xl border border-[#AD2953] bg-[#D8EFF2]"
            >
              <div className="font-bold text-sm text-[#AD2953]">{tech.name}</div>
              <div className="text-xs text-[#AD2953] mt-1">{tech.desc}</div>
            </div>
          ))}
        </div>

        {/* 시작 안내 카드 (박스 색상 통일) */}
        <div className="p-5 rounded-2xl border border-[#AD2953] bg-[#D8EFF2] text-left space-y-3">
          <div className="text-xs font-bold text-[#AD2953] uppercase tracking-wider">
            시작하기
          </div>
          <div className="space-y-2.5 text-sm">
            <div className="flex items-center justify-between bg-[#D8EFF2] px-3.5 py-2.5 rounded-xl border border-[#AD2953] font-mono text-xs text-[#AD2953]">
              <span className="font-semibold">npm run dev</span>
              <span className="text-[#AD2953] font-sans text-[11px]">로컬 서버 실행 (http://localhost:3000)</span>
            </div>
            <p className="text-xs text-[#AD2953]">
              <code className="text-[#AD2953] font-mono bg-[#D8EFF2] px-2 py-0.5 rounded border border-[#AD2953] font-medium">src/app/page.tsx</code> 파일을 수정하여 나만의 사이트를 만들어보세요.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}



