import { getProjets } from "@/lib/strapi";


  export default async function ProjetsPage({
      params,
    }: {
      params: Promise<{ locale: string }>;
    }) {
      const { locale } = await params;
      const projets = await getProjets(locale);

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <p className="text-green-700 font-semibold text-sm mb-2">NOS PROJETS</p>
      <h1 className="text-4xl font-bold text-green-900 mb-10">Tous nos projets</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {projets.map((p: any) => (
          <div key={p.documentId} className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <img
              src={`http://localhost:1337${p.image?.formats?.medium?.url || p.image?.url}`}
              alt={p.titre}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <span className="inline-block bg-green-700 text-white text-xs px-3 py-1 rounded-full mb-3">
                {p.tag}
              </span>
              <h2 className="font-bold text-lg mb-2">{p.titre}</h2>
              <p className="text-sm text-gray-600 mb-3">{p.extrait}</p>
              <a href={`/projets/${p.slug}`} className="text-green-700 font-medium text-sm">
                En savoir plus →
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}