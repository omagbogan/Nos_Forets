"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { HeartHandshake } from "lucide-react";

export default function CtaBanner() {
  const t = useTranslations("cta");

  return (
    <section className="bg-green-700 text-white py-10 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <HeartHandshake className="w-10 h-10 text-green-200" />
        <div>
          <p className="text-green-200 text-sm mb-1">{t("label").toUpperCase()}</p>
          <h2 className="text-2xl font-bold">{t("titre")}</h2>
        </div>
      </div>
      <Link href="/contact" className="bg-white text-green-800 font-medium px-6 py-3 rounded-full">
        {t("bouton")} →
      </Link>
    </section>
  );
}