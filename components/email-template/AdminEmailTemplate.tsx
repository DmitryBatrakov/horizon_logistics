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
    } as const,
    row: {
        display: "block",
        marginBottom: "8px",
    } as const,
    label: {
        color: "#4b5563",
        fontWeight: 600,
        marginRight: "4px",
    } as const,
    value: {
        color: "#6b7280",
    } as const,
};

export function AdminEmailTemplate({
    firstName,
    lastName,
    phone,
    serviceType,
    message,
    email,
}: EmailPayload) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <div style={styles.header}>
                    <h1 style={styles.headerTitle}>New request from website</h1>
                </div>
                <div style={styles.body}>
                    <div style={styles.row}>
                        <span style={styles.label}>Name:</span>
                        <span style={styles.value}>
                            {firstName} {lastName}
                        </span>
                    </div>
                    <div style={styles.row}>
                        <span style={styles.label}>Phone:</span>
                        <span style={styles.value}> {phone} </span>
                    </div>
                    <div style={styles.row}>
                        <span style={styles.label}>Service Type:</span>
                        <span style={styles.value}> {serviceType} </span>
                    </div>
                    {message && (
                        <div style={styles.row}>
                            <span style={styles.label}>Message:</span>
                            <span style={styles.value}> {message} </span>
                        </div>
                    )}
                    <div style={styles.row}>
                        <span style={styles.label}>Email:</span>
                        <span style={styles.value}> {email} </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
