import React, { useState } from 'react';
import { AppInput } from '../../ui/AppInput/AppInput';
import './SignInPage.css';

export const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <AppInput
        type="email"
        label="Email"
        value={email}
        onChange={handleEmailChange}
        onBlur={validateEmail}
        error={!!emailError}
        errorMessage={emailError}
        required
      />
      <AppInput
        type="password"
        label="Password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={validatePassword}
        error={!!passwordError}
        errorMessage={passwordError}
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
};
