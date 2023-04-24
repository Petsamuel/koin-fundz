import { Hero } from "../components/Hero3";
import { faq } from "../store/listdata";
import { useState } from "react";

export const FAQ = ({ title }) => {
  const [toggle, setToggle] = useState(null);
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

            {/* <!-- question - start --> */}
            {faq.map((index, key) => (
              <div class="p-8 bg-gray-100 rounded-lg  my-8" key={key}>
                <span class="flex items-center justify-between w-full">
                  <h1 class="font-semibold text-gray-700 ">{index.question}</h1>
                  {toggle === key ? (
                    <span
                      class="text-white bg-mainOn rounded-full"
                      onClick={() => {
                        setToggle(key);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18 12H6"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span
                      class="text-white bg-blueoff rounded-full"
                      onClick={() => {
                        setToggle(key);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </span>
                  )}
                </span>

                {toggle === key ? (
                  <p class="mt-6 text-sm text-gray-500 ">{index.answer}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
