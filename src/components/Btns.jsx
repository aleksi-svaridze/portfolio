import { Link } from "react-router-dom";
import scrollToTop from "../functions";

export const ButtonPeach = ({ title, url, blank, customStyle }) => {
  return (
    <Link
      to={url}
      target={blank ? "_blank" : undefined}
      onClick={blank ? undefined : scrollToTop}
      className={`text-white transition easy-in-out duration-200 hover:bg-light-peach h-14 rounded-lg bg-peach text-[15px] font-medium uppercase tracking-[1px] px-6 inline-flex items-center justify-center min-w-[152px] ${customStyle}`}
    >
      {title}
    </Link>
  );
};

export const ButtonWhite = ({ title, url, blank, customStyle }) => {
  return (
    <Link
      to={url}
      target={blank ? "_blank" : undefined}
      onClick={blank ? undefined : scrollToTop}
      className={`hover:text-white hover:bg-light-peach transition easy-in-out duration-200 h-14 rounded-lg bg-white text-[15px] font-medium uppercase tracking-[1px]  inline-flex items-center justify-center px-6 min-w-[152px] ${customStyle}`}
    >
      {title}
    </Link>
  );
};
