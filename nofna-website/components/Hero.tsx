"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative h-[500px] w-full flex items-center text-white">
      <img
        src="/hero-planting.png"
        alt="Plantation d'arbres par des membres de la communauté"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 px-12 max-w-xl">
        <h1 className="text-5xl font-bold mb-4 leading-tight">{t("titre")}</h1>
        <p className="text-lg mb-6">{t("texte")}</p>
        <Link
          href="/projets"
          className="inline-block bg-green-700 hover:bg-green-800 px-6 py-3 rounded font-medium"
        >
          {t("bouton")} →
        </Link>
      </div>
    </section>
  );
}