const express = require("express");
const router = express.Router();
const middlewares = require("../middlewares/auth");

const {
	handleRegister,
	handleLogin,
	getAllUsers,
	getUserById,
	handlUpdateProfile,
	handlePostProfileUsers,
} = require("../controllers/user.controller");

/* ----------- import middlewares ------------*/
const { authenticate, isAdmin } = require("../middlewares/auth");

const middlewares = [authenticate, isAdmin];
/* ----------- end import middlewares --------*/

// router.use(express.json());
router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.get("/users/:offset/:limit", middlewares, getAllUsers);
router.get("/users/:id", middlewares, getUserById);
router.put(
	"/users/profile/:id",
	express.json(),
	authenticate,
	handlUpdateProfile
);
router.post("/users/profile", handlePostProfileUsers);

module.exports = router;
