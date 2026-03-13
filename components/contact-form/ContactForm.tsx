import { FormData, Locale, sendEmailSchema } from "@/feature/email/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useLocale, useTranslations } from "next-intl";
import { useForm, Controller } from "react-hook-form";
import { sendEmail } from "@/feature/email/api";
import { toast } from "sonner";
import { EmailPayload } from "@/feature/email/model";

export const ContactForm = () => {
    const t = useTranslations("contactUs");
    const locale = useLocale();
    const tValidation = useTranslations();

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(sendEmailSchema),
        mode: "onChange",
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            serviceType: "",
            message: "",
            email: "",
            locale: locale as Locale,
        },
    });

    const onSubmit = async (data: FormData) => {
        try {
            const result = await sendEmail({ ...data } as EmailPayload);
            if (result.ok) {
                toast.success(t("success"));
                reset();
            } else {
                toast.error(t("error"));
            }
        } catch {
            toast.error(t("error"));
        }
    };

    return (
        <div className="flex items-center justify-center w-full z-10">
            <Card className="w-full max-w-2xl rounded-lg border-0 bg-white py-0 shadow-2xl">
                <CardContent className="p-6 md:p-8">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid grid-cols-1 gap-4 md:grid-cols-2"
                    >
                        <label className="flex flex-col gap-2 text-sm font-semibold text-button">
                            {t("fields.firstName")}
                            <Input
                                type="text"
                                placeholder={t("fields.firstNamePlaceholder")}
                                {...register("firstName")}
                                className="h-11 border-border bg-background text-sm text-button placeholder:text-muted-foreground/80 focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background"
                            />
                            {errors.firstName && (
                                <span className="text-xs font-normal text-red-500">
                                   {tValidation(errors.firstName.message as string)}
                                </span>
                            )}
                        </label>

                        <label className="flex flex-col gap-2 text-sm font-semibold text-button">
                            {t("fields.lastName")}
                            <Input
                                type="text"
                                placeholder={t("fields.lastNamePlaceholder")}
                                {...register("lastName")}
                                className="h-11 border-border bg-background text-sm text-button placeholder:text-muted-foreground/80 focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background"
                            />
                            {errors.lastName && (
                                <span className="text-xs font-normal text-red-500">
                                    {tValidation(errors.lastName.message as string)}
                                </span>
                            )}
                        </label>

                        <label className="col-span-full flex flex-col gap-2 text-sm font-semibold text-button">
                            {t("fields.phone")}
                            <Input
                                type="tel"
                                placeholder={t("fields.phonePlaceholder")}
                                {...register("phone")}
                                className="h-11 border-border bg-background text-sm text-button placeholder:text-muted-foreground/80 focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background"
                            />
                            {errors.phone && (
                                <span className="text-xs font-normal text-red-500">
                                    {tValidation(errors.phone.message as string)}
                                </span>
                            )}
                        </label>

                        <label className="col-span-full flex flex-col gap-2 text-sm font-semibold text-button">
                            {t("fields.email")}
                            <Input
                                type="email"
                                placeholder={t("fields.emailPlaceholder")}
                                {...register("email")}
                                className="h-11 border-border bg-background text-sm text-button placeholder:text-muted-foreground/80 focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background"
                            />
                            {errors.email && (
                                <span className="text-xs font-normal text-red-500">
                                    {tValidation(errors.email.message as string)}
                                </span>
                            )}
                        </label>

                        <label className="col-span-full flex flex-col gap-2 text-sm font-semibold text-button">
                            {t("fields.serviceType")}
                            <Controller
                                control={control}
                                name="serviceType"
                                render={({ field }) => (
                                    <Select
                                        value={field.value || undefined}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger className="h-11 w-full border-border bg-background text-sm text-button focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background">
                                            <SelectValue
                                                placeholder={t(
                                                    "fields.servicePlaceholder",
                                                )}
                                            />
                                        </SelectTrigger>
                                        <SelectContent className="bg-background text-button">
                                            <SelectItem value="container-unloading">
                                                {t(
                                                    "fields.serviceContainerUnloading",
                                                )}
                                            </SelectItem>
                                            <SelectItem value="workforce-staffing">
                                                {t(
                                                    "fields.serviceWorkforceStaffing",
                                                )}
                                            </SelectItem>
                                            <SelectItem value="warehouse-maintenance">
                                                {t(
                                                    "fields.serviceWarehouseMaintenance",
                                                )}
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.serviceType && (
                                <span className="text-xs font-normal text-red-500">
                                    {tValidation(
                                        errors.serviceType.message as string,
                                    )}
                                </span>
                            )}
                        </label>

                        <label className="col-span-full flex flex-col gap-2 text-sm font-semibold text-button">
                            {t("fields.message")}
                            <Textarea
                                {...register("message")}
                                placeholder={t("fields.messagePlaceholder")}
                                className="min-h-28 resize-none border-border bg-background text-sm text-button placeholder:text-muted-foreground/80 focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background"
                            />
                            {errors.message && (
                                <span className="text-xs font-normal text-red-500">
                                    {tValidation(errors.message.message as string)}
                                </span>
                            )}
                        </label>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="col-span-full mt-1 h-12 rounded-md bg-button-foreground text-base font-bold text-button transition-all duration-300 hover:opacity-90 hover:scale-99 active:scale-96 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? t("submitting") : t("submit")}
                        </button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
