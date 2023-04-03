export const Hero = () => {
  return (
    <section className="text-gray-600 body-font hero-section bg-gray-100 z-auto">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-mainOn">
              Boost Growth with
            </span>{" "}
            #1 Crowdfunding Platform - Join Now!!
          </h1>
          <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 my-6">
            Learn about Our Team and Our Dedication to Success
          </p>

          {/* <div className="flex justify-center">
            <button
              className="inline-flex text-white bg-gradient-to-r to-indigo-600 from-mainOn
           border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={() => {}}
            >
              Get Started
            </button>
            <button
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              onClick={() => {}}
            >
              <a href="/project-listing">View Projects</a>
            </button>
          </div> */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
      </div>
    </section>
  );
};
