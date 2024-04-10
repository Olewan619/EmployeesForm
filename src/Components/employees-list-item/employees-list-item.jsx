import "./employees-list-item.css";
import { Component } from "react";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      rise: false,
    };
  }

  OnIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  OnLike = () => {
    this.setState(({ rise }) => ({
      rise: !rise,
    }));
  };

  render() {
    const { name, salary, onDelete } = this.props;
    const { increase, rise } = this.state;

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
        <span className={employeesStar} onClick={this.OnLike}>
          {name}
        </span>
        <input
          className="employees-list-input"
          type="text"
          defaultValue={salary + "$"}
        ></input>
        <div>
          <button
            type="button"
            className="employees-list-btn-cookie"
            onClick={this.OnIncrease}
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
  }
}

export default EmployeesListItem;
