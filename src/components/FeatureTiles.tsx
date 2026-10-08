import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import chaBrancoImage from "@/assets/cha-branco.webp";

const FeatureTiles = () => {
  const navigate = useNavigate();

  const scrollToCatalog = () => {
    const section = document.getElementById("catalogo");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
    }
  };

  return (
    <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-4 sm:gap-5 lg:grid-cols-2">
        {/* Text tile */}
        <div className="flex flex-col justify-center overflow-hidden rounded-2xl bg-gradient-accent px-6 py-10 sm:rounded-3xl sm:px-12 sm:py-14">
          <h2 className="font-cormorant text-3xl font-medium leading-snug text-accent-foreground sm:text-4xl">
            Aconchego em cada chama
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-accent-foreground/85 sm:mt-4 sm:text-base">
            Velas feitas à mão para iluminar e aquecer os seus momentos em casa.
          </p>
          <Button
            size="lg"
            onClick={scrollToCatalog}
            className="mt-6 w-fit rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-medium transition-all hover:bg-primary/90 hover:shadow-glow sm:mt-8 sm:h-11 sm:px-8"
          >
            Escolha o aroma
          </Button>
        </div>

        {/* Image tile */}
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
          <img
            src={chaBrancoImage}
            alt="Vela de chá branco artesanal Somos Luz"
            className="h-full min-h-[220px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:min-h-[260px]"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureTiles;
