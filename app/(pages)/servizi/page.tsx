import SectionHero from "@/components/hero/SectionHero";
import React from "react";

export const metadata = {
  title: "Servizi | Bascorp",
  description:
    "Bascorp offre una gamma completa di servizi per rispondere a tutte le esigenze dei nostri clienti.",
};

const Servizi = () => {
  return (
    <>
      <SectionHero title="Servizi" />
      <div className="max-w-6xl mx-auto px-4 sm:px-0 py-8 w-full">Servizi</div>
    </>
  );
};

export default Servizi;
