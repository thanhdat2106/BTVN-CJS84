import { useState } from "react";
import { emailValidate, phoneValidate } from "../../Common/Const";
const studentDefault = {
  FirstName: "",
  LastName: "",
  MiddleName: "",
  Course: "",
  Gender: 0,
  Phone: "",
  CurrentAddress: "",
  Email: "",
  Password: "",
  RePassword: "",
};
const errorDefault = {
  FirstName: "",
  LastName: "",
  MiddleName: "",
  Course: "",
  Gender: "",
  Phone: "",
  CurrentAddress: "",
  Email: "",
  Password: "",
  RePassword: "",
};
const useHookRegister = () => {
  const [student, setStudent] = useState(studentDefault);
  const [error, setErrot] = useState(errorDefault);
  const actSubmit = () => {
    const result = validate();
    if (!result) {
      console.log(123, student);
    }
  };
  const validate = () => {
    const errorClone = JSON.parse(JSON.stringify(error));
    let resultVlaidate = false;
    if (student.FirstName == "") {
      errorClone.FirstName = "Dữ liệu không được để trống";
      resultVlaidate = true;
    }
    if (student.MiddleName == "") {
      errorClone.MiddleName = "Dữ liệu không được để trống";
      resultVlaidate = true;
    }
    if (student.LastName == "") {
      errorClone.LastName = "Dữ liệu không được để trống";
      resultVlaidate = true;
    }
    if (student.Course == "") {
      errorClone.Course = "Dữ liệu không được để trống";
      resultVlaidate = true;
    }
    if (student.Gender == "") {
      errorClone.Gender = "Dữ liệu không được để trống";
      resultVlaidate = true;
    }
    if (student.CurrentAddress == "") {
      errorClone.CurrentAddress = "Dữ liệu không được để trống";
      resultVlaidate = true;
    }
    if (student.Phone == "") {
      errorClone.Phone = "Dữ liệu không được để trống";
      resultVlaidate = true;
    } else if (!phoneValidate(student.Phone)) {
      errorClone.Phone = "Số điện thoại không đúng định dạng";
      resultVlaidate = true;
    }
    if (student.Email == "") {
      errorClone.Email = "Dữ liệu không được để trống";
      resultVlaidate = true;
    } else if (!emailValidate(student.Email)) {
      errorClone.Phone = "Email không đúng định dạng";
      resultVlaidate = true;
    }
    if (student.Password == "") {
      errorClone.Password = "Dữ liệu không được để trống";
      resultVlaidate = true;
    }
    if (student.RePassword == "") {
      errorClone.RePassword = "Dữ liệu không được để trống";
      resultVlaidate = true;
    } else if (student.RePassword != student.Password) {
      errorClone.RePassword = "RePassword không đúng với passord";
      resultVlaidate = true;
    }

    setErrot(errorClone);
    return resultVlaidate;
  };
  const onChange = (e, name) => {
    const studentClone = JSON.parse(JSON.stringify(student));
    const errorClone = JSON.parse(JSON.stringify(error));
    if (name == "FirstName") {
      studentClone.FirstName = e.target.value;
      e.target.value != null && (errorClone.FirstName = false);
    } else if (name == "LastName") {
      studentClone.LastName = e.target.value;
      e.target.value != null && (errorClone.LastName = false);
    } else if (name == "MiddleName") {
      studentClone.MiddleName = e.target.value;
      e.target.value != null && (errorClone.MiddleName = false);
    } else if (name == "Course") {
      studentClone.Course = e.target.value;
      e.target.value != null && (errorClone.Course = false);
    } else if (name == "Gender") {
      studentClone.Gender = e.target.value;
      e.target.value != null && (errorClone.Gender = false);
    } else if (name == "CurrentAddress") {
      studentClone.CurrentAddress = e.target.value;
      e.target.value != null && (errorClone.CurrentAddress = false);
    } else if (name == "Phone") {
      studentClone.Phone = e.target.value;
      e.target.value != null && (errorClone.Phone = false);
    } else if (name == "Email") {
      studentClone.Email = e.target.value;
      e.target.value != null && (errorClone.Email = false);
    } else if (name == "Password") {
      studentClone.Password = e.target.value;
      e.target.value != null && (errorClone.Password = false);
    } else if (name == "RePassword") {
      studentClone.RePassword = e.target.value;
      e.target.value != null && (errorClone.RePassword = false);
    }
    setStudent(studentClone);
    setErrot(errorClone);
  };

  return { actSubmit, student, error, setStudent, onChange };
};
export default useHookRegister;
