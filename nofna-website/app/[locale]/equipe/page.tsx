import { getMembresEquipe } from "@/lib/strapi";
import { getTranslations } from "next-intl/server";

export default async function EquipePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const membres = await getMembresEquipe(locale);
  const t = await getTranslations({ locale, namespace: "equipePage" });

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <p className="text-green-700 font-semibold text-sm mb-2">{t("label").toUpperCase()}</p>
      <h1 className="text-4xl font-bold text-green-900 mb-10">{t("titre")}</h1>

      <div className="grid md:grid-cols-4 gap-8">
        {membres.map((m: any) => (
          <div key={m.documentId} className="text-center">
            {m.photo?.formats?.small?.url && (
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${m.photo.formats.small.url || m.photo.url}`}
                alt={m.nom}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
            )}
            <h2 className="font-bold">{m.nom}</h2>
            <p className="text-sm text-gray-600">{m.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}