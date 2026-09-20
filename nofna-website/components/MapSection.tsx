import { getProjets } from "@/lib/strapi";
import { getTranslations } from "next-intl/server";
import MapWithList from "./MapWithList";

export default async function MapSection({ locale }: { locale: string }) {
  const projects = await getProjets(locale);
  const t = await getTranslations({ locale, namespace: "carte" });

  return (
    <section className="bg-green-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-green-700 font-semibold text-sm mb-1">{t("label").toUpperCase()}</p>
        <h2 className="text-3xl font-bold text-green-900 mb-8">{t("titre")}</h2>

        <div className="bg-white rounded-lg overflow-hidden shadow-sm p-4">
          <div className="h-[680px] md:h-[400px]">
            <MapWithList projects={projects} />
          </div>
        </div>
      </div>
    </section>
  );
}