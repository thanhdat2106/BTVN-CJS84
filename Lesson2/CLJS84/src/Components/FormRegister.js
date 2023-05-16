import CustomInput from "./CustomInput.js";
import RadioInput from "./RadioInput.js";
import TextArea from "./Textarea.js";
import Select from "./Select.js";
import Button from "./Button.js";
import "./Register.css";

const dataRadio = [{ label: "Male" }, { label: "Female" }, { label: "Other" }];
const dataOption = [
  { name: "Option 1" },
  { name: "Option 2" },
  { name: "Option 3" },
  { name: "Option 4" },
];

function Register() {
  return (
    <div className="form__register">
      <span className="register__title">Student Reregistration Form</span>
      <hr />
      <form className="form">
        <CustomInput
          title="First Name"
          className="form__input--first-name"
          type="text"
          placeholder="First Name"
        />
        <CustomInput
          title="Middle Name"
          className="form__input--middle-name"
          type="text"
          placeholder="Middle Name"
        />
        <CustomInput
          title="Last Name"
          className="form__input--last-name"
          type="text"
          placeholder="Last Name"
        />
        <Select title="Course" dataOption={dataOption} />
        <RadioInput title="Gender" name="Sex" dataRadio={dataRadio} />
        <CustomInput
          title="Phone"
          className="form__input--phone"
          type="tel"
          placeholder="Phone no"
        />
        <TextArea title="Current Address" placeholder="Current Address" />
        <CustomInput
          title="Email"
          className="form__input--email"
          type="email"
          placeholder="Enter Email"
        />
        <CustomInput
          title="Password"
          className="form__input--password"
          type="password"
          placeholder="Enter Password"
        />
        <CustomInput
          title="Re-type Password"
          className="form__input--re-password"
          type="password"
          placeholder="Re-type Password"
        />
        <Button type="submit" nameBtn="Register" />
      </form>
    </div>
  );
}

export default Register;
