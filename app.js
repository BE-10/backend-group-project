require("dotenv").config();

const express = require("express");
const app = express();
const allRouter = require("./routes");
const PORT = process.env.PORT || 8080;

app.use("/", allRouter);

app.listen(process.env.PORT, () => {
	console.log(`Server Running at localhost:${PORT}`);
});