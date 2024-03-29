import React from "react";
import "./AppInput.css";

interface IAppInput {
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error: boolean;
  errorMessage: string;
  placeholder?: string;
  required?: boolean;
}

export const AppInput: React.FC<IAppInput> = ({
  type,
  label,
  value,
  onChange,
  onBlur,
  error,
  errorMessage,
  placeholder,
  required,
}) => {
  return (
    <div className={`input-container ${error ? "error" : ""}`}>
      <label>{label}:</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        className={error ? "error" : ""}
      />
      {error && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};
