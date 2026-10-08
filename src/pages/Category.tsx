import { useParams, useNavigate } from "react-router-dom";
import { getCollectionBySlug, getProductsByCategory } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const products = getProductsByCategory(category || "");
  const info = getCollectionBySlug(category || "");

  if (!info) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-cormorant mb-4">
            Categoria não encontrada
          </h1>
          <Button onClick={() => navigate("/")}>Voltar à Página Inicial</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
        <Button variant="ghost" onClick={() => navigate("/")} className="mb-5 sm:mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>

        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-3 sm:mb-4">
            Coleção {info.name}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            {info.description}
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Category;
