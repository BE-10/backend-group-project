const express = require('express');
const router = express.Router();

const { 
    handleGetJob,
    handleGetJobById,
    handleCreateJob,
    handleUpdateJob,
    handleDeleteJob 
} = require("../controllers/job.controller");


/* ---------- Import Middleware ---------- */

const middlewares = require("../middlewares/auth");

/* ---------- End Import Middleware ---------- */


router.get('/jobs', middlewares.authenticate, middlewares.isAdmin, handleGetJob);
router.get('/jobs/:id', middlewares.authenticate, middlewares.isAdmin, handleGetJobById);
router.post('/jobs', middlewares.authenticate, middlewares.isAdmin, handleCreateJob);
router.put('/jobs/:id', middlewares.authenticate, middlewares.isAdmin, handleUpdateJob);
router.delete('/jobs/:id', middlewares.authenticate, middlewares.isAdmin, handleDeleteJob);

module.exports = router;