import { LocationCard } from "../components/Cards";
import CanadaTabletImage from "../images/cards/location-card/canadaDesktop.jpg";
import AustraliaTabletImage from "../images/cards/location-card/australiaTablet.jpg";
import UkTabletImage from "../images/cards/location-card/ukTablet.jpg";
// import { useWindowSize } from "@uidotdev/usehooks";

export const Location = () => {
  // const { width } = useWindowSize();

  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <div className="grid gap-y-[40px] md:gap-y-[120px] lg:gap-y-8">
        <LocationCard
          map={CanadaTabletImage}
          title={"canada"}
          address_1={"3886 Wellington Street"}
          address_2={"Toronto, Ontario M9C 3J5"}
          tel={"+1 253-863-8967"}
          email={"contact@designo.ca"}
        />
        <LocationCard
          orderDirection={"order-first"}
          map={AustraliaTabletImage}
          title={"australia"}
          address_1={"19 Balonne Street"}
          address_2={"New South Wales 2443"}
          tel={"(02) 6720 9092"}
          email={"contact@designo.au"}
        />
        <LocationCard
          map={UkTabletImage}
          title={"united kingdom"}
          address_1={"13  Colorado Way"}
          address_2={"Rhyd-y-fro SA8 9GA"}
          tel={"078 3115 1400"}
          email={"contact@designo.uk"}
        />
      </div>
    </div>
  );
};
