const apikey = "https://noh.onrender.com/api/auth/";

// Fetch all users
export const getUser = async () => {
  try {
    const response = await fetch(`${apikey}users`);
    
    if (!response.ok) {
      throw new Error(`Error fetching users: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return null; // Return null or an appropriate value when an error occurs
  }
};

// Login user
export const login = async (email, password) => {
  try {
    const response = await fetch(`${apikey}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`Error logging in: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Login failed:", error);
    return null; // Handle login failure gracefully
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await fetch(`${apikey}register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      throw new Error(`Error registering: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Register failed:", error);
    return null; // Handle register failure gracefully
  }
};
