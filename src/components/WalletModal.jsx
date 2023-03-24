import { Web3Button } from "@web3modal/react";
import { useEffect } from "react";
import { connectWallet } from "../services/blockchain";
import { useGlobalState, setGlobalState } from "../store";

const ConnectWalletButton = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");

  useEffect(() => {}, [connectedAccount]);
  return <Web3Button />;
};

export const WalletModal = () => {
  const [isWalletModalOpen] = useGlobalState("isWalletModalOpen");

  return (
    <>
      {isWalletModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
            <div className="relative bg-white sm:3/4 md:w-1/4  rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold my-0 mx-auto">
                  Connect Wallet
                </h3>
                <button
                  className="text-gray-700 hover:text-gray-900"
                  onClick={() => setGlobalState("isWalletModalOpen", false)}
                >
                  X
                </button>
              </div>
              <div className="p-2">
                <ul className="flex flex-col items-center">
                  <li
                    className="flex items-center justify-center border-gray-300 border-2 rounded-lg my-2 cursor-pointer hover:bg-gray-300 p-1 w-full"
                    onClick={connectWallet}
                  >
                    <img
                      src="/images/mm.png"
                      alt="metamask"
                      className="w-7 mr-2"
                    />
                    <span className="ml-2 text-lg font-medium">Metamask</span>
                  </li>
                  <li className="flex items-center justify-center  rounded my-2 cursor-pointer">
                    <ConnectWalletButton />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
