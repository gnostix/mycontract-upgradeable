const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const BoxV2 = artifacts.require('BoxV2');
const BoxV4 = artifacts.require('BoxV4');

module.exports = async function (deployer) {
  const existing = await BoxV2.deployed();
  console.log("===> " + existing.address);
  const instance = await upgradeProxy(existing.address, BoxV4, { deployer });
  
  console.log("Previous contract address ", existing.address);
  console.log("Upgraded contract address ", instance.address);
};