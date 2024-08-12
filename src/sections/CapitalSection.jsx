import React from "react";
import firstSection from "../assets/ey-arab-business-people-shaking-hands-1-1536x1024.jpg";
import seconcdSection from "../assets/second-image-capital.png";
import thirdSection from "../assets/third-Image-capital.png";
const CapitalSection = () => {
  return (
    <>
      <section
        style={{ backgroundColor: "#070707" }} // Using inline style for dynamic color
        className="w-full  flex flex-col items-center justify-center pb-12"
      >
        <h1 className="text-white text-5xl font-bold mb-12">CAPITAL</h1>
        <div className="flex md:flex-row flex-col-reverse gap-16">
          <div className="md:w-[60%] w-[100%] flex justify-center">
            <img
              src={firstSection}
              className="md:w-full w-[95%] object-contain"
            />
          </div>
          <div className="text-white md:w-[25%] w-full  mt-12">
            <p className="mb-4 break-words md:w-full w-[95%] md:ml-0 ml-2">
              Дубайский рынок недвижимости отличается надежностью и высокой
              окупаемостью. Согласно отчету Reidin/Global Capital Partners за
              последние 10 лет доходность подобных инвестиций составила 120%.
              Сейчас в Дубае проходит выставка Expo2020. Всемирная выставка
              такого класса будет впервые проводится в разрезе стран Южной Азии,
              Африки и Ближнего востока. Она позволит не только дать мощный
              толчок к появлению новых рабочих мест, но и подогреет немалый
              ажиотаж к Дубайской недвижимости.
            </p>
            <p className="break-words md:w-full w-[95%] md:ml-0 ml-2">
              Цель Capital International: Строительство своего первого в ОАЭ
              Резидентского комплекса из 79 апартаментов премиум класса в районе
              Palm Jumeirah в Дубае, с последующей реализацией, расширением
              рынка сбыта и укреплением конкурентоспособности Компании. Сроки
              реализации проекта One Crescent by Capital International: с
              01.02.2022г. по 31.12.2024г. При реализации проектов Capital
              International будет привлекать инвестиции и выступать в качестве
              заказчика.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: "#fff" }} // Using inline style for dynamic color
        className="w-full  flex flex-col items-center justify-center"
      >
        <div className="flex md:flex-row-reverse md:mt-12  flex-col-reverse md:gap-16 gap-5">
          <div className="md:w-[60%] w-[100%] flex justify-center">
            <img
              src={seconcdSection}
              className="md:w-full w-[95%] object-contain md:mr-3"
            />
          </div>
          <div className=" md:w-[30%] w-full  md:mt-24 mt-5 ">
            <h2 className=" text-3xl  ml-2 md:ml-0 font-bold mb-2">
              Изысканность
            </h2>
            <p className="mb-4 break-words md:w-full w-[95%] md:ml-0 ml-2">
              Учитывая большое разнообразие влияний, присутствующих в наших
              сообществах, совершенно очевидно, что мы в значительной степени
              опираемся на знаковые места и архитектурные стили. Этот интерес к
              использованию нашего обширного опыта развития сообществ,
              обладающего мирским видением и применяющего различную эстетику,
              делает наше портфолио воплощением изысканности.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: "#fff" }} // Using inline style for dynamic color
        className="w-full  flex flex-col items-center justify-center"
      >
        <div className="flex md:flex-row md:mt-12  flex-col-reverse md:gap-16 gap-5">
          <div className="md:w-[60%] w-[100%] flex justify-center">
            <img
              src={thirdSection}
              className="md:w-full w-[95%] object-contain  md:ml-3"
            />
          </div>
          <div className=" md:w-[30%] w-full  md:mt-24 mt-5 ">
            <h2 className=" text-3xl  ml-2 md:ml-0 font-bold mb-2">
            Надежность
            </h2>
            <p className="mb-4 break-words md:w-full w-[95%] md:ml-0 ml-2">
              Доверие и последовательное выполнение наших обещаний идут рука об
              руку с нашим желанием создавать впечатляющие пространства. От
              концепции грандиозной идеи до выбора лучших материалов и создания
              сообществ мирового класса не имели бы такой же ценности, если бы
              наши клиенты не верили в нашу приверженность служить им в меру
              наших возможностей.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CapitalSection;
