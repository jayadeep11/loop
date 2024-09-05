import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-600 to-purple-800 text-white h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">

          <h1 className="text-6xl text-violet-950 font-extrabold mb-4 mt-10">
            Learning is a loop, always evolving.
          </h1>

          <p className="text-lg font-light mb-8">
            Master concepts with an iterative process. Explore challenges and
            solutions designed to make you think, grow, and excel.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href=""
              className="px-6 py-3 bg-violet-500 hover:bg-violet-700 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href=""
              className="px-6 py-3 bg-gray-200 text-gray-900 hover:bg-gray-300 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* <div className="mt-10"> */}
          {/*   <img */}
          {/*     src="../../../../Pictures/1327351.png" */}
          {/*     alt="Learning Illustration" */}
          {/*     className="w-full max-w-md mx-auto" */}
          {/*   /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
