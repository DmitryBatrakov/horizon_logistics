import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/shared/reveal-on-scroll/reveal-on-scroll";
import { Separator } from "@/components/ui/separator";

export const ContactUs = () => {
    return (
        // <section
        //     id="contact"
        //     className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-button py-20 px-4 md:py-28 scroll-mt-28"
        // >
        <section
            id="contact"
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-button px-4 py-20 md:py-28 scroll-mt-28"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.07),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_42%),linear-gradient(135deg,#003b49_0%,#005365_100%)]" />
            <Reveal
                duration={0.3}
                delay={0.3}
                className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center gap-10"
            >
                <div className="flex flex-col items-center justify-center gap-3 text-center">
                    <h2 className="text-md font-semibold uppercase tracking-[0.18em] text-button-foreground">
                        get started
                    </h2>
                    <p className="text-4xl font-bold text-white md:text-6xl">
                        Request a Quote
                    </p>
                </div>

                <Card className="w-full max-w-2xl rounded-lg border-0 bg-white py-0 shadow-2xl">
                    <CardContent className="p-6 md:p-8">
                        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <label className="flex flex-col gap-2 text-sm font-semibold text-button">
                                First Name
                                <Input
                                    type="text"
                                    name="firstName"
                                    className="h-11 border-border bg-background text-sm text-button placeholder:text-muted-foreground/80 focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background"
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm font-semibold text-button">
                                Last Name
                                <Input
                                    type="text"
                                    name="lastName"
                                    className="h-11 border-border bg-background text-sm text-button placeholder:text-muted-foreground/80 focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background"
                                />
                            </label>

                            <label className="col-span-full flex flex-col gap-2 text-sm font-semibold text-button">
                                Phone Number
                                <Input
                                    type="tel"
                                    name="phone"
                                    className="h-11 border-border bg-background text-sm text-button placeholder:text-muted-foreground/80 focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background"
                                />
                            </label>

                            <label className="col-span-full flex flex-col gap-2 text-sm font-semibold text-button">
                                Service Type
                                <Select name="serviceType">
                                    <SelectTrigger className="h-11 w-full border-border bg-background text-sm text-button focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background">
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-background text-button">
                                        <SelectItem value="container-unloading">
                                            Container Unloading
                                        </SelectItem>
                                        <SelectItem value="workforce-staffing">
                                            Workforce Staffing
                                        </SelectItem>
                                        <SelectItem value="warehouse-maintenance">
                                            Warehouse Maintenance
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </label>

                            <label className="col-span-full flex flex-col gap-2 text-sm font-semibold text-button">
                                Message
                                <Textarea
                                    name="message"
                                    placeholder="Tell us about your request"
                                    className="min-h-28 resize-none border-border bg-background text-sm text-button placeholder:text-muted-foreground/80 focus-visible:border-button-foreground/60 focus-visible:ring-button-foreground/30 dark:bg-background"
                                />
                            </label>

                            <button
                                type="submit"
                                className="col-span-full mt-1 h-12 rounded-md bg-button-foreground text-base font-bold text-button transition-all duration-300 hover:opacity-90 hover:scale-99 active:scale-96"
                            >
                                Submit Request
                            </button>
                        </form>
                    </CardContent>
                </Card>
            </Reveal>
        </section>
    );
};
