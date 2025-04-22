
const services = [
  {
    title: "Monitoreo regulatorio",
    description:
      "Seguimiento atento de oportunidades y obstáculos para proteger tu agenda y estrategia de negocios.",
    // Reemplaza por tu propia imagen real para producción, aquí una ilustración Unsplash
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Hablar en político",
    description: "Traducimos lo que quieres decir a lo que será escuchado.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Inteligencia corporativa",
    description:
      "Trabajo de inteligencia para entender mejor las narrativas emergentes.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-muted/50 dark:bg-muted/10">
      <div className="container">
        <h2 className="section-title font-display text-black dark:text-white">Qué hacemos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background flex flex-col h-full rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border overflow-hidden"
            >
              <div className="w-full aspect-[4/3] bg-gray-200 dark:bg-zinc-900 flex items-center justify-center overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-[#111] dark:text-zinc-100">{service.title}</h3>
                <p className="font-sans text-base text-[#444] dark:text-zinc-300 mb-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
