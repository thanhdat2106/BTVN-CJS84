import Button from "../../Components/Button";
import React from "react";
import CustomInput from "../../Components/CustomInput";
import ErrorForm from "../../Components/ErrorForm";
import "./ListItem.css";
import useHookListItem from "./useHookListItem";
const ListItem = () => {
  const { listSanPham, sanPham, error, onChange, actThem } = useHookListItem();
  console.log(23, listSanPham);
  return (
    <div className="form__register">
      <CustomInput
        title="Tên sản phẩm"
        className="form__input--middle-name"
        type="text"
        placeholder="Tên sản phẩm"
        value={sanPham.Name}
        onChange={(e) => {
          onChange(e, "Name");
        }}
      />
      <ErrorForm state={error.Name} />
      <CustomInput
        title="Giá sản phẩm"
        className="form__input--last-name"
        type="text"
        placeholder="Giá sản phẩm"
        value={sanPham.Price}
        onChange={(e) => {
          onChange(e, "Price");
        }}
      />
      <ErrorForm state={error.Price} />
      <div>
        <div>
          <Button type="button" nameBtn="Thêm" onclick={actThem} />
        </div>
      </div>
      <div className="mt-5">
        <ul class="row list-group list-group-horizontal">
          <li class="list-group-item col-1">STT</li>
          <li class="list-group-item col-4">Tên sản phẩm</li>
          <li class="list-group-item col-2">Giá bán</li>
        </ul>
        {listSanPham?.map((item) => {
          return (
            <ul key={item.Id} class="row list-group list-group-horizontal">
              <li class="list-group-item col-1">{item.Id}</li>
              <li class="list-group-item col-4">{item.Name}</li>
              <li class="list-group-item col-2">{item.Price}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
export default ListItem;
