import { Instagram, Phone } from "lucide-react";
import logoImage from "@/assets/logo.webp";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, buildWhatsAppLink } from "@/lib/constants";

const footerLinks = [
  { label: "Catálogo", href: "#catalogo" },
  { label: "Coleções", href: "#colecoes" },
  { label: "Promoções", href: "#promo" },
  { label: "Sobre nós", href: "#sobre" },
];

const Footer = () => {
  const whatsappLink = buildWhatsAppLink(
    "Olá! Gostaria de saber mais sobre a Somos Luz."
  );

  const handleNavLink = (href: string) => {
    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="mt-6 border-t border-border/60 bg-secondary/40 px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="Somos Luz"
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="flex flex-col leading-none">
                <span className="font-cormorant text-2xl font-medium tracking-wide text-foreground">
                  somos luz
                </span>
                <span className="text-[0.55rem] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                  velas vegetais artesanais
                </span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Velas feitas à mão para trazer aconchego, memórias e luz para o
              seu lar.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @somosluzvela"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-foreground/70 transition-colors hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-foreground/70 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavLink(link.href)}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Atendimento */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
              Atendimento
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>
              <li>Segunda a sábado, 9h às 18h</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="max-w-xs text-sm font-medium leading-relaxed text-foreground">
              Receba novidades e cupons em sua caixa de entrada
            </h4>
            <form
              className="relative"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="E-mail"
                className="h-11 w-full rounded-full border border-input bg-card px-4 pr-24 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 h-9 rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Assinar
              </button>
            </form>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Ao assinar, você concorda em receber e-mails com novidades e
              promoções da Somos Luz.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Somos Luz. Todos os direitos reservados.</p>
          <p>Feito com luz e aconchego</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
