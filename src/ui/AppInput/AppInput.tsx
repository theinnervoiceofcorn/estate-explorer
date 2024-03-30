import React from "react";
import "./AppInput.scss";

interface IAppInput {
  name?: string;
  inputId?: string;
  type?: string;
  label: string;
  labelFor?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error: boolean;
  errorMessage: string;
  placeholder?: string;
  required?: boolean;
}

export const AppInput: React.FC<IAppInput> = ({
  name,
  inputId,
  type,
  label,
  labelFor,
  value,
  onChange,
  onBlur,
  error,
  errorMessage,
  placeholder,
}) => {
  return (
    <div className={`input-container ${error ? "error" : ""}`}>
      <label htmlFor={labelFor}>{label}:</label>
      <input
        name={name}
        id={inputId}
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
