const hre = require("hardhat");

async function main() {
  const Sentiments = await hre.ethers.getContractFactory("Sentiments");
  const sentiment = await Sentiments.deploy();

  await sentiment.deployed();

  console.log("Sentiments deployed to:", sentiment.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
