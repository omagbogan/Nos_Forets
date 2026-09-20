"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  

  const [resOpen, setResOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("accueil"), href: "/" },
    { label: t("presentation"), href: "/presentation" },
    { label: t("projets"), href: "/projets" },
  ];

  const resources = [
    { label: t("rapports"), href: "/publications" },
    { label: t("actualites"), href: "/actualites" },
  ];

  const navLinksEnd = [
    { label: t("equipe"), href: "/equipe" },
    { label: t("contact"), href: "/contact" },
  ];

  const isActiveLink = (href: string) => {
    const normalizedPath = pathname.startsWith(`/${locale}`)
      ? pathname.replace(`/${locale}`, "") || "/"
      : pathname || "/";

    if (href === "/") {
      return normalizedPath === "/";
    }

    return normalizedPath === href || normalizedPath.startsWith(`${href}/`);
  };

  function switchLanguage(newLocale: string) {
  router.replace(pathname, { locale: newLocale, scroll: false });
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-[1000] shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 gap-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img src="/logo.png" alt="Logo NOFNA" className="h-12 w-12" />
        </Link>

        {/* Navigation — cachée sur mobile */}
        <nav className="hidden md:flex items-center gap-6 text-base font-normal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActiveLink(link.href) ? "page" : undefined}
              className={`relative transition-colors ${
                isActiveLink(link.href)
                  ? "text-green-700 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-green-700"
                  : "text-gray-700 hover:text-green-700"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setResOpen(true)}
            onMouseLeave={() => setResOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors ${
                resources.some((r) => isActiveLink(r.href))
                  ? "text-green-700 font-normal"
                  : "text-gray-700 hover:text-green-700"
              }`}
            >
              Ressources ▾
            </button>
            {resOpen && (
              <div className="absolute top-full left-0 pt-2 min-w-[200px] z-20">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  {resources.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      aria-current={isActiveLink(r.href) ? "page" : undefined}
                      className={`block px-4 py-2 hover:bg-gray-50 ${
                        isActiveLink(r.href) ? "bg-green-50 text-green-700 font-semibold" : "text-gray-700"
                      }`}
                    >
                      {r.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinksEnd.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActiveLink(link.href) ? "page" : undefined}
              className={`relative transition-colors ${
                isActiveLink(link.href)
                  ? "text-green-700 after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-green-700"
                  : "text-gray-700 hover:text-green-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Recherche + langue — cachées sur mobile */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full pl-4 pr-10 py-2 text-sm w-48 focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          <div className="flex items-center bg-gray-100 rounded-full p-1 text-xs font-medium">
            <button
              onClick={() => switchLanguage("fr")}
              className={`px-3 py-1 rounded-full transition ${
                locale === "fr" ? "bg-green-700 text-white" : "text-gray-600"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => switchLanguage("en")}
              className={`px-3 py-1 rounded-full transition ${
                locale === "en" ? "bg-green-700 text-white" : "text-gray-600"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Bouton hamburger — visible uniquement sur mobile */}
        <button
          className="md:hidden p-2 -m-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Ouvrir le menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-1">
          {[...navLinks, ...resources, ...navLinksEnd].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              aria-current={isActiveLink(link.href) ? "page" : undefined}
              className={`block py-2 text-sm font-medium border-b last:border-0 transition-colors ${
                isActiveLink(link.href)
                  ? "text-green-700 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-2 pt-3">
            <button
              onClick={() => switchLanguage("fr")}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                locale === "fr" ? "bg-green-700 text-white" : "bg-gray-100 text-gray-600"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => switchLanguage("en")}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                locale === "en" ? "bg-green-700 text-white" : "bg-gray-100 text-gray-600"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </header>
  );
}