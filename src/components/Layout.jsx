import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WalletModal } from "./WalletModal";

const Layout = ({ children }) => {
  return (
    <>
      <WalletModal />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
