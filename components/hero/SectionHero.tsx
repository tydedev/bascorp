import React from "react";

interface Props {
  title: string;
}

const SectionHero = ({ title }: Props) => {
  return (
    <section className="min-h-[25vh] flex items-end text-slate-200 bg-slate-900 px-4 sm:px-3 select-none">
      <div className="max-w-6xl space-y-5 mx-auto w-full py-8">
        <h1 className="text-3xl sm:text-5xl font-bold">
          {title}
          <span className="text-primary">.</span>{" "}
        </h1>
      </div>
    </section>
  );
};

export default SectionHero;
