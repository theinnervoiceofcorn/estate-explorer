import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppHeading } from "../../ui/AppHeading/AppHeading";
import { AppInput } from "../../ui/AppInput/AppInput";
import { AppButton } from "../../ui/AppButton/AppButton";
import { FormsTransition } from "../../ui/FormsTransition/FormsTransition";
import "./SignUpPage.scss";

interface IFormData {
  email: string;
  password: string;
  name: string;
  city: string;
}

export const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    city: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
    city: "",
  });
  const navigate = useNavigate();

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = { email: "", password: "", name: "", city: "" };

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

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please enter your city";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validate();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        await saveFormDataToIndexedDB(formData);
        navigate("/");
      } catch (error) {
        console.error("Error saving data to IndexedDB:", error);
      }
    }
  };
  const saveFormDataToIndexedDB = async (data: IFormData) => {
    try {
      const db = await openDatabase();
      const transaction = db.transaction(["userData"], "readwrite");
      const objectStore = transaction.objectStore("userData");
      await objectStore.add(data);
      console.log("Data successfully saved to IndexedDB");
    } catch (error) {
      throw new Error("Failed to save data to IndexedDB");
    }
  };
  const openDatabase = async () => {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = window.indexedDB.open("UserDataDB", 1);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains("userData")) {
          db.createObjectStore("userData", { keyPath: "email" });
        }
      };
    });
  };

  return (
    <div className="sign-up-page">
      <form onSubmit={handleSubmit}>
        <AppHeading headingLevel="1" headingText="Sign Up Form" />
        <AppInput
          name="name"
          inputId="name"
          label="Name"
          labelFor="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleInputChange}
          error={!!errors.name}
          errorMessage={errors.name}
        />
        <AppInput
          name="city"
          inputId="city"
          label="City"
          labelFor="city"
          placeholder="Dubai"
          value={formData.city}
          onChange={handleInputChange}
          error={!!errors.city}
          errorMessage={errors.city}
        />
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
          linkText="Sign in"
          spanText="Already have an account?"
          userIsRegistered={true}
        />
        <AppButton buttonText="Sign Up" type="submit" />
      </form>
    </div>
  );
};
