require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client/build")));

const PORT = process.env.PORT || 9000;

app.get("/api", (req, res) => {
  res.json("api is running");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
