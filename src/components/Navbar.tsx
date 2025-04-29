import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { useIsMobile } from "@/hooks/use-mobile";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { name: "inicio", target: "home" },
    { name: "qué hacemos", target: "services" },
    { name: "publicaciones", target: "publications" },
    { name: "sobre lunae", target: "about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (target: string) => {
    scrollToSection(target);
    closeMenu();
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobile ? "bg-background/90" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <button onClick={() => scrollToSection("home")} className="flex items-center">
          <img src="logolunaefinal.001.png" alt="Lunae Logo" className="h-8 md:h-10" />
        </button>

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

            <div
              id="mobile-menu"
              className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background border-l transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <img src="logolunaefinal.004.png" alt="Lunae Logo" className="h-8" />
                  <Button variant="ghost" size="icon" onClick={closeMenu}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleClick(link.target)}
                      className="nav-link text-lg text-left"
                    >
                      {link.name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </>
        ) : (
          <>
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button key={link.name} onClick={() => scrollToSection(link.target)} className="nav-link">
                  {link.name}
                </button>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <ThemeSwitcher />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
