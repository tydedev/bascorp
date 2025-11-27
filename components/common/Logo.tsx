"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import useScroll from "../hooks/useScroll";
import { cn } from "@/lib/utils";

interface Props {
  size?: number;
  hasIcon?: boolean;
  hasText?: boolean;
  className?: string;
}

const Logo = ({ size = 24, hasIcon, hasText, className }: Props) => {
  const router = useRouter();
  const scroll = useScroll();
  return (
    <div
      className="flex items-center gap-x-2 cursor-pointer"
      onClick={() => router.push("/")}
    >
      {hasIcon && (
        <Image
          src="/logo_light.svg"
          alt="logo"
          width={size}
          height={size}
          priority
        />
      )}

      {hasText && (
        <span
          className={cn(
            "text-2xl font-semibold select-none",
            scroll > 0 ? "text-foreground" : "text-white/95"
          )}
        >
          Bascorp.
        </span>
      )}
    </div>
  );
};

export default Logo;
