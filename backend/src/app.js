const express = require("express");
const { enterpriseRouter } = require("./routes");

const app = express();

app.use(express.json());
app.use("/", enterpriseRouter);

module.exports = app;
