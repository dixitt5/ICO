const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");
async function main() {
  const crypoDevsTokenContract = await ethers.getContractFactory(
    "CryptoDevToken"
  );

  const deployCryptoDevTokenContract = await crypoDevsTokenContract.deploy(
    CRYPTO_DEVS_NFT_CONTRACT_ADDRESS
  );

  console.log(
    "CryptDev Token Contract address:",
    deployCryptoDevTokenContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
