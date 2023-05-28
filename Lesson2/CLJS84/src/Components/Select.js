import React from "react";

const Select = ({ title, dataOption, onChange, value }) => {
  return (
    <div className="mb-3">
      <label for="formGroupExampleInput" class="form-label">
        {title}
      </label>
      <select
        className="form-select"
        name={title}
        onChange={onChange}
        value={value}
      >
        {dataOption.map((item, index) => (
          <option key={item.key} className="form__option" value={item.key}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
