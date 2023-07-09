import React from "react";

const MultiCheckbox = ({
  id,
  label,
  error,
  errorText,
  onChnageHandle,
  required,
}) => (
  <div className={`form-group ${error ? "error" : ""}`}>
    <div className="check-group">
      <input
        type="checkbox"
        id="checkHTML"
      />
      <label htmlFor="checkHTML">HTML</label>
      <input
        type="checkbox"
        id="checkCSS"
      />
      <label htmlFor="checkCSS">CSS</label>
      <input
        type="checkbox"
        id="checkJavascript"
      />
      <label htmlFor="checkJavascript">Javascript</label>
      <input
        type="checkbox"
        id="checkReact"
      />
      <label htmlFor="checkReact">React</label>
    </div>
    <p>{error ? errorText : ""}</p>
  </div>
);

export default MultiCheckbox;
