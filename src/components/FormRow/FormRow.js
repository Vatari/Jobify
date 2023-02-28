import { useState } from "react";

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        disabled={type === "mail" ? !isDisabled : isDisabled}
        id={name}
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
