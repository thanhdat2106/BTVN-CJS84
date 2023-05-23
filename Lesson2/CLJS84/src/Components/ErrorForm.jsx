const ErrorForm = ({ state }) => {
  return (
    state && (
      <div className="row">
        <label className="text-danger">{state}</label>
      </div>
    )
  );
};
export default ErrorForm;
