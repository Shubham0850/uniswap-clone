const express = require("express");
const router = express.Router();

const User = require("../controllers/User");

//Create a user.
router.post("/create-user", async (req, res) => {
    console.log(req.query);
  let { walletAddress } = req.query;
  await new User().createUser({ walletAddress }, res);
});

module.exports = router;
