const Web3 = require("web3");

// Explorer: https://ropsten.etherscan.io/address/0x87AF7c9A4980EC414361203Ba3112b33DAa9F7Be#code
const { infuraKey } = require("../secrets.json");

const data = require("../.deployment.json");

async function main() {
  return Promise.resolve(data);
}

async function runner({ abi, address }) {
  const web3 = new Web3(
    new Web3.providers.HttpProvider(`https://ropsten.infura.io/v3/${infuraKey}`)
  );

  const Contract = new web3.eth.Contract(abi, address);

  await web3.eth.getBlockNumber().then((result) => {
    console.log("Latest Ethereum Block is ", result);
  });

  await Contract.methods.greetAgain("hehe").call();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(runner)
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
