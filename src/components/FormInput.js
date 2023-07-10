import "./form.css";

const FormInput = ({ label, required, onChange, errorText, ...inputProps }) => {
  return (
    <div className="form-group">
      <label className={`form-label ${required ? "required" : ""}`}>
        {label}
      </label>
      <input
        {...inputProps}
        onChange={onChange}
        className="input-text"
      />
      <p className="error-text">{errorText}</p>
    </div>
  );
};

export default FormInput;
