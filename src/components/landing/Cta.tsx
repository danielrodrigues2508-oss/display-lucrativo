import { CHECKOUT_URL } from "@/lib/landing";
import { cn } from "@/lib/utils";


export function CtaButton({
  children,
  className,
  size = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "lg" | "sm";
}) {
  return (
    <a
      href={CHECKOUT_URL}
      className={cn(
        "group inline-flex items-center justify-center rounded-full bg-primary font-display font-extrabold tracking-tight text-primary-foreground",
        "transition-all duration-300 [transition-timing-function:var(--ease-premium)]",
        "shadow-[0_0_50px_-14px_var(--lime)] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_70px_-10px_var(--lime)]",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        size === "lg"
          ? "w-full px-8 py-5 text-base sm:w-auto sm:text-lg"
          : "px-5 py-3 text-sm",
        className,
      )}
    >
      {children}
    </a>
  );
}
