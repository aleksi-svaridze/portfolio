import { Link } from "react-router-dom";
import scrollToTop from "../functions";

export const ButtonPeach = ({ title, url }) => {
  return (
    <Link
      to={url}
      onClick={scrollToTop}
      className="text-white hover:bg-light-peach h-14 rounded-lg bg-peach text-[15px] font-medium uppercase tracking-[1px] px-6 inline-flex items-center justify-center min-w-[152px]"
    >
      {title}
    </Link>
  );
};

export const ButtonWhite = ({ title, url }) => {
  return (
    <Link
      to={url}
      onClick={scrollToTop}
      className="hover:text-white hover:bg-light-peach h-14 rounded-lg bg-white text-[15px] font-medium uppercase tracking-[1px]  inline-flex items-center justify-center px-6 min-w-[152px]"
    >
      {title}
    </Link>
  );
};
