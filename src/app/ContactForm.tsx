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
    <section
      id="contact"
      className="rounded-2xl border-2 border-[var(--window-border)] bg-[var(--window-bg)] retro-window-shadow overflow-hidden scroll-mt-6 sm:scroll-mt-10"
    >
      {/* 윈도우 타이틀바 */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-gradient-to-r from-[var(--window-bar-start)] to-[var(--window-bar-end)] border-b border-[var(--window-border)] text-[var(--window-bar-text)] select-none">
        <div className="flex items-center gap-2 font-bold text-xs">
          <span>💌</span>
          <span>contact_messenger.exe</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button type="button" aria-label="최소화" className="w-4 h-4 rounded-sm bg-white/70 border border-[var(--window-border)] flex items-center justify-center text-[9px] font-bold text-[var(--window-bar-text)] hover:bg-white shadow-xs">_</button>
          <button type="button" aria-label="최대화" className="w-4 h-4 rounded-sm bg-white/70 border border-[var(--window-border)] flex items-center justify-center text-[9px] font-bold text-[var(--window-bar-text)] hover:bg-white shadow-xs">□</button>
          <button type="button" aria-label="닫기" className="w-4 h-4 rounded-sm bg-[#e8889e] border border-[#a63e55] flex items-center justify-center text-[9px] font-bold text-white hover:bg-[#d66b84] shadow-xs">×</button>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-4">
        <div className="space-y-1">
          <h2 className="text-xs sm:text-sm font-bold text-[var(--primary)] uppercase tracking-wider flex items-center gap-1.5">
            <span>💬</span>
            <span>문의사항 남기기</span>
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-sub)]">
            궁금한 점이나 남기고 싶으신 메시지가 있다면 언제든 편하게 작성해 주세요!
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-5 rounded-xl border border-emerald-300 bg-emerald-50 text-center space-y-2">
            <div className="text-2xl">🎉</div>
            <h3 className="font-bold text-sm text-emerald-800">문의가 성공적으로 전송되었습니다!</h3>
            <p className="text-xs text-emerald-700 leading-relaxed">
              작성해 주신 이메일로 확인 후 빠른 시일 내에 답변드리겠습니다.
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-2 btn-retro-secondary px-4 py-1.5 rounded-full text-xs font-bold"
            >
              새 문의 작성하기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {submitError && (
              <div className="p-3 rounded-lg border border-red-300 bg-red-50 text-xs text-red-700">
                ⚠️ {submitError}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label htmlFor="contact-name" className="block text-xs font-semibold text-[var(--text-main)]">
                  보내시는 분 성함 / 닉네임 <span className="text-[var(--primary)]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="예: 홍길동"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border bg-white text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 ${
                    errors.name ? "border-red-400" : "border-[var(--card-border)]"
                  }`}
                />
                {errors.name && <p className="text-[11px] text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--text-main)]">
                  회신받으실 이메일 <span className="text-[var(--primary)]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border bg-white text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 ${
                    errors.email ? "border-red-400" : "border-[var(--card-border)]"
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="contact-subject" className="block text-xs font-semibold text-[var(--text-main)]">
                문의 제목 <span className="text-[var(--primary)]">*</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="어떤 내용에 관한 문의인가요?"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border bg-white text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 ${
                  errors.subject ? "border-red-400" : "border-[var(--card-border)]"
                }`}
              />
              {errors.subject && <p className="text-[11px] text-red-500">{errors.subject}</p>}
            </div>

            <div className="space-y-1">
              <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--text-main)]">
                문의 내용 <span className="text-[var(--primary)]">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="궁금하신 점이나 전하고 싶은 메시지를 자유롭게 적어 주세요."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className={`w-full px-3 py-2 text-xs sm:text-sm rounded-lg border bg-white text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 leading-relaxed ${
                  errors.message ? "border-red-400" : "border-[var(--card-border)]"
                }`}
              />
              {errors.message && <p className="text-[11px] text-red-500">{errors.message}</p>}
            </div>

            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-retro-primary w-full py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>전송 중...</span>
                  </>
                ) : (
                  <>
                    <span>📮 문의 메일 보내기</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
