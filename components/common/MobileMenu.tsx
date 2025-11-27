import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import useScroll from "../hooks/useScroll";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Contatti", href: "/contatti" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const scroll = useScroll();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        name="menu"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-_r_0_"
        data-state="closed"
        data-slot="sheet-trigger"
        aria-label="Apri menu"
      >
        <Menu
          size={24}
          className={cn(
            "md:hidden",
            scroll > 0 ? "text-foreground" : "text-white"
          )}
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <div className="flex flex-col gap-2 mt-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
