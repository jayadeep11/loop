import { LuInfinity } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { DiAtom, DiApple, DiGit } from "react-icons/di";
import { FaNoteSticky } from "react-icons/fa6";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { TiAdjustBrightness } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { AiOutlineGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSetting = () => {
    navigate("/settings");
  };

  return (
    <div className="sidebar group flex flex-col border p-5 items-center hover:opacity-100 opacity-0  bg-violet-400 justify-center  border-zinc-700 rounded-2xl w-[7px] transform transition-all duration-500 ease-in-out hover:w-[200px]">
      <div className="icons flex flex-col gap-6 transition-all duration-500 items-end justify-around w-full">
        <div
          className="flex gap-2 items-center cursor-pointer w-full justify-start"
          onClick={handleClick}
        >
          <LuInfinity className="text-zinc-700 text-5xl cursor-pointer" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Loop
          </h1>
        </div>
        <div className="flex gap-2 items-center w-full justify-start">
          <FaNoteSticky className="text-zinc-700 text-5xl" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Notes
          </h1>
        </div>
        <div className="flex gap-2 items-center w-full justify-start">
          <DiAtom className="text-zinc-700 text-5xl" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Atom
          </h1>
        </div>
        <div className="flex gap-2 items-center w-full justify-start">
          <DiApple className="text-zinc-700 text-5xl" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Apple
          </h1>
        </div>
        <div className="flex gap-2 items-center w-full justify-start">
          <DiGit className="text-zinc-700 text-5xl" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Git
          </h1>
        </div>
        <div className="flex gap-2 items-center w-full justify-start">
          <IoMusicalNotesOutline className="text-zinc-700 text-5xl" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Notes
          </h1>
        </div>
        <div className="flex gap-2 items-center w-full justify-start">
          <AiOutlineGithub className="text-zinc-700 text-5xl" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            GitHub
          </h1>
        </div>
        <div className="flex gap-2 items-center w-full justify-start">
          <TiAdjustBrightness className="text-zinc-700 text-5xl" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Theme
          </h1>
        </div>
        <div
          onClick={handleLogin}
          className="flex gap-2 cursor-pointer items-center w-full justify-start"
        >
          <CgProfile className="text-zinc-700 text-5xl cursor-pointer" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Profile
          </h1>
        </div>
        <div className="flex gap-2 items-center w-full justify-start">
          <IoSettingsOutline
            className="text-zinc-700 cursor-pointer text-5xl"
            onClick={handleSetting}
          />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Settings
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
