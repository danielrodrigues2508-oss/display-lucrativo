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

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-[color-mix(in_oklab,var(--ink)_92%,transparent)] px-4 py-3 backdrop-blur-lg md:hidden",
        "transition-all duration-300 [transition-timing-function:var(--ease-premium)]",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="leading-tight">
          <p className="font-display text-lg font-extrabold text-primary">R$37</p>
          <p className="text-[11px] text-muted-foreground">/mês • Lote 1</p>
        </div>
        <CtaButton size="sm" className="flex-1 py-3.5 text-sm">
          QUERO ENTRAR
        </CtaButton>
      </div>
    </div>
  );
}
