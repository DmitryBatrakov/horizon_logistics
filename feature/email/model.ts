import { ServiceType } from "./validation";

export interface EmailPayload {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    serviceType: ServiceType;
    message?: string;
    locale: string;
}

export type SendEmailResult = { ok: true } | { ok: false; error: string };
