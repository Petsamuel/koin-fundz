import { Hero } from "../components/Hero3";
import { faq } from "../store/listdata";

export const FAQ = ({ title }) => {
  return (
    <>
      <div className="">
        <div>
          <Hero />
        </div>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            {/* <!-- text - start --> */}
            <div class="mb-16 md:mb-16">

              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 text-bold ">
                {title ? title : "  Frequently asked questions"}
              </h1>

              <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg text-light">
                {" "}
                Get to know our Services
              </p>
            </div>
            {/* <!-- text - end --> */}

            <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
              {/* <!-- question - start --> */}
              {faq.map((index) => (
                <div>
                  <h3 class="mb-2 text-lg font-semibold text-gray-900 md:text-xl">
                    {index.question}
                  </h3>
                  <p class="text-gray-500 text-base leading-relaxed ">
                    {index.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
