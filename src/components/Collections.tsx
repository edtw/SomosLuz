import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { collections } from "@/data/products";

const Collections = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.querySelector("a")?.clientWidth ?? 240;
    const gap = 20;
    container.scrollBy({ left: direction * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <section id="colecoes" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between sm:mb-10">
          <h2 className="font-cormorant text-3xl font-medium text-foreground sm:text-4xl">
            Coleções para o seu lar
          </h2>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              aria-label="Anterior"
              onClick={() => scrollBy(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-secondary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Próximo"
              onClick={() => scrollBy(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-secondary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6"
        >
          {collections.map((collection) => (
            <a
              key={collection.slug}
              href={`/categoria/${collection.slug}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/categoria/${collection.slug}`);
              }}
              className="group w-[65vw] min-w-[170px] max-w-[240px] shrink-0 cursor-pointer snap-start sm:w-[250px] sm:max-w-none"
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-muted sm:rounded-2xl">
                <img
                  src={collection.image}
                  alt={`Coleção ${collection.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="px-1 pt-3 text-sm font-medium text-foreground transition-colors group-hover:text-primary sm:text-[0.95rem]">
                {collection.name}
              </h3>
              <p className="px-1 pt-0.5 text-xs text-muted-foreground">
                {collection.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
