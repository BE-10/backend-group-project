const express = require('express');
const router = express.Router();

const { 
    handleRegister,
    handleLogin
} = require("../controllers/user.controller");


router.post('/register', handleRegister);
router.post('/login', handleLogin);

module.exports = router;