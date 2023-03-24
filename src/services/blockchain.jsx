import abi from "../abis/src/contracts/KoinFunds.sol/KoinFunds.json";
import address from "../abis/contractAddress.json";
import { ethers } from "ethers";
import { setGlobalState } from "../store";

const { ethereum } = window;
const contractAddress = address.address;
const contractAbi = abi.abi;
