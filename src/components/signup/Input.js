import React from "react";

const Input = ({
  id,
  type = "text",
  label,
  value,
  error = false,
  errorText,
  required = false,
  placeholder,
  onChangeHandle,
}) => (
  <div className={`form-group ${error ? "error" : ""}`}>
    <label
      htmlFor={id}
      className={required ? "required" : ""}
    >
      <span>{label}</span>
    </label>
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandle}
      required={required}
    />
    <p>{error ? errorText : ""}</p>
  </div>
);

export default Input;
