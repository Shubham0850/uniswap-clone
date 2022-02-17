const main = async () => {
  const transactionFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const transactionContract = await transactionFactory.deploy();

  console.log("Deploying...")

  await transactionContract.deployed();

  console.log("Transaction Contract deployed to: ", transactionContract.address);
};

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
