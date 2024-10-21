import { DiJavascript, DiCss3, DiHtml5 } from "react-icons/di";

export const About = () => {
  const aboutData = [
    {
      id: 1,
      imgSrc: (
        <DiHtml5 className="w-[202px] h-[202px] shrink-0 text-[#f16524]" />
      ),
      title: "html",
      desc: "Html (HyperText Markup Language) is the standard language for creating web pages. It defines the structure of web content using elements like text, images, links, and forms displayed in browsers",
    },
    {
      id: 2,
      imgSrc: (
        <DiCss3 className="w-[202px] h-[202px] shrink-0 text-[#2465f1]" />
      ),
      title: "css",
      desc: "Css (Cascading Style Sheets) is a language used to describe the presentation of web pages, including layout, colors, and fonts. It controls how HTML elements are displayed across devices",
    },
    {
      id: 3,
      imgSrc: (
        <DiJavascript className="w-[202px] h-[202px] shrink-0 text-[#ffda3e]" />
      ),
      title: "javascript",
      desc: "Javascript is a versatile, lightweight programming language used to create dynamic web content. It supports multiple paradigms and works across platforms, powering websites and applications with interactive features",
    },
  ];
  return (
    <div className="container px-6 md:px-0 lg:flex lg:gap-x-[30px]">
      {aboutData.map((item) => (
        <div
          className="flex flex-col md:flex-row lg:flex-col items-center justify-center md:justify-start lg:justify-center md:gap-x-12 mb-[60px] md:mb-8 lg:mb-0"
          key={item.id}
        >
          {item.imgSrc}

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
