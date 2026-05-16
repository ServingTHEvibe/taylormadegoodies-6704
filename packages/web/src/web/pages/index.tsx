import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";
import ScrollReveal from "../components/ScrollReveal";
import MasonryGallery from "../components/MasonryGallery";
import ReviewsSection from "../components/ReviewsSection";
import OrderSection from "../components/OrderSection";
import Navbar from "../components/Navbar";
import FloatingNav from "../components/FloatingNav";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <FloatingNav />
      <main>
        <HeroSection />
        <MenuSection />
        <ScrollReveal />
        <MasonryGallery />
        <ReviewsSection />
        <OrderSection />
      </main>
      <Footer />
    </>
  );
}
