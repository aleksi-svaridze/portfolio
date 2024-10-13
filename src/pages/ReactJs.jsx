import { useState } from "react";
import { CategoriesCard, DesignCards } from "../components/Cards";
import { SecondaryHero } from "../components/Heroes";

import BlogImage from "../images/cards/react-cards/blog.png";
import DesignoImage from "../images/cards/react-cards/designo.png";
import DevfinderImage from "../images/cards/react-cards/devfinder.png";
import TodoImage from "../images/cards/react-cards/todo.png";
import FaqImage from "../images/cards/react-cards/questios.png";
import QrImage from "../images/cards/react-cards/qrcode.png";
import WorkItImage from "../images/cards/react-cards/workit.png";
import TypeMasterImage from "../images/cards/react-cards/typemaster.png";

import WebDesign from "../images/categories/web_design.jpg";
import GraphicDesign from "../images/categories/graphic_design.jpg";

export const ReactJs = () => {
  const [appDesignCardsContent] = useState([
    {
      id: 1,
      imageSrc: BlogImage,
      title: "blog",
      description: "blog ...",
    },
    {
      id: 2,
      imageSrc: DesignoImage,
      title: "designo",
      description: "designo...",
    },
    {
      id: 3,
      imageSrc: DevfinderImage,
      title: "dev finder",
      description: "devfinder...",
    },
    {
      id: 4,
      imageSrc: TodoImage,
      title: "TODO",
      description:
        "A todo app that features cloud sync with light and dark mode",
    },
    {
      id: 5,
      imageSrc: FaqImage,
      title: "f a q",
      description: "faq ...",
    },
    {
      id: 6,
      imageSrc: QrImage,
      title: "qr code",
      description: "qr ...",
    },
    {
      id: 7,
      imageSrc: WorkItImage,
      title: "work it",
      description: "work it ...",
    },
    {
      id: 8,
      imageSrc: TypeMasterImage,
      title: "type master",
      description: "type master ...",
    },
  ]);
  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <SecondaryHero
        title={"react js"}
        description={
          "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        }
      />
      <div className="container py-24 md:py-[120px] lg:py-[160px] px-6 md:px-0 grid lg:grid-cols-3 gap-y-10 lg:gap-y-8 lg:gap-x-[30px]">
        {appDesignCardsContent.map((item) => (
          <DesignCards item={item} />
        ))}
      </div>
      <div className="container pb-24 md:pb-[120px] lg:pb-[160px] px-6 md:px-0 grid lg:grid-cols-2 gap-y-10 lg:gap-y-8 lg:gap-x-[30px]">
        <CategoriesCard
          url="javascript"
          img={WebDesign}
          title="javascript"
          lgHeight="lg:h-[308px]"
        />
        <CategoriesCard
          url="angularjs"
          img={GraphicDesign}
          title="angular js"
          lgHeight="lg:h-[308px]"
        />
      </div>
    </div>
  );
};
