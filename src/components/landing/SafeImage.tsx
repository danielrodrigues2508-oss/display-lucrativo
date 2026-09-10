import React, { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackLabel?: string;
}

export function SafeImage({
  src,
  alt,
  className,
  containerClassName,
  fallbackLabel,
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "relative flex h-full w-full min-h-[140px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-4 text-center",
          containerClassName
        )}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-2 shadow-[0_0_20px_-5px_var(--lime)]">
          <ImageIcon className="h-5 w-5" />
        </div>
        <span className="text-xs font-semibold text-zinc-300 line-clamp-1">
          {fallbackLabel || alt}
        </span>
        <span className="text-[10px] text-zinc-300 font-mono mt-1 opacity-75">
          {src}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-zinc-900/80",
        containerClassName
      )}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-zinc-800/40 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />
    </div>
  );
}
