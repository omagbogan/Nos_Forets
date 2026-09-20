import { getPresentation } from "@/lib/strapi";

export default async function PresentationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getPresentation(locale);

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-green-700 font-semibold text-sm mb-2">PRÉSENTATION</p>
      <h1 className="text-4xl font-bold text-green-900 mb-6">Qui sommes-nous ?</h1>

      <div className="prose max-w-none text-gray-700 space-y-4">
        {data.qui_sommes_nous.map((block: any, i: number) => (
          <p key={i}>{block.children.map((child: any) => child.text).join("")}</p>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div>
          <h2 className="text-xl font-bold text-green-900 mb-2">Notre mission</h2>
          <p className="text-gray-600">{data.mission}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-green-900 mb-2">Notre vision</h2>
          <p className="text-gray-600">{data.vision}</p>
        </div>
      </div>
    </main>
  );
}