import ReactImage from "../images/categories/react-framework-logo.webp";
import JavascriptImage from "../images/categories/javascript-736401_1280.png";
import ReactNative from "../images/categories/React-icon.png";
import { CategoriesCard } from "./Cards";

export const Categories = () => {
  return (
    <div className="container my-[120px] lg:my-40 grid lg:grid-cols-2 gap-y-6 lg:gap-x-7 px-6 md:px-0">
      <CategoriesCard
        url="javascript"
        img={JavascriptImage}
        title="javascript"
        lgHeight="lg:h-[640px]"
      />

      <div className="grid gap-y-6">
        <CategoriesCard
          url="reactjs"
          img={ReactImage}
          title="react js"
          lgHeight="lg:h-[308px]"
        />

        <CategoriesCard
          url="reactnative"
          img={ReactNative}
          title="react native"
          lgHeight="lg:h-[308px]"
        />
      </div>
    </div>
  );
};
