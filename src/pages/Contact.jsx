import Swal from "sweetalert2";

export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "836fa0f0-c363-4c28-a59d-1cf24f7111c2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };
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
        <form
          className="flex flex-col px-4 md:px-20 lg:pl-0"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            placeholder="name"
            required
            name="name"
            className="h-10 mb-6 bg-transparent text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            name="email"
            className="h-10 mb-6 bg-transparent text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium"
          />
          <input
            type="number"
            placeholder="Phone"
            required
            name="phone"
            className="h-10 mb-6 bg-transparent text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium"
          />
          <textarea
            placeholder="your message"
            required
            name="message"
            className="h-20 mb-6 bg-transparent text-extra-light-peach focus:outline-none border-b-2 placeholder-extra-light-peach placeholder:text-[15px] placeholder:capitalize placeholder:leading-[26px] placeholder:font-medium"
          ></textarea>
          <button
            type="submit"
            className={`hover:text-white hover:bg-light-peach h-14 rounded-lg bg-white text-[15px] font-medium uppercase tracking-[1px]  inline-flex items-center justify-center px-6 min-w-[152px] self-center md:self-end`}
          >
            send
          </button>
        </form>
        <div className="absolute bottom-0 left-0 rounded-full w-[640px] h-[640px] bg-gradient-to-b from-[#5D0202]/0 to-[#5D0202]/15 -z-10"></div>
      </div>
    </div>
  );
};
