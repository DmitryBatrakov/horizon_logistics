import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
    text: string;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
};

export const AnimatedButton = ({
    text,
    onClick,
    children,
    className,
}: AnimatedButtonProps) => {
    return (
        <button
            className={cn(
                "cursor-pointer py-2 px-5 font-semibold rounded-sm bg-button-foreground text-button border-2 border-button-foreground transition-all duration-300 hover:bg-transparent hover:text-white hover:scale-95 active:scale-90",
                className,
            )}
            onClick={onClick}
        >
            <span>{text}</span>
            <span>{children}</span>
        </button>
    );
};
