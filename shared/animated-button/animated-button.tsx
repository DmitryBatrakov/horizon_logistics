import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

type AnimatedButtonProps = {
    text: string;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    href?: string;
};

export const AnimatedButton = ({
    text,
    onClick,
    children,
    className,
    href,
}: AnimatedButtonProps) => {
    const classes = cn(
        "cursor-pointer py-2 px-5 font-semibold rounded-sm bg-button-foreground text-button border-2 border-button-foreground transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-95 active:scale-90",
        className,
    );

    if (href) {
        return (
            <Link href={href} className={classes}>
                <span>{text}</span>
                <span>{children}</span>
            </Link>
        );
    }

    return (
        <button
            className={classes}
            onClick={onClick}
        >
            <span>{text}</span>
            <span>{children}</span>
        </button>
    );
};
