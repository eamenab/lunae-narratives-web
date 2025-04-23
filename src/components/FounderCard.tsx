
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const profileImg =
  "cc.png";

  const founder = {
    name: "Carlos Cruz Infante, PhD",
    email: "carloscruz@lunae.cl",
    linkedin: "https://www.linkedin.com/in/carloscruz",
  };
  

const FounderCard = () => (
    <Card className="flex flex-col md:flex-row items-center p-4 md:p-6 gap-6 bg-white/90 dark:bg-card/80 w-full shadow animate-fade-in">
      {/* Foto */}
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img
          src={profileImg}
          alt={`Foto de ${founder.name}`}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      {/* Info */}
      <div className="flex-1 text-left">
        <h3 className="text-xl md:text-2xl font-display font-bold mb-1 text-[#333] dark:text-zinc-300">{founder.name}</h3>
        {/* Description */}
        <div className="mt-3 mb-4 text-base text-[#333] dark:text-zinc-300 space-y-4">
          <p>
            He trabajado con equipos de política pública, asuntos públicos y estrategia institucional en Chile y la región, combinando análisis de <strong>riesgo político</strong>, <strong>diseño narrativo</strong> y <strong>asesoría directa a líderes y equipos ejecutivos</strong>.
          </p>
          <p>
            Antes de comenzar <em>lunae</em>, fui Country Manager para Chile y Perú de <strong>Cefeidas Group</strong>, luego de mi paso por <strong>Deheza Ltd.</strong>, una firma de inteligencia corporativa londinense.
          </p>
          <p>
            Fui asesor del <strong>Gobierno de Chile</strong> en varias participaciones, incluyendo la Secretaría General de la Presidencia.
          </p>
          <p>
            <strong>Sociólogo</strong> de formación, hice también un <strong>MBA</strong> en la Universidad Católica y obtuve mi <strong>doctorado</strong> en la Università di Roma <em>La Sapienza</em> en Estudios Políticos.
          </p>
          <p>
            Actualmente soy columnista del <strong>Diario Financiero</strong>, <strong>El Fintualist</strong> de Fintual, y Affiliate del Latin America Programme de <strong>London Politica</strong>.
          </p>
        </div>
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
        </div>
      </div>
    </Card>
  );
  
  

export default FounderCard;
