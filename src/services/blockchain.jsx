import abi from "../abis/src/contracts/KoinFunds.sol/KoinFunds.json";
import address from "../abis/contractAddress.json";
import { ethers } from "ethers";
import { setGlobalState } from "../store";

const { ethereum } = window;
const contractAddress = address.address;
const contractAbi = abi.abi;

export const connectWallet = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setGlobalState("connectedAccount", accounts[0]?.toLowerCase());
    setGlobalState("isWalletModalOpen", false);
  } catch (err) {
    console.log(err);
  }
};

export const isWalletConnected = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const accounts = await ethereum.request({ method: "eth_accounts" });
    setGlobalState("connectedAccount", accounts[0]?.toLowerCase());

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async () => {
      setGlobalState("connectedAccount", accounts[0]?.toLowerCase());
      await isWalletConnected();
      window.location.reload();
    });

    if (accounts.length) {
      setGlobalState("connectedAccount", accounts[0]?.toLowerCase());
    } else {
      alert("Please connect wallet");
      console.log("No accounts found");
    }
  } catch (err) {
    console.log(err);
  }
};
