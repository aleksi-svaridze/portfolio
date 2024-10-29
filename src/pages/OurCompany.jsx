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
          description_1="Hello, I am Aleksi. I'm a junior front-end developer. I have studied HTML / CSS / SCSS / LESS / BOOTSTRAP / TAILWINDCSS / JS / REACTJS from Udemy and various courses, like Geolab.edu.ge and academy.dk.ge. But my main experience was working with Lupi.ge group, where we have built TVSCHOOL.GE from scratch. Some of the projects, which are presented in this site are old enough and do not describe my current level of knowledge. Of course there are many ways to rebuild them in efficient and modern way."
          orderDirection="order-1"
          bgColor={"bg-peach"}
          titleColor={"text-white"}
          descriptionColor={"text-white"}
        />
      </div>
    </div>
  );
};
