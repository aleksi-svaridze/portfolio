import PrimaryHeroImg from "../images/hero_images/primaryHeroImg.png";
import PrimaryHeroImgMobile from "../images/hero_images/primaryHeroImgMobile.png";
import { useWindowSize } from "@uidotdev/usehooks";
import { ButtonWhite } from "./Btns";

export const PrimaryHero = () => {
  const { width } = useWindowSize();

  return (
    <div className="relative h-[843px] lg:h-[640px] bg-peach md:rounded-[15px] pt-20 md:pt-[60px] lg:pt-0 px-7 lg:px-16 xl:px-24 overflow-hidden">
      <div className="w-[640px] h-[640px] rounded-full absolute top-[50%] -translate-y-[50%] left-0 md:left-auto md:-right-32 xl:-translate-y-[0] xl:right-0 xl:top-0 xl:bottom-0 bg-gradient-to-t from-transparent to-[#5D0202]/50"></div>

      <div className="lg:flex h-full lg:items-center">
        <section className="relative z-10 flex flex-col items-center justify-center lg:block text-center lg:text-left">
          <h1 className="text-[32px] leading-9 md:text-5xl font-medium text-white max-w-[415px] md:max-w-[573px] lg:w-[540px]">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-[15px] md:text-base leading-[25px] md:leading-[26px] text-white mt-6 md:mt-8 lg:mt-8 mb-4 min-[375px]:mb-7 md:mb-5 lg:mb-10 max-w-[415px] md:max-w-[460px] lg:w-[440px]">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <ButtonWhite title="Learn More" />
        </section>
        {width >= 1024 ? (
          <img
            src={PrimaryHeroImg}
            alt=""
            className="absolute right-0 bottom-0"
          />
        ) : (
          <img
            src={PrimaryHeroImgMobile}
            alt=""
            className="absolute left-[50%] -translate-x-[50%] bottom-0"
          />
        )}
      </div>
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
