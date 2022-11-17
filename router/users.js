const express = require("express");
const router = express.Router();

const { getAllUsers, getUserById } = require("../controller/users");

const middlewares = [express.json()];

router.use(middlewares);

router.get("/:offset/:limit", getAllUsers);
router.get("/:id", getUserById);

module.exports = router;
