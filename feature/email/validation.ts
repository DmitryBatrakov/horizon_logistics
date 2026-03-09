import z from "zod";

export const serviceTypeSchema = z.enum([
    "container-unloading",
    "workforce-staffing",
    "warehouse-maintenance",
]);

export const localeSchema = z.enum(["en", "he"]);

export const sendEmailSchema = z.object({
    firstName: z.string().min(1).max(30),
    lastName: z.string().min(1).max(30),
    phone: z.string().min(1).max(15),
    serviceType: serviceTypeSchema,
    message: z.string().min(1).max(200),
    locale: localeSchema,
});

export type Locale = z.infer<typeof localeSchema>;
export type ServiceType = z.infer<typeof serviceTypeSchema>;
