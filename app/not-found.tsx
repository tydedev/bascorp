import { Button } from "@/components/ui/button";
import { HardHat } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-full text-center flex flex-col items-center justify-center space-y-3">
      <HardHat className="h-8 w-8 text-primary" />
      <h1 className="text-2xl font-bold">
        <span className="text-3xl">Oops!</span>
        <br /> Qualcosa è andato storto
      </h1>
      <p>La pagina che stai cercando non esiste</p>
      <Button variant="outline" asChild>
        <Link href="/">Torna alla home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
