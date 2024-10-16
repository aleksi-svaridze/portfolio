import { useState } from "react";
import { CategoriesCard, DesignCards } from "../components/Cards";
import { SecondaryHero } from "../components/Heroes";

import BrownImage from "../images/cards/graphic-design-cards/brown.jpg";
import WaterImage from "../images/cards/graphic-design-cards/water.jpg";
import ScienceImage from "../images/cards/graphic-design-cards/science.jpg";

import AppDesign from "../images/categories/app_design.jpg";
import WebDesign from "../images/categories/web_design.jpg";

export const AngularJs = () => {
  const [graphicDesignCardsContent] = useState([
    {
      id: 1,
      imageSrc: BrownImage,
      title: "TIM BROWN",
      description:
        "A book cover designed for Tim Brown's new release, 'Change'",
    },
    {
      id: 2,
      imageSrc: WaterImage,
      title: "BOXED WATER",
      description: "A simple packaging concept made for Boxed Water",
    },
    {
      id: 3,
      imageSrc: ScienceImage,
      title: "SCIENCE!",
      description:
        "A poster made in collaboration with the Federal Art Project",
    },
  ]);
  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <SecondaryHero
        title={"angular js"}
        description={
          "We deliver eye-catching branding materials that are tailored to meet your business objectives."
        }
      />
      <div className="container py-24 md:py-[120px] lg:py-[160px] px-6 md:px-0 grid lg:grid-cols-3 gap-y-10 lg:gap-y-8 lg:gap-x-[30px]">
        {graphicDesignCardsContent.map((item) => (
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
          url="javascript"
          img={WebDesign}
          title="javascript"
          lgHeight="lg:h-[308px]"
        />
      </div>
    </div>
  );
};
