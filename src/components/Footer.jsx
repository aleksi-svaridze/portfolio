import { Link, NavLink, useLocation } from "react-router-dom";
import LogoImage from "../images/logo.png";
import { FooterCard } from "./Cards";
import scrollToTop from "../functions";

export const Footer = () => {
  const location = useLocation();

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
          {location.pathname !== "/contact" ? <FooterCard /> : undefined}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link
            onClick={scrollToTop}
            to="/"
            className="flex items-center justify-center md:justify-normal w-full md:w-auto gap-x-5 border-b border-white/10 md:border-0 mb-8 pb-8 md:mb-0 md:pb-0"
          >
            <img src={LogoImage} alt="" className="w-6 h-6" />
            <span className="text-2xl text-white leading-6 tracking-[5px] uppercase font-bold font-spartan">
              portfolio
            </span>
          </Link>

          <nav className="text-white flex flex-col md:flex-row items-center md:items-start gap-y-8 md-gap-y-0 md:gap-x-[42px] uppercase text-sm leading-[14px] tracking-[2px]">
          <NavLink
              onClick={scrollToTop}
              to="home"
              className={({ isActive }) =>
                isActive ? "border-b border-white" : undefined
              }
            >
              home
            </NavLink>
            <NavLink
              onClick={scrollToTop}
              to="about"
              className={({ isActive }) =>
                isActive ? "border-b border-white" : undefined
              }
            >
              about
            </NavLink>
            <NavLink
              onClick={scrollToTop}
              to="contact"
              className={({ isActive }) =>
                isActive ? "border-b border-white" : undefined
              }
            >
              contact
            </NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
};
