import "./employees-list-item.css";

const EmployeesListItem = () => {
  return (
    <li className="employees-list">
      <span className="employees-list-name">John C.</span>
      <input
        className="employees-list-input"
        type="text"
        defaultValue="1000$"
      ></input>
      <div>
        <button type="button" className="employees-list-btn-cookie">
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="employees-list-btn-trash">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
