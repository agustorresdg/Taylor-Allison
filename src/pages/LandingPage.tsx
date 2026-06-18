import { CategoryTicker } from "../components/CategoryTicker";
import { EditorialStatement } from "../components/EditorialStatement";
import { FeatureBanner } from "../components/FeatureBanner";
import { Footer } from "../components/Footer";
import { HeroWindow } from "../components/HeroWindow";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { PetGallery } from "../components/PetGallery";
import { ServicesSection } from "../components/ServicesSection";

export function LandingPage() {
  return (
    <main>
      <Navbar />
      <HeroWindow />
      <CategoryTicker />
      <ServicesSection />
      <EditorialStatement />
      <PetGallery />
      <FeatureBanner />
      <Newsletter />
      <Footer />
    </main>
  );
}
