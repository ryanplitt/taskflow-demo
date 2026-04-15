// loginController.js
// Handles user login and JWT token generation.

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = '24h';

/**
 * POST /api/auth/login
 * Authenticates a user and returns a JWT token.
 */
async function login(req, res) {
  const { email, password, rememberMe } = req.body;

  // TODO: validate input
  // TODO: find user by email; return 401 if not found (generic message)
  // TODO: check login_attempts — if >= 5 and locked_until > now, return 423
  // TODO: compare password with bcrypt
  // TODO: on failure: increment login_attempts; if >= 5, set locked_until = now + 15min
  // TODO: generate JWT with userId, set in httpOnly cookie
  // TODO: if rememberMe, extend expiry to 30d
  // TODO: update last_login, reset login_attempts

  res.status(200).json({ message: 'Login successful' });
}

module.exports = { login };
