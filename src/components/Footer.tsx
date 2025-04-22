import { Linkedin, Mail, Phone } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 dark:bg-muted/10 border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <img
              src="/lovable-uploads/5d2c9a69-7290-450f-936c-e78752e6f3a1.png"
              alt="Lunae Advisory Logo"
              className="h-10 mb-4"
            />
            <p className="text-muted-foreground mb-4">
              Lunae — Comprender. Comunicar. Transformar.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/lunae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contacto@lunaeadvisory.com"
                className="text-muted-foreground hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+123456789"
                className="text-muted-foreground hover:text-primary"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  Qué hacemos
                </a>
              </li>
              <li>
                <a href="#publications" className="text-muted-foreground hover:text-primary">
                  Publicaciones
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary">
                  Sobre Lunae
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-semibold mb-4">Contacto</h3>
            <address className="not-italic text-muted-foreground">
              <p>Madrid, España</p>
              <p>Buenos Aires, Argentina</p>
              <p className="mt-2">
                <a href="mailto:contacto@lunaeadvisory.com" className="hover:text-primary">
                  contacto@lunaeadvisory.com
                </a>
              </p>
            </address>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-semibold mb-4">Preferencias</h3>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Cambiar tema:</span>
              <ThemeSwitcher />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary">
                Política de privacidad
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-primary">
                Términos y condiciones
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {year} Lunae Advisory. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
