const express = require('express');
const router = express.Router();

const userRouter = require('./user.router');
const companyRouter = require('./company.router');
const jobRouter = require('./job.router');
const adminRouter = require('./job.router');

router.use('/api/admin', adminRouter);
router.use('/api', jobRouter);
router.use('/api', userRouter);
router.use('/api/admin', companyRouter);

module.exports = router;