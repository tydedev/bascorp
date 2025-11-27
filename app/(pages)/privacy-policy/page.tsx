import SectionHero from "@/components/hero/SectionHero";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const paragraphs = [
  {
    title: "Raccolta dei dati",
    text: "Il sito non raccoglie né archivia dati personali degli utenti. I contatti tramite email o telefono sono volontari e considerati consenso esplicito per rispondere alle richieste.",
  },
  {
    title: "Cookie e strumenti locali",
    text: "Questo sito utilizza esclusivamente strumenti tecnici locali per memorizzare preferenze dell’utente, come il tema chiaro/scuro. Non vengono utilizzati cookie di profilazione o strumenti di tracciamento.",
  },
  {
    title: "Finalità",
    text: "I dati forniti volontariamente vengono utilizzati esclusivamente per rispondere alle richieste dell’utente e non vengono condivisi con terzi.",
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SectionHero title="Informativa sulla Privacy" />
      <div className="max-w-4xl mx-auto px-4 sm:px-0 py-15 w-full flex flex-col h-full">
        {paragraphs.map((p) => (
          <div key={p.title}>
            <h2 className="text-xl font-semibold py-2">{p.title}</h2>
            <p>{p.text}</p>
          </div>
        ))}
        <Separator className="my-5" />
        <div className="space-y-2 text-sm">
          <p>
            {" "}
            Questo sito è gestito da{" "}
            <span className="font-semibold">Cristian Basso</span>, titolare
            della partita IVA{" "}
            <span className="font-semibold">109351171214</span>, con sede a
            Torre del Greco (NA).
          </p>
          <p>
            Per qualsiasi informazione relativa alla presente{" "}
            <i>Privacy Policy</i> o al trattamento dei dati, contattarci email
            all'indirizzo{" "}
            <Link
              href="mailto:email@dominio.it"
              className="text-red-600 font-semibold"
            >
              info@bascorp.it
            </Link>{" "}
            o telefonandoci al numero{" "}
            <Link href="tel:+390667761" className="text-red-600 font-semibold">
              +39 06 676131
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
