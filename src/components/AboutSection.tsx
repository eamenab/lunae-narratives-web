
import FounderCard from "./FounderCard";

const AboutSection = () => {
  return (
    <section id="about" className="bg-muted/50 dark:bg-muted/10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title font-display text-black dark:text-white">Sobre Lunae</h2>
          {/* FounderCard */}
          <FounderCard />
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="font-sans text-lg text-[#222] dark:text-zinc-300 mb-6">
              En Lunae, entendemos que la política y la comunicación son disciplinas en constante evolución. 
              Nuestra consultora nace de la necesidad de brindar herramientas de análisis sofisticadas para 
              navegar entornos complejos.
            </p>
            <p className="font-sans text-lg text-[#222] dark:text-zinc-300 mb-6">
              Combinamos experiencia política, técnicas avanzadas de análisis de datos y profundo conocimiento 
              de las narrativas contemporáneas para ofrecer soluciones estratégicas a nuestros clientes.
            </p>
            <p className="font-sans text-lg text-[#222] dark:text-zinc-300">
              Nuestro equipo multidisciplinario está formado por especialistas en comunicación, ciencias políticas,
              relaciones institucionales y análisis de datos, todos comprometidos con un enfoque ético y profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
