"use client";
import { useState, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Link } from "@/i18n/navigation";
import L from "leaflet";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import MarkerClusterGroup from "react-leaflet-cluster";

const colorByTag: Record<string, string> = {
  Reforestation: "green",
  "Biodiversité": "blue",
  "Eau douce": "orange",
};

function getIcon(tag: string, active: boolean) {
  const color = colorByTag[tag] || "grey";
  return L.icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: active ? [32, 52] : [25, 41],
    iconAnchor: active ? [16, 52] : [12, 41],
    popupAnchor: [1, -34],
  });
}

function FitBounds({ points }: { points: [number, number][] }) {
  const map = useMap();
  useMemo(() => {
    if (points.length > 0) {
      map.fitBounds(points, { padding: [30, 30] });
    }
  }, [points, map]);
  return null;
}

// Centre la carte sur le projet sélectionné depuis la liste
function FlyToSelected({ position }: { position: [number, number] | null }) {
  const map = useMap();
  useMemo(() => {
    if (position) {
      map.flyTo(position, 10, { duration: 0.8 });
    }
  }, [position, map]);
  return null;
}

export default function InteractiveMap({ projects }: { projects: any[] }) {
  const [activeTag, setActiveTag] = useState("Tous");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const tags = useMemo(
    () => ["Tous", ...Array.from(new Set(projects.map((p) => p.tag).filter(Boolean)))],
    [projects]
  );

  const filtered = activeTag === "Tous" ? projects : projects.filter((p) => p.tag === activeTag);
  const withCoords = filtered.filter((p) => p.latitude && p.longitude);

  const points: [number, number][] = withCoords.map((p) => [p.latitude, p.longitude]);

  const selectedProject = withCoords.find((p) => p.documentId === selectedId);
  const selectedPosition: [number, number] | null = selectedProject
    ? [selectedProject.latitude, selectedProject.longitude]
    : null;

  return (
  <div className="grid md:grid-cols-[1fr_280px] gap-4 h-full">
    {/* Carte */}
    <div className="relative h-full">
      <div className="absolute top-3 right-3 z-[500] flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => {
              setActiveTag(tag);
              setSelectedId(null);
            }}
            className={`text-xs font-medium px-3 py-1.5 rounded-full border shadow-sm transition ${
              activeTag === tag
                ? "bg-green-700 text-white border-green-700"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <MapContainer
        center={[7.5, -5.5]}
        zoom={7}
        scrollWheelZoom={false}
        className="w-full h-full rounded-lg"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {points.length > 0 && !selectedPosition && <FitBounds points={points} />}
        {selectedPosition && <FlyToSelected position={selectedPosition} />}

        <MarkerClusterGroup chunkedLoading>
          {withCoords.map((p) => (
            <Marker
              key={p.documentId}
              position={[p.latitude, p.longitude]}
              icon={getIcon(p.tag, p.documentId === selectedId)}
              eventHandlers={{ click: () => setSelectedId(p.documentId) }}
            >
              <Popup>
                <div className="w-48">
                  {p.image?.formats?.thumbnail?.url && (
                    <img
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${p.image.formats.thumbnail.url}`}
                      alt={p.titre}
                      className="w-full h-24 object-cover rounded mb-2"
                    />
                  )}
                  <p className="text-xs font-medium text-green-700 mb-1">{p.tag}</p>
                  <p className="font-bold text-sm mb-2">{p.titre}</p>
                  <Link href={`/projets/${p.slug}`} className="text-green-700 text-xs font-medium">
                    Voir le projet →
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>

    {/* Liste des projets */}
    <div className="bg-white rounded-lg overflow-hidden shadow-sm overflow-y-auto max-h-full p-2">
      <div className="space-y-2">
        {withCoords.map((p) => (
          <button
            key={p.documentId}
            onClick={() => setSelectedId(p.documentId)}
            className={`w-full text-left p-3 rounded-md transition ${
              selectedId === p.documentId ? "bg-green-50 text-green-900 ring-1 ring-green-200" : "hover:bg-gray-50 text-gray-800"
            }`}
          >
            <p className="text-xs text-green-700 font-medium mb-1">{p.tag}</p>
            <p className="text-sm font-semibold">{p.titre}</p>
          </button>
        ))}
      </div>
    </div>
  </div>
);
}