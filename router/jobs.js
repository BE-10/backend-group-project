const express = require("express");
const router = express.Router();

const { getAllJobs, getJobById } = require("../controller/jobs");

const middlewares = [express.json()];

router.use(middlewares);

router.get("/:offset/:limit", getAllJobs);
router.get("/:id", getJobById);

module.exports = router;
