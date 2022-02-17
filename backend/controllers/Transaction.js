const db = require("../config/db");

class Transaction {
  //create a transaction.
  async createTransaction(transaction, res) {
    console.log(transaction, "from controller");
    try {
      const newTransaction = db.query(
        "INSERT INTO Transactions (transaction_hash, from_address, to_address, amount, time_stamp) VALUES ($1, $2, $3, $4, $5)",
        [
          transaction.transactionHash,
          transaction.fromAddress,
          transaction.toAddress,
          transaction.amount,
          transaction.timestamp,
        ]
      );

      res.send({
        code: 200,
        message: "Transaction added",
        transaction: newTransaction,
      });
    } catch (err) {
      res.send({
        code: 400,
        message: "Error while creating transaction",
      });
      console.log(err);
    }
  }

  //get all transaction.
  async getTransaction(walletAddress, res) {
    try {
      console.log(walletAddress, "from controller");
      let results = await db.query(
        `SELECT * FROM Transactions WHERE from_address='${walletAddress}';`
      );

      res.send({
        status: 200,
        message: "Done",
        transactions: results.rows,
      });
    } catch (err) {
      res.send({
        code: 400,
        message: "Not be able to get data",
      });
      console.log(err);
    }
  }
}

module.exports = Transaction;
