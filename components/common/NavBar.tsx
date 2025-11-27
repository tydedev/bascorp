"use client";

import React, { use } from "react";
import { ModeToggle } from "../toggles/mode-toggle";
import Logo from "./Logo";
import Link from "next/link";
import useScroll from "../hooks/useScroll";
import { cn } from "@/lib/utils";
import useMobile from "../hooks/useMobile";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Contatti", href: "/contatti" },
];

const NavBar = () => {
  const scroll = useScroll();
  const isMobile = useMobile();

  if (isMobile === null)
    return (
      <nav
        className={cn(
          "fixed top-0 z-50 w-full transition-colors duration-300 ease-in-out p-3 h-15 bg-slate-900"
        )}
      ></nav>
    );

  return (
    <nav
      data-scroll={scroll}
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300 ease-in-out p-3 h-15 px-6 sm:px-3",
        scroll > 0
          ? "bg-background/90 shadow-sm backdrop-blur-md"
          : "bg-slate-900"
      )}
    >
      {isMobile ? (
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Logo size={32} hasIcon />
          <Logo hasText />
          <MobileMenu />
        </div>
      ) : (
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Logo size={32} hasText hasIcon />
          <ul className="flex items-center gap-x-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-base font-normal transition-colors",
                    scroll > 0
                      ? "text-foreground hover:text-primary"
                      : "text-white hover:text-white/50"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <ModeToggle
                className={
                  scroll > 0
                    ? "text-foreground"
                    : "text-white hover:bg-slate-800/50 hover:text-white"
                }
                ghost
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
