
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Sample publications - in a real application these would come from an API
const publications = [
  {
    title: "Las narrativas políticas en la era digital",
    description: "Análisis de cómo las narrativas políticas se transforman y adaptan en el entorno digital actual.",
    date: "15 de abril, 2025",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1024&auto=format&fit=crop",
    link: "https://linkedin.com/company/lunae",
  },
  {
    title: "Estrategias de comunicación en tiempos de crisis",
    description: "Guía para desarrollar estrategias de comunicación efectivas durante situaciones de crisis política.",
    date: "2 de marzo, 2025",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1024&auto=format&fit=crop",
    link: "https://linkedin.com/company/lunae",
  },
  {
    title: "El futuro de la consultoría política",
    description: "Exploramos las tendencias emergentes en el campo de la consultoría política y su impacto en las organizaciones.",
    date: "18 de enero, 2025",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1024&auto=format&fit=crop",
    link: "https://linkedin.com/company/lunae",
  },
];

const PublicationsSection = () => {
  return (
    <section id="publications">
      <div className="container">
        <h2 className="section-title">Publicaciones</h2>
        <p className="section-subtitle">
          Nuestras últimas reflexiones sobre política, comunicación e inteligencia corporativa
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {publications.map((publication, index) => (
            <Card key={index} className="flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img
                  src={publication.image}
                  alt={publication.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{publication.title}</CardTitle>
                <CardDescription>{publication.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{publication.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Ver en LinkedIn <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <a
              href="https://linkedin.com/company/lunae"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Ver todas las publicaciones <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
