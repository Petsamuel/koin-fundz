import { useEffect } from "react";
import { useGlobalState } from "../store";
import { Web3Button } from "@web3modal/react";

const ConnectWalletButton = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");

  useEffect(() => {}, [connectedAccount]);
  return <Web3Button />;
};

export const Header = () => {
  return (
    <header class="text-gray-600 body-font fixed w-screen bg-white z-10">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl ">Koin Funds</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
          <a class="mr-5 hover:text-gray-900 cursor-pointer">About</a>
          <a class="mr-5 hover:text-gray-900 cursor-pointer">Service</a>
          <a class="mr-5 hover:text-gray-900 cursor-pointer">FAQ</a>
        </nav>
        <button class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
          <ConnectWalletButton />
        </button>
      </div>
    </header>
  );
};
