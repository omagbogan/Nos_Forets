import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";
import FeaturedProjects from "@/components/FeaturedProjects";
import News from "@/components/News";
import CtaBanner from "@/components/CtaBanner";
import MapSection from "@/components/MapSection";


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
      <FeaturedProjects />
      <MapSection locale={locale} />
      <News />
      <CtaBanner />
    </main>
  );
}