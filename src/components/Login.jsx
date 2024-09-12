import { useState } from "react";
import { login } from "../utils/api"; // Ensure this path is correct
import { useNavigate, Link } from "react-router-dom";
import looplogo from "../assets/LoopLogo.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // For displaying errors

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous error before new attempt

    try {
      const res = await login(email, password);
      console.log(res); // Handle success (e.g., redirect or show success message)

      navigate("/profile"); // Redirect to home page on success
    } catch (err) {
      setError(err.message); // Set the error message from the backend
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 justify-center h-screen">
      <img src={looplogo} alt="Loop Logo" className="w-32 mb-8" />
      <h1 className="text-4xl font-bold text-white">Login</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-10 flex flex-col gap-5 max-w-md"
      >
        <input
          className="w-full p-2 border-2 rounded-md border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
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

        <button className="w-full p-2 bg-violet-500 text-white rounded-md" type="submit">
          Login
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

      <div className="text-center">
        <p className="text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline text-md">
            Register here
          </Link>
        </p>
      </div>

      <button
        className="navbar-toggler text-white p-2 rounded-xl bg-violet-600"
        onClick={handleHome}
        type="button"
      >
        Have a <span className="font-bold">Loop</span>
      </button>
    </div>
  );
};

export default Login;


