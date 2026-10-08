import bambooImage from "@/assets/bamboo.webp";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/constants";

const About = () => {
  return (
    <section id="sobre" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 font-cormorant text-3xl font-medium text-foreground sm:mb-10 sm:text-4xl">
          Sobre a marca
        </h2>

        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <img
              src={bambooImage}
              alt="Somos Luz — velas vegetais artesanais"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-4 sm:space-y-5">
            <h3 className="font-cormorant text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              “Criamos aconchego, acendemos memórias”
            </h3>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                A <span className="font-medium text-foreground">Somos Luz</span>{" "}
                nasceu do desejo de transformar ambientes em refúgios de
                aconchego e memórias afetivas.
              </p>
              <p>
                Nossas velas vegetais artesanais são feitas à mão, em pequenos
                lotes, com cera vegetal, pavio de madeira e fragrâncias que
                despertam memórias e acendem emoções. Acreditamos que pequenos
                detalhes fazem toda a diferença para criar um lar acolhedor e
                memorável.
              </p>
              <p>
                Queremos transformar suas casas, mesas de trabalho e presentes
                em{" "}
                <span className="font-medium text-foreground">
                  momentos de luz
                </span>
                .
              </p>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <Instagram className="h-4 w-4" />
              Siga @somosluzvela no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
