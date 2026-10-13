import Link from "next/link";

export default function AboutPage() {
  const profileInfo = [
    {
      title: "관심 기술",
      desc: "React, Next.js, TypeScript, 모던 웹 프론트엔드 개발",
    },
    {
      title: "목표",
      desc: "사용자 경험(UX)과 아름다운 디자인을 겸비한 웹 서비스 만들기",
    },
    {
      title: "취미 & 특기",
      desc: "귀여운 고양이 관찰하기, 새로운 기술 스택 탐구하기",
    },
  ];

  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#DAE9DF_0%,#D8EFF2_33%,#D8EFF2_100%)] text-gray-800 flex flex-col items-center justify-center p-6 sm:p-12">
      <div className="max-w-2xl w-full text-left space-y-8">
        {/* 상단 홈으로 돌아가기 링크 */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#AD2953] hover:underline"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          메인 홈으로 돌아가기
        </Link>

        {/* 페이지 타이틀 */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#AD2953]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#AD2953]" />
            소개 페이지
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tighter text-neutral-900">
            안녕하세요! 깅나라의 소개 페이지입니다 ✨
          </h1>
          <p className="text-neutral-700 font-medium text-xs sm:text-sm leading-relaxed">
            새로운 페이지로 성공적으로 이동했습니다. 이 페이지에 앞으로 더 많은 콘텐츠를 자유롭게 추가할 수 있습니다.
          </p>
        </div>

        {/* 소개 카드 목록 */}
        <div className="space-y-3">
          {profileInfo.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl border border-[#AD2953] bg-[#D8EFF2] space-y-1"
            >
              <div className="font-bold text-sm text-[#AD2953]">{item.title}</div>
              <p className="text-xs sm:text-sm text-neutral-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 하단 액션 버튼 */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#AD2953] hover:bg-[#8e2043] transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>홈으로 가기</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
