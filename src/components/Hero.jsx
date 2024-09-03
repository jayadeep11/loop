import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="text-center flex flex-col justify-between items-center  text-7xl font-bold">
      <h1 className="mt-10">The journey of loop starts here.</h1>
      <h1 className="mt-80">Create your own loop</h1>
      <button
        className="navbar-toggler text-black text-4xl mt-10  p-2 rounded-xl bg-violet-400  "
        onClick={handleRegister}
        type="button"
      >
        Sign up
      </button>
      <Link
        className="text-3xl mt-5 font-normal text-violet-400 hover:black "
        onClick={handleLogin}
      >
        already have an account?
      </Link>
    </div>
  );
};

export default Hero;
