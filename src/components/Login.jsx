import { useState } from "react";
import { login } from "../utils/api"; // Make sure this function is correctly implemented
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Optional: To display errors

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call login function and handle response
      const res = await login(email, password);
      console.log(res); // Handle success (e.g., redirect or show success message)
      // Optionally: Save token or user data
      navigate("/users");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>} {/* Optional: Display error message */}
    </div>
  );
};

export default Login;

