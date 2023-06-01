import Select from "../../Components/Select";
import useHookLoadSelect from "./useHookLoadSelect";
import "./LoadSelect.css";
import CustomInput from "../../Components/CustomInput";
const LoadSelect = () => {
  const { list, dataGender, filter, onChange } = useHookLoadSelect();
  return (
    <div className="containerLoadSelect">
      <div className="row">
        <div className="col-6">
          <Select
            title="Giới tính"
            dataOption={dataGender}
            value={filter.filterGender?.key}
            onChange={(e) => {
              onChange(e, "gender");
            }}
          />
        </div>
        <div className="col-6">
          <CustomInput
            title="Tìm kiếm"
            className=""
            type="text"
            placeholder=""
            value={filter.filterSearch}
            onChange={(e) => {
              onChange(e, "search");
            }}
          />
        </div>
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
                    <div className="">
                      <button
                        class="btn btn-outline-primary"
                        type="button"
                        style={{ marginRight: 5 }}
                      >
                        <i class="fa-solid fa-eye"></i>
                      </button>
                      <button class="btn btn-outline-danger" type="button">
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
export default LoadSelect;
