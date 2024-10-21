// import { useState } from "react";

import { ButtonWhite } from "../components/Btns";

export const Contact = () => {
  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <div
        className={`grid lg:grid-cols-2 md:rounded-[15px] py-12 md:py-16 bg-peach relative overflow-hidden z-0`}
      >
        <section className="pb-20 text-white px-4 md:px-20 lg:pl-20 lg:pr-16 lg:py-0 flex flex-col text-center md:text-start lg:justify-center gap-y-6">
          <h3 className={`font-medium text-[32px] leading-9 capitalize`}>
            contact me
          </h3>
          <p className={`text-[15px] leading-[25px]`}>
            I have created this portfolio site using ReactJs, which also
            contains several projects I have created. Here you can visit
            project's live templates and github repositories as well. If you are
            happy with my experience, feel free to contact me.
          </p>
        </section>
        <form className="flex flex-col px-4 md:px-20 lg:pl-0">
          <input
            type="text"
            placeholder="name"
            className="h-10 mb-6 bg-transparent text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="h-10 mb-6 bg-transparent text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium"
          />
          <input
            type="number"
            placeholder="Phone"
            className="h-10 mb-6 bg-transparent text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium"
          />
          <textarea
            placeholder="your message"
            className="h-20 mb-6 bg-transparent text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium"
          ></textarea>

          <ButtonWhite title="submit" customStyle="self-center md:self-end" />
        </form>
        <div className="absolute bottom-0 left-0 rounded-full w-[640px] h-[640px] bg-gradient-to-b from-[#5D0202]/0 to-[#5D0202]/15 -z-10"></div>
      </div>
    </div>
  );
};
