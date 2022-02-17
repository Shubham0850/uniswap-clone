require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/v9TbbTqq4ov_XbKGSbyNiJ3rbJ2VVlCm",
      accounts: [
        "71ea3f4c79c0cff8e1ea0672f9b92d32909d6ead6a815a118f519b40bea235f7",
      ],
    },
  },
};
