// Variables --> Variables are used to store data values
// javaScript has three keywords to declare a variables
var a=414;
console.log(a)
let b=532;
console.log(b)
const c = 12423;
console.log(c)
// Primitive Datatypes
// Types: 1.Number 2.String 3.Undefined 4.Null 5.Boolean 6.Boolean 7.BigInt 8.Symbol
var d= 232434;
var e ="erewwr";
var f = undefined;
var g; //null
var h = true;
var i = 5363242782875n;
//Non Primitive Datatypes
//Types: 1.Functions  2.Arrays  3.Objects 
//1.Functions:It is block of code to do some task and return some value 
// 1.Function declaration 
function greet(){  
}
greet()
//2.Function Expression 
function get(){
 var a = 16;
 console.log(a)
}
get()
//1.Named Function Expression
var m = function t(){
 let n = 253;
 console.log(n)
}
m()
//2.Ananyous Function Expression
var o = function(k=252){
    console.log(k);
}
o()
//3.Arrow Function Expression
var q = (a,b)=>{
    return a*b;
}
console.log(q(23,2));

// 2.Arrays:Collection of Homogeneous or Heterogeneous data
var array = [1324,4354,["sfgg","geggeh",[true,false]]]
console.log(array[2][2][1])
// 2.Object:Collection of Key-value pair
var obj = {name:"vasi",class:8}
console.log(obj.name)
console.log(obj["class"])

/// Group Employees by Department 
let employees = [
  {id:1, name:"John", department:"IT", salary:50000, city:"Hyderabad"},
  {id:2, name:"Sara", department:"HR", salary:35000, city:"Bangalore"},
  {id:3, name:"Mike", department:"IT", salary:60000, city:"Chennai"},
  {id:4, name:"Priya", department:"Sales", salary:45000, city:"Hyderabad"},
  {id:5, name:"David", department:"HR", salary:30000, city:"Mumbai"},
  {id:6, name:"Anu", department:"IT", salary:70000, city:"Pune"}
];

function groupByDepartment(data) {
  return data.reduce((result, emp) => {
    
    let dept = emp.department;

    if (!result[dept]) {
      result[dept] = {
        totalEmployees: 0,
        totalSalary: 0,
        employees: []
      };
    }

    result[dept].totalEmployees++;
    result[dept].totalSalary += emp.salary;

    result[dept].employees.push({
      id: emp.id,
      name: emp.name,
      city: emp.city,
      salary: emp.salary
    });

    return result;

  }, {});
}
console.log(groupByDepartment(employees));