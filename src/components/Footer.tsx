import { Linkedin, Mail, Phone } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import logo from "@/assets/logolunaefinal.004.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 dark:bg-muted/10 border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <img
              src={logo}
              alt="Lunae Advisory Logo"
              className="h-10 mb-4"
            />
            <p className="text-muted-foreground mb-4">
              lunae - inteligencia política y narrativa
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-nunito mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-muted-foreground hover:text-primary text-left"
                >
                  inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary text-left"
                >
                  qué hacemos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("publications")}
                  className="text-muted-foreground hover:text-primary text-left"
                >
                  publicaciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary text-left"
                >
                  sobre lunae
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-nunito mb-4">Contacto</h3>
            <address className="not-italic text-muted-foreground">
              <p className="mt-2">
                <a href="mailto:contacto@lunaeadvisory.com" className="hover:text-primary">
                  contacto@lunaeadvisory.com
                </a>
              </p>
            </address>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-nunito mb-4">Preferencias</h3>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">cambiar tema:</span>
              <ThemeSwitcher />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {year} lunae advisory. todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
