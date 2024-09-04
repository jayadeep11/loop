import { LuInfinity } from "react-icons/lu";
import { GrArchlinux } from "react-icons/gr";
import { SiNeovim } from "react-icons/si";
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

  const handleNeovim = () => {
    navigate("/neovim");
  };

  const handlearch = () => {
    navigate("/arch");
  };

  const handlenotes = () => navigate("/notes");

  return (
    <div className="sidebar arch group flex flex-col border p-5 items-center hover:opacity-100 opacity-0 bg-violet-400 justify-center border-zinc-700 rounded-2xl w-[7px] transform transition-all duration-500 ease-in-out hover:w-[200px]">
      <div className="icons flex flex-col gap-6 transition-all duration-500 items-end justify-around w-full">
        <div
          className="flex gap-2 items-center cursor-pointer w-full justify-start hover:text-violet-700"
          onClick={handleClick}
        >
          <LuInfinity className="text-zinc-700 text-5xl hover:text-violet-700" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-violet-700">
            Loop
          </h1>
        </div>
        <div 
      onClick={handlenotes}
    className="flex gap-2 items-center w-full justify-start hover:text-violet-700">
          <FaNoteSticky className="text-zinc-700 text-5xl hover:text-violet-700" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-violet-700">
            Notes
          </h1>
        </div>
        <div
          onClick={handlearch}
          className="flex gap-2 items-center w-full justify-start hover:text-violet-700"
        >
          <GrArchlinux className="text-zinc-700 text-5xl hover:text-violet-700" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-violet-700">
            Arch
          </h1>
        </div>
        <div
          className="flex gap-2 items-center w-full justify-start hover:text-violet-700"
          onClick={handleNeovim}
        >
          <SiNeovim className="text-zinc-700 text-5xl hover:text-violet-700" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-violet-700">
            Neovim
          </h1>
        </div>
        <div className="flex gap-2 items-center w-full justify-start hover:text-violet-700">
          <DiGit className="text-zinc-700 text-5xl hover:text-violet-700" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-violet-700">
            Git
          </h1>
        </div>
        <div className="flex gap-2 items-center w-full justify-start hover:text-violet-700">
          <IoMusicalNotesOutline className="text-zinc-700 text-5xl hover:text-violet-700" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-violet-700">
            Music
          </h1>
        </div>
        <div className="flex gap-2 items-center w-full justify-start hover:text-violet-700">
          <AiOutlineGithub className="text-zinc-700 text-5xl hover:text-violet-700" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-violet-700">
            GitHub
          </h1>
        </div>
        <div className="flex gap-2 items-center w-full justify-start hover:text-violet-700">
          <TiAdjustBrightness className="text-zinc-700 text-5xl hover:text-violet-700" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-violet-700">
            Theme
          </h1>
        </div>
        <div
          onClick={handleLogin}
          className="flex gap-2 cursor-pointer items-center w-full justify-start hover:text-violet-700"
        >
          <CgProfile className="text-zinc-700 text-5xl hover:text-violet-700" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-violet-700">
            Profile
          </h1>
        </div>
        <div
          onClick={handleSetting}
          className="flex gap-2 items-center w-full justify-start hover:text-violet-700"
        >
          <IoSettingsOutline className="text-zinc-700 cursor-pointer text-5xl hover:text-violet-700" />
          <h1 className="text-zinc-700 text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-violet-700">
            Settings
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
