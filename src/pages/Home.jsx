import { Fragment } from "react";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { Statistics } from "../components/Statistics";
import { Steps } from "../components/Steps";
import { Trustees } from "../components/Trustees";
import { Cta } from "../components/Cta";
import { Testimonials } from "../components/Testimonials";

export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Statistics />
      <Steps />
      <Pricing />
      <Trustees />
      <Cta />
      <Testimonials />
    </Fragment>
  );
};
