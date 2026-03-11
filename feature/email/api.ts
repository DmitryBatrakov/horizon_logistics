import { EmailPayload, SendEmailResult } from "./model";


export async function sendEmail(data: EmailPayload): Promise<SendEmailResult> {
    try {
        console.log(data);
        
        const res = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
                serviceType: data.serviceType,
                message: data.message ?? undefined,
                email: data.email,
                locale: data.locale,
            }),
        });

        const json = await res.json().catch(() => null);

        if (!res.ok) {
            return {
                ok: false,
                error:
                    typeof json.error === "string"
                        ? json.error
                        : "Ошибка отправки",
            };
        }

        return { ok: true };
    } catch (error) {
        console.error(error);
        return { ok: false, error: "Ошибка сети" };
    }
}
