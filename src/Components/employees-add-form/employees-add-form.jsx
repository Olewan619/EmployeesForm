import "./employees-add-form.css";

const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form">
        <input
          type="text"
          placeholder="Имя сотрудника"
          className="add-form-input"
        ></input>
        <input
          type="number"
          placeholder="З/П в $"
          className="add-form-input"
        ></input>
        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
