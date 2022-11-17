const express = require("express");
const router = express.Router();

const registerRoute = require("./register");
const loginRoute = require("./login");
const userRoute = require("./users");
const adminRoute = require("./admin");
const jobsRoute = require("./jobs");

router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/users", userRoute);
router.use("/admin", adminRoute);
router.use("/jobs", jobsRoute);

module.exports = router;
