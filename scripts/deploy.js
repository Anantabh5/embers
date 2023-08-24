
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const embers = await hre.ethers.deployContract("embers", [unlockTime], {
    value: lockedAmount,
  });

  await embers.waitForDeployment();

  console.log(
    `Embers with ${ethers.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${embers.target}`
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
