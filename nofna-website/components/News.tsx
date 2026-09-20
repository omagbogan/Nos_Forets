import { getActualites } from "@/lib/strapi";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function News({ locale }: { locale: string }) {
  const allNews = await getActualites(locale);
  const news = allNews.slice(0, 3);
  const t = await getTranslations({ locale, namespace: "actualites" });

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-green-700 font-semibold text-sm mb-1">{t("label").toUpperCase()}</p>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-green-900">{t("titre")}</h2>
          <Link href="/actualites" className="text-green-700 font-medium">{t("voirTout")} →</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n: any) => (
            <div key={n.documentId} className="bg-white rounded-lg overflow-hidden shadow-sm">
              {n.image?.formats?.small?.url && (
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${n.image.formats.small.url || n.image.url}`}
                  alt={n.titre}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">
                  📅 {new Date(n.date_publication).toLocaleDateString(locale)}
                </p>
                <h3 className="font-bold mb-2">{n.titre}</h3>
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