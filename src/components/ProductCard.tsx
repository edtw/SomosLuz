import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const formatPrice = (value: number) => `R$ ${value.toFixed(2).replace(".", ",")}`;

const ProductCard = ({ product }: ProductCardProps) => {
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

  const handleCardClick = () => {
    navigate(`/produto/${product.slug}`);
  };

  return (
    <article
      className="group w-full cursor-pointer"
      onClick={handleCardClick}
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
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
            <span className="text-sm font-medium text-muted-foreground sm:text-base">
              Esgotado
            </span>
          </div>
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
        <h3 className="line-clamp-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary sm:text-[0.95rem]">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">
          {product.description}
        </p>
        <div className="flex items-center justify-between gap-2 pt-1">
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
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            aria-label={`Adicionar ${product.name} ao carrinho`}
            className="h-9 w-9 rounded-lg p-0"
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
