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
        { name: "John C.", salary: 800, id: 1 },
        { name: "Alex M.", salary: 3000, id: 2 },
        { name: "Carl W.", salary: 5000, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItemForm = (name, salary) => {
    const newItem = {
      name,
      salary,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <AppInfo></AppInfo>

        <div className="search-panel">
          <SearchPanel></SearchPanel>
          <AppFilter></AppFilter>
        </div>
        <EmployeesList data={data} onDelete={this.deleteItem}></EmployeesList>
        <EmployeesAddForm onAdd={this.addItemForm}></EmployeesAddForm>
      </div>
    );
  }
}

export default App;
