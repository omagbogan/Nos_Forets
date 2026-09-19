export default function CookiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-green-900 mb-6">
        Politique de cookies
      </h1>

      <div className="prose max-w-none text-gray-700 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Qu&apos;est-ce qu&apos;un cookie ?
          </h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre appareil
            lors de la navigation sur notre site, permettant notamment
            d&apos;améliorer votre expérience de navigation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Cookies utilisés sur ce site
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cookies essentiels :</strong> nécessaires au bon
              fonctionnement du site (navigation, sélection de la langue).
            </li>
            <li>
              <strong>Cookies de mesure d&apos;audience :</strong> permettent
              de comprendre la fréquentation du site de façon anonyme.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-900 mb-2">
            Gestion des cookies
          </h2>
          <p>
            Vous pouvez à tout moment configurer votre navigateur pour
            refuser les cookies ou être averti de leur dépôt.
          </p>
        </section>
      </div>
    </main>
  );
}