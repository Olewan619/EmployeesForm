import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp, onChangeSalary }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={item.id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("dataToggle"))
        }
        onChangeSalary={(e) => onChangeSalary(id, parseInt(e.target.value))}
      ></EmployeesListItem>
    );
  });

  return <ul className="employees-list-item list-group">{elements}</ul>;
};

export default EmployeesList;

// name={item.name}
// salary={item.salary}
// increase={item.increase} //
