"use client";
import { useTranslations } from "next-intl";
import { Trees, Users, Calendar } from "lucide-react";

export default function Stats() {
  const t = useTranslations("stats");

  const stats = [
    { icon: Trees, value: "1 200+", label: t("hectares") },
    { icon: Trees, value: "50 000+", label: t("arbres") },
    { icon: Users, value: "12", label: t("projets") },
    { icon: Calendar, value: "8", label: t("annees") },
  ];

  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <stat.icon className="w-10 h-10 text-green-700 mb-3" />
            <p className="text-3xl md:text-4xl font-bold text-green-800">{stat.value}</p>
            <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}