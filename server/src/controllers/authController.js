// authController.js
// Handles user registration, login, and password reset endpoints.

const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const SALT_ROUNDS = 12;

/**
 * POST /api/auth/register
 * Registers a new user with email and password.
 */
async function register(req, res) {
  const { email, name, password } = req.body;

  // TODO: validate input with Joi schema
  // TODO: check if email already exists in DB
  // TODO: hash password with bcrypt
  // TODO: insert user into DB
  // TODO: send confirmation email
  // TODO: return 201 with user object (exclude password_hash)

  res.status(201).json({ message: 'User registered successfully' });
}

module.exports = { register };
