
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PublicationsSection from "@/components/PublicationsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Efecto para manejar el desplazamiento suave a secciones
  useEffect(() => {
    const handleHashChange = () => {
      let rawHash = window.location.hash; // e.g., "#/services"
      if (rawHash.startsWith("#/")) rawHash = rawHash.slice(2); // → "services"
      else if (rawHash.startsWith("#")) rawHash = rawHash.slice(1); // → "services"
    
      if (rawHash) {
        const element = document.getElementById(rawHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Aplicar al inicio y al cambiar el hash
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    
    // Limpiar oyente al desmontar
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <PublicationsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
