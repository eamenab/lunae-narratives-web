
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Twitter } from "lucide-react";

const profileImg =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80";

const founder = {
  name: "Sofía Fernández",
  role: "Fundadora de Lunae Advisory",
  description:
    "Consultora política y analista de comunicación estratégica con más de 12 años de experiencia en campañas, opinión pública, y desarrollo de narrativas de alto impacto. Ha colaborado con gobiernos, ONGs y empresas diseñando estrategias de comunicación, análisis de datos y posicionamiento de líderes. Apasionada por la ética profesional, las tendencias sociopolíticas y el aprendizaje continuo.",
  email: "sofia@lunaeadvisory.com",
  linkedin: "https://www.linkedin.com/in/sofiafernandez",
  twitter: "https://twitter.com/sofiaf",
};

const FounderCard = () => (
  <Card className="flex flex-col md:flex-row items-center p-4 md:p-6 gap-6 bg-white/90 dark:bg-card/80 max-w-3xl mx-auto mb-8 shadow animate-fade-in">
    {/* Foto */}
    <div className="flex-shrink-0">
      <img
        src={profileImg}
        alt={`Foto de ${founder.name}`}
        className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-lunae-coral/70 shadow"
      />
    </div>
    {/* Info */}
    <div className="flex-1 text-left">
      <h3 className="text-xl md:text-2xl font-display font-bold mb-1 text-black dark:text-white">{founder.name}</h3>
      <span className="text-sm font-medium text-lunae-petroleo dark:text-lunae-beige">{founder.role}</span>
      <p className="mt-3 mb-4 text-base text-[#333] dark:text-zinc-300">{founder.description}</p>
      <div className="flex gap-4">
        <a
          href={`mailto:${founder.email}`}
          title="Email"
          className="hover:text-primary text-lunae-petroleo dark:text-lunae-beige transition-colors"
          target="_blank" rel="noopener noreferrer"
        >
          <Mail className="inline-block" /> <span className="sr-only">Email</span>
        </a>
        <a
          href={founder.linkedin}
          title="LinkedIn"
          className="hover:text-primary text-lunae-petroleo dark:text-lunae-beige transition-colors"
          target="_blank" rel="noopener noreferrer"
        >
          <Linkedin className="inline-block" /> <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href={founder.twitter}
          title="Twitter"
          className="hover:text-primary text-lunae-petroleo dark:text-lunae-beige transition-colors"
          target="_blank" rel="noopener noreferrer"
        >
          <Twitter className="inline-block" /> <span className="sr-only">Twitter</span>
        </a>
      </div>
    </div>
  </Card>
);

export default FounderCard;
