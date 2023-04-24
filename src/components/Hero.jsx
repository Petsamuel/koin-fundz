// import { useState, useEffect } from "react";
import HeroPng from "../assets/images/bit2.png";
import { useGlobalState } from "../store";
import { useNavigate } from "react-router-dom";
import { GenButton, FancyButton, ConnectWalletButton } from "./Buttons";

export const Hero = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  const navigate = useNavigate();

  const WalletConnectCheck = (e) => {
    if (connectedAccount) {
      navigate("/create-project");
    } else {
      alert("Connect Wallet...");
    }
  };

  return (
    <section className="text-gray-600 body-font hero-section z-auto bg-gradient-to-r from-[#1f2658] to-[#272e5d]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white header-hero-h1">
            Empowering communities: Crowdfund for impactful projects with{" "}
            <span
              className=" lg:inline-block text-5xl text-upper  font-extrabold 
          text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-mainOn
          "
            >
              KoinFunds
            </span>
          </h1>
          <p className="mb-8 leading-relaxed text-white ">
            Our platform connects you with a community of passionate supporters
            who believe in your vision. Whether you're starting a new business,
            launching a creative project, or making a difference in your
            community, we provide the tools and resources you need to succeed.
          </p>
          <div className="">
            {connectedAccount ? (
              <div className="flex justify-center gap-4 items-center place-content-center">
                <FancyButton
                  name="Get started"
                  handleEvent={(e) => WalletConnectCheck(e)}
                />
                <GenButton
                  name="View Projects"
                  handleEvent={() => navigate("/project-listing")}
                />
              </div>
            ) : (
              <ConnectWalletButton />
            )}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={HeroPng}
          />
        </div>
      </div>
    </section>
  );
};
