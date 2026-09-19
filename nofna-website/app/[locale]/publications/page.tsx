"use client";
import { useTranslations } from "next-intl";

const publications = [
  { id: "rapport-annuel-2025", title: "Rapport annuel 2025", category: "Rapport", date: "Mars 2026", lang: "FR", fileUrl: "/docs/rapport-annuel-2025.pdf" },
  { id: "etude-impact-reforestation", title: "Étude d'impact de la reforestation", category: "Étude", date: "Janvier 2026", lang: "FR", fileUrl: "/docs/etude-impact.pdf" },
  { id: "guide-communautes", title: "Guide de gestion communautaire des forêts", category: "Guide", date: "Novembre 2025", lang: "EN", fileUrl: "/docs/guide-communautes.pdf" },
];

export default function PublicationsPage() {
  const t = useTranslations("publicationsPage");

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-green-700 font-semibold text-sm mb-2">{t("label").toUpperCase()}</p>
      <h1 className="text-4xl font-bold text-green-900 mb-10">{t("titre")}</h1>

      <div className="space-y-4">
        {publications.map((pub) => (
          <div key={pub.id} className="bg-white rounded-lg overflow-hidden shadow-sm flex items-center justify-between p-5">
            <div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded mr-2">{pub.category}</span>
              <span className="text-xs text-gray-500">{pub.date} · {pub.lang}</span>
              <h2 className="font-bold text-lg mt-2">{pub.title}</h2>
            </div>
            <a href={pub.fileUrl} download className="bg-green-700 text-white text-sm font-medium px-4 py-2 rounded shrink-0">
              {t("telecharger")}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}