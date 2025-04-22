import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center pt-16 md:pt-20 bg-gradient-to-b from-background to-muted dark:from-background dark:to-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:col-start-2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Inteligencia política. <br />
              <span className="text-primary">Narrativas con propósito.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl"></p>
            <div className="pt-4">
              <Button size="lg" asChild>
                <a href="#contact" className="group flex gap-2">
                  Contáctanos{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-full bg-lunae-coral/40 dark:bg-lunae-coral/30"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full bg-lunae-beige/60 dark:bg-lunae-beige/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;