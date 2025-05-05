
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { usePublications } from "@/data/publications";
import { useMemo } from "react";

const parseFecha = (fecha: string) => {
  const meses: { [k: string]: number } = {
    enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
    julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11
  };
  const match = fecha.match(/(\d{1,2}) de (\w+), (\d{4})/);
  if (!match) return new Date(0);
  const [_, d, m, y] = match;
  return new Date(Number(y), meses[m.toLowerCase()] ?? 0, Number(d));
};

const Publicaciones = () => {
  const publications = usePublications();
  const sortedPublications = useMemo(() => {
    return [...publications].sort((a, b) => {
      return parseFecha(b.date).getTime() - parseFecha(a.date).getTime();
    });
  }, [publications]);

  return (
    <section id="publicaciones" className="py-16">
      <div className="container">
        {/* Title + Underline - aligned with card content */}
        <div className="mb-4">
          <h2 className="font-nunito text-3xl sm:text-4xl md:text-5xl font-light text-[#222] dark:text-white tracking-wide scale-x-[1.05]">
            Publicaciones y Prensa
          </h2>
          <div className="h-[1px] bg-[#222] dark:bg-white mt-2 w-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-8">
          {sortedPublications.map((publication, index) => (
            <Card key={index} className="flex flex-col h-full hover:shadow-md transition-shadow rounded-[8px]">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-t-[8px]">
                <img
                  src={publication.image}
                  alt={publication.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-display text-lg md:text-xl font-bold text-[#111] dark:text-zinc-100">
                  {publication.title}
                </CardTitle>
                <CardDescription className="font-sans text-[#888]">
                  {publication.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-sans text-[#333] dark:text-zinc-200 leading-relaxed">
                  {publication.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full bg-[#222] hover:bg-[#111] text-white dark:bg-zinc-300 dark:hover:bg-zinc-500 dark:text-black border-none font-sans"
                  asChild
                >
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    ir a la publicación <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Button
            asChild
            className="bg-[#222] hover:bg-[#111] text-white px-8 font-sans dark:bg-zinc-300 dark:hover:bg-zinc-500 dark:text-black"
          >
            <Link to="/">volver al inicio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publicaciones;
