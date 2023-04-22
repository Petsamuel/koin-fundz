require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/68zjLjXy0TnMr1G8VXAv6YRWsjsx-I0V",
      accounts: [
        `af22d3a85d0b07e3ba1ff9031c7f1beed8718ea584e90d367ec178d64857fbf6`,
      ],
    },
  },
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./src/contracts",
    artifacts: "./src/abis",
  },
  mocha: {
    timeout: 40000,
  },
};
