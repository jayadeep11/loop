import { useState } from "react";
import { login } from "../utils/api"; // Make sure this function is correctly implemented
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Optional: To display errors

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call login function and handle response
      const res = await login(email, password);
      console.log(res); // Handle success (e.g., redirect or show success message)
      // Optionally: Save token or user data
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 justify-center h-screen ">
      <h1 className="text-4xl font-bold text-white">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-10 flex flex-col gap-5 max-w-md"
      >
        <input
          className="w-full p-2 border-2 rounded-md border-gray-300 text-gray-900 bg- focus:border-blue-500 focus:ring-blue-500"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full p-2 border-2 rounded-md border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="w-full p-2 bg-violet-500  text-white rounded-md"
          type="submit"
        >
          Login
        </button>
      </form>
      {error && <p>{error}</p>} {/* Optional: Display error message */}
      <button
        className="navbar-toggler text-white  p-2 rounded-xl bg-violet-600  "
        onClick={handleHome}
        type="button"
      >
        hava a <span className="font-bold">Loop</span> 
      </button>
    </div>
  );
};

export default Login;
