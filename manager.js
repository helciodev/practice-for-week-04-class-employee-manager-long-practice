const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, salary, title, employees = []) {
    super(name, salary, title);
    this.employees = employees;
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }
}

module.exports = Manager;
