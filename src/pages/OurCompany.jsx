import { OurCompanyCard } from "../components/Cards";
import { useWindowSize } from "@uidotdev/usehooks";

import AboutImageDesktop from "../images/cards/our-company-cards/aboutDesktop.jpg";
import AboutImageMobile from "../images/cards/our-company-cards/aboutMobile.jpg";

export const OurCompany = () => {
  const { width } = useWindowSize();

  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      {/* TODO: ჩასასწორებელია ourCompanyCard ვერტიკალური მარჯინები */}
      <div className="md:mb-[120px] lg:mb-40">
        <OurCompanyCard
          img={width > 1023 ? AboutImageDesktop : AboutImageMobile}
          title="About me"
          description_1="Hello, my name is Aleksi. I am a junior front-end developer. I have studied HTML / CSS / SCSS / LESS / BOOTSTRAP / TAILWINDCSS / JS / REACTJS from Udemy and various courses, like Geolab.edu.ge and academy.dk.ge. But my main experience was working with Lupi.ge group, where we have built TVSCHOOL.GE from scratch. Now I am Building projects on my own which are presented in this site. I am currently in the process of learning Angular js."
          orderDirection="order-1"
          bgColor={"bg-peach"}
          titleColor={"text-white"}
          descriptionColor={"text-white"}
        />
      </div>
    </div>
  );
};
