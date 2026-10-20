import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "모든 필수 항목을 입력해 주세요." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY 환경 변수가 설정되지 않았습니다." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || "yuhaxara@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[문의사항] ${subject} (보낸사람: ${name})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #AD2953; border-radius: 16px; background-color: #fafbfc;">
          <h2 style="color: #AD2953; margin-top: 0; font-size: 20px;">📬 새로운 문의사항이 접수되었습니다</h2>
          <hr style="border: none; border-top: 1px solid #AD2953; margin: 16px 0;" />
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 100px;"><strong>보낸이</strong></td>
              <td style="padding: 8px 0; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>회신 이메일</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #AD2953; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>제목</strong></td>
              <td style="padding: 8px 0; color: #111; font-weight: bold;">${subject}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px dashed #d1d5db; margin: 16px 0;" />
          <h3 style="color: #374151; font-size: 15px; margin-bottom: 8px;">문의 내용</h3>
          <div style="background-color: #ffffff; padding: 16px; border-radius: 10px; border: 1px solid #e5e7eb; white-space: pre-wrap; line-height: 1.6; color: #1f2937; font-size: 14px;">
${message}
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af; text-align: center;">
            이 메일은 my-first-site 문의하기 기능을 통해 발송되었습니다.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "이메일 전송 중 서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
