"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contactPage");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Formulaire soumis :", form);
    setSubmitted(true);
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <p className="text-green-700 font-semibold text-sm mb-2">{t("label").toUpperCase()}</p>
      <h1 className="text-4xl font-bold text-green-900 mb-10">{t("titre")}</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          {submitted ? (
            <p className="text-green-700 font-medium">{t("confirmation")}</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">{t("nom")}</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border rounded px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">{t("email")}</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">{t("message")}</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full border rounded px-4 py-2" />
              </div>
              <button type="submit" className="bg-green-700 text-white font-medium px-6 py-3 rounded">
                {t("envoyer")}
              </button>
            </form>
          )}
        </div>

        <div>
          <h2 className="text-xl font-bold text-green-900 mb-6">{t("coordonnees")}</h2>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-green-700 mt-1 shrink-0" />
              <div>
                <p className="font-medium">{t("adresse")}</p>
                <p className="text-gray-600 text-sm">Zagné, Côte d&apos;Ivoire</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-green-700 mt-1 shrink-0" />
              <div>
                <p className="font-medium">{t("telephone")}</p>
                <p className="text-gray-600 text-sm">+225 XX XX XX XX XX</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-green-700 mt-1 shrink-0" />
              <div>
                <p className="font-medium">E-mail</p>
                <p className="text-gray-600 text-sm">contact@nofna.org</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-green-700 mt-1 shrink-0" />
              <div>
                <p className="font-medium">{t("horaires")}</p>
                <p className="text-gray-600 text-sm">{t("horairesValeur")}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 h-56 rounded-lg overflow-hidden border">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-8.3%2C6.9%2C-8.0%2C7.2&layer=mapnik"
              className="w-full h-full border-0"
              loading="lazy"
              title="Localisation NOFNA"
            />
          </div>
        </div>
      </div>
    </main>
  );
}