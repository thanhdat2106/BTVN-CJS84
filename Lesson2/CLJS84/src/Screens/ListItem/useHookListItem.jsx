import { useState } from "react";

const listpersonDefault = [
  {
    Id: 1,
    FirstName: "Nguyễn Văn",
    LastName: "A",
    Gender: 0,
  },
  {
    Id: 2,
    FirstName: "Nguyen Văn",
    LastName: "B",
    Gender: 1,
  },
];
const personDefault = {
  Id: null,
  FirstName: "",
  LastName: "",
  Gender: 0,
};
const errorDefault = {
  FirstName: "",
  LastName: "",
  Gender: 0,
};
const useHookListItem = () => {
  const [list, setList] = useState(listpersonDefault);
  const [person, setPerson] = useState(personDefault);
  const [error, setError] = useState(errorDefault);
  const onChange = (e, name) => {
    const personClone = JSON.parse(JSON.stringify(person));
    const errorClone = JSON.parse(JSON.stringify(error));
    personClone[name] = e.target.value;
    e.target.value != null && (errorClone[name] = false);
    setPerson(personClone);
    setError(errorClone);
  };
  const validate = () => {
    const errorClone = JSON.parse(JSON.stringify(error));
    let resultVlaidate = false;
    if (person.FirstName == "") {
      errorClone.FirstName = "Dữ liệu không được để trống";
      resultVlaidate = true;
    }
    if (person.LastName == "") {
      errorClone.LastName = "Dữ liệu không được để trống";
      resultVlaidate = true;
    }
    setError(errorClone);
    return resultVlaidate;
  };
  const genId = () => {
    const listpersonClone = JSON.parse(JSON.stringify(list));
    let Id = Math.floor(Math.random() * 100);
    const check = listpersonClone.find((x) => x.Id == Id);
    if (check) {
      Id = genId();
    }
    return Id;
  };
  // const genId = () => {
  //   const listpersonClone = JSON.parse(JSON.stringify(list));
  //   let Id = Math.floor(Math.random() * 3);
  //   let check = listpersonClone.find((x) => x.Id == Id);
  //   console.log(222, Id);
  //   while (check) {
  //     Id = Math.floor(Math.random() * 3);
  //     check = listpersonClone.find((x) => x.Id == Id);
  //   }
  //   return Id;
  // };
  const actThem = () => {
    const result = validate();
    if (!result) {
      const listpersonClone = JSON.parse(JSON.stringify(list));
      person.Id = genId();
      listpersonClone.push(person);
      console.log(555, listpersonClone);
      setPerson(personDefault);
      setList(listpersonClone);
    }
  };
  const actXoa = (id) => {
    const listpersonClone = JSON.parse(JSON.stringify(list));
    const update = [];
    listpersonClone.forEach((item) => {
      if (item.Id != id) {
        update.push(item);
      }
    });
    setList(update);
  };
  const actEdit = (id) => {
    const listpersonClone = JSON.parse(JSON.stringify(list));
    const person = listpersonClone.find((x) => x.Id == id);
    setPerson(person);
  };
  const actSave = () => {
    const listpersonClone = JSON.parse(JSON.stringify(list));
    const update = listpersonClone.map((item) => {
      if (item.Id == person.Id) {
        return person;
      } else {
        return item;
      }
    });
    setList(update);
    setPerson(personDefault);
  };
  return {
    list,
    person,
    error,
    onChange,
    actThem,
    actXoa,
    actEdit,
    actSave,
  };
};
export default useHookListItem;
