const express = require("express");
const router = express.Router();

// middleware
const { authenticate, isAdmin } = require("../middlewares/auth");

const { handleGetAdminById } = require("../controllers/admin.controller");

router.get("/admin/:id", authenticate, isAdmin, handleGetAdminById);

module.exports = router;
