const express = require('express');
const router = express.Router();

const userRouter = require('./user.router');
const companyRouter = require('./company.router');
const jobRouter = require('./job.router');

router.use('/api/admin', jobRouter);
router.use('/api', userRouter);
router.use('/api/admin', companyRouter);

module.exports = router;