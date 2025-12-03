import Link from "next/link";
import React from "react";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="p-4 flex flex-col w-full bg-secondary">
      <div className="max-w-6xl mx-auto w-full">
        <div className="pb-8 text-foreground/70">
          <div className="flex flex-col space-y-3">
            <span className="text-sm flex flex-col space-y-1">
              <p className="font-bold text-lg">
                Bascorp<span className="text-red-600">.</span>
              </p>
              <span>Cristian Basso</span>
              <span>Torre del Greco, Napoli</span>
              <span> P.IVA 109351171214</span>
              <span>
                {" "}
                <Link href="mailto:info@bascorp.it">info@bascorp.it</Link>
              </span>
            </span>
          </div>
        </div>
        <div className="w-full flex items-center gap-1">
          <small className="text-muted-foreground hidden sm:block">
            Copyright &copy; {date} Bascorp.
          </small>
          <small className="text-muted-foreground">
            Sito web realizzato da{" "}
            <Link
              href="https://tydedev.vercel.app"
              target="_blank"
              className="font-semibold"
            >
              Tydedev
            </Link>
            .
          </small>
          <small className="space-x-2 ml-auto flex justify-center w-full sm:w-auto font-medium">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
