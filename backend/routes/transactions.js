const express = require("express");
const router = express.Router();

const Transaction = require("../controllers/Transaction");

//Create a transaction.
router.post("/create-transaction", async (req, res) => {
  console.log(req.query);

  await new Transaction().createTransaction(req.query, res);
});

//get all transaction
router.get("/get-transaction", async (req, res) => {
  let { walletAddress } = req.query;
  await new Transaction().getTransaction(walletAddress, res);
});

module.exports = router;
