import { Hero } from "../components/Hero3";
import { Features } from "../components/Features";

function Services({ title }) {
  return (
    <div className="">
      <div>
        <Hero />
      </div>
      <Features title="Our Services" />
      <div className="container px-5 py-24 mx-auto bg-gray-50">
        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 text-bold ">
          {title ? title : " Fund the next big thing"}
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          One of the unique aspects of crowdfunding is that it allows backers to
          be early adopters, gaining access to products and perks that may not
          be available elsewhere. <br /> As campaigns progress, creators often
          offer limited-time perks and pricing exclusively for their earliest
          backers on koin-funds. This gives backers the opportunity to be part
          of the journey from the very beginning, supporting creators and their
          projects before they become mainstream.
        </p>
      </div>
    </div>
  );
}

export default Services;
