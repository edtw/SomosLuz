import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center sm:py-24">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h1 className="font-cormorant text-3xl mb-4">Seu carrinho está vazio</h1>
          <p className="text-muted-foreground mb-8">
            Adicione produtos ao carrinho para continuar comprando
          </p>
          <Button className="rounded-full" onClick={() => navigate('/')}>
            Continuar Comprando
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
        <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light mb-8 sm:mb-12">
          Carrinho de Compras
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 sm:gap-4 p-3 sm:p-4 border border-border/50 rounded-2xl bg-card"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1.5 gap-2">
                    <h3 className="font-medium text-sm sm:text-base line-clamp-2">{item.name}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      aria-label={`Remover ${item.name}`}
                      className="-mr-2 -mt-1 h-8 w-8 p-0 flex-shrink-0"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-primary font-semibold text-sm sm:text-base mb-2 sm:mb-3">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      aria-label="Diminuir quantidade"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 sm:w-12 text-center text-sm">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      aria-label="Aumentar quantidade"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <span className="ml-auto font-semibold text-sm sm:text-base">
                      R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-border/50 rounded-2xl p-5 sm:p-6 bg-card lg:sticky lg:top-24">
              <h2 className="font-cormorant text-2xl mb-6">Resumo do Pedido</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-muted-foreground">Entrega</span>
                  <span className="text-sm text-muted-foreground">
                    Calculado no checkout
                  </span>
                </div>
              </div>

              <div className="border-t border-border/50 pt-4 mb-6">
                <div className="flex justify-between text-base sm:text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-primary">
                    R$ {totalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full mb-3 rounded-full"
                onClick={() => navigate('/checkout')}
              >
                Finalizar Compra
              </Button>
              
              <Button
                variant="outline"
                className="w-full rounded-full"
                onClick={() => navigate('/')}
              >
                Continuar Comprando
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
