
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Qué hacemos", href: "#services" },
    { name: "Publicaciones", href: "#publications" },
    { name: "Sobre Lunae", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center">
          <img 
            src="/lovable-uploads/5d2c9a69-7290-450f-936c-e78752e6f3a1.png" 
            alt="Lunae Advisory Logo"
            className="h-8 md:h-10"
          />
        </a>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <ThemeSwitcher />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className="md:hidden"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            {/* Mobile Menu */}
            <div
              id="mobile-menu"
              className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background border-l transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <img 
                    src="/lovable-uploads/5d2c9a69-7290-450f-936c-e78752e6f3a1.png" 
                    alt="Lunae Advisory Logo"
                    className="h-8"
                  />
                  <Button variant="ghost" size="icon" onClick={closeMenu}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="nav-link text-lg"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Button className="w-full mt-6" asChild>
                    <a href="#contact">Contáctanos</a>
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="nav-link">
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <ThemeSwitcher />
              <Button asChild>
                <a href="#contact">Contáctanos</a>
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
