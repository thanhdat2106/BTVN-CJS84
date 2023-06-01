import Button from "../../Components/Button";
import React from "react";
import CustomInput from "../../Components/CustomInput";
import ErrorForm from "../../Components/ErrorForm";
import "./ListItem.css";
import useHookListItem from "./useHookListItem";
import RadioInput from "../../Components/RadioInput";
const dataRadio = [
  { key: 0, label: "Nam" },
  { key: 1, label: "Nữ" },
];
const ListItem = () => {
  const { list, person, error, onChange, actThem, actXoa, actEdit, actSave } =
    useHookListItem();
  return (
    <div className="form__register">
      <CustomInput
        title="Họ"
        className="form__input--middle-name"
        type="text"
        placeholder=""
        value={person.FirstName}
        onChange={(e) => {
          onChange(e, "FirstName");
        }}
      />
      <ErrorForm state={error.FirstName} />
      <CustomInput
        title="Tên"
        className="form__input--last-name"
        type="text"
        placeholder=""
        value={person.LastName}
        onChange={(e) => {
          onChange(e, "LastName");
        }}
      />
      <ErrorForm state={error.LastName} />
      <RadioInput
        title="Giới tính"
        name="Sex"
        dataRadio={dataRadio}
        value={person.Gender}
        onChange={(e) => {
          onChange(e, "Gender");
        }}
      />
      <div>
        {!person.Id ? (
          <div>
            <Button type="button" nameBtn="Thêm" onclick={actThem} />
          </div>
        ) : (
          <div>
            <Button type="button" nameBtn="Cập nhật" onclick={actSave} />
          </div>
        )}
      </div>
      <div>
        <table class="table">
          <thead>
            <tr className="text-center">
              <th scope="col">#</th>
              <th scope="col">Họ và tên</th>
              <th scope="col">Giới tính</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((item, index) => {
              return (
                <tr className="text-center" key={item.Id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {item.FirstName} {item.LastName}
                  </td>
                  <td>
                    {item.Gender == 0 ? (
                      <div
                        class="alert alert-danger p-1 d-flex justify-content-center"
                        role="alert"
                      >
                        Nam
                      </div>
                    ) : (
                      <div
                        class="alert alert-info p-1 d-flex justify-content-center"
                        role="alert"
                      >
                        Nữ
                      </div>
                    )}
                  </td>
                  <td className="text-center">
                    <div className="d-flex justify-content-around">
                      <button
                        class="btn btn-outline-primary"
                        type="button"
                        onClick={() => {
                          actEdit(item.Id);
                        }}
                      >
                        <i class="fa-solid fa-eye"></i>
                      </button>
                      <button
                        class="btn btn-outline-danger"
                        type="button"
                        onClick={() => {
                          actXoa(item.Id);
                        }}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListItem;
