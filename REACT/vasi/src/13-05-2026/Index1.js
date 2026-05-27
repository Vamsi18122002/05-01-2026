// Online Shopping Cart System
let customerName = "Ravi";
let customerId = 201;
let customerCategory = 'G';
let paymentStatus = true;

let totalBill = 0;
let finalBill = 0;

let products = ["Laptop Bag", "Mouse", "Keyboard"];
let prices = [2500, 1200, 1800];

console.log("Products Purchased:");
for (let i = 0; i < products.length; i++) {
    console.log((i + 1) + ". " + products[i] + " - ₹" + prices[i]);
    totalBill += prices[i];
}

if (totalBill > 5000) {
    finalBill = totalBill - (totalBill * 20 / 100);
    console.log("Discount Applied: 20%");
} 
else if (totalBill > 2000) {
    finalBill = totalBill - (totalBill * 10 / 100);
    console.log("Discount Applied: 10%");
} 
else {
    finalBill = totalBill;
    console.log("No Discount Applied");
}

console.log("\n----- Shopping Cart Details -----");
console.log("Customer Name: " + customerName);
console.log("Customer ID: " + customerId);
console.log("Customer Category: " + customerCategory);

console.log("\nTotal Bill: ₹" + totalBill);
console.log("Final Bill: ₹" + finalBill);

if (paymentStatus) {
    console.log("Payment Status: Paid");
} else {
    console.log("Payment Status: Pending");
}