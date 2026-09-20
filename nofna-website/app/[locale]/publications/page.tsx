import { getPublications } from "@/lib/strapi";
import { getTranslations } from "next-intl/server";

export default async function PublicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const publications = await getPublications(locale);
  const t = await getTranslations({ locale, namespace: "publicationsPage" });

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-green-700 font-semibold text-sm mb-2">{t("label").toUpperCase()}</p>
      <h1 className="text-4xl font-bold text-green-900 mb-10">{t("titre")}</h1>

      <div className="space-y-4">
        {publications.map((pub: any) => (
          <div key={pub.documentId} className="bg-white rounded-lg overflow-hidden shadow-sm flex items-center justify-between p-5 hover:shadow-sm transition">
            <div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded mr-2">{pub.categorie}</span>
              <span className="text-xs text-gray-500">
                {new Date(pub.date_publication).toLocaleDateString(locale)} · {pub.langue}
              </span>
              <h2 className="font-bold text-lg mt-2">{pub.titre}</h2>
            </div>
            {pub.fichier?.url && (
              
                <a href={`${process.env.NEXT_PUBLIC_STRAPI_URL}${pub.fichier.url}`}
                download
                className="bg-green-700 text-white text-sm font-medium px-4 py-2 rounded shrink-0"
                >
                {t("telecharger")}
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}