import { useEffect, useState } from "react";
import { DeepParse, Remove_Viet } from "../../Common/functions";
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
  {
    Id: 3,
    FirstName: "Nguyen Văn",
    LastName: "C",
    Gender: 0,
  },
  {
    Id: 4,
    FirstName: "Nguyen Văn",
    LastName: "D",
    Gender: 1,
  },
  {
    Id: 5,
    FirstName: "Nguyen Văn",
    LastName: "E",
    Gender: 0,
  },
  {
    Id: 6,
    FirstName: "Nguyen Văn",
    LastName: "F",
    Gender: 1,
  },
];
const dataSelect = [
  { key: -1, name: "Tất cả" },
  { key: 0, name: "Nam" },
  { key: 1, name: "Nữ" },
];
const dataFilter = {
  filterGender: null,
  filterSearch: null,
};
const useHookLoadSelect = () => {
  const [filter, setFilter] = useState(dataFilter);
  const [dataGender, setDataGender] = useState(dataSelect);
  const [list, setList] = useState([]);
  const [listAll, setListAll] = useState([]);
  useEffect(() => {
    setList(listpersonDefault);
    setListAll(listpersonDefault);
  }, []);

  useEffect(() => {
    if (filter.filterGender) {
      if (filter.filterGender.key == -1) {
        setList(listAll);
      } else {
        const listClone = DeepParse(listAll);
        const update = listClone.filter(
          (x) => x.Gender == filter.filterGender.key
        );
        setList(update);
      }
    }
    if (filter.filterSearch?.length > 0) {
      const listClone = DeepParse(list);
      const searchValue = filter.filterSearch
        ? filter.filterSearch.trim().toUpperCase()
        : "";
      const result = listClone.filter((item) =>
        Remove_Viet(item?.FirstName + " " + item?.LastName).includes(
          Remove_Viet(searchValue)
        )
      );
      setList(result);
    }
  }, [filter]);
  useEffect(() => {
    if (dataGender.length > 0) {
      const filterClone = DeepParse(filter);
      filterClone.filterGender = dataGender[0];
      setFilter(filterClone);
    }
  }, [dataGender]);
  const onChange = (e, name) => {
    if (name == "gender") {
      const dataGenderClone = DeepParse(dataGender);
      const result = dataGenderClone?.find((x) => x.key == e.target.value);
      let filterClone = DeepParse(filter);
      filterClone["filterGender"] = result;
      setFilter(filterClone);
    } else if (name == "search") {
      const filterClone = DeepParse(filter);
      filterClone["filterSearch"] = e.target.value;
      setFilter(filterClone);
    }
  };
  return {
    list,
    onChange,
    dataGender,
    filter,
  };
};
export default useHookLoadSelect;
