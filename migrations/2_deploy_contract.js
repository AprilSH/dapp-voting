var Election = artifacts.require("./Election.sol"); //reading the smart contract and assigning it to migrations variable
//->artifacts: represents contract abstraction that is specific to truffle. Gives Election artifact that represents the smart contract.
//              truffle expose it to be able to interact with it in any case.

module.exports = function(deployer) {
  deployer.deploy(Election);
};