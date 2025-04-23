import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import galleryBg from "@/assets/gallery_background_11.jpg";
import logo from "@/assets/logolunaefinal.004.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 md:pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={galleryBg}
          alt="Background"
          className="w-full h-full object-cover filter dark:brightness-50"
        />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-left">
          
          {/* Logo + Text under it */}
          <div className="lg:col-span-8 flex flex-col items-start animate-fade-in">
            <div className="relative w-full max-w-none">
              <img
                src={logo}
                alt="Lunae Logo"
                className="w-[50%]"
              />
            </div>
            <h1 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-[#333] dark:text-white text-left">
              inteligencia y narrativa política
            </h1>
          </div>

          {/* (Optional) keep other grid content here */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
