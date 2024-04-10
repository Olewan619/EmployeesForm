import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ data, onDelete }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
      ></EmployeesListItem>
    );
  });

  return <ul className="employees-list-item list-group">{elements}</ul>;
};

export default EmployeesList;

// name={item.name}
// salary={item.salary}
// increase={item.increase} //
