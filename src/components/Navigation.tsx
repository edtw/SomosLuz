import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Heart, Instagram, Menu, Search, ShoppingBag, X } from "lucide-react";
import logoImage from "@/assets/logo.webp";
import { useCart } from "@/contexts/CartContext";
import { INSTAGRAM_URL } from "@/lib/constants";

const navLinks = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Coleções", href: "#colecoes" },
  { label: "Promoções", href: "#promo" },
  { label: "Sobre nós", href: "#sobre" },
];

const Navigation = () => {
  const navigate = useNavigate();
  const { totalItems, setIsOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLink = (href: string) => {
    setMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2.5 sm:gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logoImage}
            alt="Somos Luz"
            className="h-9 w-9 rounded-full object-cover sm:h-11 sm:w-11"
          />
          <span className="flex flex-col leading-none">
            <span className="font-cormorant text-xl font-medium tracking-wide text-foreground sm:text-2xl">
              somos luz
            </span>
            <span className="hidden text-[0.55rem] font-medium uppercase tracking-[0.28em] text-muted-foreground sm:block">
              velas vegetais artesanais
            </span>
          </span>
        </Link>

        {/* Search */}
        <div className="relative hidden max-w-xs flex-1 md:block">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Buscar"
            className="h-10 w-full rounded-full border border-input bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavLink(link.href)}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @somosluzvela"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-secondary hover:text-primary sm:flex"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <button
            aria-label="Favoritos"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-secondary hover:text-primary sm:flex"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            aria-label="Carrinho"
            onClick={() => setIsOpen(true)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-accent px-1 text-[0.6rem] font-semibold text-accent-foreground">
                {totalItems}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-secondary hover:text-primary lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border/60 bg-background px-4 py-4 lg:hidden">
          <div className="relative mb-3 md:hidden">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Buscar"
              className="h-11 w-full rounded-full border border-input bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavLink(link.href)}
                  className="w-full rounded-xl px-3 py-3 text-left text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-full items-center gap-2 rounded-xl px-3 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
            @somosluzvela
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
