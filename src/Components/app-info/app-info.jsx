import "./app-info.css";

const AppInfo = ({ employees, bonus }) => {
  console.log("Employees:", employees);
  console.log("Bonus:", bonus);
  return (
    <div className="app-info">
      <h1>Учет компании</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премия за результат: {bonus}</h2>
    </div>
  );
};

export default AppInfo;
