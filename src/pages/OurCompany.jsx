import { OurCompanyCard } from "../components/Cards";
import { useWindowSize } from "@uidotdev/usehooks";

import TalentImageDesktop from "../images/cards/our-company-cards/talentDesktop.jpg";
import TalentImageMobile from "../images/cards/our-company-cards/talent-mobile.jpg";

import DealImageDesktop from "../images/cards/our-company-cards/dealDesktop.jpg";
import DealImageMobile from "../images/cards/our-company-cards/dealMobile.jpg";

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
          description_1="Hello, I am a junior front-end developer. I have studied HTML / CSS / SCSS / LESS / BOOTSTRAP / TAILWINDCSS / JS / REACTJS from Udemy and various courses, like Geolab.edu.ge and academy.dk.ge. But my main experience was working with Lupi.ge group, where we have built TVSCHOOL.GE from scratch. Now I am Building projects on my own which are presented in this site. I am currently in the process of learning Angular js."
          orderDirection="order-1"
          bgColor={"bg-peach"}
          titleColor={"text-white"}
          descriptionColor={"text-white"}
        />
      </div>

      <div className="md:mb-[120px] lg:mb-40">
        <OurCompanyCard
          img={width > 1023 ? TalentImageDesktop : TalentImageMobile}
          title="At Lupi Group"
          description_1="We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms."
          description_2="  Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand's story and mission."
          orderDirection="order-0"
          bgColor={"bg-extra-light-peach"}
          titleColor={"text-peach"}
        />
      </div>

      <OurCompanyCard
        img={width > 1023 ? DealImageDesktop : DealImageMobile}
        title="Freelancing"
        description_1="As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        description_2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        orderDirection="order-1"
        bgColor={"bg-extra-light-peach"}
        titleColor={"text-peach"}
      />
    </div>
  );
};
