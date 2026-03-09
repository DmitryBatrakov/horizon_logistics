import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template/EmailTemplate';
import { NextResponse } from 'next/server';
import { sendEmail } from '@/feature/email/api';
import { sendEmailSchema } from '@/feature/email/validation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {

        const body = await req.json();
        const parsed = sendEmailSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json({error: parsed.error.message}, { status: 400 });
        }

        const { firstName, lastName, phone, serviceType, message, email, locale } = parsed.data;



        const { data, error } = await resend.emails.send({
            from: 'Horizon <onboarding@resend.dev>',
            to: 'info@horizonlogistics.com',
            subject: 'New request from website',
            react: EmailTemplate({firstName, lastName, phone, serviceType, message, email, locale}),
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}