"use client";
import dynamic from "next/dynamic";

const InteractiveMap = dynamic(() => import("./InteractiveMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-gray-400">
      Chargement de la carte...
    </div>
  ),
});

export default function MapWrapper({ projects }: { projects: any[] }) {
  return <InteractiveMap projects={projects} />;
}