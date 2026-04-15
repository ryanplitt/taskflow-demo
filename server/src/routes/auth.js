// auth.js - Authentication routes
const express = require('express');
const router = express.Router();
const { register } = require('../controllers/authController');
const rateLimit = require('../middleware/rateLimit');

router.post('/register', rateLimit, register);

module.exports = router;
