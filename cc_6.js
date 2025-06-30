window.location.href = "index.html";
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `Employee Name: ${this.name}, Department: ${this.department}`;
    }
}
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `Manager Name: ${this.name}, Department: ${this.department}, Team Size: ${this.teamSize}`;
    }
}
const emp1 = new Employee("Alice", "Engineering");
const emp2 = new Employee("Bob", "Marketing");

const mgr1 = new Manager("Carol", "Engineering", 5);
const mgr2 = new Manager("Dave", "Sales", 3);

console.log(emp1.describe());
console.log(emp2.describe());
console.log(mgr1.describe());
console.log(mgr2.describe());
class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }
}

// Example usage:
const myCompany = new Company();
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);

myCompany.listEmployees();
const anotherCompany = new Company();
anotherCompany.addEmployee(new Employee("Eve", "HR"));
anotherCompany.addEmployee(new Manager("Frank", "Finance", 2));
anotherCompany.listEmployees();
