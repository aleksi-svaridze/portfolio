// import { useWindowSize } from "@uidotdev/usehooks";

export const PrimaryHero = () => {
  // const { width } = useWindowSize();

  return (
    <div className="relative bg-peach md:rounded-[15px] py-20 md:py-10 lg:py-16 px-7 lg:px-16 xl:px-24 overflow-hidden">
      <div className="w-[640px] h-[640px] rounded-full absolute top-[50%] -translate-y-[50%] left-0 md:left-auto md:-right-32 xl:-translate-y-[0] xl:right-0 xl:top-0 xl:bottom-0 bg-gradient-to-t from-transparent to-[#5D0202]/30"></div>

      <section className="text-white">
        <h1 className="text-2xl md:text-3xl font-medium  capitalize">
          About me
        </h1>
        <p className="lg:text-lg md:text-base mt-6">
          Hi, I am Alex. With over 3 years in freelancing and 2 years in a
          particular company, I am experienced in creating fully responsive
          websites and various types in web technology. Scroll down for more
          about my projects.
        </p>
      </section>
    </div>
  );
};

export const SecondaryHero = ({ title, description }) => {
  return (
    <div className="relative h-[320px] md:h-[252px] bg-peach md:rounded-[15px] overflow-hidden flex items-center">
      {/* Top circles */}
      <div className="w-[292px] h-[292px] rounded-full absolute top-0 md:-top-[166px] right-0 md:-right-[166px] xl:right-0 bg-gradient-to-b from-[#5D0202]/0 to-[#5D0202]/15"></div>

      <div className="w-[292px] h-[292px] rounded-full absolute top-0 md:-top-[166px] right-[292px] md:right-[126px] xl:right-[292px]  bg-gradient-to-tl from-[#5D0202]/0 to-[#5D0202]/15"></div>

      <div className="hidden md:block w-[292px] h-[292px] rounded-full absolute md:-top-[166px] md:right-[418px] xl:right-[584px] bg-gradient-to-tr from-[#5D0202]/0 to-[#5D0202]/10"></div>

      {/* Bottom circles */}
      <div className="hidden md:block w-[292px] h-[292px] rounded-full absolute md:-bottom-[166px] md:-right-[166px] xl:right-0 bg-gradient-to-b from-[#5D0202]/0 to-[#5D0202]/15"></div>
      <div className="hidden md:block w-[292px] h-[292px] rounded-full absolute md:-bottom-[166px] md:right-[126px] xl:right-[292px] bg-gradient-to-l from-[#5D0202]/0 to-[#5D0202]/15"></div>

      <div className="w-[325px] md:w-[390px] text-white text-center mx-auto z-10">
        <h1 className="capitalize font-medium text-[32px] md:text-5xl leading-9 md:leading-none mb-6">
          {title}
        </h1>
        <p className="text-[15px] md:text-base leading-[25px] md:leading-[26px]">
          {description}
        </p>
      </div>
    </div>
  );
};
