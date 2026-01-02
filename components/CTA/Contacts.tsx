import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Contacts = () => {
  return (
    <section className="py-20 flex flex-col items-center justify-center gap-y-5 border-t border-muted-foreground/20">
      <p className="text-3xl font-semibold">Devi ristrutturare casa?</p>
      <Button variant={"default"} asChild>
        <Link href="/contatti">Prenota una consulenza gratuita</Link>
      </Button>
    </section>
  );
};

export default Contacts;
