import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import bambooBolsaImage from "@/assets/bamboo-bolsa.webp";

const PromoBanner = () => {
  const navigate = useNavigate();

  const scrollToPromo = () => {
    const section = document.getElementById("catalogo");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
    }
  };

  return (
    <section id="promo" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 font-cormorant text-3xl font-medium text-foreground sm:mb-10 sm:text-4xl">
          Promoções
        </h2>

        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
          <img
            src={bambooBolsaImage}
            alt="Vela artesanal com bolsa de linho Somos Luz"
            className="absolute inset-0 h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas/95 via-canvas/75 to-canvas/35 sm:bg-gradient-to-r sm:from-canvas/90 sm:via-canvas/60 sm:to-canvas/20" />

          <div className="relative z-10 flex min-h-[300px] max-w-xl flex-col items-start justify-center px-6 py-10 text-left sm:min-h-[380px] sm:px-12 sm:py-12 lg:px-16">
            <h3 className="font-cormorant text-3xl font-medium leading-snug text-white sm:text-4xl lg:text-5xl">
              Vela de presente
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base">
              Nas compras acima de R$ 150 você ganha uma vela aromática surpresa
              para presentear quem você ama.
            </p>
            <Button
              size="lg"
              onClick={scrollToPromo}
              className="mt-6 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-medium transition-all hover:bg-primary/90 hover:shadow-glow sm:mt-8 sm:h-11 sm:px-8"
            >
              Ver promoções
            </Button>
          </div>

          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:left-auto sm:right-10 sm:translate-x-0">
            <span className="h-2 w-6 rounded-full bg-white" />
            <span className="h-2 w-2 rounded-full bg-white/50" />
            <span className="h-2 w-2 rounded-full bg-white/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
