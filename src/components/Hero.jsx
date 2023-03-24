import HeroPng from "../assets/images/bit2.png";
export const Hero = () => (
  <section class="text-gray-600 body-font hero-section lg:pt-28 z-auto">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white header-hero-h1">
          Let us help fundraise for that project at{" "}
          <span class="hidden lg:inline-block text-5xl text-upper text-mainOn font-extrabold" >
            KoinFunds
          </span >
        </h1>
        <p class="mb-8 leading-relaxed text-white">
          Our platform connects you with a community of passionate supporters who believe in your vision. Whether you're starting a new business, launching a creative project, or making a difference in your community, we provide the tools and resources you need to succeed.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-mainOn border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Get Started
          </button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            View Projects
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          // src="https://dummyimage.com/720x600"
          src={HeroPng}

        />
      </div>
    </div>
  </section>
);
