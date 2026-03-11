type LocaleContent = {
    subject: string;
    title: string;
    greeting: string;
    body: string;
    footer: string;
};

export const userEmailContent: Record<string, LocaleContent> = {
    en: {
        subject: "We received your request — Horizon Logistics",
        title: "Thank you for your request",
        greeting: "Hello!",
        body: "We received your request and will contact you shortly.",
        footer: "This is an automated message, please do not reply.",
    },
    he: {
        subject: "אנו קיבלנו את הבקשה שלכם — הורייזון לוגיסטיקס",
        title: "תודה על הבקשה שלכם",
        greeting: "שלום!",
        body: "אנו קיבלנו את הבקשה שלכם וניצור איתכם קשר בקרוב.",
        footer: "זוהי הודעה אוטומטית, אנא אל תפנה אלינו.",
    },
};
