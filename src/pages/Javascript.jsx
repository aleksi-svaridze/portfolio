import { useState } from "react";
import { CategoriesCard, DesignCards } from "../components/Cards";
import { SecondaryHero } from "../components/Heroes";

import imageExpress from "../images/cards/web-design-cards/express.jpg";
import imageTransfer from "../images/cards/web-design-cards/transfer.jpg";
import imagePhoton from "../images/cards/web-design-cards/photon.jpg";
import imageBuilder from "../images/cards/web-design-cards/builder.jpg";
import imageBlogr from "../images/cards/web-design-cards/blogr.jpg";
import imageCamp from "../images/cards/web-design-cards/camp.jpg";

import AppDesign from "../images/categories/app_design.jpg";
import GraphicDesign from "../images/categories/graphic_design.jpg";

export const Javascript = () => {
  const [webDesignCardsContent] = useState([
    {
      id: 1,
      imageSrc: imageExpress,
      title: "express",
      description: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      id: 2,
      imageSrc: imageTransfer,
      title: "transfer",
      description:
        "Site for low-cost money transfers and sending money within seconds",
    },
    {
      id: 3,
      imageSrc: imagePhoton,
      title: "photon",
      description:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      id: 4,
      imageSrc: imageBuilder,
      title: "builder",
      description:
        "Connects users with local contractors based on their location",
    },
    {
      id: 5,
      imageSrc: imageBlogr,
      title: "blogr",
      description:
        "Blogr is a platform for creating an online blog or publication",
    },
    {
      id: 6,
      imageSrc: imageCamp,
      title: "camp",
      description:
        "Get expert training in coding, data, design, and digital marketing",
    },
  ]);
  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <SecondaryHero
        title="javascript"
        description="We build websites that serve as powerful marketing tools and bring
          memorable brand experiences."
      />
      <div className="container py-24 md:py-[120px] lg:py-[160px] px-6 md:px-0 grid lg:grid-cols-3 gap-y-10 lg:gap-y-8 lg:gap-x-[30px]">
        {webDesignCardsContent.map((item) => (
          <DesignCards item={item} />
        ))}
      </div>
      <div className="container pb-24 md:pb-[120px] lg:pb-[160px] px-6 md:px-0 grid lg:grid-cols-2 gap-y-10 lg:gap-y-8 lg:gap-x-[30px]">
        <CategoriesCard
          url="reactjs"
          img={AppDesign}
          title="react js"
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
