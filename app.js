const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const allRoutes = require('./routes');

const PORT = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allRoutes);

app.listen(PORT, () => {
	console.log(`server running on port http://localhost:${PORT}`);
});