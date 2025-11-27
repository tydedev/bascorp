import SectionHero from "@/components/hero/SectionHero";
import { Mail, PhoneCall } from "lucide-react";
import Link from "next/link";

const ContactsPage = () => {
  return (
    <>
      <SectionHero title="Contatti" />
      <div className="max-w-4xl mx-auto px-4 sm:px-0 py-8 w-full flex flex-col h-full items-center justify-center md:text-center">
        <p className="font-semibold text-xl mb-2">
          Bascorp è qui per rispondere alle tue esigenze
        </p>
        <p>
          Telefonaci per una prima consulenza gratuita, oppure inviaci una mail
          elencando il tipo di intervento che stai cercando.
          <br /> Verrai ricontattato il prima possibile.
        </p>
        <div className="flex flex-col space-y-3 md:flex-row md:gap-x-5 items-center justify-center py-5">
          <p className="flex gap-x-2 items-center font-semibold">
            <Mail className="h-5 w-5 text-primary shrink-0" />
            <Link href="mailto:info@bascorp.it">info@bascorp.it</Link>
          </p>
          <p className="flex gap-x-2 items-center font-semibold">
            <PhoneCall className="h-5 w-5 text-primary shrink-0" />
            <Link href="tel:+393333333333">+39 333 333 333</Link>
          </p>
        </div>
        <div className="font-semibold text-md mb-2 mt-20 text-center">
          <p>Stai riscontrando problemi con il nostro sito?</p>
          <Link
            href="mailto:bascorp.web@gmail.com?subject=Problema%20con%20il%20sito%20Bascorp"
            className="text-red-600"
          >
            Contattaci
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;

export const metadata = {
  title: "Contatti | Bascorp",
  description:
    "Bascorp offre una gamma completa di servizi per rispondere a tutte le esigenze dei nostri clienti.",
};
