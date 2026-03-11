import { userEmailContent } from "@/data/user-email-content";
import { EmailPayload } from "@/feature/email/model";

const styles = {
    wrapper: {
        padding: "16px",
        borderRadius: "8px",
        width: "100%",
        fontFamily: "sans-serif",
    } as const,
    card: {
        display: "block",
        width: "100%",
        maxWidth: "672px",
        margin: "0 auto",
        border: "1px solid #003b49",
        borderRadius: "12px",
        overflow: "hidden",
    } as const,
    header: {
        backgroundColor: "#003b49",
        padding: "16px",
    } as const,
    headerTitle: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#fafafa",
        margin: 0,
    } as const,
    body: {
        padding: "16px",
        backgroundColor: "white",
        color: "#374151",
        fontSize: "16px",
        lineHeight: 1.5,
    } as const,
    paragraph: {
        margin: "0 0 12px 0",
    } as const,
    divider: {
        border: "none",
        borderTop: "1px solid #e5e7eb",
        margin: "24px 0",
    } as const,
    footer: {
        color: "#888",
        fontSize: "12px",
        margin: 0,
    } as const,
};

export function UserEmailTemplate({
    firstName,
    lastName,
    locale,
}: EmailPayload) {
    const content = userEmailContent[locale] ?? userEmailContent.en;
    const isRtl = locale === "he";

    return (
        <div dir={isRtl ? "rtl" : "ltr"} style={styles.wrapper}>
            <div style={styles.card}>
                <div style={styles.header}>
                    <h1 style={styles.headerTitle}>{content.title}</h1>
                </div>
                <div style={styles.body}>
                    <p style={styles.paragraph}>{content.greeting}</p>
                    <p style={styles.paragraph}>
                        {isRtl
                            ? `${lastName} ${firstName}`
                            : `${firstName} ${lastName}`}
                        ,
                    </p>
                    <p style={styles.paragraph}>{content.body}</p>
                    <hr style={styles.divider} />
                    <p style={styles.footer}>{content.footer}</p>
                </div>
            </div>
        </div>
    );
}
