import { useState } from "react";

const listSanPhamDefault = [
  {
    Id: 1,
    Name: "San pham 1",
    Price: 300000,
  },
  {
    Id: 2,
    Name: "San pham 1",
    Price: 300000,
  },
];
const productDefault = {
  Name: "",
  Price: "",
};
const errorDefault = {
  Name: "",
  Price: "",
};
const useHookListItem = () => {
  const [listSanPham, setListSanPham] = useState(listSanPhamDefault);
  const [sanPham, setSanPham] = useState(productDefault);
  const [error, setError] = useState(errorDefault);
  const onChange = (e, name) => {
    const sanPhamClone = JSON.parse(JSON.stringify(sanPham));
    const errorClone = JSON.parse(JSON.stringify(error));
    if (name == "Name") {
      sanPhamClone.Name = e.target.value;
      e.target.value != null && (errorClone.Name = false);
    } else if (name == "Price") {
      sanPhamClone.Price = e.target.value;
      e.target.value != null && (errorClone.Price = false);
    }
    setSanPham(sanPhamClone);
    setError(errorClone);
  };
  const validate = () => {
    const errorClone = JSON.parse(JSON.stringify(error));
    let resultVlaidate = false;
    if (sanPham.Name == "") {
      errorClone.Name = "Dữ liệu không được để trống";
      resultVlaidate = true;
    }
    if (sanPham.Price == "") {
      errorClone.Price = "Dữ liệu không được để trống";
      resultVlaidate = true;
    }
    setError(errorClone);
    return resultVlaidate;
  };
  const actThem = () => {
    const result = validate();
    if (!result) {
      const listSanPhamClone = JSON.parse(JSON.stringify(listSanPham));
      sanPham.Id = listSanPhamClone.length + 1;
      listSanPhamClone.push(sanPham);
      setSanPham(productDefault);
      setListSanPham(listSanPhamClone);
    }
  };
  return {
    listSanPham,
    sanPham,
    error,
    onChange,
    actThem,
  };
};
export default useHookListItem;
