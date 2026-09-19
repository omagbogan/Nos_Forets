"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Mission() {
  const t = useTranslations("mission");

  return (
    <section className="py-16 text-center px-4">
      <p className="text-green-700 font-semibold text-sm mb-2">{t("label").toUpperCase()}</p>
      <h2 className="text-3xl font-bold text-green-900 mb-4">{t("titre")}</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-6">{t("texte")}</p>
      <Link href="/presentation" className="text-green-700 font-medium border-b border-green-700">
        {t("lien")} →
      </Link>
    </section>
  );
}