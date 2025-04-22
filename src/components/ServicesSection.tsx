
import { Check } from "lucide-react";

const services = [
  {
    title: "Monitoreo regulatorio",
    description: "Seguimiento atento de oportunidades y obstáculos para proteger tu agenda y estrategia de negocios.",
    icon: "📊",
  },
  {
    title: "Hablar en político",
    description: "Traducimos lo que quieres decir a lo que será escuchado.",
    icon: "🗣️",
  },
  {
    title: "Inteligencia corporativa",
    description: "Trabajo de inteligencia para entender mejor las narrativas emergentes.",
    icon: "🧠",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-muted/50 dark:bg-muted/10">
      <div className="container">
        <h2 className="section-title">Qué hacemos</h2>
        <p className="section-subtitle">
          Aportamos valor a través de nuestros servicios especializados
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-background p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border flex flex-col h-full"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
