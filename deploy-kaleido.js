const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const { abi, evm } = require("./compile");

const provider = new HDWalletProvider(
  "setup useful visa certain blur noodle horse balance common trust have book",
  "https://e0liwk5z73-e0ct6mejjv-rpc.de0-aws.kaleido.io/"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[0]);

  const contract = await new web3.eth.Contract(abi)
    .deploy({
      data: evm.bytecode.object,
    })
    .send({ from: accounts[0], gas: "1000000" });
  console.log("Contract deployed to", contract.options.address);
  console.log("interface", abi);
};

deploy()
  .then(() => console.log("success"))
  .catch((error) => console.error(error));
