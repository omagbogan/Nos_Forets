import { getActualites } from "@/lib/strapi";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function ActualitesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const actualites = await getActualites(locale);
  const t = await getTranslations({ locale, namespace: "actualitesPage" });

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <p className="text-green-700 font-semibold text-sm mb-2">{t("label").toUpperCase()}</p>
      <h1 className="text-4xl font-bold text-green-900 mb-10">{t("titre")}</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {actualites.map((n: any) => (
          <div key={n.documentId} className="bg-white rounded-lg overflow-hidden shadow-sm">
            {n.image?.formats?.small?.url && (
              <img
                src={`http://localhost:1337${n.image.formats.small.url}`}
                alt={n.titre}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-5">
              <p className="text-xs text-gray-500 mb-2">
                📅 {new Date(n.date_publication).toLocaleDateString(locale)}
              </p>
              <h2 className="font-bold mb-2">{n.titre}</h2>
              <p className="text-sm text-gray-600 mb-3">{n.extrait}</p>
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