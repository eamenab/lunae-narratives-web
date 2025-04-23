
import FounderCard from "./FounderCard";

const AboutSection = () => {
  return (
    <section id="about" className="bg-muted/50 dark:bg-muted/10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title font-display text-black dark:text-white">sobre lunae</h2>
        </div>

        {/* FounderCard grid – now outside the constrained width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <FounderCard />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
