const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const { expect, assert } = require('chai');

const Box = artifacts.require('Box');
const BoxV2 = artifacts.require('BoxV2');

contract('upgrades', function () {
    before(async function () {
        // Deploy a new Box contract for each test
        this.box = await deployProxy(Box, [420], { initializer: 'store' });
        this.box2 = await upgradeProxy(this.box.address, BoxV2);
    });

    it('upgrade value works', async function () {
        const value = await this.box2.retrieve();
        assert.equal(value.toString(), '420');
    });

    it('upgraded name works', async function () {
        await this.box2.setName("koko");
        const name = await this.box2.name();
        assert.equal(name, 'koko');
    })
});