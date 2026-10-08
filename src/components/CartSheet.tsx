import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartSheet = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, isOpen, setIsOpen } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  const handleContinue = () => {
    setIsOpen(false);
    navigate('/carrinho');
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        className="flex h-full w-full flex-col gap-0 p-0 sm:max-w-lg"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <SheetHeader className="border-b border-border/60 px-5 py-5 pr-12 text-left sm:px-6">
          <SheetTitle className="font-cormorant text-2xl">Seu Carrinho</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            <p className="text-muted-foreground">Seu carrinho está vazio</p>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Continuar comprando
            </Button>
          </div>
        ) : (
          <>
            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 border-b border-border/50 pb-4 sm:gap-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1.5 flex items-start justify-between gap-2">
                      <h4 className="line-clamp-2 text-sm font-medium">{item.name}</h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        aria-label={`Remover ${item.name}`}
                        className="-mr-2 -mt-1 h-7 w-7 flex-shrink-0 p-0"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="mb-2 text-sm font-semibold text-primary">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        aria-label="Diminuir quantidade"
                        className="h-7 w-7 p-0"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        aria-label="Aumentar quantidade"
                        className="h-7 w-7 p-0"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <span className="ml-auto text-sm font-semibold">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-border/60 px-5 py-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:px-6 sm:py-6 sm:pb-6">
              <div className="flex items-center justify-between text-base font-semibold sm:text-lg">
                <span>Total:</span>
                <span className="text-primary">
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <Button
                className="w-full rounded-full"
                size="lg"
                onClick={handleCheckout}
              >
                Finalizar Compra
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-full"
                onClick={handleContinue}
              >
                Ver carrinho
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
