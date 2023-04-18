import { Hero } from "../components/Hero2";
import { Mission } from "../components/Mission";
import Community from "../components/Community";

export const About = ({ title }) => {
  return (
    <>
      <div className="">
        <div>
          <Hero />
        </div>
        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 text-bold pt-16">
          {title ? title : "About Us"}
        </h1>
        <div class="relative p-4 px-8 py-16">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-10 lg:items-center">
            <div>
              <p class="mb-3 text-gray-600 dark:text-gray-600 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left">
                We are a team of passionate innovators who believe in the power
                of crowdfunding to democratize fundraising and empower
                individuals and organizations to bring their ideas to life.
              </p>
              <p class="text-gray-500 dark:text-gray-600">
                Our app is designed to revolutionize the way crowdfunding is
                done, leveraging blockchain technology to create a transparent,
                secure, and decentralized platform for fundraising.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="image"
              />
            </div>
          </div>
        </div>
        <Mission />
        <Community />
      </div>
    </>
  );
};
