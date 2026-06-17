const BASE_URL = "https://jsonplaceholder.typicode.com";

// Common API Function
async function apiRequest(endpoint, method = "GET", data = null) {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }

    return {};
  } catch (error) { 
    console.error(`${method} Error:`, error.message);
  }
}

// GET
async function get(endpoint) {
  return apiRequest(endpoint, "GET");
}

// POST
async function post(endpoint, data) {
  return apiRequest(endpoint, "POST", data);
}

// PUT
async function put(endpoint, data) {
  return apiRequest(endpoint, "PUT", data);
}

// PATCH
async function patch(endpoint, data) {
  return apiRequest(endpoint, "PATCH", data);
}

// DELETE
async function remove(endpoint) {
  return apiRequest(endpoint, "DELETE");
}

// Test All Methods
async function testApi() {
  console.log("GET");
  const getData = await get("/posts/1");
  console.log(getData);

  console.log("POST");
  const postData = await post("/posts", {
    title: "New Post",
    body: "Sample Body",
    userId: 1,
  });
  console.log(postData);

  console.log("PUT");
  const putData = await put("/posts/1", {
    id: 1,
    title: "Updated Post",
    body: "Updated Body",
    userId: 1,
  });
  console.log(putData);

  console.log("PATCH");
  const patchData = await patch("/posts/1", {
    title: "Patched Title",
  });
  console.log(patchData);

  console.log("DELETE");
  const deleteData = await remove("/posts/1");
  console.log(deleteData);
}

// Run
testApi();