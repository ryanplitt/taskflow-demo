// LoginForm.jsx
// Login form component with inline validation error display.

import React, { useState } from 'react';

export function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    // TODO: fix — errors object was being set but never read by the JSX below (regression from #3 merge)
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ email, password });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && <span id="email-error" role="alert">{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          aria-describedby={errors.password ? 'password-error' : undefined}
        />
        {errors.password && <span id="password-error" role="alert">{errors.password}</span>}
      </div>

      <button type="submit" disabled={!email || !password}>Log In</button>
    </form>
  );
}
