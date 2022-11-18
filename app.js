require("dotenv").config();

const express = require("express");
const db = require("./models");
const app = express();
const allRouter = require("./routes");
const PORT = process.env.PORT || 8080;

db.sequelize.sync();

app.use("/", allRouter);

app.listen(process.env.PORT, () => {
	console.log(`Server Running at localhost:${PORT}`);
});
