function groupByDepartment(employees) {
  return employees.reduce((acc, emp) => {
    const dept = emp.department;

    if (!acc[dept]) {
      acc[dept] = [];
    }

    acc[dept].push(emp);
    return acc;
  }, {});
}

const data = [
  { name: "John", department: "IT" },
  { name: "Sara", department: "HR" },
  { name: "Mike", department: "IT" }
];

console.log(groupByDepartment(data));