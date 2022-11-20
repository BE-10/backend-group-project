const express = require("express");
const router = express.Router();

const {
	handleGetJob,
	handleGetJobById,
	handleCreateJob,
	handleUpdateJob,
	handleDeleteJob,
} = require("../controllers/job.controller");

const { handleGetAdminById } = require("../controllers/admin.controller");

/* ---------- Import Middleware ---------- */

const { authenticate, isAdmin } = require("../middlewares/auth");

const middlewares = [authenticate, isAdmin];

/* ---------- End Import Middleware ---------- */

router.get("/jobs", middlewares, handleGetJob);
router.get("/jobs/:id", middlewares, handleGetJobById);
router.post("/jobs", middlewares, handleCreateJob);
router.put("/jobs/:id", middlewares, handleUpdateJob);
router.delete("/jobs/:id", middlewares, handleDeleteJob);
router.get("/admin/:id", middlewares, handleGetAdminById);

module.exports = router;
