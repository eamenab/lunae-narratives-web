import galleryBg from "@/assets/gallery_background_11.jpg";
import logo from "@/assets/logolunaefinal.004.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 md:pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={galleryBg}
          alt="Background"
          className="w-full h-full object-cover filter dark:brightness-50"
        />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Logo + Text under it */}
          <div className="lg:col-span-12 flex flex-col items-center text-center animate-fade-in">
            <div className="relative w-full max-w-none">
            <img
              src={logo}
              alt="Lunae Logo"
              className="w-[97%] max-w-xs md:max-w-sm lg:max-w-md mx-auto"
            />
            </div>
            <br></br>
            <br></br>
            <h1 className="font-nunito text-2xl md:text-2xl lg:text-4xl leading-tight text-[#333] dark:text-white text-center scale-x-[1.1]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inteligencia política y narrativa.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
