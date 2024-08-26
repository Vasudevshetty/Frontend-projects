const express = require("express");
const dotenv = require(dotenv);

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
