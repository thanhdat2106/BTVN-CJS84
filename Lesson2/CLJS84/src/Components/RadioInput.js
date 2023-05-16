import React from "react";

const RadioInput = ({ title, name, dataRadio }) => {
  return (
    <div className="mb-3">
      <label for="formGroupExampleInput" class="form-label">
        {title}
      </label>
      <div style={{ marginLeft: 20 }}>
        {dataRadio.map((item, index) => (
          <div key={index} className="form-check  ">
            <label className="form-check-label">{item.label}</label>
            <input
              className="form-check-input"
              type="radio"
              name={name}
              value={item.label}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
