import z from "zod";

export const serviceTypeSchema = z.enum([
    "container-unloading",
    "workforce-staffing",
    "warehouse-maintenance",
]);

export const localeSchema = z.enum(["en", "he"]);

// export const sendEmailSchema = z.object({
//     email: z.email(),
//     firstName: z.string().min(1).max(30),
//     lastName: z.string().min(1).max(30),
//     phone: z.string().min(1).max(15),
//     serviceType: serviceTypeSchema,
//     message: z.string().min(1).max(200).optional(),
//     locale: localeSchema,
// });

export const sendEmailSchema = z.object({
    email: z.email({ message: "validation.emailInvalid" }),
    firstName: z
        .string()
        .min(1, { message: "validation.required" })
        .max(30, { message: "validation.maxLength" }),
    lastName: z
        .string()
        .min(1, { message: "validation.required" })
        .max(30, { message: "validation.maxLength" }),
    phone: z
        .string()
        .trim()
        .min(1, { message: "validation.required" })
        .refine((value) => /^[+\d()\-.\s]+$/.test(value), {
            message: "validation.phoneInvalid",
        })
        .refine((value) => {
            const digits = value.replace(/\D/g, "");
            return digits.length >= 7 && digits.length <= 15;
        }, {
            message: "validation.phoneInvalid",
        }),
    serviceType: z
        .string()
        .min(1, { message: "validation.required" })
        .pipe(serviceTypeSchema),
    message: z
        .string()
        .max(200, { message: "validation.maxLength" })
        .optional(),
    locale: localeSchema,
});

export type Locale = z.infer<typeof localeSchema>;
export type ServiceType = z.infer<typeof serviceTypeSchema>;
export type FormData = z.input<typeof sendEmailSchema>;
