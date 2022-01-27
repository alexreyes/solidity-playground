require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
const RINKEBY_PRIVATE_KEY = "a5bb158754fc854280d8d8db03f8e429ad1f44d4d224212e3056aae08baf0c61";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/GvwEfNrjI4SAbQVNU7I2Q3zk18q4M18g`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: "H1FPIWX31G8K4ME7BNNDXFUGW89BCTH52V"
  }

};
