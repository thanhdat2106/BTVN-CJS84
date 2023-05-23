import React from "react";

const Button = ({ type, nameBtn, onclick }) => {
  return (
    <button
      className="form__btn btn btn-outline-success"
      type={type}
      onClick={onclick}
    >
      {nameBtn}
    </button>
  );
};

export default Button;
