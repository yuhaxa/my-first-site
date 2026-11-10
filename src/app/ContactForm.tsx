"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitError, setSubmitError] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "이름 또는 닉네임을 입력해 주세요.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해 주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식(예: name@example.com)을 입력해 주세요.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "문의 제목을 입력해 주세요.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "문의 내용을 입력해 주세요.";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "이메일 전송에 실패했습니다.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "이메일 전송 중 오류가 발생했습니다.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div
      id="contact"
      className="p-5 sm:p-6 rounded-2xl border border-[#AD2953] bg-[#D8EFF2] text-left space-y-4 scroll-mt-6 sm:scroll-mt-10 font-sans"
    >
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs font-bold text-[#AD2953] uppercase tracking-wider">
          <span className="text-sm">💬</span>
          <span>문의사항 남기기</span>
        </div>
        <p className="text-xs sm:text-sm text-neutral-700 font-medium">
          궁금한 점이나 남기고 싶으신 메시지가 있다면 언제든 작성해 주세요!
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-5 rounded-xl bg-white/80 border border-[#AD2953]/30 text-center space-y-2 py-6">
          <div className="text-2xl">✨</div>
          <p className="text-sm sm:text-base font-bold text-[#AD2953]">문의사항이 성공적으로 접수되었습니다!</p>
          <p className="text-xs sm:text-sm text-neutral-700 font-medium">
            남겨주신 소중한 메시지를 확인 후 빠르게 답변드리겠습니다.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#AD2953] border border-[#AD2953] hover:bg-[#AD2953] hover:text-white transition-all shadow-sm"
            >
              새로운 문의 작성하기
            </button>
          </div>
        </div>
      ) : (
        <form noValidate onSubmit={handleSubmit} className="space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* 이름 / 닉네임 */}
            <div className="space-y-1">
              <label htmlFor="contact-name" className="block text-xs sm:text-sm font-bold text-[#AD2953]">
                이름 / 닉네임 <span className="text-[#AD2953]">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="홍길동"
                className={`w-full px-3.5 py-2.5 rounded-xl border font-sans text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 bg-white/85 focus:outline-none transition-colors ${
                  errors.name
                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-[#AD2953]/40 focus:border-[#AD2953] focus:ring-1 focus:ring-[#AD2953]"
                }`}
              />
              {errors.name && (
                <p className="text-[11px] sm:text-xs text-red-600 font-medium pt-0.5">{errors.name}</p>
              )}
            </div>

            {/* 이메일 */}
            <div className="space-y-1">
              <label htmlFor="contact-email" className="block text-xs sm:text-sm font-bold text-[#AD2953]">
                이메일 <span className="text-[#AD2953]">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="example@email.com"
                className={`w-full px-3.5 py-2.5 rounded-xl border font-sans text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 bg-white/85 focus:outline-none transition-colors ${
                  errors.email
                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-[#AD2953]/40 focus:border-[#AD2953] focus:ring-1 focus:ring-[#AD2953]"
                }`}
              />
              {errors.email && (
                <p className="text-[11px] sm:text-xs text-red-600 font-medium pt-0.5">{errors.email}</p>
              )}
            </div>
          </div>

          {/* 문의 제목 */}
          <div className="space-y-1">
            <label htmlFor="contact-subject" className="block text-xs sm:text-sm font-bold text-[#AD2953]">
              문의 제목 <span className="text-[#AD2953]">*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              placeholder="문의 제목을 입력해 주세요"
              className={`w-full px-3.5 py-2.5 rounded-xl border font-sans text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 bg-white/85 focus:outline-none transition-colors ${
                errors.subject
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-[#AD2953]/40 focus:border-[#AD2953] focus:ring-1 focus:ring-[#AD2953]"
              }`}
            />
            {errors.subject && (
              <p className="text-[11px] sm:text-xs text-red-600 font-medium pt-0.5">{errors.subject}</p>
            )}
          </div>

          {/* 문의 내용 */}
          <div className="space-y-1">
            <label htmlFor="contact-message" className="block text-xs sm:text-sm font-bold text-[#AD2953]">
              문의 내용 <span className="text-[#AD2953]">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="문의하실 내용을 자유롭게 입력해 주세요."
              className={`w-full px-3.5 py-2.5 rounded-xl border font-sans text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 bg-white/85 focus:outline-none transition-colors resize-none ${
                errors.message
                  ? "border-red-500 focus:ring-1 focus:ring-red-500"
                  : "border-[#AD2953]/40 focus:border-[#AD2953] focus:ring-1 focus:ring-[#AD2953]"
              }`}
            />
            {errors.message && (
              <p className="text-[11px] sm:text-xs text-red-600 font-medium pt-0.5">{errors.message}</p>
            )}
          </div>

          {submitError && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-600 font-medium">
              ⚠️ {submitError}
            </div>
          )}

          {/* 버튼 영역 */}
          <div className="flex justify-end pt-1">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#AD2953] hover:bg-[#8e2043] transition-all shadow-sm hover:shadow hover:scale-[1.01] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-1 h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  <span>보내는 중...</span>
                </>
              ) : (
                <>
                  <span>문의 보내기</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
