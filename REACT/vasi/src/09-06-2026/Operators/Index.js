let math = 85;
let science = 90;
let english = 78;
let total = math + science + english;
let average = total / 3;
let percentage = (total / 300) * 100;
console.log("Total Marks:", total);
console.log("Average Marks:", average);
console.log("Percentage:", percentage + "%");

let price = 499;
let quantity = 3;
let discount = 100;
let subtotal = price * quantity;
let finalAmount = subtotal - discount;
console.log("Subtotal:", subtotal);
console.log("Final Amount:", finalAmount);


let balance = 5000;
// Salary credited
balance += 25000;
console.log("After Salary:", balance);
// Electricity bill 
balance -= 1500;
console.log("After Bill Payment:", balance);
// Interest(5% increase)
balance *= 1.05;
console.log("After Interest:", balance);
// Monthly investment 
balance /= 2;
console.log("After Investment:", balance);


let age = 18;
// Greater than or equal to (>=)
console.log("Eligible to vote:", age >= 18);
// Less than (<)
console.log("Child ticket:", age < 12);
// Equal to (==)
console.log("Exactly 18 years old:", age == 18);
// Strict equal to (===){type and value}
console.log("Age is number 18:", age === 18);
 

let age1 = 20;
let hasLicense = true;
// Logical AND (&&)
let canDrive = age1 >= 18 && hasLicense;
console.log("Can drive:", canDrive);

let percentage1 = 85;
let sportsQuota = true;
// Logical OR (||)
let eligibleForScholarship = percentage1 >= 90 || sportsQuota;
console.log("Scholarship Eligible:", eligibleForScholarship);


let isLoggedIn = true;
let balance1 = 1200;
let orderAmount = 1000; 
let hasCoupon = false;

let canPlaceOrder = isLoggedIn && (balance1 >= orderAmount || hasCoupon);
console.log("Order can be placed:", canPlaceOrder);

const READ = 4;    // 100
const WRITE = 2;   // 010
const DELETE = 1;  // 001

let userPermissions = READ | WRITE; // 110
// Check if user has WRITE permission
let canWrite = (userPermissions & WRITE) !== 0;
console.log("Can Write:", canWrite);

const READ1 = 4;    
const WRITE1 = 2;   
// Combine permissions
let permissions = READ1 | WRITE1;
console.log("Permissions Value:", permissions);

let quantity1 = 5;
// Multiply by 2
let doubled = quantity1 << 1;
console.log("Doubled Quantity:", doubled);

let points = 20;
// Divide by 2
let halfPoints = points >> 1;
console.log("Half Points:", halfPoints);