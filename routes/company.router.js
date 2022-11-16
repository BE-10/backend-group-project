const express = require('express');
const router = express.Router();

/* ---------- Import Controller ---------- */

const { 
    handleCreateProfileCompany,
    handleUpdateProfileCompany,
    handleDeleteProfileCompany
} = require("../controllers/company.controller");

/* ---------- End Import Controller ---------- */


/* ---------- Import Middleware ---------- */

const middlewares = require("../middlewares/auth");

/* ---------- End Import Middleware ---------- */


router.post('/company-profile', middlewares.authenticate, middlewares.isAdmin, handleCreateProfileCompany);
router.put('/company-profile/:id', middlewares.authenticate, middlewares.isAdmin, handleUpdateProfileCompany);
router.delete('/company-profile/:id', middlewares.authenticate, middlewares.isAdmin, handleDeleteProfileCompany);

module.exports = router;