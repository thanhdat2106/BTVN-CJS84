import Button from "../../Components/Button";
import CustomInput from "../../Components/CustomInput";
import ErrorForm from "../../Components/ErrorForm";
import RadioInput from "../../Components/RadioInput";
import Select from "../../Components/Select";
import TextArea from "../../Components/Textarea";
import useHookRegister from "./Hook";
import "./Register.css";

const dataRadio = [{ label: "Male" }, { label: "Female" }, { label: "Other" }];
const dataOption = [
  { key: 1, name: "Option 1" },
  { key: 2, name: "Option 2" },
  { key: 3, name: "Option 3" },
  { key: 4, name: "Option 4" },
];

function Register() {
  const { actSubmit, student, error, setStudent, onChange } = useHookRegister();
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
          value={student.FirstName}
          onChange={(e) => {
            onChange(e, "FirstName");
          }}
        />
        <ErrorForm state={error.FirstName} />
        <CustomInput
          title="Middle Name"
          className="form__input--middle-name"
          type="text"
          placeholder="Middle Name"
          value={student.MiddleName}
          onChange={(e) => {
            onChange(e, "MiddleName");
          }}
        />
        <ErrorForm state={error.MiddleName} />
        <CustomInput
          title="Last Name"
          className="form__input--last-name"
          type="text"
          placeholder="Last Name"
          value={student.LastName}
          onChange={(e) => {
            onChange(e, "LastName");
          }}
        />
        <ErrorForm state={error.LastName} />
        <Select
          title="Course"
          dataOption={dataOption}
          value={student.Course}
          onChange={(e) => {
            onChange(e, "Course");
          }}
        />
        <ErrorForm state={error.Course} />
        <RadioInput
          title="Gender"
          name="Sex"
          dataRadio={dataRadio}
          onChange={(e) => {
            onChange(e, "Gender");
          }}
        />
        <ErrorForm state={error.Gender} />
        <CustomInput
          title="Phone"
          className="form__input--phone"
          type="tel"
          placeholder="Phone no"
          value={student.Phone}
          onChange={(e) => {
            onChange(e, "Phone");
          }}
        />
        <ErrorForm state={error.Phone} />
        <TextArea
          title="Current Address"
          placeholder="Current Address"
          value={student.CurrentAddress}
          onChange={(e) => {
            onChange(e, "CurrentAddress");
          }}
        />
        <ErrorForm state={error.CurrentAddress} />
        <CustomInput
          title="Email"
          className="form__input--email"
          type="email"
          placeholder="Enter Email"
          value={student.Email}
          onChange={(e) => {
            onChange(e, "Email");
          }}
        />
        <ErrorForm state={error.Email} />
        <CustomInput
          title="Password"
          className="form__input--password"
          type="password"
          placeholder="Enter Password"
          value={student.Password}
          onChange={(e) => {
            onChange(e, "Password");
          }}
        />
        <ErrorForm state={error.Password} />
        <CustomInput
          title="Re-type Password"
          className="form__input--re-password"
          type="password"
          placeholder="Re-type Password"
          value={student.RePassword}
          onChange={(e) => {
            onChange(e, "RePassword");
          }}
        />
        <ErrorForm state={error.RePassword} />
        <Button type="button" nameBtn="Register" onclick={actSubmit} />
      </form>
    </div>
  );
}

export default Register;
