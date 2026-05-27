
// ALL API METHODS IN ONE FILE
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// GET METHOD
async function getData() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error('GET request failed');
    }

    const data = await response.json();

    console.log('GET DATA:');
    console.log(data);
  } catch (error) {
    console.error('GET ERROR:', error.message);
  }
}
// POST METHOD
async function postData() {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'New Post',
        body: 'This is post data',
        userId: 1
      })
    });

    if (!response.ok) {
      throw new Error('POST request failed');
    }

    const data = await response.json();

    console.log('\nPOST DATA:');
    console.log(data);
  } catch (error) {
    console.error('POST ERROR:', error.message);
  }
}

// PUT METHOD
async function putData() {
  try {
    const response = await fetch(`${BASE_URL}/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 1,
        title: 'Updated Title',
        body: 'Updated body content',
        userId: 1
      })
    });

    if (!response.ok) {
      throw new Error('PUT request failed');
    }

    const data = await response.json();

    console.log('\nPUT DATA:');
    console.log(data);
  } catch (error) {
    console.error('PUT ERROR:', error.message);
  }
}

// PATCH METHOD
async function patchData() {
  try {
    const response = await fetch(`${BASE_URL}/1`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Patched Title'
      })
    });

    if (!response.ok) {
      throw new Error('PATCH request failed');
    }

    const data = await response.json();

    console.log('\nPATCH DATA:');
    console.log(data);
  } catch (error) {
    console.error('PATCH ERROR:', error.message);
  }
}

// DELETE METHOD
async function deleteData() {
  try {
    const response = await fetch(`${BASE_URL}/1`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('DELETE request failed');
    }

    console.log('\nDELETE SUCCESSFUL');
  } catch (error) {
    console.error('DELETE ERROR:', error.message);
  }
}

// CALL ALL METHODS
async function runAllAPIs() {
  await getData();
  await postData();
  await putData();
  await patchData();
  await deleteData();
}

runAllAPIs();

console.log("local storage")
console.log("session storage")

localStorage.setItem("name","vasikar")
console.log(localStorage.getItem("name"))

localStorage.setItem("class","10th")
console.log(localStorage.getItem("class"))

sessionStorage.setItem("name","vamsi")
console.log(sessionStorage.getItem("name")) 

console.log(sessionStorage.removeItem("name"))

console.log(localStorage.clear()) 


console.log("Error Handling")
console.log("try/catch")
console.log("finally")
try {
    console.log(hello)
} catch (error) {
    console.log(error)
}
console.log("Error occured")

try {
    throw("error")
} catch (error) {
    console.log(error)
}
finally{
    console.log("code completed")
}
try {
    let num = 0;

    if (num === 0) {
        throw new Error("Cannot divide by zero!");
    }

    let result = 10 / num;
    console.log(result);
} catch (error) {
    console.log("Error:", error.message);
}

