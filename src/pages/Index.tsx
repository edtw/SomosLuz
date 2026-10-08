import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeatureTiles from "@/components/FeatureTiles";
import Collections from "@/components/Collections";
import PromoBanner from "@/components/PromoBanner";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-canvas px-2 py-2 sm:px-4 sm:py-4">
      <div className="mx-auto w-full max-w-[1440px] overflow-clip rounded-2xl bg-background sm:rounded-3xl">
        <Navigation />
        <main>
          <Hero />
          <FeaturedProducts />
          <FeatureTiles />
          <Collections />
          <PromoBanner />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
