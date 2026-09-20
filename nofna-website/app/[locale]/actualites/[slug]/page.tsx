import { getActualiteBySlug } from "@/lib/strapi";

export default async function ActualiteDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = await getActualiteBySlug(slug, locale);

  if (!article) {
    return <main className="max-w-3xl mx-auto px-4 py-16">Article introuvable.</main>;
  }

  const imageUrl = article.image?.formats?.large?.url || article.image?.url;

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-xs text-gray-500 mb-4">
        📅 {new Date(article.date_publication).toLocaleDateString(locale)}
      </p>
      <h1 className="text-4xl font-bold text-green-900 mb-6">{article.titre}</h1>

      {imageUrl && (
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
          alt={article.titre}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
      )}

      <div className="text-gray-700 leading-relaxed space-y-4">
        {article.contenu.map((block: any, i: number) => (
          <p key={i}>{block.children.map((child: any) => child.text).join("")}</p>
        ))}
      </div>
    </main>
  );
}