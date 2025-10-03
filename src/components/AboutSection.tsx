
import FounderCard from "./FounderCard";

const AboutSection = () => {
  return (
    <section id="about" className="bg-muted/50 dark:bg-muted/10">
      <div className="container">
      <div className="inline-block text-left mb-6">
        <h2 className="font-nunito text-5xl font-light text-[#222] dark:text-white tracking-wide scale-x-[1.1] mb-4 pl-4 md:pl-4">
          Sobre lunae
        </h2>
        <div className="h-[1px] bg-[#222] dark:bg-white mt-2 w-full"></div>
      </div>

        {/* FounderCard grid - properly aligned with the title */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <FounderCard />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
