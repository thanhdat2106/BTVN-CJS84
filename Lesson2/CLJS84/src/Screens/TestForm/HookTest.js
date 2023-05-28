import { useState } from "react";
import { validateText } from "../../Common/Const";

const studentDefault = {
  FirstName: "",
};
const errorDefault = {
  FirstName: "",
};
const useHookRegister = ({ data }) => {
  const [student, setStudent] = useState(studentDefault);
  const [error, setError] = useState(errorDefault);

  const onChange = (value) => {
    const studentClone = JSON.parse(JSON.stringify(student));
    const errorClone = JSON.parse(JSON.stringify(error));
    studentClone.FirstName = value.target.value;
    value.target.value && (errorClone.FirstName = null);
    setError(errorClone);
    setStudent(studentClone);
  };
  const validate = () => {
    const errorClone = JSON.parse(JSON.stringify(error));
    let result = false;
    if (student.FirstName == "") {
      errorClone.FirstName = "Khong duoc de trong!";
      result = true;
    }
    if (!validateText(student.FirstName)) {
      errorClone.FirstName = "Khong duoc nhap so!";
      result = true;
    }
    setError(errorClone);
    return result;
  };
  const submit = () => {
    const result = validate();
    if (!result) {
      console.log(1233, student);
    }
  };
  return { student, error, onChange, submit };
};
export default useHookRegister;
