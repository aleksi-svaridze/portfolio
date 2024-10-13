import Passionate from "../images/about/passionate.png";
import Resourceful from "../images/about/resourceful.png";
import Friendly from "../images/about/friendly.png";

export const About = () => {
  const aboutData = [
    {
      id: 1,
      imgSrc: Passionate,
      title: "PASSIONATE",
      desc: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    },
    {
      id: 2,
      imgSrc: Resourceful,
      title: "RESOURCEFUL",
      desc: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    },
    {
      id: 3,
      imgSrc: Friendly,
      title: "FRIENDLY",
      desc: " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    },
  ];
  return (
    <div className="container px-6 md:px-0 lg:flex lg:gap-x-[30px]">
      {aboutData.map((item) => (
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center md:justify-start lg:justify-center md:gap-x-12 mb-[60px] md:mb-8 lg:mb-0">
          <img
            src={item.imgSrc}
            alt={item.title}
            className="w-[202px] h-[202px]"
          />
          <section className="text-center md:text-start lg:text-center">
            <h2 className="font-medium text-[20px] leading-[26px] uppercase tracking-[5px] mt-11 md:mt-0 lg:mt-12 mb-8 md:mb-[15px] lg:mb-8">
              {item.title}
            </h2>
            <p className="text-base leading-[26px]">{item.desc}</p>
          </section>
        </div>
      ))}
    </div>
  );
};
