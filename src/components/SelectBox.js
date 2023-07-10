import "./form.css";

const SelectBox = ({ label, options, required, errorText, ...selectProps }) => {
  return (
    <div className="form-group">
      <label className={`form-label ${required ? "required" : ""}`}>
        {label}
      </label>
      <select
        {...selectProps}
        className="input-select"
      >
        <option value="">Select an option</option>
        {options &&
          options.map(option => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
      </select>
      <p className="error-text">{errorText}</p>
    </div>
  );
};

export default SelectBox;
