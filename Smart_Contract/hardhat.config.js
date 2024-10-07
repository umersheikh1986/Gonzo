require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers :[
      {version : "0.5.16"},
      {version : "0.8.20",
        settings: {
          // viaIR: true,
          optimizer:{
            enabled: true,
            runs: 100,
            // details: {
            //   yul: false
            // }
          }
        }
      }
    ]
  },
  mocha: {
    timeout: 100000000,
  },
  sourcify: {
    enabled: false
  },
  etherscan: {
    // apiKey: "R7CIQGWZJCGCXRCYV1985N3U5Y8UJXV7BD", // etherscan
    // apiKey: "QFB8XARUVNK8MGSRCBKU5CJGIV543PPB71", // phantom
    apiKey: "ZWQNYZJHKA8N8RP175E8Q9ZMA8TJSTFW64", // phantom
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      // url: "https://bsc-dataseed.binance.org/",
      // chainId: chainIds.bscMainnet,
      
    },
    pt: {
      // url: `https://fantom-testnet.drpc.org/`,
      url: `https://rpc.ankr.com/fantom_testnet`,
      // url: `https://eth-sepolia.g.alchemy.com/v2/demo`,
      accounts: ["0xdd168836c5fb9024289b9b8ba92663eb754cfba507cd82b1551f90d7e6d3d26c",],
      allowUnlimitedContractSize: true,
    },
  },
  //  "0.8.19",
};