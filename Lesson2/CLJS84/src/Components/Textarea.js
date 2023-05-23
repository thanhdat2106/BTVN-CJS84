import React from "react";

const TextArea = ({ title, name, placeholder, value, onChange }) => {
  return (
    <div className="form__group-textarea">
      <label for="exampleFormControlTextarea1" class="form-label">
        {title}
      </label>
      <textarea
        className="form-control"
        name={name}
        placeholder={placeholder}
        rows="3"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
export default TextArea;
