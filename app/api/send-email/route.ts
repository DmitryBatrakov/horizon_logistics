import { Resend } from "resend";
import { AdminEmailTemplate } from "@/components/email-template/AdminEmailTemplate";
import { UserEmailTemplate } from "@/components/email-template/UserEmailTemplate";
import { NextResponse } from "next/server";
import { sendEmailSchema } from "@/feature/email/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        
        const parsed = sendEmailSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                { error: parsed.error.message },
                { status: 400 },
            );
        }

        const { firstName, lastName, phone, serviceType, message, email, locale } = parsed.data;

        const from = process.env.RESEND_FROM_EMAIL;
        const to = process.env.RESEND_TO_EMAIL;

        if (!from || !to) {
            return NextResponse.json(
                { success: false, error: "Email provider is not configured" },
                { status: 500 },
            );
        }

        
        const [adminResult, userResult] = await Promise.all([
            resend.emails.send({
                from,
                to,
                subject: userEmailSubject[locale] ?? userEmailSubject.en,
                react: AdminEmailTemplate({ firstName, lastName, phone, serviceType, message, email, locale }),
            }),
            resend.emails.send({
                from,
                to: email,
                subject: userEmailSubject[locale] ?? userEmailSubject.en,
                react: UserEmailTemplate({ firstName, lastName, phone, serviceType, message, email, locale }),
            }),
        ]);

        if (adminResult.error) {
            console.error("Admin email error:", adminResult.error);
            return NextResponse.json({ error: adminResult.error.message }, { status: 500 });
        }

        if (userResult.error) {
            const isResendTestRestriction =
                userResult.error.statusCode === 403 &&
                userResult.error.name === "validation_error" &&
                /only send.*to your own email|verify a domain/i.test(userResult.error.message ?? "");
            if (isResendTestRestriction) {
                console.warn(
                    "User confirmation not sent (Resend test mode allows only your own address). Verify a domain at resend.com/domains to send to any recipient."
                );
            } else {
                console.error("User email error:", userResult.error);
                return NextResponse.json({ error: userResult.error.message }, { status: 500 });
            }
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("Message:", (error as Error).message);
        console.error("Stack:", (error as Error).stack);
        console.error("Full error:", JSON.stringify(error, null, 2));
        
        return NextResponse.json(
            { error: (error as Error).message ?? "Internal server error" },
            { status: 500 },
        );
    }
}

const userEmailSubject: Record<string, string> = {
    en: "We received your request — Horizon Logistics",
    he: "אנו קיבלנו את הבקשה שלכם — Horizon Logistics",
};