import { useState } from "react";
import { CategoriesCard, DesignCards } from "../components/Cards";
import { SecondaryHero } from "../components/Heroes";

import IstudioImage from "../images/cards/javascript-cards/istudio.png";
import VerbsImage from "../images/cards/javascript-cards/verbs.png";
import MasonryImage from "../images/cards/javascript-cards/masonry.png";
import StickersImage from "../images/cards/javascript-cards/stickers.png";
import MexicanImage from "../images/cards/javascript-cards/mexican.png";

import ReactImage from "../images/categories/react-framework-logo.webp";
import AngularImage from "../images/categories/Angular_full_color_logo.svg.png";

export const Javascript = () => {
  const [javascriptCardsContent] = useState([
    {
      id: 1,
      imageSrc: IstudioImage,
      title: "Istudio",
      description: "Html, Css, Javascript, jQuery",
      liveUrl: "https://istudio-js.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/istudio",
    },
    {
      id: 2,
      imageSrc: VerbsImage,
      title: "Irregular verbs",
      description: "Html, Css, Javascript",
      liveUrl: "https://verbs-js.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/irregular-verbs",
    },
    {
      id: 3,
      imageSrc: MasonryImage,
      title: "Masonry style",
      description: "Html, Css, Javascript and various js libraries",
      liveUrl: "https://masonry-js.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/geo-masonry",
    },
    {
      id: 4,
      imageSrc: StickersImage,
      title: "Stickers",
      description: "Html, Css, Javascript, jQuery",
      liveUrl: "https://stickers-js.netlify.app",
      gitUrl: "https://github.com/aleksi-svaridze/geo-masonry",
    },
    {
      id: 5,
      imageSrc: MexicanImage,
      title: "Mexican cuisine",
      description: "Html, Css, Bootstrap, Javascript, jQuery",
      liveUrl: "https://mexican-js.netlify.app",
      gitUrl: "https://github.com/aleksi-svaridze/geo-mexican",
    },
  ]);
  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <SecondaryHero
        title="javascript"
        description="JavaScript is a high-level programming language that follows the ECMAScript standard and is currently the most popular programming language in use."
      />
      <div className="container py-24 md:py-[120px] lg:py-[160px] px-6 md:px-0 grid lg:grid-cols-3 gap-y-10 lg:gap-y-8 lg:gap-x-[30px]">
        {javascriptCardsContent.map((item) => (
          <DesignCards item={item} key={item.id} />
        ))}
      </div>
      <div className="container px-6 md:px-0 grid lg:grid-cols-2 gap-y-10 lg:gap-y-8 lg:gap-x-[30px]">
        <CategoriesCard
          url="reactjs"
          img={ReactImage}
          title="react js"
          lgHeight="lg:h-[308px]"
        />
        <CategoriesCard
          url="angular"
          img={AngularImage}
          title="angular"
          lgHeight="lg:h-[308px]"
        />
      </div>
    </div>
  );
};
