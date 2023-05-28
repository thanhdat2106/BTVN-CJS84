import Button from "../../Components/Button";
import CustomInput from "../../Components/CustomInput";
import ErrorForm from "../../Components/ErrorForm";
import useHookRegister from "./HookTest";
import "./RegisterTest.css";
import React from "react";
const dataRadio = [
  { key: 0, label: "Male" },
  { key: 1, label: "Female" },
  { key: 2, label: "Other" },
];
const dataOption = [
  { key: 0, name: "Choose one value" },
  { key: 1, name: "Option 1" },
  { key: 2, name: "Option 2" },
  { key: 3, name: "Option 3" },
  { key: 4, name: "Option 4" },
];

function RegisterTest() {
  const data = "dat";
  const { student, error, onChange, submit } = useHookRegister({ data });
  return (
    <div className="form__register">
      <span className="register__title">Student Reregistration Form</span>
      <hr />
      <CustomInput
        title="First Name"
        className="form__input--first-name"
        type="text"
        placeholder="First Name"
        value={student.FirstName}
        onChange={(e) => {
          onChange(e);
        }}
      />
      <ErrorForm state={error.FirstName} />
      <Button type="button" nameBtn="Register" onclick={submit} />
    </div>
  );
}

export default RegisterTest;
