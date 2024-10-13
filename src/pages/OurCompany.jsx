import { CountryCard, OurCompanyCard } from "../components/Cards";

import CanadaImage from "../images/cards/location-cards/canada.png";
import AustraliaImage from "../images/cards/location-cards/australia.png";
import UkImage from "../images/cards/location-cards/united-kingdom.png";
import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

import TalentImageDesktop from "../images/cards/our-company-cards/talentDesktop.jpg";
import TalentImageMobile from "../images/cards/our-company-cards/talent-mobile.jpg";

import DealImageDesktop from "../images/cards/our-company-cards/dealDesktop.jpg";
import DealImageMobile from "../images/cards/our-company-cards/dealMobile.jpg";

import AboutImageDesktop from "../images/cards/our-company-cards/aboutDesktop.jpg";
import AboutImageMobile from "../images/cards/our-company-cards/aboutMobile.jpg";

export const OurCompany = () => {
  const { width } = useWindowSize();
  const [locationCardData] = useState([
    { id: 1, title: "canada", img: CanadaImage },
    { id: 2, title: "australia", img: AustraliaImage },
    { id: 3, title: "united kingdom", img: UkImage },
  ]);

  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      {/* TODO: ჩასასწორებელია ourCompanyCard მარჯინები ან ჩავსვათ სხვა დივში და ის დავამარჯინოთ */}
      <div className="mb-0 md:mb-[120px] lg:mb-40">
        <OurCompanyCard
          img={width > 1023 ? AboutImageDesktop : AboutImageMobile}
          title="About Us"
          description_1="Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."
          orderDirection="order-1"
          bgColor={"bg-peach"}
          titleColor={"text-white"}
          descriptionColor={"text-white"}
        />
      </div>

      <OurCompanyCard
        img={width > 1023 ? TalentImageDesktop : TalentImageMobile}
        title="World-class talent"
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

      <div className="grid gap-y-[48px] lg:grid-cols-3 my-[60px] lg:my-[80px]">
        {locationCardData.map((item) => (
          <CountryCard title={item.title} img={item.img} id={item.id} />
        ))}
      </div>

      <OurCompanyCard
        img={width > 1023 ? DealImageDesktop : DealImageMobile}
        title="The real deal"
        description_1="As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        description_2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        orderDirection="order-1"
        bgColor={"bg-extra-light-peach"}
        titleColor={"text-peach"}
      />
    </div>
  );
};
