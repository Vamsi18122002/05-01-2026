async function retryAsync(fn, retries, delay) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === retries) throw error;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}


let count = 0;

async function unstableAPI() {
  count++;
  console.log("Attempt:", count);
  if (count < 3) throw new Error("API Failed");
  return "Success!";
}

retryAsync(unstableAPI, 5, 1000)
  .then(console.log)
  .catch(console.error);