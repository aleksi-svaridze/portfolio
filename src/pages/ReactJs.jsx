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
import NftImage from "../images/cards/react-cards/nft.png";
import LinkedinImage from "../images/cards/react-cards/linkedin.png";
import BandageImage from "../images/cards/react-cards/bandage.png";
import TravlogImage from "../images/cards/react-cards/travlog.png";

import WebDesign from "../images/categories/web_design.jpg";
import GraphicDesign from "../images/categories/graphic_design.jpg";

export const ReactJs = () => {
  const [reactJsCardContent] = useState([
    {
      id: 1,
      imageSrc: BlogImage,
      title: "blog",
      description: "blog ...",
      liveUrl: "https://reach-star-blog.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/reachStar-blog",
    },
    {
      id: 2,
      imageSrc: DesignoImage,
      title: "designo",
      description: "designo...",
      liveUrl: "https://mydesigno.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/designo",
    },
    {
      id: 3,
      imageSrc: DevfinderImage,
      title: "dev finder",
      description: "devfinder...",
      liveUrl: "https://frontend-github-users.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/searchGithubUsers",
    },
    {
      id: 4,
      imageSrc: TodoImage,
      title: "TODO",
      description:
        "A todo app that features cloud sync with light and dark mode",
      liveUrl: "https://reachstar-todo.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/todo",
    },
    {
      id: 5,
      imageSrc: FaqImage,
      title: "f a q",
      description: "faq ...",
      liveUrl: "https://frontendmentor-accordion.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/react-accordion",
    },
    {
      id: 6,
      imageSrc: QrImage,
      title: "qr code",
      description: "qr ...",
      liveUrl: "https://frontendmentors-qr-app.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/frontendmentors-qr-app",
    },
    {
      id: 7,
      imageSrc: WorkItImage,
      title: "work it",
      description: "work it ...",
      liveUrl: "https://stunning-fenglisu-ff6366.netlify.app/",
      gitUrl: "#",
    },
    {
      id: 8,
      imageSrc: TypeMasterImage,
      title: "type master",
      description: "type master ...",
      liveUrl: "https://typemaster-app.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/typemaster",
    },
    {
      id: 9,
      imageSrc: NftImage,
      title: "nft marketplace",
      description: "marketplace ...",
      liveUrl: "https://marketplace-nft-react.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/react-ntf",
    },
    {
      id: 10,
      imageSrc: LinkedinImage,
      title: "linkedin",
      description: "linkedin ...",
      liveUrl: "https://linked-in-js.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/linkedin",
    },
    {
      id: 11,
      imageSrc: BandageImage,
      title: "bandage",
      description: "bandage ...",
      liveUrl: "https://bandage-react.netlify.app/",
      gitUrl: "https://github.com/aleksi-svaridze/bandage",
    },
    {
      id: 12,
      imageSrc: TravlogImage,
      title: "Travlog",
      description: "Travlog ...",
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
