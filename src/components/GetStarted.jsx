import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();

  // Define routes for each topic
  const routes = {
    Problems: "/problems",
    "Arch Linux": "/arch-linux",
    Neovim: "/neovim",
    DSA: "/dsa",
    Docker: "/docker",
    "Web Development": "/web-development",
  };

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div>
      <h1 className="text-violet-400 text-center mt-32 text-9xl arch">
        Get Started
      </h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 px-10 md:px-20">
        {Object.entries(routes).map(([topic, route]) => (
          <div
            onClick={() => handleClick(route)}
            key={topic}
            className="bg-violet-400 p-10 rounded-xl text-center shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-violet-800 cursor-pointer"
          >
            <h2 className="text-3xl font-bold mb-4">{topic}</h2>
            <p className="text-lg">
              Explore {topic} and master new skills in this area!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;

