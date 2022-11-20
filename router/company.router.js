const express = require("express");
const router = express.Router();

/* ---------- Import Controller ---------- */

const {
	handleGetProfileCompany,
	handleGetProfileCompanyById,
	handleGetProfileCompanyByUserId,
	handleCreateProfileCompany,
	handleUpdateProfileCompany,
	handleDeleteProfileCompany,
} = require("../controllers/company.controller");

/* ---------- End Import Controller ---------- */

/* ---------- Import Middleware ---------- */

const { authenticate, isAdmin } = require("../middlewares/auth");

const middlewares = [authenticate, isAdmin];
/* ---------- End Import Middleware ---------- */

router.get("/company-profile", middlewares, handleGetProfileCompany);
router.get("/company-profile/:id", middlewares, handleGetProfileCompanyById);
router.get(
	"/:id/company-profile/",
	middlewares,
	handleGetProfileCompanyByUserId
);
router.post("/company-profile", middlewares, handleCreateProfileCompany);
router.put("/company-profile/:id", middlewares, handleUpdateProfileCompany);
router.delete("/company-profile/:id", middlewares, handleDeleteProfileCompany);

module.exports = router;
