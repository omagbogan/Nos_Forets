export default function PresentationPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <p className="text-green-700 font-semibold text-sm mb-2">PRÉSENTATION</p>
      <h1 className="text-4xl font-bold text-green-900 mb-6">
        Qui sommes-nous ?
      </h1>

      <div className="prose max-w-none text-gray-700 space-y-4">
        <p>
          NOFNA (Notre Forêt, Notre Avenir) est une organisation de la
          société civile engagée dans la restauration des écosystèmes
          forestiers et la protection de la biodiversité en Côte d&apos;Ivoire.
        </p>
        <p>
          Depuis 8 ans, nous travaillons aux côtés des communautés locales
          pour reforester les zones dégradées, protéger les zones humides
          et sensibiliser aux enjeux environnementaux.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div>
          <h2 className="text-xl font-bold text-green-900 mb-2">Notre mission</h2>
          <p className="text-gray-600">
            Restaurer les écosystèmes forestiers avec les communautés locales,
            pour un avenir durable.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-green-900 mb-2">Notre vision</h2>
          <p className="text-gray-600">
            Un monde où les forêts tropicales sont préservées et les
            communautés locales autonomes dans leur gestion.
          </p>
        </div>
      </div>
    </main>
  );
}