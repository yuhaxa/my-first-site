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
      newErrors.name = "성함 또는 닉네임을 입력해 주세요.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해 주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식(예: name@example.com)을 입력해 주세요.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "문의 유형 또는 제목을 입력해 주세요.";
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
      className="rounded-3xl border border-[#F4BAC8] bg-white p-6 sm:p-8 shadow-xs scroll-mt-6 sm:scroll-mt-10"
    >
      <div className="space-y-1 text-center pb-4 border-b border-[#F8E1E7]">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E03154] uppercase tracking-wider">
          <span>💌</span>
          <span>COLLABORATION INQUIRY</span>
        </div>
        <h2 className="text-lg sm:text-xl font-black text-[#2B1B20]">
          콜라보 상품 문의 & 사전 알림 신청
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600">
          입점 제휴, 대량 구매, 출시 알림 등 궁금하신 점을 남겨주시면 담당자가 신속히 답변드립니다.
        </p>
      </div>

      <div className="pt-5">
        {isSubmitted ? (
          <div className="p-6 rounded-2xl border border-pink-200 bg-[#FFF5F8] text-center space-y-2">
            <div className="text-3xl">🎀</div>
            <h3 className="font-bold text-sm text-[#E03154]">
              문의가 성공적으로 접수되었습니다!
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              남겨주신 소중한 메시지를 확인 후 기재해 주신 이메일로 빠르게 안내해 드리겠습니다.
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-3 px-5 py-2 rounded-full text-xs font-bold text-white bg-[#E03154] hover:bg-[#C92042] transition-colors"
            >
              추가 문의 작성하기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitError && (
              <div className="p-3 rounded-xl border border-red-200 bg-red-50 text-xs text-red-600">
                ⚠️ {submitError}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label htmlFor="contact-name" className="block text-xs font-bold text-neutral-700">
                  성함 / 업체명 <span className="text-[#E03154]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="예: 홍길동"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E03154]/20 ${
                    errors.name ? "border-red-400" : "border-[#E5D4DA]"
                  }`}
                />
                {errors.name && <p className="text-[11px] text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-email" className="block text-xs font-bold text-neutral-700">
                  회신받으실 이메일 <span className="text-[#E03154]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E03154]/20 ${
                    errors.email ? "border-red-400" : "border-[#E5D4DA]"
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="contact-subject" className="block text-xs font-bold text-neutral-700">
                문의 제목 / 관심 상품 <span className="text-[#E03154]">*</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="예: [ ] 헬로키티 에디션 사전 예약 관련 문의"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E03154]/20 ${
                  errors.subject ? "border-red-400" : "border-[#E5D4DA]"
                }`}
              />
              {errors.subject && <p className="text-[11px] text-red-500">{errors.subject}</p>}
            </div>

            <div className="space-y-1">
              <label htmlFor="contact-message" className="block text-xs font-bold text-neutral-700">
                문의 내용 <span className="text-[#E03154]">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="상품 수량, 배송 희망 일정, 제휴 내용 등 궁금하신 사항을 자유롭게 적어 주세요."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#E03154]/20 leading-relaxed ${
                  errors.message ? "border-red-400" : "border-[#E5D4DA]"
                }`}
              />
              {errors.message && <p className="text-[11px] text-red-500">{errors.message}</p>}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-[#E03154] hover:bg-[#C92042] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>전송 중...</span>
                  </>
                ) : (
                  <>
                    <span>🎀 문의 및 알림 신청 완료</span>
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
