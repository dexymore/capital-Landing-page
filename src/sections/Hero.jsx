import React from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const Hero = () => {
  return (
    <section className="md:relative w-full text-white font-sans font-bold flex flex-col items-center justify-center ">
      <div className="text-center w-full md:h-[100vh] h-[85vh]  hero-bg flex items-center justify-center">
        <h1 className="text-[2rem] md:text-[3.625rem] text-shadow fade-in uppercase">
          Capital International
        </h1>
      </div>

      <div className="w-full md:pb-[50px] bg-[#101015] flex flex-col items-center py-8">
  <div className="md:absolute bottom-[45px]  flex flex-col md:flex-row items-center justify-center w-[95%] md:w-[70%] mx-auto space-y-4 md:space-y-0 md:space-x-4">
    <div className="relative w-full md:w-auto">
      <img
        src={hero1}
        alt="Hero 1"
        className="w-auto max-w-full"
      />
      <span className="absolute bottom-10 right-0  bg-[#00000094] text-white text-xl font-bold px-4 py-1 hover:bg-[#0000015f]">
      проекты
      </span>
    </div>
    <div className="relative w-full md:w-auto">
      <img
        src={hero2}
        alt="Hero 2"
        className="w-auto max-w-full"
      />
      <span className="absolute bottom-10 right-0 bg-[#00000094] text-white text-xl font-bold px-4 py-1 hover:bg-[#0000015f]">
        
					
					
					Ипотека				
      </span>
    </div>
    <div className="relative w-full md:w-auto">
      <img
        src={hero3}
        alt="Hero 3"
        className="w-auto max-w-full"
      />
      <span className="absolute bottom-10 right-0 bg-[#00000094] text-white text-xl font-bold px-4 py-1 hover:bg-[#0000015f]">
        CAPITAL
      </span>
    </div>
  </div>
</div>

    </section>
  );
};

export default Hero;
