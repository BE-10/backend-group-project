const express = require('express');
const router = express.Router();

const userRouter = require('./user.router');
const jobRouter = require('./job.router');

router.use('/api/admin', jobRouter);
router.use('/api', userRouter);

module.exports = router;