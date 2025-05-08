import { useState } from "react";
import { CategoriesCard, DesignCards } from "../components/Cards";
import { SecondaryHero } from "../components/Heroes";

import ReactImage from "../images/categories/react-framework-logo.webp";
import JavascriptImage from "../images/categories/javascript-736401_1280.png";

export const ReactNative = () => {
  const [reactNativeCardsContent] = useState();
  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <SecondaryHero
        title={"typescript"}
        description={
          "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript."
        }
      />
      <div className="container py-24 md:py-[120px] lg:py-[160px] px-6 md:px-0 grid lg:grid-cols-3 gap-y-10 lg:gap-y-8 lg:gap-x-[30px]">
        {reactNativeCardsContent ? (
          reactNativeCardsContent.map((item) => (
            <DesignCards item={item} key={item.id} />
          ))
        ) : (
          <h2 className="font-semibold text-lg">
            No typescript projects at this time
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
