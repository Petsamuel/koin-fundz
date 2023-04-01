import abi from "../abis/src/contracts/KoinFunds.sol/KoinFunds.json";
import address from "../abis/contractAddress.json";
import { ethers } from "ethers";
import { getGlobalState } from "../store";

const { ethereum } = window;
const contractAddress = address.address;
const contractAbi = abi.abi;

export const getEthereumContract = async () => {
  const connectedAccount = getGlobalState("connectedAccount");
  if (connectedAccount) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    return contract;
  } else {
    // return getGlobalState("contract")
    return;
  }
};

export const createProject = async ({
  address,
  companyName,
  country,
  description,
  email,
  expiresAt,
  goal,
  organizationType,
  state,
  title,
  imageUrl,
  website,
}) => {
  try {
    const contract = await getEthereumContract();
    console.log(contract);
    goal = ethers.utils.parseEther(goal);
    await contract.createProject(
      title,
      description,
      imageUrl,
      goal,
      expiresAt,
      organizationType,
      companyName,
      email,
      address,
      country,
      website,
      state
    );
  } catch (err) {
    console.log(err);
  }
};
