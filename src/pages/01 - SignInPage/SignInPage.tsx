import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppHeading } from "../../ui/AppHeading/AppHeading";
import { AppInput } from "../../ui/AppInput/AppInput";
import { AppButton } from "../../ui/AppButton/AppButton";
import "./SignInPage.scss";
import { FormsTransition } from "../../ui/FormsTransition/FormsTransition";

export const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = { email: "", password: "" };

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Please enter your password";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validate();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      navigate("/main");
    }
  };

  return (
    <div className="sign-in-page">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <AppHeading headingLevel="1" headingText="Sign In Form" />
        <AppInput
          name="email"
          inputId="email"
          label="Email"
          labelFor="email"
          placeholder="bebe@gmail.com"
          value={formData.email}
          onChange={handleInputChange}
          error={!!errors.email}
          errorMessage={errors.email}
        />
        <AppInput
          name="password"
          inputId="password"
          type="password"
          label="Password"
          labelFor="password"
          placeholder="123456"
          value={formData.password}
          onChange={handleInputChange}
          error={!!errors.password}
          errorMessage={errors.password}
        />
        <FormsTransition
          linkText="Sign up now"
          spanText="Don't have an account yet?"
          userIsRegistered={false}
        />
        <AppButton buttonText="Sign In" type="submit" />
      </form>
    </div>
  );
};
