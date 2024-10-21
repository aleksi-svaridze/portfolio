import { useState } from "react";
import { CategoriesCard, DesignCards } from "../components/Cards";
import { SecondaryHero } from "../components/Heroes";

import BlogImage from "../images/cards/react-cards/blog.png";
import DesignoImage from "../images/cards/react-cards/designo.png";
import DevfinderImage from "../images/cards/react-cards/devfinder.png";
import TodoImage from "../images/cards/react-cards/todo.png";
import FaqImage from "../images/cards/react-cards/questios.png";
import QrImage from "../images/cards/react-cards/qrcode.png";
import TypeMasterImage from "../images/cards/react-cards/typemaster.png";
import NftImage from "../images/cards/react-cards/nft.png";
import LinkedinImage from "../images/cards/react-cards/linkedin.png";
import BandageImage from "../images/cards/react-cards/bandage.png";
import TravlogImage from "../images/cards/react-cards/travlog.png";

import JavascriptImage from "../images/categories/javascript-736401_1280.png";
import AngularImage from "../images/categories/Angular_gradient.png";

export const ReactJs = () => {
  const [reactJsCardContent] = useState([
    {
      id: 1,
      imageSrc: BlogImage,
      title: "blog",
      description: "React Js, Tailwind Css, API",
      liveUrl: "https://reach-star-blog.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/reachStar-blog",
    },
    {
      id: 2,
      imageSrc: DesignoImage,
      title: "designo",
      description: "React Js, Tailwind Css",
      liveUrl: "https://mydesigno.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/designo",
    },
    {
      id: 3,
      imageSrc: DevfinderImage,
      title: "dev finder",
      description: "React Js, Scss",
      liveUrl: "https://frontend-github-users.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/searchGithubUsers",
    },
    {
      id: 4,
      imageSrc: TodoImage,
      title: "TODO",
      description: "React Js, Css",
      liveUrl: "https://reachstar-todo.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/todo",
    },
    {
      id: 5,
      imageSrc: FaqImage,
      title: "f a q",
      description: "React Js, Scss",
      liveUrl: "https://frontendmentor-accordion.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/react-accordion",
    },
    {
      id: 6,
      imageSrc: QrImage,
      title: "qr code",
      description: "React Js, Scss",
      liveUrl: "https://frontendmentors-qr-app.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/frontendmentors-qr-app",
    },
    {
      id: 7,
      imageSrc: TypeMasterImage,
      title: "type master",
      description: "React Js, Typescript, Scss, Bootstrap",
      liveUrl: "https://typemaster-app.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/typemaster",
    },
    {
      id: 8,
      imageSrc: NftImage,
      title: "nft marketplace",
      description: "React Js, Scss, Bootstrap",
      liveUrl: "https://marketplace-nft-react.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/react-ntf",
    },
    {
      id: 9,
      imageSrc: LinkedinImage,
      title: "linkedin",
      description: "React Js, Scss, Bootstrap",
      liveUrl: "https://linked-in-js.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/linkedin",
    },
    {
      id: 10,
      imageSrc: BandageImage,
      title: "bandage",
      description: "React Js, Scss, Bootstrap",
      liveUrl: "https://bandage-react.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/bandage",
    },
    {
      id: 11,
      imageSrc: TravlogImage,
      title: "Travlog",
      description: "React Js, Scss, Bootstrap",
      liveUrl: "https://travelog-react.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/travlog",
    },
  ]);
  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <SecondaryHero
        title={"react js"}
        description={
          "React Js is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc."
        }
      />
      <div className="container py-24 md:py-[120px] lg:py-[160px] px-6 md:px-0 grid lg:grid-cols-3 gap-y-10 lg:gap-y-8 lg:gap-x-[30px]">
        {reactJsCardContent.map((item) => (
          <DesignCards item={item} key={item.id} />
        ))}
      </div>
      <div className="container px-6 md:px-0 grid lg:grid-cols-2 gap-y-10 lg:gap-y-8 lg:gap-x-[30px]">
        <CategoriesCard
          url="javascript"
          img={JavascriptImage}
          title="javascript"
          lgHeight="lg:h-[308px]"
        />
        <CategoriesCard
          url="angularjs"
          img={AngularImage}
          title="angular js"
          lgHeight="lg:h-[308px]"
        />
      </div>
    </div>
  );
};
