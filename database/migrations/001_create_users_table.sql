-- Migration: 001_create_users_table
-- Description: Initial schema for the users table

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE users (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email          VARCHAR(255) UNIQUE NOT NULL,
  name           VARCHAR(100) NOT NULL,
  password_hash  TEXT NOT NULL,
  created_at     TIMESTAMPTZ DEFAULT NOW(),
  updated_at     TIMESTAMPTZ DEFAULT NOW(),
  last_login     TIMESTAMPTZ,
  is_active      BOOLEAN DEFAULT TRUE,
  login_attempts INT DEFAULT 0,
  locked_until   TIMESTAMPTZ
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at);
