const BASE_URL = "https://jsonplaceholder.typicode.com";

// Common API function
const apiCall = async (endpoint, method = "GET", data = null) => {
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
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
};

// GET
export const getUsers = () => {
  return apiCall("/users", "GET");
};

// POST
export const createUser = (userData) => {
  return apiCall("/users", "POST", userData);
};

// PUT (replace entire resource)
export const updateUser = (id, userData) => {
  return apiCall(`/users/${id}`, "PUT", userData);
};

// PATCH (partial update)
export const patchUser = (id, userData) => {
  return apiCall(`/users/${id}`, "PATCH", userData);
};

// DELETE
export const deleteUser = (id) => {
  return apiCall(`/users/${id}`, "DELETE");
};