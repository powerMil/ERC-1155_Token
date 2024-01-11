import { expect } from "chai";
import { ethers } from "hardhat";

describe("ERC1155_Token", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("ERC1155_Token");

    const initialOwner = (await ethers.getSigners())[0].address;

    const instance = await ContractFactory.deploy(initialOwner);
    await instance.waitForDeployment();

    expect(await instance.uri(0)).to.equal("");
  });
});
