"use client";
import { useTranslations } from "next-intl";

const team = [
  { name: "Aïcha Koffi", role: "Directrice exécutive", photo: "/team/aicha.png" },
  { name: "Jean-Baptiste N'Guessan", role: "Coordinateur terrain", photo: "/team/jean-baptiste.png" },
  { name: "Fatou Traoré", role: "Responsable communication", photo: "/team/fatou.png" },
  { name: "Kouadio Yao", role: "Chargé de projets", photo: "/team/kouadio.png" },
];

export default function EquipePage() {
  const t = useTranslations("equipePage");

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <p className="text-green-700 font-semibold text-sm mb-2">{t("label").toUpperCase()}</p>
      <h1 className="text-4xl font-bold text-green-900 mb-10">{t("titre")}</h1>

      <div className="grid md:grid-cols-4 gap-8">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
            <h2 className="font-bold">{member.name}</h2>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}