import { Link, NavLink, useLocation } from "react-router-dom";
import LogoImage from "../images/logo.png";
import { Facebook, Youtube, X, Pinterest, Instagram } from "../images/svgs";
import { FooterCard } from "./Cards";
import scrollToTop from "../functions";

export const Footer = () => {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <footer
      className={`${
        location.pathname !== "/contact"
          ? "pt-[250px] md:pt-40 lg:pt-[144px] mt-[300px] md:mt-[380px]"
          : "pt-[70px] mt-[120px] lg:mt-40"
      } pb-[70px] bg-black`}
    >
      <div className="container px-6 md:px-10 xl:px-[85px] relative">
        <div className="absolute -top-[440px] md:-top-[400px] lg:-top-[365px] left-0 right-0 px-6 md:px-10 xl:px-[85px]">
          {location.pathname !== "/contact" && <FooterCard />}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link
            onClick={scrollToTop}
            to="/"
            className="flex items-center justify-center md:justify-normal w-full md:w-auto gap-x-5 border-b border-white/10 md:border-0 mb-8 pb-8 md:mb-0 md:pb-0"
          >
            <img src={LogoImage} alt="" className="w-6 h-6" />
            <span className="text-2xl text-white leading-6 tracking-[5px] uppercase font-bold font-spartan">
              designo
            </span>
          </Link>

          <nav className="text-white flex flex-col md:flex-row items-center md:items-start gap-y-8 md-gap-y-0 md:gap-x-[42px] uppercase text-sm leading-[14px] tracking-[2px]">
            <NavLink
              onClick={scrollToTop}
              to="about"
              className={({ isActive }) => isActive && "border-b border-white"}
            >
              our company
            </NavLink>
            <NavLink
              onClick={scrollToTop}
              to="locations"
              className={({ isActive }) => isActive && "border-b border-white"}
            >
              locations
            </NavLink>
            <NavLink
              onClick={scrollToTop}
              to="contact"
              className={({ isActive }) => isActive && "border-b border-white"}
            >
              contact
            </NavLink>
          </nav>
        </div>

        <div className="hidden md:block h-[1px] bg-white/10 mt-10 mb-8"></div>

        <div className="grid md:grid-cols-3 mt-10 md:mt-0 gap-y-10 md:gap-x-5 text-center text-white/50 md:text-left">
          <div className="">
            <h3 className="font-bold text-base leading-[26px] capitalize">
              Designo Central office
            </h3>
            <p className="text-base leading-[26px] capitalize">
              3886 Wellington Street
            </p>
            <p className="text-base leading-[26px]">Toronto, Ontario M9C 3J5</p>
          </div>

          <div className="">
            <h3 className="font-bold text-base leading-[26px] capitalize">
              Contact Us (Central Office)
            </h3>
            <p className="text-base leading-[26px]">
              P : <a href="tel:+12538638967">+1 253-863-8967</a>
            </p>
            <p className="text-base leading-[26px]">
              M : <a href="mailto:contact@designo.co">contact@designo.co</a>
            </p>
          </div>

          <div className="">
            <div className="flex gap-x-4 h-full justify-center md:justify-end items-end">
              <a href="/">
                <Facebook />
              </a>
              <a href="/">
                <Youtube />
              </a>
              <a href="/">
                <X />
              </a>
              <a href="/">
                <Pinterest />
              </a>
              <a href="/">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
