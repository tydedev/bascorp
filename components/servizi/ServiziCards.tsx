import {
  Hammer,
  Paintbrush,
  Recycle,
  SquaresUniteIcon,
  Wrench,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

const servizi = [
  {
    title: "Ristrutturazione",
    description:
      "Ristrutturazioni complete di appartamenti, bagni e cucine con professionalità e attenzione al dettaglio.",
    icon: Hammer,
  },
  {
    title: "Piastrellatura",
    description:
      "Posa di pavimenti e rivestimenti, piastrelle di qualità per bagni, cucine e ambienti residenziali o commerciali.",
    icon: SquaresUniteIcon,
  },
  {
    title: "Tinteggiatura",
    description:
      "Pitturazione interna ed esterna, finiture e decorazioni personalizzate per rinnovare gli ambienti con stile.",
    icon: Paintbrush,
  },
  {
    title: "Servizi elettrici",
    description:
      "Interventi su sistemi e componenti elettrici in ambito civile e commerciale.",
    icon: Zap,
  },
  {
    title: "Manutenzione rapida",
    description: "Supporto costante anche dopo la consegna.",
    icon: Wrench,
  },
  {
    title: "Tutto incluso",
    description:
      "Soluzioni su misura fatte a posta per te, unendo tutti i servizi in un unico servizio.",
    icon: Recycle,
    isExtra: true,
  },
];

const ServiziCards = () => {
  return (
    <>
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">I nostri servizi</h2>
        <p className="text-muted-foreground px-13">
          Professionalità e attenzione al dettaglio in ogni intervento.
        </p>
      </div>
      <div className="grid grid-cols-1 max-w-6xl sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto px-4 sm:px-0">
        {servizi.map((s) => (
          <Card
            key={s.title}
            className={cn(
              "border shadow-md hover:shadow-xl transition-shadow",
              {
                "bg-red-600": s.isExtra,
              }
            )}
          >
            <CardContent className="flex flex-col items-start gap-4">
              <s.icon
                className={cn("text-red-600", { "text-white": s.isExtra })}
              />
              <CardTitle
                className={cn("text-lg font-semibold text-red-600", {
                  "text-white": s.isExtra,
                })}
              >
                {s.title}
              </CardTitle>
              <CardDescription
                className={cn("text-sm text-muted-foreground text-left", {
                  "text-white": s.isExtra,
                })}
              >
                {s.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ServiziCards;
