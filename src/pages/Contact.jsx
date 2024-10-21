// import { useState } from "react";

import { ButtonWhite } from "../components/Btns";

export const Contact = () => {
  return (
    <div className="md:container md:px-10 xl:px-[85px]">
      <div
        className={`grid lg:grid-cols-2 md:rounded-[15px] py-12 md:py-16 bg-peach`}
      >
        <section className="pb-20 text-white px-4 md:px-20 lg:pl-20 lg:pr-16 lg:py-0 flex flex-col text-center md:text-start lg:justify-center gap-y-6">
          <h3 className={`font-medium text-[32px] leading-9 capitalize`}>
            contact me
          </h3>
          <p className={`text-[15px] leading-[25px]`}>
            Ready to take it to the next level? Let's talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that's relatable to your
            users, drop us a line.
          </p>
        </section>
        <form className="flex flex-col px-4 md:px-20 lg:pl-0">
          <input
            type="text"
            placeholder="name"
            className="h-10 mb-6 bg-peach text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="h-10 mb-6 bg-peach text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium"
          />
          <input
            type="number"
            placeholder="Phone"
            className="h-10 mb-6 bg-peach text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium"
          />
          <textarea
            placeholder="your message"
            className="h-20 mb-6 bg-peach text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium"
          ></textarea>

          <ButtonWhite title="submit" customStyle="self-center md:self-end" />
        </form>
      </div>
    </div>
  );
};
