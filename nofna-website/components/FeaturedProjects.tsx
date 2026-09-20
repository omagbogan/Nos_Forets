import { getProjets } from "@/lib/strapi";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function FeaturedProjects({ locale }: { locale: string }) {
  const allProjects = await getProjets(locale);
  const projects = allProjects.slice(0, 4); // les 4 premiers pour la page d'accueil
  const t = await getTranslations({ locale, namespace: "projetsVedette" });

  return (
    <section className="bg-green-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-green-700 font-semibold text-sm mb-1">{t("label").toUpperCase()}</p>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-green-900">{t("titre")}</h2>
          <Link href="/projets" className="text-green-700 font-medium">{t("voirTout")} →</Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {projects.map((p: any) => (
            <div key={p.documentId} className="bg-white rounded-lg overflow-hidden shadow-sm h-full flex flex-col">
              {(p.image?.formats?.medium?.url || p.image?.url) && (
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${p.image.formats?.medium?.url || p.image.url}`}
                  alt={p.titre}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-5 flex flex-col flex-1">  
                <span className="inline-block bg-green-700 text-white text-xs px-3 py-1 rounded-full mb-3 w-fit">
                  {p.tag}
                </span>
                <h3 className="font-bold text-lg mb-2">{p.titre}</h3>
                <Link href={`/projets/${p.slug}`} className="text-green-700 font-medium text-sm mt-auto">
                  {t("enSavoirPlus")} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}