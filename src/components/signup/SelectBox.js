import React from "react";

const SelectBox = ({
  id,
  label,
  error,
  errorText,
  onChnageHandle,
  required,
}) => (
  <div className={`form-group ${error ? "error" : ""}`}>
    <label
      htmlFor={id}
      className={required ? "required" : ""}
    >
      <span>{label}</span>
    </label>
    <select onChange={onChnageHandle}>
      <option value="">Select..</option>
      <option value="HTML">HTML</option>
      <option value="CSS">CSS</option>
      <option value="Javascript">Javascript</option>
      <option value="React">React</option>
    </select>
    <p>{error ? errorText : ""}</p>
  </div>
);

export default SelectBox;
