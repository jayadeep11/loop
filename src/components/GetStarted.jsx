const Settings = () => {
  return (
    <div>
      <h1 className="text-violet-400 text-center   mt-32 text-9xl arch">
        Get Started
      </h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 px-10 md:px-20">
        {[
          "Problems",
          "Arch Linux",
          "Neovim",
          "DSA",
          "Docker",
          "Web Development",
        ].map((topic, index) => (
          <div
            key={index}
            className="bg-violet-400 p-10 rounded-xl text-center shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-violet-800"
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

export default Settings;
