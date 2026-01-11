import Image from "next/image";

const CompleteSolution = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row w-full gap-x-5 gap-y-8 items-center justify-center py-30 px-10">
      <Image
        src="/images/constr_lightMode.png"
        alt="Bascorp Soluzioni Complete"
        width={400}
        height={400}
        className="dark:hidden"
      />
      <Image
        src="/images/constr_darkMode.png"
        alt="Bascorp Soluzioni Complete"
        width={400}
        height={400}
        className="hidden dark:block"
      />
      <h3 className="md:text-5xl text-3xl text-center font-medium md:text-left max-w-xl">
        <span className="text-primary font-medium">Ristrutturazione</span>{" "}
        completa a partire da{" "}
        <span className="text-primary font-medium">€550/mq</span>
      </h3>
    </section>
  );
};

export default CompleteSolution;
