//Error Handling
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}
try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
}
finally{    //compulsory printed
    console.log("Task Completed") 
}

//another task
try {
  console.log("Processing...");
  throw new Error("Something went wrong");
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Cleanup completed");
}
