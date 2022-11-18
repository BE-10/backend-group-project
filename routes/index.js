const express = require("express");
const router = express.Router();

const userRouter = require("./user.router");
const companyRouter = require("./company.router");
const jobRouter = require("./job.router");
const adminRouter = require("./admin.router");

router.use("/api/admin", jobRouter);
router.use("/api", userRouter);
router.use("/api/admin", companyRouter);
router.use("/api", adminRouter);

module.exports = router;
