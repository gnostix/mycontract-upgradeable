// migrations/2_deploy_box.js
const Box = artifacts.require('Box');
 
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
    const instance = await deployProxy(Box, [42], { deployer, initializer: 'store' });
    console.log("Box contract address ", instance.address);
};