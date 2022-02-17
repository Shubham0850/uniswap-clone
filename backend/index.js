const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

const userRoutes = require("./routes/user");
const transactionRoutes = require("./routes/transactions");

const port = 5000;

app.use(userRoutes);
app.use(transactionRoutes);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
