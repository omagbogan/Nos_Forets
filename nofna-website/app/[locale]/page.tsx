import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";
import FeaturedProjects from "@/components/FeaturedProjects";
import MapSection from "@/components/MapSection";
import News from "@/components/News";
import CtaBanner from "@/components/CtaBanner";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <Hero />
      <Stats />
      <Mission />
      <FeaturedProjects locale={locale} />
      <MapSection locale={locale} />
      <News locale={locale} />
      <CtaBanner />
    </main>
  );
}