const express = require("express");
const router = express.Router();

const {
	handleGetJob,
	handleGetJobById,
	handleCreateJob,
	handleUpdateJob,
	handleDeleteJob,
} = require("../controllers/job.controller");

/* import middleware */
const { authenticate, isAdmin } = require("../middlewares/auth");

const middlewares = [authenticate, isAdmin];
/* end import middleware */

router.get("/jobs/:offset/:limit", handleGetJob);
router.get("/jobs/:id", handleGetJobById);
router.post("/jobs", middlewares, handleCreateJob);
router.put("/jobs/:id", middlewares, handleUpdateJob);
router.delete("/jobs/:id", middlewares, handleDeleteJob);

module.exports = router;
