import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getTranslations } from "next-intl/server";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { SplitLinesReveal } from "@/shared/split-lines-reveal/SplitLinesReveal";

export const ContactUs = async () => {
    const t = await getTranslations("contactUs");

    return (
        <section
            id="contact"
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-button px-4 py-20 md:py-28 "
        >
            <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center gap-10">
                <SplitLinesReveal
                    stagger={0.2}
                    trigger="top 80%"
                    className="flex flex-col items-center justify-center gap-3 text-center"
                >
                    <h2 className="text-md font-semibold uppercase tracking-[0.18em] text-button-foreground">
                        {t("eyebrow")}
                    </h2>
                    <p className="text-4xl font-bold text-white md:text-6xl">
                        {t("title")}
                    </p>
                </SplitLinesReveal>
                <Card className="w-full max-w-2xl rounded-lg border-0 bg-white py-0 shadow-2xl">
                    <CardContent className="p-6 md:p-8">
                        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <label className="flex flex-col gap-2 text-sm font-semibold text-button">
                                {t("fields.firstName")}
                                <Input
                                    type="text"
                                    name="firstName"
                                    className="h-11 border-border bg-background text-sm text-button placeholder:text-muted-foreground/80 focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background"
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm font-semibold text-button">
                                {t("fields.lastName")}
                                <Input
                                    type="text"
                                    name="lastName"
                                    className="h-11 border-border bg-background text-sm text-button placeholder:text-muted-foreground/80 focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background"
                                />
                            </label>

                            <label className="col-span-full flex flex-col gap-2 text-sm font-semibold text-button">
                                {t("fields.phone")}
                                <Input
                                    type="tel"
                                    name="phone"
                                    className="h-11 border-border bg-background text-sm text-button placeholder:text-muted-foreground/80 focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background"
                                />
                            </label>

                            <label className="col-span-full flex flex-col gap-2 text-sm font-semibold text-button">
                                {t("fields.serviceType")}
                                <Select name="serviceType">
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
                            </label>

                            <label className="col-span-full flex flex-col gap-2 text-sm font-semibold text-button">
                                {t("fields.message")}
                                <Textarea
                                    name="message"
                                    placeholder={t("fields.messagePlaceholder")}
                                    className="min-h-28 resize-none border-border bg-background text-sm text-button placeholder:text-muted-foreground/80 focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background"
                                />
                            </label>

                            <button
                                type="submit"
                                className="col-span-full mt-1 h-12 rounded-md bg-button-foreground text-base font-bold text-button transition-all duration-300 hover:opacity-90 hover:scale-99 active:scale-96"
                            >
                                {t("submit")}
                            </button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
