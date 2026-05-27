console.log("<-----Object------>")
console.log("Collection of key-value pairs")
//key:value 
//key can be string datatype
//value can be any datatype
let student = {name:"vasi",class:"10th",rollno:10,DOB:"10-10-2010",passed:true}
console.log(student.DOB)
console.log(student["passed"])
          
console.log("Types of Object Creation in JavaScript:")
console.log("I.Object literal way")
console.log("II.new Object()")
console.log("III.Constructor")
console.log("IV.ES6 classes")

console.log("<----I.Object Literal way---->")
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
 greet: function() {
    return "Hello! Welcome to Toyota ShowRoom"
}}
console.log(car)
console.log(car.greet())

function obj(){
    let employee = {name:"siva",
                    ID:12345,
                    BloodGroup:"O+"}
                console.log(employee)}
obj()

console.log("<-----II.new Object()---->")
let person = new Object();
person.name = "Asha";
person.age = 30;
person.address = function details(){
    person.place = "kadiri"
    person.pincode = 515465
    console.log(person.place+" "+person.pincode)
}
console.log(person)
person.address()
console.log(person)

let book = new Object();
book.title = "The Secret";
book.author = "Rhonda Byrne";
book.pages = 200;
book.getInfo = function() {
  return this.title + " by " + this.author;};
console.log(book);        
console.log(book.getInfo());    

console.log("<-----Constructor------>")
function emp(a,b,c){
    this.name = a;
    this.role = b;
    this.dept = c;
}
var m = new emp("vasikar","ASE","IT")
console.log(m)

function worker(x,y){
    this.name = x;
    this.working_type = y;
}
console.log(new worker("raju","cleaner"))

console.log("<-----class----->")
class Student{
    constructor(a,b,c){
        this.name = a;
        this.class= b;
        this.rank = c;
    }
}
var n = new Student("bhadra",10,2)
console.log(n)

class Citizen {
    constructor(m,n,o){
        this.name = m;
        this.proof = n;
        this.address = o;  }}
console.log(new Citizen("ravan","aadhar_card","ananthapur"))
