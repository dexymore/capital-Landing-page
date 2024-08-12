import React from "react";
import button1 from "../assets/button1.png";
import button2 from "../assets/button2.png";
import button3 from "../assets/button3.png";
import button4 from "../assets/button4.png";

const ButtonSection = () => {
  return (
    <>
      <section
        style={{ backgroundColor: "#070707" }}
        className="w-full flex flex-col items-center justify-center pb-12"
      >
      <div style={{backgroundColor:"#101015"}} className="w-[100%]">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center mt-12">
          Объекты в продаже
        </h1></div>
        <div className="flex md:flex-row flex-col md:gap-32 gap-8 pt-7">
          <div className="md:w-[50%] md:h-[450px] h-[200px] w-[100%] flex md:justify-start justify-center">
            <img
              src={button1}
              className="md:w-full w-[95%] h-auto object-cover"
            />
          </div>
          <div className="text-white md:w-[25%] w-[65%] md:ml-0 ml-12 md:mt-24 ">
            <h2 className="text-3xl ml-2 md:ml-0 font-bold mb-4">
              Многоквартирный дом
            </h2>
            <p className="mb-4 break-words md:w-full w-[95%] md:ml-0 ml-2 ">
              Текст о том какой прекрасный дом итд
            </p>
            <button className="bg-[#D19330] text-black py-2 px-6 mt-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:text-white">
              Подробнее
            </button>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: "#fff" }}
        className="w-full flex flex-col items-center justify-center pb-12 pt-12"
      >
        <div className="flex md:flex-row-reverse flex-col md:gap-32 gap-8">
          <div className="md:w-[50%] md:h-[450px] h-[200px] w-[100%] flex md:justify-start justify-center">
            <img
              src={button2}
              className="md:w-full w-[95%] h-auto object-cover"
            />
          </div>
          <div className="text-black md:w-[25%] w-[65%] md:ml-0 ml-12 md:mt-24  ">
            <h2 className="text-3xl ml-2 md:ml-0 font-bold mb-4">
              Малоэтажный дом
            </h2>
            <p className="mb-4 break-words md:w-full w-[95%] text-gray-500 md:ml-0 ml-2 ">
              Информация о том какой это дом
            </p>
            <button className="bg-[#D19330] text-black py-2 px-6 mt-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:text-white">
              Подробнее
            </button>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: "#070707" }}
        className="w-full flex flex-col items-center justify-center pb-12 pt-12"
      >
        <div className="flex md:flex-row flex-col md:gap-32 gap-8">
          <div className="md:w-[50%] md:h-[450px] h-[200px] w-[100%] flex md:justify-start justify-center">
            <img
              src={button3}
              className="md:w-full w-[95%] h-auto object-cover"
            />
          </div>
          <div className="text-white md:w-[25%] w-[65%] md:ml-0 ml-12 md:mt-24 ">
            <h2 className="text-3xl ml-2 md:ml-0 font-bold mb-4">
              Многоквартирный дом
            </h2>
            <p className="mb-4 break-words md:w-full w-[95%] md:ml-0 ml-2 ">
              Текст о том какой прекрасный дом итд
            </p>
            <button className="bg-[#D19330] text-black py-2 px-6 mt-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:text-white">
              Подробнее
            </button>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundColor: "#fff" }}
        className="w-full flex flex-col items-center justify-center pb-12 pt-12"
      >
        <div className="flex md:flex-row-reverse flex-col md:gap-32 gap-8">
          <div className="md:w-[800px] md:mr-[-240px] md:h-[450px] h-[200px] w-[100%] flex md:justify-start justify-center">
            <img
              src={button4}
              className="md:w-full w-[100%] h-auto object-cover"
            />
          </div>
          <div className="text-black md:w-[50%] w-[65%] md:mr-[60px]   md:mt-24  ">
            <h2 className="text-3xl ml-2 md:ml-0 font-bold mb-4">
              Малоэтажный дом
            </h2>
            <p className="mb-4 break-words md:w-full w-[95%] text-gray-500 md:ml-0 ml-2 ">
              Информация о том какой это дом
            </p>
            <button className="bg-[#D19330] text-black py-2 px-6 mt-4 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:text-white">
              Подробнее
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ButtonSection;
