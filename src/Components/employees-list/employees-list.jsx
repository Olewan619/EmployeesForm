import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = () => {
  return (
    <ul className="employees-list-item list-group">
      <EmployeesListItem></EmployeesListItem>
      <EmployeesListItem></EmployeesListItem>
      <EmployeesListItem></EmployeesListItem>
    </ul>
  );
};

export default EmployeesList;
