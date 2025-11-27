"use client";

import HomeHero from "@/components/hero/HomeHero";
import ServiziCards from "@/components/servizi/ServiziCards";

export default function Home() {
  return (
    <div className="w-full h-full">
      <HomeHero />
      <section className="py-16 text-center">
        <div className="w-full mx-auto space-y-12">
          <ServiziCards />
        </div>
      </section>
    </div>
  );
}
