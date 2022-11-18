const express = require("express");
const router = express.Router();

const {
	handleRegister,
	handleLogin,
	getAllUsers,
	getUserById,
	handlePostProfileUsers,
	handlUpdateProfile,
} = require("../controllers/user.controller");

router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.get("/users/:offset/:limit", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users/profile", handlePostProfileUsers)
router.put("/users/profile/:id", handlUpdateProfile);

module.exports = router;
