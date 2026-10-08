import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/types/product";

const formatPrice = (value: number) =>
  `R$ ${value.toFixed(2).replace(".", ",")}`;

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Adicionado ao carrinho",
      description: `${product.name} foi adicionado ao seu carrinho.`,
    });
  };

  return (
    <article
      className="group w-[65vw] min-w-[170px] max-w-[240px] shrink-0 cursor-pointer snap-start sm:w-[250px] sm:max-w-none"
      onClick={() => navigate(`/produto/${product.slug}`)}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-muted sm:rounded-2xl">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.featured && (
          <span className="absolute left-3 top-3 rounded-md bg-card/90 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-foreground backdrop-blur">
            Novo
          </span>
        )}
        {discount > 0 && (
          <span className="absolute left-3 top-3 rounded-md bg-accent px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-accent-foreground">
            -{discount}%
          </span>
        )}
        <button
          aria-label={`Favoritar ${product.name}`}
          onClick={(e) => e.stopPropagation()}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-card/90 text-foreground/70 backdrop-blur transition-colors hover:text-accent"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-2 px-1 pt-3">
        <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-primary sm:text-[0.95rem]">
          {product.name}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-2">
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-sm font-semibold text-foreground sm:text-base">
              {formatPrice(product.price)}
            </span>
          </div>
          <button
            aria-label={`Adicionar ${product.name} ao carrinho`}
            onClick={handleAddToCart}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-soft transition-all hover:bg-primary/90 hover:shadow-medium sm:h-10 sm:w-10"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
};

const FeaturedProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.querySelector("article")?.clientWidth ?? 240;
    const gap = 20;
    container.scrollBy({ left: direction * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <section id="catalogo" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between sm:mb-10">
          <h2 className="font-cormorant text-3xl font-medium text-foreground sm:text-4xl">
            Produtos populares
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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
