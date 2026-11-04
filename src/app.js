const employee = {
  id: 101,
  name: "Isaac Nyaabila",
  department: "Information Technology",
  salary: 5000,
  isActive: true,

  getDetails: function () {
    return `Employee ID: ${this.id}
Name: ${this.name}
Department: ${this.department}
Salary: GH₵${this.salary}
Active: ${this.isActive}`;
  },
};