"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const news = [
  { slug: "bienfaits-reforestation-climat", date: "12 avril 2025", title: "Les bienfaits de la reforestation sur le climat", image: "/news/1.png", excerpt: "Comment nos actions de reboisement contribuent à la lutte contre le changement climatique." },
  { slug: "nouveau-projet-tortues-marines", date: "17 mai 2025", title: "Un nouveau projet pour protéger les tortues marines", image: "/news/2.png", excerpt: "Lancement d'un partenariat pour la protection des sites de ponte." },
  { slug: "mobilisation-citoyenne", date: "26 mars 2024", title: "Mobilisation citoyenne : retour sur notre dernière action", image: "/news/3.png", excerpt: "Retour en images sur notre dernière journée de plantation avec les bénévoles." },
];

export default function ActualitesPage() {
  const t = useTranslations("actualitesPage");

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <p className="text-green-700 font-semibold text-sm mb-2">{t("label").toUpperCase()}</p>
      <h1 className="text-4xl font-bold text-green-900 mb-10">{t("titre")}</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {news.map((n) => (
          <div key={n.slug} className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <img src={n.image} alt={n.title} className="w-full h-40 object-cover" />
            <div className="p-5">
              <p className="text-xs text-gray-500 mb-2">📅 {n.date}</p>
              <h2 className="font-bold mb-2">{n.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{n.excerpt}</p>
              <Link href={`/actualites/${n.slug}`} className="text-green-700 font-medium text-sm">
                {t("lireArticle")} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}