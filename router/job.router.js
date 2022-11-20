const express = require("express");
const router = express.Router();

const {
	handleGetJob,
	handleGetJobById,
	handleCreateJob,
	handleUpdateJob,
	handleDeleteJob,
} = require("../controllers/job.controller");

router.get("/jobs/:offset/:limit", handleGetJob);
router.get("/jobs/:id", handleGetJobById);
router.post("/jobs", handleCreateJob);
router.put("/jobs/:id", handleUpdateJob);
router.delete("/jobs/:id", handleDeleteJob);

module.exports = router;
