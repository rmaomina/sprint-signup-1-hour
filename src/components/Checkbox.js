import "./form.css";

const Checkbox = ({ label, options, onChange }) => (
  <div className="form-group">
    <p>{label}</p>
    <div className="checkbox-group">
      {options &&
        options.map(option => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
    </div>
  </div>
);

export default Checkbox;
