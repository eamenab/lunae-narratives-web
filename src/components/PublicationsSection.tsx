
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { publications } from "@/data/publications";

// Las fechas están en formato "DD de mes, AAAA". Creamos una función para parsearlas a objetos Date.
const parseFecha = (fecha: string) => {
  // Por ejemplo: "15 de abril, 2025"
  const meses: { [k: string]: number } = {
    enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
    julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre:10, diciembre:11
  };
  const match = fecha.match(/(\d{1,2}) de (\w+), (\d{4})/);
  if (!match) return new Date(0);
  const [_, d, m, y] = match;
  const mes = meses[m.toLowerCase()] ?? 0;
  return new Date(Number(y), mes, Number(d));
};

// Ordena de más reciente a más antigua
const sortedPublications = [...publications].sort((a, b) => {
  const dateA = parseFecha(a.date);
  const dateB = parseFecha(b.date);
  return dateB.getTime() - dateA.getTime();
});

const PublicationsSection = () => {
  // Tomar las 3 más recientes después de ordenar
  const recentPublications = sortedPublications.slice(0, 3);
  return (
    <section id="publications">
      <div className="container">
        <h2 className="section-title font-display text-black dark:text-white">Publicaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {recentPublications.map((publication, index) => (
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
            <Link to="/publicaciones" className="flex items-center gap-2">
              Ver todas las publicaciones <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default PublicationsSection;
