import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import bambooBolsaImage from "@/assets/bamboo-bolsa.webp";
import lavandaImage from "@/assets/lavanda.webp";
import frutasVermelhasImage from "@/assets/frutas-vermelhas.webp";

const slides = [
  {
    image: bambooBolsaImage,
    title: "Nova coleção:",
    titleItalic: "Primavera 2026",
    subtitle: "Traga memórias afetivas e luz para o seu lar",
    cta: "Ver catálogo",
    target: "#catalogo",
    alt: "Vela bamboo artesanal Somos Luz com bolsa de linho",
  },
  {
    image: lavandaImage,
    title: "Feitas à mão:",
    titleItalic: "Aromas que acolhem",
    subtitle: "Velas vegetais artesanais para iluminar o seu dia a dia",
    cta: "Ver coleções",
    target: "#colecoes",
    alt: "Vela de lavanda artesanal Somos Luz",
  },
  {
    image: frutasVermelhasImage,
    title: "Promoção:",
    titleItalic: "Aconchego em cada chama",
    subtitle: "Blends adocicados e envolventes para momentos inesquecíveis",
    cta: "Aproveitar",
    target: "#promo",
    alt: "Vela de frutas vermelhas artesanal Somos Luz",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const handleCta = (target: string) => {
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
    }
  };

  return (
    <section id="inicio" className="px-2 pb-8 pt-2 sm:px-4 sm:pb-12">
      <div className="relative mx-auto h-[72svh] max-h-[720px] min-h-[420px] w-full max-w-6xl overflow-hidden rounded-2xl sm:min-h-[480px] sm:rounded-3xl">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== active}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="font-cormorant text-4xl font-medium leading-snug text-white [text-shadow:_0_2px_16px_rgb(0_0_0_/_35%)] sm:text-6xl sm:leading-tight lg:text-7xl">
            {slides[active].title}
            <br />
            <span className="italic">{slides[active].titleItalic}</span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 [text-shadow:_0_1px_8px_rgb(0_0_0_/_35%)] sm:mt-6 sm:max-w-lg sm:text-base lg:text-lg">
            {slides[active].subtitle}
          </p>
          <Button
            size="lg"
            onClick={() => handleCta(slides[active].target)}
            className="mt-8 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-medium transition-all hover:bg-primary/90 hover:shadow-glow sm:mt-10 sm:h-12 sm:px-10 sm:text-base"
          >
            {slides[active].cta}
          </Button>
        </div>

        {/* Carousel dots */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:bottom-8">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              onClick={() => setActive(index)}
              aria-label={`Ir para slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active
                  ? "w-6 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
