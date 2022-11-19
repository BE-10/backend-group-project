const express = require("express");
const router = express.Router();

const {
	handleRegister,
	handleLogin,
	handlePostProfileUsers
} = require("../controllers/user.controller");

router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.post("/users/profile", handlePostProfileUsers);

// Using Middlewares
// const middlewares = require('../middlewares/auth');

// router.post("users/profile", middlewares.authenticate, handlePostProfileUsers)


module.exports = router;
