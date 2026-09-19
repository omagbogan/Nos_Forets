"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const projects = [
  { slug: "reforestation-tropicale", tag: "Reforestation", title: "Restauration des forêts tropicales", image: "/projects/reforestation.png" },
  { slug: "recifs-coralliens", tag: "Biodiversité", title: "Protection des récifs coralliens", image: "/projects/reefs.png" },
  { slug: "mangroves", tag: "Eau douce", title: "Protection des mangroves", image: "/projects/mangrove.png" },
];

export default function FeaturedProjects() {
  const t = useTranslations("projetsVedette");

  return (
    <section className="bg-green-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-green-700 font-semibold text-sm mb-1">{t("label").toUpperCase()}</p>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-green-900">{t("titre")}</h2>
          <Link href="/projets" className="text-green-700 font-medium">{t("voirTout")} →</Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {projects.map((p) => (
            <div key={p.title} className="bg-white rounded-lg overflow-hidden shadow-sm h-full flex flex-col">
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-5 flex flex-col flex-1">
                <span className="inline-block bg-green-700 text-white text-xs px-3 py-1 rounded-full mb-3 w-fit">
                  {p.tag}
                </span>
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
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