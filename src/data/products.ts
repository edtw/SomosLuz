import { Product } from "@/types/product";
import bambooImage from "@/assets/bamboo.webp";
import bambooBolsaImage from "@/assets/bamboo-bolsa.webp";
import lavandaImage from "@/assets/lavanda.webp";
import chaBrancoImage from "@/assets/cha-branco.webp";
import frutasVermelhasImage from "@/assets/frutas-vermelhas.webp";
import vanillaImage from "@/assets/vanilla.webp";

export const products: Product[] = [
  {
    id: "1",
    name: "Vela Bamboo",
    slug: "vela-bamboo",
    price: 49.9,
    description:
      "Vela vegetal artesanal com aroma fresco e lenhoso de bambu. Acompanha bolsa de linho para presente.",
    image: bambooImage,
    category: "classicos",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Vela Lavanda",
    slug: "vela-lavanda",
    price: 49.9,
    description:
      "Aroma calmante de lavanda para momentos de relaxamento. Feita à mão com cera vegetal.",
    image: lavandaImage,
    category: "florais",
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Vela Frutas Vermelhas",
    slug: "vela-frutas-vermelhas",
    price: 54.9,
    originalPrice: 64.9,
    description:
      "Blend adocicado e envolvente de frutas vermelhas. Perfeita para iluminar e perfumar sua casa.",
    image: frutasVermelhasImage,
    category: "frutados",
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Vela Chá Branco",
    slug: "vela-cha-branco",
    price: 54.9,
    description:
      "Fragrância delicada e sofisticada de chá branco. Um convite ao bem-estar em qualquer ambiente.",
    image: chaBrancoImage,
    category: "florais",
    inStock: true,
  },
  {
    id: "5",
    name: "Vela Vanilla",
    slug: "vela-vanilla",
    price: 54.9,
    description:
      "Aroma quente e acolhedor de baunilha. Feita à mão com cera vegetal e pavio de madeira.",
    image: vanillaImage,
    category: "gourmet",
    inStock: true,
  },
];

export const collections = [
  {
    slug: "classicos",
    name: "Clássicos",
    description: "Aromas atemporais para o dia a dia",
    image: bambooBolsaImage,
  },
  {
    slug: "florais",
    name: "Florais",
    description: "Leveza e frescor para sua casa",
    image: lavandaImage,
  },
  {
    slug: "gourmet",
    name: "Gourmets",
    description: "Aromas quentes e acolhedores",
    image: vanillaImage,
  },
  {
    slug: "frutados",
    name: "Frutados",
    description: "Doces e envolventes",
    image: frutasVermelhasImage,
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured).slice(0, 3);
};

export const getProductBySlug = (slug: string) => {
  return products.find((product) => product.slug === slug);
};

export const getCollectionBySlug = (slug: string) => {
  return collections.find((collection) => collection.slug === slug);
};
