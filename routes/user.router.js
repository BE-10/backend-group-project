const express = require("express");
const router = express.Router();

const {
	handleRegister,
	handleLogin,
	getAllUsers,
	getUserById,
} = require("../controllers/user.controller");

router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.get("/users/:offset/:limit", getAllUsers);
router.get("/users/:id", getUserById);

module.exports = router;
