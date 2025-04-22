
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

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
  // Puedes agregar aquí más publicaciones...
];

const Publicaciones = () => {
  return (
    <section id="publicaciones">
      <div className="container">
        <h1 className="section-title font-display text-black dark:text-white">Todas las publicaciones</h1>
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
                <CardTitle className="font-display text-lg md:text-xl font-bold text-[#111] dark:text-zinc-100">{publication.title}</CardTitle>
                <CardDescription className="font-sans text-[#888]">{publication.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-sans text-[#333] dark:text-zinc-200">{publication.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-[#222] text-white hover:bg-[#111] border-none font-sans" asChild>
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
          <Button asChild className="bg-[#222] hover:bg-[#111] text-white px-8 font-sans">
            <Link to="/" className="flex items-center gap-2">
              Volver al inicio
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publicaciones;
