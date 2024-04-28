import { Component } from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel.jsx";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
      ],
      term: "",
      // Добавим ключ key для компонента AppInfo
      appInfoKey: 0,
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((item) => item.id !== id);
      return {
        data: newData,
        // Изменяем ключ key для компонента AppInfo
        appInfoKey: Date.now(),
      };
    });
  };

  addItemForm = (name, salary) => {
    if (!name || !salary || name.length < 3 || salary <= 0) {
      let message = "Пожалуйста, исправьте следующие ошибки:\n";
      if (!name) {
        message += "- Имя не должно быть пустым.\n";
      }
      if (!salary) {
        message += "- Зарплата не должна быть пустой.\n";
      }
      if (name.length < 3) {
        message += "- Имя должно содержать не менее трех символов.\n";
      }
      if (salary <= 0) {
        message += "- Зарплата должна быть не меньше нуля.\n";
      }
      alert(message);
      return;
    }

    const newItem = {
      name,
      salary,
      rise: false,
      increase: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];

      return {
        data: newArr,
        // Изменяем ключ key для компонента AppInfo
        appInfoKey: Date.now(),
      };
    });
  };
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      const newData = data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [prop]: !item[prop],
          };
        }
        return item;
      });

      return {
        data: newData,
        // Изменяем ключ key для компонента AppInfo
        appInfoKey: Date.now(),
      };
    });
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    term = term.toLowerCase(); //
    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term: term });
  };

  render() {
    const { data, term, appInfoKey } = this.state;
    const employees = data.length;
    const bonus = data.filter((item) => item.increase).length;
    const visibleData = this.searchEmp(data, term);

    return (
      <div className="app">
        {/* Используем ключ key для компонента AppInfo */}
        <AppInfo key={appInfoKey} employees={employees} bonus={bonus} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItemForm} />
      </div>
    );
  }
}

export default App;
