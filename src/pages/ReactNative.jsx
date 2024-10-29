import { useState } from "react";
import { CategoriesCard, DesignCards } from "../components/Cards";
import { SecondaryHero } from "../components/Heroes";

import WorkItImage from "../images/cards/angular-cards/workit.png";

import ReactImage from "../images/categories/react-framework-logo.webp";
import JavascriptImage from "../images/categories/javascript-736401_1280.png";

export const ReactNative = () => {
  const [angularCardsContent] = useState([
    {
      id: 1,
      imageSrc: WorkItImage,
      title: "work it",
      description: "Angular Js, Css, BEM",
      liveUrl: "https://stunning-fenglisu-ff6366.netlify.app/",
      gitUrl: "",
    },
  ]);
  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <SecondaryHero
        title={"react native"}
        description={
          "React Native is an open-source UI software framework developed by Facebook Inc. It is used to develop applications for Android and IOS."
        }
      />
      <div className="container py-24 md:py-[120px] lg:py-[160px] px-6 md:px-0 grid lg:grid-cols-3 gap-y-10 lg:gap-y-8 lg:gap-x-[30px]">
        {angularCardsContent ? (
          angularCardsContent.map((item) => (
            <DesignCards item={item} key={item.id} />
          ))
        ) : (
          <h2 className="font-semibold text-lg">
            No Angular projects at this time
          </h2>
        )}
      </div>
      <div className="container px-6 md:px-0 grid lg:grid-cols-2 gap-y-10 lg:gap-y-8 lg:gap-x-[30px]">
        <CategoriesCard
          url="reactjs"
          img={ReactImage}
          title="react js"
          lgHeight="lg:h-[308px]"
        />
        <CategoriesCard
          url="javascript"
          img={JavascriptImage}
          title="javascript"
          lgHeight="lg:h-[308px]"
        />
      </div>
    </div>
  );
};
