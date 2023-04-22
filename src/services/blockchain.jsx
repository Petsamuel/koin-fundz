import abi from "../abis/src/contracts/KoinFunds.sol/KoinFunds.json";
import address from "../abis/contractAddress.json";
import { ethers } from "ethers";
import { getGlobalState, setGlobalState } from "../store";
import { structureStats } from "../helper/structureStats";
import { structuredProjects } from "../helper/structureProject";

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
  title,
  description,
  organizationType,
  goal,
  expiresAt,
  email,
  country,
  state,
  imageUrl,
}) => {
  try {
    const contract = await getEthereumContract();
    goal = ethers.utils.parseEther(goal);
    await contract.createProject(
      title,
      description,
      imageUrl,
      goal,
      expiresAt,
      organizationType,
      email,
      country,
      state
    );
  } catch (err) {
    console.log(err);
  }
};

export const loadProjects = async () => {
  try {
    if (!ethereum) return alert("Connect wallet");

    const contract = await getEthereumContract();
    const projects = await contract.getProjects();
    const stats = await contract.stats();

    console.log(structuredProjects(projects));
    setGlobalState("projects", structuredProjects(projects));
    setGlobalState("stats", structureStats(stats));
  } catch (err) {
    console.log(err);
  }
};
