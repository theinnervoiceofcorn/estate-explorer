import React from "react";
import "./AppInput.scss";

interface IAppInput {
  type?: string;
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
        className={error ? "error" : ""}
      />
      {error && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};
