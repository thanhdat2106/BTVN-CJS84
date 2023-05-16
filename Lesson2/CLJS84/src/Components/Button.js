import React from "react";

const Button = ({ type, nameBtn }) => {
  return (
    <button className="form__btn btn btn-outline-success" type={type}>
      {nameBtn}
    </button>
  );
};

export default Button;
