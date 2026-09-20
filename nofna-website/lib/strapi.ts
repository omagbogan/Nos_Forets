const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "${process.env.NEXT_PUBLIC_STRAPI_URL}";;

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

export async function getActualites(locale: string) {
  const res = await fetch(`${STRAPI_URL}/api/actualites?locale=${locale}&populate=*&sort=date_publication:desc`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Erreur lors de la récupération des actualités");
  const json = await res.json();
  return json.data;
}

export async function getActualiteBySlug(slug: string, locale: string) {
  const res = await fetch(
    `${STRAPI_URL}/api/actualites?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Erreur lors de la récupération de l'article");
  const json = await res.json();
  return json.data[0] || null;
}

export async function getPublications(locale: string) {
  const res = await fetch(`${STRAPI_URL}/api/publications?locale=${locale}&populate=*&sort=date_publication:desc`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Erreur lors de la récupération des publications");
  const json = await res.json();
  return json.data;
}

export async function getMembresEquipe(locale: string) {
  const res = await fetch(`${STRAPI_URL}/api/membre-equipes?locale=${locale}&populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Erreur lors de la récupération de l'équipe");
  const json = await res.json();
  return json.data;
}

export async function getPresentation(locale: string) {
  const res = await fetch(`${STRAPI_URL}/api/presentation?locale=${locale}&populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Erreur lors de la récupération de la présentation");
  const json = await res.json();
  return json.data;
}