"use client";
import { ContactForm } from "@/components/contact-form/ContactForm";
import { useTranslations } from "next-intl";
import { Reveal } from "@/shared/reveal-on-scroll/reveal-on-scroll";

export const ContactUs = () => {
    const t = useTranslations("contactUs");

    return (
        <section
            id="contact"
            className="relative flex  w-full flex-col items-center justify-center overflow-hidden bg-button px-4 py-20 md:py-28 "
        >
            <Reveal className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center gap-10 lg:gap-15">
                <div
                    className="flex flex-col items-start justify-start gap-3 w-full"
                >
                    <h2 className="text-md font-semibold uppercase tracking-[0.16em] text-button-foreground">
                        {t("eyebrow")}
                    </h2>
                    <p className="text-4xl font-bold text-white md:text-6xl">
                        {t("title")}
                    </p>
                </div>

                <div className="flex items-center justify-center w-full z-10">
                    <ContactForm />
                </div>
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/20 blur-[200px] rounded-full z-0" />
            </Reveal>
        </section>
    );
};
