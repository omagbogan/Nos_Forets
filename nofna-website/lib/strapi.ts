const STRAPI_URL = "http://localhost:1337";

export async function getProjets(locale: string) {
  const res = await fetch(`${STRAPI_URL}/api/projets?locale=${locale}&populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des projets");
  }

  const json = await res.json();
  return json.data;
}

export async function getProjetBySlug(slug: string, locale: string) {
  const res = await fetch(
    `${STRAPI_URL}/api/projets?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération du projet");
  }

  const json = await res.json();
  return json.data[0] || null;
}