import { Fragment } from "react";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
// import {Newsletter} from "../components/Newsletter";
import { Statistics } from "../components/Statistics";
import { Steps } from "../components/Steps";
import { Trustees } from "../components/Trustees";
import { Testimonials } from "../components/Testimonials";
import { Offerings } from "../components/Offerings";
// import { Pricing } from "../components/Pricing";
// import { Cta } from "../components/Cta";
export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Statistics />
      <Steps />
      {/* <Pricing /> */}
      <Offerings />
      <Trustees />
      <Testimonials />
      {/* <Newsletter /> */}
    </Fragment>
  );
};
