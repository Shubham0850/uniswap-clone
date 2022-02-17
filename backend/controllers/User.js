const db = require("../config/db");

class User {
  //create an user.
  async createUser({ walletAddress }, res) {
    console.log(walletAddress, "from controller");

    try {
      const newUser = await db.query(
        "INSERT INTO Users (wallet_address, user_name) VALUES ($1, $2) ",
        [walletAddress, "Unnamed"]
      );

      res.send({
        code: 200,
        message: "created",
        user: newUser,
      });
    } catch (err) {
      if (err?.code === "23505") {
        res.send({
          code: 201,
          message: "user already exists",
        });
      }
      console.log(err);
    }
  }
}

module.exports = User;
