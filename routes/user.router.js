const express = require("express");
const router = express.Router();
const middlewares = require("../middlewares/auth");

const {
	handleRegister,
	handleLogin,
	getAllUsers,
	getUserById,
	handlUpdateProfile,
} = require("../controllers/user.controller");

// router.use(express.json());
router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.get("/users/:offset/:limit", getAllUsers);
router.get("/users/:id", getUserById);
router.put(
	"/users/profile/:id",
	express.json(),
	// middlewares.authenticate,
	// middlewares.isAdmin,
	handlUpdateProfile
);

module.exports = router;
