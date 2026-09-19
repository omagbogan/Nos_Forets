"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaYoutube, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const navigation = [
    { label: tNav("accueil"), href: "/" },
    { label: tNav("presentation"), href: "/presentation" },
    { label: tNav("projets"), href: "/projets" },
    { label: tNav("ressources"), href: "/publications" },
    { label: tNav("equipe"), href: "/equipe" },
    { label: tNav("contact"), href: "/contact" },
  ];

  const projectLinks = ["Reforestation", "Biodiversité", "Eau douce", "Climat", "Education"];
  const resourceLinks = ["Rapports", "Publication", "FAQ", "Lien utiles"];

  return (
    <footer className="bg-green-800 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1px_1fr_1px_1fr_1px_1fr_1px_1.2fr] gap-8 text-sm">
        <div>
          <img src="/logo2.png" alt="Logo NOFNA" className="w-20 h-20 mb-4" />
          <p className="text-green-200 mb-4">{t("description")}</p>
          <div className="flex gap-3">
            {socials.map((s, i) => (
              <a key={i} href={s.href} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block bg-white/20" />

        <div>
          <p className="font-bold mb-4">{t("navigation")}</p>
          <ul className="space-y-3 text-green-200">
            {navigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block bg-white/20" />

        <div>
          <p className="font-bold mb-4">{t("nosProjets")}</p>
          <ul className="space-y-3 text-green-200">
            {projectLinks.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="hidden md:block bg-white/20" />

        <div>
          <p className="font-bold mb-4">{t("ressources")}</p>
          <ul className="space-y-3 text-green-200">
            {resourceLinks.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="hidden md:block bg-white/20" />

        <div>
          <p className="font-bold mb-4">{t("newsletter")}</p>
          <p className="text-green-200 mb-4">{t("newsletterTexte")}</p>
          <div className="flex bg-white rounded overflow-hidden">
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="flex-1 px-3 py-2 text-gray-900 text-sm min-w-0 focus:outline-none"
            />
            <button className="bg-green-600 hover:bg-green-500 px-3 flex items-center justify-center shrink-0">
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-green-200">
        <p>© {new Date().getFullYear()} ONG Notre Forêt, Notre Avenir. {t("droits")}</p>
        <div className="flex items-center gap-4">
          <Link href="/mentions-legales" className="hover:text-white transition">{t("mentionsLegales")}</Link>
          <span className="w-px h-4 bg-white/20" />
          <Link href="/politique-confidentialite" className="hover:text-white transition">{t("confidentialite")}</Link>
          <span className="w-px h-4 bg-white/20" />
          <Link href="/cookies" className="hover:text-white transition">{t("cookies")}</Link>
        </div>
      </div>
    </footer>
  );
}