import React from "react";
import { Button } from "../ui/button";
import { Mail, Phone, PhoneCall } from "lucide-react";
import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="min-h-[70vh] select-none mx-auto text-slate-200 text-center flex flex-col items-center justify-center bg-slate-900 px-4 sm:px-3">
      <div className="max-w-3xl space-y-5">
        <h1 className="text-3xl sm:text-5xl font-bold px-6 sm:px-0">
          Progetti <span className="text-primary">concreti.</span> Lavori
          <span className="text-primary"> precisi.</span>
        </h1>
        <p className="text-base sm:text-lg">
          Bascorp realizza costruzioni e ristrutturazioni su misura, rispettando
          tempi, qualità e sicurezza.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <Button
            name="telefono"
            variant="default"
            size={"default"}
            className="cursor-pointer leading-none text-slate-950"
            asChild
          >
            <Link
              href="tel:+393334547382"
              aria-label="Chiama per prenotare una consulenza"
            >
              <PhoneCall />
              Prenota una consulenza
            </Link>
          </Button>
          <Button
            name="mail"
            variant="outline"
            size={"default"}
            className="bg-muted-foreground/10 hover:bg-muted-foreground/20 border-muted-foreground/20 hover:border-muted-foreground/30 hover:text-slate-200 cursor-pointer leading-none"
            asChild
          >
            <Link
              href="mailto:info@bascorp.it?subject=Informazioni"
              aria-label="Invia una mail"
            >
              <Mail />
              Scrivici
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
