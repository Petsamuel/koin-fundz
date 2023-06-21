import { useEffect } from "react";
import { Web3Button } from "@web3modal/react";
import { useGlobalState } from "../store";

export const ConnectWalletButton = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  useEffect(() => {}, [connectedAccount]);
  return <Web3Button />;
};

export const ToggleButton = ({ handleEvent, forDesktop }) => {
  return (
    <>
      {forDesktop ? (
        <div
          type="button"
          className="sm:inline-flex hidden items-center  p-2  ml-3 text-sm text-gray-500 rounded-lg  focus:outline-none focus:ring-2  dark:text-gray-400 z-30 relative"
          onClick={handleEvent}
        >
          <span className="sr-only">Toggle Button</span>
          <svg
            className="w-4 h-4 border-none focus:border-none"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </div>
      ) : (
        <>
          <button
            type="button"
            class="inline-flex items-center  p-2 mt-16 md:hidden ml-3 text-sm text-gray-500 rounded-lg  focus:outline-none focus:ring-2  dark:text-gray-400 z-30 absolute"
            onClick={ handleEvent}
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-4 h-4 border-none focus:border-none"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </>
      )}
    </>
  );
};

export const GenButton = ({ name, href, handleEvent }) => {
  return (
    <a
      href={href}
      class=" inline-block rounded-xl border border-blueon bg-blueon px-5 py-2.5 text-sm font-medium text-white hover:shadow-xl  focus:outline-none focus:ring active:gray-500 cursor-pointer hover:bg-blueoff hover-shadow-sm shadow-white"
      onClick={handleEvent}
    >
      {name}
    </a>
  );
};
export const FancyButton = ({ name, handleEvent }) => {
  return (
    <button
      className="inline-flex px-5 py-2.5 text-sm font-medium text-white hover:bg-transparent bg-gradient-to-r to-indigo-600 from-mainOn focus:outline-none rounded-xl cursor-pointer"
      onClick={handleEvent}
    >
      {name}
    </button>
  );
};
