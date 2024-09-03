import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-violet-400 p-10 navbar-light bg-light">
      <div className="container-fluid flex justify-between">
        <a className="navbar-brand" href="#">
          <h1>Loop</h1>
        </a>
        <button className="navbar-toggler text-white  p-2 rounded-xl bg-violet-600  " onClick={handleLogin} type="button">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
