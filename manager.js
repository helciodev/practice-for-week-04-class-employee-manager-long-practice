const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, salary, title, manager, employees = []) {
    super(name, salary, title, manager);
    this.employees = employees;
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  _totalSubSalary() {
    let total = this.employees[0].salary;

    for (let i = 0; i < this.employees.length; i++) {
      let currentEmployee = this.employees[i];
      if (currentEmployee instanceof Manager) {
        total += currentEmployee._totalSubSalary();
      } else {
        currentEmployee = this.employees[i + 1];
        if (currentEmployee) {
          total += currentEmployee.salary;
        }
      }
    }
    return total;
  }

  calculateBonus(multiplier) {
    return (this.salary + this._totalSubSalary()) * multiplier;
  }
}

module.exports = Manager;
