"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const news = [
  { slug: "bienfaits-reforestation-climat", date: "12 avril 2025", title: "Les bienfaits de la reforestation sur le climat", image: "/news/1.png" },
  { slug: "nouveau-projet-tortues-marines", date: "17 mai 2025", title: "Un nouveau projet pour protéger les tortues marines", image: "/news/2.png" },
  { slug: "mobilisation-citoyenne", date: "26 mars 2024", title: "Mobilisation citoyenne : retour sur notre dernière action", image: "/news/3.png" },
];

export default function News() {
  const t = useTranslations("actualites");

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-green-700 font-semibold text-sm mb-1">{t("label").toUpperCase()}</p>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-green-900">{t("titre")}</h2>
          <Link href="/actualites" className="text-green-700 font-medium">{t("voirTout")} →</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n) => (
            <div key={n.slug} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img src={n.image} alt={n.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">📅 {n.date}</p>
                <h3 className="font-bold mb-2">{n.title}</h3>
                <Link href={`/actualites/${n.slug}`} className="text-green-700 font-medium text-sm">
                  {t("lireArticle")} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}