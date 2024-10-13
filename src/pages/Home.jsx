import { About } from "../components/About";
import { Categories } from "../components/categories";
import { PrimaryHero } from "../components/Heroes";

export const Home = () => {
  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <PrimaryHero />
      <Categories />
      <About />
    </div>
  );
};
