const news = [
  { slug: "bienfaits-reforestation-climat", date: "12 avril 2025", title: "Les bienfaits de la reforestation sur le climat", image: "/news/1.png", content: "La reforestation joue un rôle clé dans la séquestration du carbone. Chaque arbre planté contribue à absorber du CO2 et à restaurer les cycles naturels de l'eau dans les régions concernées." },
  { slug: "nouveau-projet-tortues-marines", date: "17 mai 2025", title: "Un nouveau projet pour protéger les tortues marines", image: "/news/2.png", content: "En partenariat avec les autorités locales, NOFNA lance un programme de surveillance des sites de ponte le long du littoral." },
  { slug: "mobilisation-citoyenne", date: "26 mars 2024", title: "Mobilisation citoyenne : retour sur notre dernière action", image: "/news/3.png", content: "Plus de 50 bénévoles se sont mobilisés lors de notre dernière journée de plantation, un succès qui confirme l'engagement grandissant de la communauté." },
];

export default async function ActualiteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);

  if (!article) {
    return <main className="max-w-3xl mx-auto px-4 py-16">Article introuvable.</main>;
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-xs text-gray-500 mb-4">📅 {article.date}</p>
      <h1 className="text-4xl font-bold text-green-900 mb-6">{article.title}</h1>
      <img src={article.image} alt={article.title} className="w-full h- object-cover rounded-lg mb-6" />
      <p className="text-gray-700 leading-relaxed">{article.content}</p>
    </main>
  );
}