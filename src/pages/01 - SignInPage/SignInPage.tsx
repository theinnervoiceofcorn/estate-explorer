import React, { useState } from "react";
import { AppInput } from "../../ui/AppInput/AppInput";
import "./SignInPage.scss";
import { useNavigate } from "react-router-dom";

export const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    if (email.trim() === "" || password.trim() === "") {
      setEmailError("Please enter your email");
      setPasswordError("Please enter your password");
    } else if (!emailError && !passwordError) {
      navigate("/main");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <AppInput
        label="Email"
        placeholder="bebe@gmail.com"
        value={email}
        onChange={handleEmailChange}
        onBlur={validateEmail}
        error={!!emailError}
        errorMessage={emailError}
      />
      <AppInput
        type="password"
        label="Password"
        placeholder="123456"
        value={password}
        onChange={handlePasswordChange}
        onBlur={validatePassword}
        error={!!passwordError}
        errorMessage={passwordError}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};
