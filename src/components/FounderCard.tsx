import { Card, CardContent } from "@/components/ui/card";
import { SiLinkedin } from "react-icons/si";
import { HiMail } from "react-icons/hi";

const profileImg = "cc.png";

const founder = {
  name: "Carlos Cruz Infante, PhD",
  position: "Director de Lunae",
  email: "carlos@lunaeadvisory.com",
  linkedin: "https://www.linkedin.com/in/carlos-cruz-infante-phd-06911821/",
};

const FounderCard = () => (
  <Card className="flex flex-col md:flex-row items-center p-4 md:p-6 gap-6 bg-white/90 dark:bg-card/80 w-full shadow animate-fade-in rounded-[8px]">
    {/* Foto con proporción 3:4 */}
    <div className="flex-shrink-0 w-full md:w-1/3">
      <div className="aspect-[3/4] w-full overflow-hidden rounded-[8px]">
        <img
          src={profileImg}
          alt={`Foto de ${founder.name}`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Info */}
    <div className="flex-1 text-left">
      <h3 className="text-xl md:text-2xl font-display font-bold mb-1 text-[#333] dark:text-zinc-300">{founder.name}</h3>
      <h3 className="text-xl md:text-2xl font-display font-light mb-4 text-[#333] dark:text-zinc-300">{founder.position}</h3>

      {/* Description */}
      <div className="text-base text-[#333] dark:text-zinc-300 space-y-4 leading-relaxed">
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

      {/* Icons */}
      <div className="flex gap-6 mt-4">
        <a
          href={founder.linkedin}
          title="LinkedIn"
          className="text-[#222] dark:text-white hover:text-[#555] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin className="w-8 h-8 text-[#222] hover:opacity-70" />
        </a>
        <a
          href={`mailto:${founder.email}`}
          title="Email"
          className="text-[#222] dark:text-white hover:text-[#555] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiMail className="w-8 h-8 text-[#222] hover:opacity-70" />
        </a>
      </div>
    </div>
  </Card>
);

export default FounderCard;
