"use client";

import Contacts from "@/components/CTA/Contacts";
import HomeHero from "@/components/hero/HomeHero";
import CompleteSolution from "@/components/servizi/CompleteSolution";
import ServiziCards from "@/components/servizi/ServiziCards";

export default function Home() {
  return (
    <div className="w-full h-full">
      <HomeHero />
      <section className="pt-16 text-center">
        <div className="w-full mx-auto space-y-12">
          <ServiziCards />
        </div>
        <div className="w-full mx-auto space-y-12">
          <CompleteSolution />
        </div>
        <div className="w-full mx-auto">
          <Contacts />
        </div>
      </section>
    </div>
  );
}
