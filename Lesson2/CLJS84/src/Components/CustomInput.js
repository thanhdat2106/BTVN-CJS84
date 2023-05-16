import React from "react";

const CustomInput = ({ title, type, name, placeholder }) => {
  return (
    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">
        {title}
      </label>
      <input
        type={type}
        class="form-control"
        placeholder={placeholder}
        aria-label={name}
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default CustomInput;
