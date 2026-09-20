import { getProjetBySlug } from "@/lib/strapi";

export default async function ProjetDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const projet = await getProjetBySlug(slug, locale);

  if (!projet) {
    return <main className="max-w-3xl mx-auto px-4 py-16">Projet introuvable.</main>;
  }

  const imageUrl = projet.image?.formats?.large?.url || projet.image?.url;

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <span className="inline-block bg-green-700 text-white text-xs px-3 py-1 rounded-full mb-4">
        {projet.tag}
      </span>
      <h1 className="text-4xl font-bold text-green-900 mb-6">{projet.titre}</h1>

      {imageUrl && (
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
          alt={projet.titre}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
      )}

      <div className="text-gray-700 leading-relaxed space-y-4">
        {projet.description.map((block: any, i: number) => (
          <p key={i}>
            {block.children.map((child: any) => child.text).join("")}
          </p>
        ))}
      </div>
    </main>
  );
}