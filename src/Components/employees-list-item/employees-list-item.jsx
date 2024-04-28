import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleProp,
    increase,
    rise,
    onChangeSalary,
  } = props;

  let employeesPrem = "employees-list";
  if (increase) {
    employeesPrem += " increase";
  }

  let employeesStar = "employees-list-name";
  if (rise) {
    employeesPrem += " like";
  }
  return (
    <li className={employeesPrem}>
      <span className={employeesStar} onClick={onToggleProp} datatoggle="rise">
        {name}
      </span>
      <input
        className="employees-list-input"
        type="text"
        defaultValue={salary + "$"}
        onChange={onChangeSalary}
      ></input>
      <div>
        <button
          type="button"
          className="employees-list-btn-cookie"
          onClick={onToggleProp}
          datatoggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button
          type="button"
          className="employees-list-btn-trash"
          onClick={onDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
